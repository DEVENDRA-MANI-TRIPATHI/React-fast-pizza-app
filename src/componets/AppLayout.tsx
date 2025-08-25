import Header from "./Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>

      <footer>mani</footer>
    </>
  );
};

export default AppLayout;
