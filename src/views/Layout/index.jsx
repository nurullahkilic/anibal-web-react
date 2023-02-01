import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Menu from "../Menu";

const Layout = () => {
  return (
    <>
      <Navbar>
        <Menu />
      </Navbar>
      <Outlet />
    </>
  );
};

export default Layout;
