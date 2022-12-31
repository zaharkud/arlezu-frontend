import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

import { authRoutes, publicRoutes } from "./routes";
import { GeneralContext } from "context/context";
import { IContext } from "types/types";
import { LOGIN_ROUTE, MAIN_ROUTE } from "services/consts/route.consts";

const AppRouter = () => {
  const appContext = useContext(GeneralContext) as IContext;

  const getPrivateRoutes = () => {
    return authRoutes.map(({ path }) => path);
  };

  return (
    <Routes>
      {appContext.isAuth &&
        authRoutes.map(({ path, component }) => {
          return <Route key={path} path={path} element={component} />;
        })}

      {!appContext.isAuth &&
        authRoutes.map(({ path }) => {
          return (
            <Route
              key={path}
              path={path}
              element={<Navigate to={LOGIN_ROUTE} replace />}
            />
          );
        })}

      {publicRoutes.map(({ path, component }) => {
        return <Route key={path} path={path} element={component} />;
      })}

      <Route path="*" element={<Navigate to={MAIN_ROUTE} replace />} />
    </Routes>
  );
};
export default AppRouter;
