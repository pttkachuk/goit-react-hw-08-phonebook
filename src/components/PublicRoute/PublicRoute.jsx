import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PublicRoute = ({ children }) => {
  const token = useSelector(state => state.user.token);
  return !token ? children : <Navigate to="/contacts" />;
};

PublicRoute.propTypes = {
  children: PropTypes.node,
};
