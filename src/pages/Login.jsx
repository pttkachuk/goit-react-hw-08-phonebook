import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/user/userOperation';
import {
  StyledLogBtn,
  StyledLogDiv,
  StyledLogForm,
  StyledLogInput,
  StyledLogLabel,
  StyledLogSpan,
  StyledLogTitle,
} from './StyledPages/StyledLoginPage';

const Login = () => {
  const dispatch = useDispatch();
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
      <StyledLogTitle>Login into your account</StyledLogTitle>
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
