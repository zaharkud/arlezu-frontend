import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "./routes";
import { LOGIN_ROUTE, MAIN_ROUTE } from "services/consts/route.consts";

import { useAppSelector } from "store";

const AppRouter = () => {
  const auth = useAppSelector((state) => state.auth);

  return (
    <Routes>
      {/*если пользователь авторизован*/}
      {auth.token &&
        authRoutes.map(({ path, component }) => {
          return <Route key={path} path={path} element={component} />;
        })}

      {/*если пользователь не авторизован*/}
      {!auth.token &&
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

      {/*в любом другом случае переключаем на главную страницу*/}
      <Route path="*" element={<Navigate to={MAIN_ROUTE} replace />} />
    </Routes>
  );
};
export default AppRouter;
