import React, { useEffect } from "react";
import { Navigate, Route } from "react-router-dom";

const AuthProtected = (props: any) => {
  const isAuth = localStorage.getItem("token");
  if (!isAuth) {
    return (
      <Navigate to={{ pathname: "/login" }} state={{ from: props.location }} />
    );
  }
  return <>{props.children}</>;
};

const AccessRoute = ({ component: Component, ...rest }: any) => {
  return <></>;
};

export { AuthProtected, AccessRoute };
