import React from 'react';
import AnecdoteForm from './containers/AnecdoteForm';
import AnecdoteList from './containers/AnecdoteList';
import Notification from './components/Notification';
import Filter from './containers/Filter';

const App = () => {
  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
