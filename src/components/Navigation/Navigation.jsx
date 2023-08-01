import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { Cont, StyledLink, StyledNav } from './StyledNavigation';

const Navigation = () => {
  const userData = useSelector(state => state.user.userData);
  return (
    <StyledNav>
      <Cont>
        <StyledLink to="/">Home</StyledLink>
        {userData ? (
          <>
            <StyledLink to="/contacts">Contacts</StyledLink>
            <UserMenu />
          </>
        ) : (
          <>
            <StyledLink to="/login">Login</StyledLink>
            <StyledLink to="/register">Register</StyledLink>
          </>
        )}
      </Cont>
    </StyledNav>
  );
};

export default Navigation;
