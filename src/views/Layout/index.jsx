import { Outlet, useLocation } from "react-router-dom";
import { useModal } from "../../context/ModalContext";

import Menu from "../Menu";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StartProjectButton from "../../shared/Button/StartProject";
import StartProject from "../StartProject";

const Layout = () => {
  let { pathname } = useLocation();
  const isStartProjectOpen = useModal((state) => state.isStartProjectOpen);

  return (
    <>
      <Menu />
      <Navbar />
      <Outlet />
      {!pathname.match(/^\/contact/gim) && <Footer />}
      <StartProject />
      <StartProjectButton>PROJENİ BAŞLAT</StartProjectButton>
    </>
  );
};

export default Layout;
