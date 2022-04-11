import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children, product, ...props }) => {
  return (
    <Route {...props}>
      {Object.keys(product).length > 0 ? children : <Redirect to={"/"} />}
    </Route>
  );
};

export default ProtectedRoute;
