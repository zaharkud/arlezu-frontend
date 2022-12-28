import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

import { authRoutes, publicRoutes } from "./routes";
import { GeneralContext } from "context/context";
import { IContext } from "types/types";

const AppRouter = () => {
  const appContext = useContext(GeneralContext) as IContext;

  return (
    <Routes>
      {appContext.isAuth &&
        authRoutes.map(({ path, component }) => {
          return <Route key={path} path={path} element={component} />;
        })}
      {publicRoutes.map(({ path, component }) => {
        return <Route key={path} path={path} element={component} />;
      })}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
export default AppRouter;
