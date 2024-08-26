const timeLineData = [
  {
    today: [
      {
        time: "1 hour ago",
        date: "08:25 AM",
        event:
          "Dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde.",
      },
      {
        time: "2 hours ago",
        date: "08:25 AM",
        event:
          "Consectetur adipisicing elit. Iusto, optio, dolorum John deon provident rerum aut hic quasi placeat iure tempora laudantium.",
      },
      {
        time: "10 hours ago",
        date: "08:25 AM",
        event: "3 new photos uploaded on Facebook fan page.",
      },
      {
        time: "14 hours ago",
        date: "08:25 AM",
        event:
          "Outdoor visit at California State Route 85 with John Boltana & Harry Piterson regarding the setup of a new showroom.",
      },
      {
        time: "19 hours ago",
        date: "08:25 AM",
        event:
          "Jonatha Smith added new milestone Pathek Lorem ipsum dolor sit amet consiquest dio.",
      },
    ],
  },
  { yesterday: [] },
  {
    this_month: [
      {
        time: "07 January 2016",
        date: "08:25 AM",
        event:
          "Monthly Regular Medical checkup at Greenland Hospital by Dr. Johm Meon.",
      },
      {
        time: "07 January 2016",
        date: "08:25 AM",
        event: "Download the new updates of Adminto admin dashboard.",
      },
      {
        time: "07 January 2016",
        date: "08:25 AM",
        event:
          "Jonatha Smith added new milestone crishtian Lorem ipsum dolor sit amet consiquest dio.",
      },
    ],
  },
  {
    older: [
      {
        time: "31 December 2015",
        date: "08:25 AM",
        event: "Download the new updates of Adminto admin dashboard.",
      },
      {
        time: "16 December 2015",
        date: "08:25 AM",
        event:
          "Jonatha Smith added new milestone prank Lorem ipsum dolor sit amet consiquest dio.",
      },
    ],
  },
];

function Timeline() {
  return (
    <>
      {/* timeline page */}
      <section className="bg-secondary text-text-color pb-6">
        <div className="container">
          {/* timeline */}
          <div className="table">
            {/* timeline item */}
            {/* <button className="px-6 py-2 rounded-md bg-blue-400 text-white font-semibold my-transition hover:bg-blue-400/50">
              Today
            </button> */}
            <div className="bg-primary rounded-md p-4 md:p-6  table-row">
              <div className="table-cell w-1/2 space-y-2 text-right p-4">
                <div>
                  <p className="text-red-700 font-semibold">1 hour ago</p>
                  <span className="text-xs">08:25 am</span>
                </div>
                <p className="text-right text-sm">
                  Dolorum provident rerum aut hic quasi placeat iure tempora
                  laudantium ipsa ad debitis unde?
                </p>
              </div>
              <div></div>
            </div>
            <div className="bg-primary rounded-md p-4 md:p-6  table-row">
              <div></div>

              <div className="table-cell w-1/2 space-y-2 text-left p-4">
                <div>
                  <p className="text-red-700 font-semibold">1 hour ago</p>
                  <span className="text-xs">08:25 am</span>
                </div>
                <p className="text-left text-sm">
                  Dolorum provident rerum aut hic quasi placeat iure tempora
                  laudantium ipsa ad debitis unde?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Timeline;
