import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilterValue } from '../reducers/filterReducer';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(({ filter }) => filter.value);

  const handleChange = (event) => {
    dispatch(changeFilterValue(event.target.value));
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input value={filter} onChange={handleChange} />
    </div>
  );
};

export default Filter;
