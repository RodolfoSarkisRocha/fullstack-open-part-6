import anecdoteService from '../services/anecdotesService';

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'EDIT_ANECDOTE':
      return state.map((anecdote) =>
        anecdote.id !== action.payload.id ? anecdote : action.payload
      );
    case 'CREATE_NEW_ANECDOTE':
      return [...state, action.payload];
    case 'INIT_ANECDOTES':
      return [...state, ...action.data];
    default:
      return state;
  }
};

export const editAnecdote = (data) => {
  return async (dispatch) => {
    const editedAnecdote = await anecdoteService.editAnecdote(data);
    return dispatch({
      type: 'EDIT_ANECDOTE',
      payload: editedAnecdote,
    });
  };
};

export const createNewAnecdote = (data) => {
  return async (dispatch) => {
    const createdAnecdote = await anecdoteService.createNewAnecdote(data);
    return dispatch({
      type: 'CREATE_NEW_ANECDOTE',
      payload: createdAnecdote,
    });
  };
};

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    });
  };
};

export default anecdoteReducer;
