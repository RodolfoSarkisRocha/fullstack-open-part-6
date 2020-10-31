import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNewAnecdote = async (data) => {
  const response = await axios.post(baseUrl, data);
  return response.data;
};

const editAnecdote = async (data) => {
  const urlMapped = `${baseUrl}/${data.id}`;
  const response = await axios.put(urlMapped, data);
  return response.data;
};

export default { getAll, createNewAnecdote, editAnecdote };
