import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const userData = useSelector(state => state.user.userData);
  return (
    <nav>
      <Link to="/">Home</Link>
      {userData ? (
        <>
          <Link to="/contacts">Contacts</Link>
          <UserMenu />
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navigation;
