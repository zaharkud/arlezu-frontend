import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "./routes";
import { LOGIN_ROUTE, MAIN_ROUTE } from "services/consts/route.consts";

import { useAppSelector } from "store";

const AppRouter = () => {
  const settings = useAppSelector((state) => state.settings);

  return (
    <Routes>
      {settings.isAuth &&
        authRoutes.map(({ path, component }) => {
          return <Route key={path} path={path} element={component} />;
        })}

      {!settings.isAuth &&
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
