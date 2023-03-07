import { Outlet, useLocation } from "react-router-dom";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import Menu from "../Menu";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StartProjectButton from "../../shared/Button/StartProject";
import StartProject from "../StartProject";
import ApplyModal from "../ApplyModal";

const useQuery = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};

const Layout = () => {
  let { pathname } = useLocation();
  let query = useQuery();
  const { t } = useTranslation();

  const apply = query.get("apply");

  return (
    <>
      <Menu />
      <Navbar />
      <Outlet />
      <StartProject />
      <ApplyModal modalType={apply} />
      {!pathname.match(/^\/contact/gim) && <Footer />}
      <StartProjectButton>{t("startProject")}</StartProjectButton>
    </>
  );
};

export default Layout;
