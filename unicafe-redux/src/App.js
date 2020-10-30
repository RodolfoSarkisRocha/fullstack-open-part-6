import React from 'react';
import { bad, good, ok, zero } from './reducers/reducer';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const avaliations = useSelector((state) => state);

  return (
    <div>
      <button onClick={() => dispatch(good())}>good</button>
      <button onClick={() => dispatch(ok())}>neutral</button>
      <button onClick={() => dispatch(bad())}>bad</button>
      <button onClick={() => dispatch(zero())}>reset stats</button>
      <div>good {avaliations.good}</div>
      <div>neutral {avaliations.ok}</div>
      <div>bad {avaliations.bad}</div>
    </div>
  );
};

export default App;
