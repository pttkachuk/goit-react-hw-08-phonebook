import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerThunk } from 'redux/userOperation';

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
    <div>
      <h1>Register Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name:</p>
          <input
            placeholder="Name Surname"
            name="userName"
            type="text"
            required
          />
        </label>
        <label>
          <p>Email:</p>
          <input
            placeholder="example@mail.com"
            name="userEmail"
            type="email"
            required
          />
        </label>
        <label>
          <p>Password:</p>
          <input
            placeholder="examplepwd12345"
            name="userPassword"
            type="password"
            minLength={7}
            required
          />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
