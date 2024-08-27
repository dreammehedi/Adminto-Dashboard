import { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
const actionIconData = [
  "Action",
  "Another Action",
  "Something Else",
  "Separated Link",
];
const latestProjectsData = [
  {
    id: 1,
    projectName: "Adminto Admin v1",
    startDate: "2017-01-01",
    dueDate: "2017-04-26",
    status: "Released",
    assign: "Coderthemes",
  },
  {
    id: 2,
    projectName: "Adminto Admin v2",
    startDate: "2017-05-01",
    dueDate: "2017-08-15",
    status: "In Progress",
    assign: "Coderthemes",
  },
  {
    id: 3,
    projectName: "Adminto Dashboard v1",
    startDate: "2017-09-01",
    dueDate: "2017-12-01",
    status: "Pending",
    assign: "Coderthemes",
  },
  {
    id: 4,
    projectName: "Adminto CRM",
    startDate: "2018-01-10",
    dueDate: "2018-05-20",
    status: "Released",
    assign: "Coderthemes",
  },
  {
    id: 5,
    projectName: "Adminto HR Management",
    startDate: "2018-06-01",
    dueDate: "2018-09-30",
    status: "In Progress",
    assign: "Coderthemes",
  },
  {
    id: 6,
    projectName: "Adminto CRM",
    startDate: "2018-01-10",
    dueDate: "2018-05-20",
    status: "Released",
    assign: "Coderthemes",
  },
  {
    id: 7,
    projectName: "Adminto HR Management",
    startDate: "2018-06-01",
    dueDate: "2018-09-30",
    status: "In Progress",
    assign: "Coderthemes",
  },
];

function DashboardBottomLatestProject() {
  // active action button
  const [activeActionButton, setActiveActionButton] = useState(false);

  return (
    <>
      {/*  dashboard bottom latest projects */}
      <div className="lg:col-span-4 p-4 md:p-6 rounded-md bg-primary h-fit">
        {/* title */}
        <div className="flex justify-between items-center gap-3 relative mb-4">
          <h3 className="text-white font-semibold text-sm">Latest Projects</h3>
          <button
            onClick={() => {
              setActiveActionButton(!activeActionButton);
            }}
            className="text-text-color text-lg"
          >
            <BiDotsVerticalRounded></BiDotsVerticalRounded>
          </button>

          {/* action link */}
          <ul
            className={`${
              activeActionButton ? "top-[25px] visible" : "top-[50px] invisible"
            } my-transition absolute z-30  right-0 flex flex-col bg-primary rounded-md h-fit w-auto lg:w-[180px] ring-1 ring-text-color/20 *:w-full p-1 text-sm`}
          >
            {actionIconData.map((actionLink, ind) => {
              return (
                <li key={ind}>
                  <button className="my-transition px-5 py-2 text-text-color hover:bg-primary hover:text-blue-400 w-full flex items-start text-left justify-start">
                    {actionLink}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* all projects */}
        <table className="w-full text-base text-text-color text-left overflow-x-scroll">
          {/* thead */}
          <thead>
            <tr className="text-sm *:pb-4 border-b border-gray-700">
              <th>#</th>
              <th>Project Name</th>
              <th>Start Date</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Assign</th>
            </tr>
          </thead>

          {/* tbody */}
          <tbody className="text-sm">
            {latestProjectsData.map((latestProject, ind) => {
              const { projectName, startDate, dueDate, status, assign } =
                latestProject;
              return (
                <tr key={ind} className=" *:py-4 border-b border-gray-700">
                  <td>{ind + 1}</td>
                  <td>{projectName}</td>
                  <td>{startDate}</td>
                  <td>{dueDate}</td>
                  <td>{status}</td>
                  <td>{assign}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DashboardBottomLatestProject;
