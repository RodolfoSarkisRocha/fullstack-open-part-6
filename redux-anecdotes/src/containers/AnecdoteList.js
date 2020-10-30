import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { upVote } from '../reducers/anecdoteReducer';

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) =>
    state.sort((a, b) => (a.votes > b.votes ? -1 : 1))
  );

  return anecdotes.map((anecdote) => (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={() => dispatch(upVote(anecdote.id))}>vote</button>
      </div>
    </div>
  ));
};

export default AnecdoteList;
