import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { upVote } from '../reducers/anecdoteReducer';
import {
  showNotification,
  hideNotification,
} from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    const sortedAnecdotes = anecdotes.sort((a, b) =>
      a.votes > b.votes ? -1 : 1
    );
    if (filter.value) {
      return sortedAnecdotes.filter((anecdote) => {
        const content = anecdote?.content?.toLowerCase();
        const lowerCaseFilter = filter.value.toLowerCase();

        return content.includes(lowerCaseFilter);
      });
    }

    return sortedAnecdotes;
  });

  const upVoteNotification = (id, anecdoteContent) => {
    dispatch(upVote(id));
    dispatch(showNotification(`you voted '${anecdoteContent}'`));

    setTimeout(() => {
      dispatch(hideNotification());
    }, 5000);
  };

  return anecdotes.map((anecdote) => (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button
          onClick={() => upVoteNotification(anecdote.id, anecdote.content)}
        >
          vote
        </button>
      </div>
    </div>
  ));
};

export default AnecdoteList;
