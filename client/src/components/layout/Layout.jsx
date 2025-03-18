import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Btns from "../btns-wompi-and-donation/Btns";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Btns />
    </>
  );
}

export default Layout;
