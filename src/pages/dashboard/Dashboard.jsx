import DashboardChart from "../../components/dashboard/DashboardChart";
import DashboardTop from "../../components/dashboard/DashboardTop";
import DashboardUser from "../../components/dashboard/DashboardUser";
import DashboardBottom from "./../../components/dashboard/DashboardBottom";

function Dashboard() {
  return (
    <>
      {/* dashboard main layout */}
      <main className="bg-secondary py-4 md:py-6 lg:py-8 text-white">
        <div className="container space-y-4">
          {/* dashboard top || total revenue, sales analysics, statistic, daily sales */}
          <DashboardTop></DashboardTop>

          {/* dashboard top bottom || daily sales, staistic, total revenue */}
          <DashboardChart></DashboardChart>

          {/* dashboard user info */}
          <DashboardUser></DashboardUser>

          {/* dashboard bottom || inbox, latest project */}
          <DashboardBottom></DashboardBottom>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
