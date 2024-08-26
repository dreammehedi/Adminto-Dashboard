import { Outlet } from "react-router-dom";
import PagesPagination from "../shared/pages_pagination/PagesPagination";
import Footer from "./../shared/footer/Footer";
import Header from "./../shared/header/Header";

function DashboardMainLayout() {
  return (
    <>
      {/* header */}
      <Header></Header>

      {/* extra pages pagination */}
      <PagesPagination></PagesPagination>

      {/* outlet */}
      <Outlet></Outlet>

      {/* footer */}
      <Footer></Footer>
    </>
  );
}

export default DashboardMainLayout;
