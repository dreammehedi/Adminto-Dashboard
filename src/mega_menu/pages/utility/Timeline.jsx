const timeLineData = [
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
    date: "08:53 AM",
    event: "3 new photos uploaded on Facebook fan page.",
  },
  {
    time: "14 hours ago",
    date: "10:25 AM",
    event:
      "Outdoor visit at California State Route 85 with John Boltana & Harry Piterson regarding the setup of a new showroom.",
  },
  {
    time: "19 hours ago",
    date: "08:25 AM",
    event:
      "Jonatha Smith added new milestone Pathek Lorem ipsum dolor sit amet consiquest dio.",
  },

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
];

function Timeline() {
  // timeline colors
  const colors = ["#D32F2F", "#1976D2", "#388E3C", "#FBC02D", "#7B1FA2"];
  return (
    <>
      {/* timeline page */}
      <section className="bg-secondary text-text-color pb-6">
        <div className="container">
          {/* timeline */}
          <div className="w-full table table-fixed relative ">
            {timeLineData.map((timelineItem, ind) => {
              const { time, date, event } = timelineItem;
              const color = colors[ind % colors.length];
              return (
                <div key={ind} className={`table-row`}>
                  {ind % 2 === 0 && <div></div>}
                  <div
                    className={`${
                      ind % 2 === 0 ? "text-left" : "text-right"
                    } table-cell align-top relative`}
                  >
                    <div
                      className={`${
                        ind % 2 === 1 ? "mr-10" : "ml-10"
                      } bg-primary rounded-md p-4 md:p-6  space-y-2`}
                    >
                      <div>
                        <p style={{ color }} className={`font-semibold`}>
                          {time}
                        </p>
                        <span className="text-xs">{date}</span>
                      </div>
                      <p className="text-sm">{event}</p>
                    </div>

                    {/* timeline circle */}
                    <div
                      style={{ borderColor: color }}
                      className={`${
                        ind % 2 === 0 ? "-left-[10px] " : "-right-[10px]"
                      }  size-5 bg-primary rounded-full absolute top-1/2 -translate-y-1/2 border-[5px] `}
                    ></div>

                    {/* timeline arrow */}
                    <div
                      className={`${
                        ind % 2 === 0 ? "left-[30px]" : "right-[30px]"
                      } size-8 bg-primary  absolute top-1/2 -translate-y-1/2 rotate-45`}
                    ></div>
                  </div>
                  {ind % 2 === 1 && <div></div>}
                </div>
              );
            })}

            {/* devider */}
            <div className="w-px h-full bg-text-color absolute top-0 left-1/2 -translate-x-1/2"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Timeline;
