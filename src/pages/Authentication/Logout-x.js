import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";


//redux
import { useSelector, useDispatch } from "react-redux";

import withRouter from "../../Components/Common/withRouter";

const Logout = (props) => {
  // const dispatch = useDispatch();

  // const { isUserLogout } = useSelector((state) => ({
  //   isUserLogout: state.Login.isUserLogout,
  // }));

  // useEffect(() => {
  //   dispatch(logoutUser());
  // }, [dispatch]);

  // if (isUserLogout) {
  //   return <Navigate to="/login" />;
  // }

  return <>
    <div className="page-content">
  <div>Hello</div>
  </div>
  </>;
};

Logout.propTypes = {
  history: PropTypes.object,
};


export default Logout;