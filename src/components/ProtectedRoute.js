import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  // Add your authentication logic here
  return false;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
