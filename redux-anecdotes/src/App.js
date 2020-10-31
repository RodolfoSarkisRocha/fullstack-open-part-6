import React, { useEffect } from 'react';
import AnecdoteForm from './containers/AnecdoteForm';
import AnecdoteList from './containers/AnecdoteList';
import Notification from './components/Notification';
import Filter from './containers/Filter';

import { useDispatch } from 'react-redux';
import { initializeAnecdotes } from './reducers/anecdoteReducer';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, [dispatch]);

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
