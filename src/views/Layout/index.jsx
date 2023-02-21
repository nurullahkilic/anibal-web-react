import { Outlet, useLocation } from "react-router-dom";

import Menu from "../Menu";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StartProjectButton from "../../shared/Button/StartProject";
import StartProject from "../StartProject";

const Layout = () => {
  let { pathname } = useLocation();

  return (
    <>
      <Menu />
      <Navbar />
      <Outlet />
      <StartProject />
      {!pathname.match(/^\/contact/gim) && <Footer />}
      <StartProjectButton>PROJENİ BAŞLAT</StartProjectButton>
    </>
  );
};

export default Layout;
