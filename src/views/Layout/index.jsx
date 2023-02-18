import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Layout = () => {
  let { pathname } = useLocation();
  
  return (
    <>
      <Navbar />
      <Outlet />
      {!pathname.match(/^\/contact/gim) && <Footer />}
    </>
  );
};

export default Layout;
