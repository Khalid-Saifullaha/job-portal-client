import React, { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return (
      <span>
        <span className="loading loading-bars loading-lg"></span>
      </span>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/signIn" state={location?.pathname}></Navigate>;
};

export default PrivateRoute;