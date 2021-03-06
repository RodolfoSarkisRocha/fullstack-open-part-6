const initialState = {
  value: '',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER_VALUE':
      return { ...state, value: action.value };
    default:
      return state;
  }
};

const changeFilterValue = (value) => {
  return {
    type: 'CHANGE_FILTER_VALUE',
    value,
  };
};

export { changeFilterValue };
export default filterReducer;
