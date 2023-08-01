import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
  const token = useSelector(state => state.user.token);
  return !token ? children : <Navigate to="/contacts" />;
};
