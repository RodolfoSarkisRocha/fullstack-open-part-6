import React from 'react';
import {useDispatch } from 'react-redux';
import { createNewAnecdote, getId } from '../reducers/anecdoteReducer';

const AnecdoteForm = () => {

  const dispatch = useDispatch();

  const addAnecdote = (e) => {
    e.preventDefault();
    const anecdote = e.target.anecdote.value;
    e.target.anecdote.value = '';
    const newAnecdote = {
      content: anecdote,
      votes: 0,
      id: getId(),
    };
    dispatch(createNewAnecdote(newAnecdote));
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name='anecdote' />
        </div>
        <button>create</button>
      </form>
    </>
  );
};
export default AnecdoteForm;
