// PrivateRoute.jsx
import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ element: Element, ...rest }) => {
  let { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      element={user ? <Element /> : <Navigate to="/login" replace />}
    />
  );
};

export default PrivateRoute;
