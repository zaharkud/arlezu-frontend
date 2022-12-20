import { Outlet } from "react-router-dom";
import style from "./Layout.module.scss";

const Layout = () => {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.app}>
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export { Layout };
