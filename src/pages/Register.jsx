import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerThunk } from 'redux/user/userOperation';
import {
  StyledRegBtn,
  StyledRegDiv,
  StyledRegForm,
  StyledRegInput,
  StyledRegLabel,
  StyledRegSpan,
  StyledRegTitle,
} from './StyledPages/StyledRegisterPage';

const Register = () => {
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
    const name = elements.userName.value;
    const email = elements.userEmail.value;
    const password = elements.userPassword.value;

    dispatch(registerThunk({ name, email, password }));
    event.currentTarget.reset();
  };
  return (
    <StyledRegDiv>
      <StyledRegTitle>Register Account</StyledRegTitle>
      <StyledRegForm onSubmit={handleSubmit}>
        <StyledRegLabel>
          <StyledRegSpan>Name:</StyledRegSpan>
          <StyledRegInput
            placeholder="Name Surname"
            name="userName"
            type="text"
            required
          />
        </StyledRegLabel>
        <StyledRegLabel>
          <StyledRegSpan>Email:</StyledRegSpan>
          <StyledRegInput
            placeholder="example@mail.com"
            name="userEmail"
            type="email"
            required
          />
        </StyledRegLabel>
        <StyledRegLabel>
          <StyledRegSpan>Password:</StyledRegSpan>
          <StyledRegInput
            placeholder="examplepwd12345"
            name="userPassword"
            type="password"
            minLength={7}
            required
          />
        </StyledRegLabel>
        <StyledRegBtn type="submit">Sign Up</StyledRegBtn>
      </StyledRegForm>
    </StyledRegDiv>
  );
};

export default Register;
