import { Outlet } from "react-router-dom";
import Footer from "./../shared/footer/Footer";
import Header from "./../shared/header/Header";

function DashboardMainLayout() {
  return (
    <>
      {/* header */}
      <Header></Header>

      {/* outlet */}
      <Outlet></Outlet>

      {/* footer */}
      <Footer></Footer>
    </>
  );
}

export default DashboardMainLayout;
