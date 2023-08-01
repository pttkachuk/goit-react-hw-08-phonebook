import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/userOperation';
import {
  StyledLogBtn,
  StyledLogDiv,
  StyledLogForm,
  StyledLogInput,
  StyledLogLabel,
  StyledLogSpan,
} from './StyledPages/StyledLoginPage';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(state => state.user.userData);

  useEffect(() => {
    if (!userData) return;
    navigate('/contacts', { replace: true });
  }, [userData, navigate]);
  const handleSubmit = event => {
    event.preventDefault();
    const elements = event.currentTarget.elements;
    const email = elements.userEmail.value;
    const password = elements.userPassword.value;

    dispatch(loginThunk({ email, password }));
    event.currentTarget.reset();
  };

  return (
    <StyledLogDiv>
      <h1>Login into your account</h1>
      <StyledLogForm onSubmit={handleSubmit}>
        <StyledLogLabel>
          <StyledLogSpan>Email:</StyledLogSpan>
          <StyledLogInput
            placeholder="across@mail.com"
            name="userEmail"
            type="email"
            required
          />
        </StyledLogLabel>
        <StyledLogLabel>
          <StyledLogSpan>Password:</StyledLogSpan>
          <StyledLogInput
            placeholder="examplepwd12345"
            name="userPassword"
            type="password"
            minLength={7}
            required
          />
        </StyledLogLabel>
        <StyledLogBtn type="submit">Sign In</StyledLogBtn>
      </StyledLogForm>
    </StyledLogDiv>
  );
};

export default Login;
