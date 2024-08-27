import ReactApexChart from "react-apexcharts";

function DashboardChart() {
  return (
    <>
      {/* daily sales,  statistic, total revenue */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {/* daily sales chart */}
        <div className="p-4 md:p-6 rounded-md bg-primary space-y-6">
          {/* title */}
          <h3 className="text-white font-semibold text-sm">Daily Sales</h3>
          {/* chart */}

          <ReactApexChart
            options={{}}
            series={[44, 55, 13, 43]}
            type="donut"
            width={"95%"}
          />
        </div>

        {/* statistic chart */}
        <div className="p-4 md:p-6 rounded-md bg-primary space-y-6">
          {/* title */}
          <h3 className="text-white font-semibold text-sm">Statistic</h3>
          {/* chart */}

          <ReactApexChart
            options={{
              plotOptions: {
                bar: {
                  borderRadius: 5,
                  dataLabels: {
                    position: "top",
                    fontSize: "14px",
                  },
                },
              },
              xaxis: {
                categories: [
                  "2018",
                  "2019",
                  "2020",
                  "2021",
                  "2022",
                  "2023",
                  "2024",
                ],
              },
            }}
            series={[
              {
                data: [12.3, 23.1, 30.1, 33.8, 10.5, 15.2, 8.5],
              },
            ]}
            type="bar"
            height={350}
            width={"100%"}
          />
        </div>

        {/* total revenue chart */}
        <div className="p-4 md:p-6 rounded-md bg-primary space-y-6">
          {/* title */}
          <h3 className="text-white font-semibold text-sm">Total Revenue</h3>
          {/* chart */}

          <ReactApexChart
            options={{
              xaxis: {
                categories: [2018, 2019, 2020, 2021, 2022, 2023, 2024],
              },
            }}
            series={[
              {
                name: "Series A",
                data: [45, 52, 38, 24, 33, 26, 21],
              },
              {
                name: "Series B",
                data: [35, 41, 62, 42, 13, 18, 29],
              },
            ]}
            type="line"
            width={"100%"}
            height={350}
          />
        </div>
      </section>
    </>
  );
}

export default DashboardChart;
