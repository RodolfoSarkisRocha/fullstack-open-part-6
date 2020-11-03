import React from 'react';
// import { connect, useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { changeFilterValue } from '../reducers/filterReducer';

const Filter = (props) => {
  const { filter, changeFilterValue } = props;
  // const dispatch = useDispatch();
  // const filter = useSelector(({ filter }) => filter.value);

  const handleChange = (event) => {
    // dispatch(changeFilterValue(event.target.value));
    changeFilterValue(event.target.value);
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

// export default Filter;

const mapDispatchToProps = {
  changeFilterValue,
};

const mapStateToProps = (state) => {
  const { filter } = state;
  return {
    filter: filter.value,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
