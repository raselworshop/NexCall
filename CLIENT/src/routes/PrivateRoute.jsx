import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Spinner from "../components/Spinner";

const PrivateRoute = ({children}) => {
  const loaction = useLocation();
    const { user, loading } = useAuth();
  if (loading) return <Spinner />;
  if (user) {
    return children;
  }
  return <Navigate to={"/sign-in"} state={{ from: loaction }} replace></Navigate>;
};

export default PrivateRoute;
