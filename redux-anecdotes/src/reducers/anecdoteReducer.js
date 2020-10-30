const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

export const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const initialState = anecdotesAtStart.map(asObject);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'upVote':
      const targetAnecdote = state.find(
        (anecdote) => anecdote.id === action.payload
      );
      const updatedAnectode = {
        ...targetAnecdote,
        votes: targetAnecdote.votes + 1,
      };

      return state.map((anecdote) =>
        anecdote.id !== updatedAnectode.id ? anecdote : updatedAnectode
      );
    case 'createNewAnecdote':
      return [...state, action.payload];
    default:
      return state;
  }
};

export const upVote = (id) => {
  return {
    type: 'upVote',
    payload: id,
  };
};

export const createNewAnecdote = (data) => {
  return {
    type: 'createNewAnecdote',
    payload: data,
  };
};

export default reducer;
