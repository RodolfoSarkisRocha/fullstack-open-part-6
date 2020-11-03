import React from 'react';
import { connect } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
import { editAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteList = (props) => {
  const { anecdotes, editAnecdote, setNotification } = props;

  // const dispatch = useDispatch();
  // const anecdotes = useSelector(({ anecdotes, filter }) => {
  //   const sortedAnecdotes = anecdotes.sort((a, b) =>
  //     a.votes > b.votes ? -1 : 1
  //   );
  //   if (filter.value) {
  //     return sortedAnecdotes.filter((anecdote) => {
  //       const content = anecdote?.content?.toLowerCase();
  //       const lowerCaseFilter = filter.value.toLowerCase();

  //       return content.includes(lowerCaseFilter);
  //     });
  //   }

  //   return sortedAnecdotes;
  // });

  const upVoteNotification = (anecdote) => {
    const editedAnecdote = JSON.parse(JSON.stringify(anecdote));
    editedAnecdote.votes += 1;
    // dispatch(editAnecdote(editedAnecdote));
    // dispatch(setNotification(`you voted '${anecdote.content}'`, 5));
    editAnecdote(editedAnecdote);
    setNotification(`you voted '${anecdote.content}'`, 5);
  };

  return anecdotes.map((anecdote) => (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={() => upVoteNotification(anecdote)}>vote</button>
      </div>
    </div>
  ));
};

const mapStateToProps = (state) => {
  const { filter, anecdotes } = state;
  const sortedAnecdotes = anecdotes.sort((a, b) =>
    a.votes > b.votes ? -1 : 1
  );

  if (filter) {
    const filteredAnecdotes = sortedAnecdotes.filter((anecdote) => {
      const content = anecdote?.content?.toLowerCase();
      const lowerCaseFilter = filter.value.toLowerCase();
      return content.includes(lowerCaseFilter);
    });
    return {
      anecdotes: filteredAnecdotes,
    };
  }

  return { anecdotes: sortedAnecdotes };
};

const mapDispatchToProps = {
  editAnecdote,
  setNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);

// export default AnecdoteList;
