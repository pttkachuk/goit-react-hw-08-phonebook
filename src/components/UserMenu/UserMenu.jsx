import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/userOperation';

const UserMenu = () => {
  const userData = useSelector(state => state.user.userData);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOutThunk());
  };
  return (
    <div>
      <p>Hello, {userData.email}!</p>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default UserMenu;
