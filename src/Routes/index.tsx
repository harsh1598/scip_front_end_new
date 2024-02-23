import React from "react";
import { Routes, Route } from "react-router-dom";

//Layouts
import NonAuthLayout from "../Layouts/NonAuthLayout";
import VerticalLayout from "../Layouts/index";

//routes
import { authProtectedRoutes, publicRoutes } from "./allRoutes";
import { AuthProtected } from "./AuthProtected";

const Index = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route>
          {publicRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={<NonAuthLayout>{route.component}</NonAuthLayout>}
              key={idx}
              // exact={true}
            />
          ))}
        </Route>

        <Route>
          {authProtectedRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={
                <AuthProtected>
                  <VerticalLayout isHideSideBar={route.isHideSideBar}>
                    {route.component}
                  </VerticalLayout>
                </AuthProtected>
              }
              key={idx}
              // exact={true}
            >
              {route.subRoutes &&
                route.subRoutes.length > 0 &&
                route.subRoutes.map((item) => {
                  return (
                    <Route
                      path={item.path}
                      element={<AuthProtected>{item.component}</AuthProtected>}
                      key={idx}
                      // exact={true}
                    />
                  );
                })}
            </Route>
          ))}
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default Index;
