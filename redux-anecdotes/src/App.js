import React from 'react';
import AnecdoteForm from './containers/AnecdoteForm';
import AnecdoteList from './containers/AnecdoteList';

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
