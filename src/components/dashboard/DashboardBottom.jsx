import DashboardBottomInbox from "./dashboard_bottom/DashboardBottomInbox";
import DashboardBottomLatestProject from "./dashboard_bottom/DashboardBottomLatestProject";

function DashboardBottom() {
  return (
    <>
      {/* dashboard bottom || inbox, latest project */}
      <section className="grid grid-cols-1 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
        <DashboardBottomInbox></DashboardBottomInbox>
        <DashboardBottomLatestProject></DashboardBottomLatestProject>
      </section>
    </>
  );
}

export default DashboardBottom;
