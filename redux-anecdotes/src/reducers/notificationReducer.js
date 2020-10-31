import { timeout } from '../utils/helper';

const initialState = {
  message: '',
  toggle: false,
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      return { ...state, message: action.message, toggle: true };
    case 'HIDE_NOTIFICATION':
      return { ...state, toggle: false };
    default:
      return state;
  }
};

const setNotification = (message, time) => {
  return async (dispatch) => {
    dispatch({
      type: 'SHOW_NOTIFICATION',
      message,
    });
    await timeout(time);
    dispatch({
      type: 'HIDE_NOTIFICATION',
    });
  };
};

export { setNotification };
export default notificationReducer;
