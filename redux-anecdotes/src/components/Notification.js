import React from 'react';
import { useSelector } from 'react-redux';

const Notification = () => {
  const notification = useSelector(({ notification }) => notification.message);
  const toggle = useSelector(({ notification }) => notification.toggle);
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };
  return toggle ? <div style={style}>{notification}</div> : null;
};

export default Notification;
