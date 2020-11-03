import React from 'react';
import { connect } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { createNewAnecdote } from '../reducers/anecdoteReducer';

const AnecdoteForm = (props) => {
  const { createNewAnecdote } = props;
  // const dispatch = useDispatch();

  const addAnecdote = async (e) => {
    e.preventDefault();
    const anecdote = e.target.anecdote.value;
    e.target.anecdote.value = '';
    const newAnecdote = {
      content: anecdote,
      votes: 0,
    };
    // dispatch(createNewAnecdote(newAnecdote));
    createNewAnecdote(newAnecdote);
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

const mapDispatchToProps = {
  createNewAnecdote
};

// export default AnecdoteForm;
export default connect(null, mapDispatchToProps)(AnecdoteForm);
