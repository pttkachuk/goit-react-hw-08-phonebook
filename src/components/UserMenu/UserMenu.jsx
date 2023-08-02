import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/user/userOperation';
import { BtnDiv, LogOutBtn, UserMenuDiv, UserName } from './StyledUserMenu';

const UserMenu = () => {
  const userData = useSelector(state => state.user.userData);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOutThunk());
  };
  return (
    <UserMenuDiv>
      <UserName>Hello, {userData.email}!</UserName>
      <BtnDiv>
        <LogOutBtn onClick={handleLogOut}>Log Out</LogOutBtn>
      </BtnDiv>
    </UserMenuDiv>
  );
};

export default UserMenu;
