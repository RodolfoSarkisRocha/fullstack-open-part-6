const initialState = {
  message: '',
  toggle: false,
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      if (state.timeoutId) {
        clearTimeout(state.timeoutId);
      }
      return {
        ...state,
        message: action.message,
        toggle: true,
        timeoutId: action.timeoutId,
      };
    case 'HIDE_NOTIFICATION':
      return { ...state, toggle: false };
    default:
      return state;
  }
};

const setNotification = (message, time) => {
  return async (dispatch) => {
    const timer = setTimeout(() => {
      dispatch({
        type: 'HIDE_NOTIFICATION',
      });
    }, time * 1000);

    dispatch({
      type: 'SHOW_NOTIFICATION',
      message,
      timeoutId: timer,
    });
  };
};

export { setNotification };
export default notificationReducer;
