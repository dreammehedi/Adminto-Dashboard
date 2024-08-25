import { Outlet } from "react-router-dom";
import Footer from "../../shared/footer/Footer";
import Header from "../../shared/header/Header";

function Dashboard() {
  return (
    <>
      {/* header */}
      <Header></Header>
      <div className="min-h-[calc(100vh-184px)]">
        <Outlet></Outlet>
        </div>
       <Footer></Footer>
    </>
  );
}

export default Dashboard;
