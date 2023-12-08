import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
  const { loading } = useContext(AuthContext);
  const location = useLocation();
  const admin = localStorage.getItem('userInfo');

  if (loading) {
    return <p>Loading</p>;
  }
  if (admin) {
    return children;
  }

  return (
    <Navigate
      state={location.pathname}
      to={'/dashboard/login'}
      replace
    ></Navigate>
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.any,
};

export default PrivateRoute;
