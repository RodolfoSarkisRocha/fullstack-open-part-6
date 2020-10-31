const initialState = {
  message: '',
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      return { ...state, message: action.message, toggle: true };
    case 'HIDE_NOTIFICATION':
      return { ...state, message: initialState.message, toggle: false };
    default:
      return state;
  }
};

const showNotification = (message) => {
  return {
    type: 'SHOW_NOTIFICATION',
    message,
  };
};
const hideNotification = (message) => {
  return {
    type: 'HIDE_NOTIFICATION',
  };
};

export { showNotification, hideNotification };
export default notificationReducer;
