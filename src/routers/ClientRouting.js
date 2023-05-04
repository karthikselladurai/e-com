import { Route, Navigate } from "react-router-dom";

const ClientRoute= ({ isAuth, element: Element, ...rest })=> {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Element {...props} /> : <Navigate to="/" replace />
      }
    />
  );
}

export default ClientRoute;