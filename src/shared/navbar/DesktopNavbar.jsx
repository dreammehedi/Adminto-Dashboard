import { useState } from "react";
import { FaElementor } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { SiPowerpages } from "react-icons/si";
import { TbComponents } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";

function DesktopNavbar() {
  // apps mega menu active
  const [appsMegaMenu, setAppsMegaMenu] = useState(false);

  // apps mega menu active
  const [appsSubMenu, setAppsSubMenu] = useState(false);

  // tasks sub menu active
  const [tasksSubMenu, setTasksSubMenu] = useState(false);

  // contacts sub menu active
  const [contactsSubMenu, setContactsSubMenu] = useState(false);

  // pages mega menu active
  const [pagesSubMenu, setPagesSubMenu] = useState(false);

  //   utility sub menu active
  const [utilitySubMenu, setUtilitySubMenu] = useState(false);

  //   errors sub menu active
  const [errorsSubMenu, setErrorsSubMenu] = useState(false);

  return (
    <>
      {/* navbar */}
      <nav className="hidden lg:block bg-primary ">
        <ul className="container py-3 flex justify-start items-center gap-4 md:gap-6 text-sm font-normal">
          <NavLink
            to={"/"}
            className={({ isActive }) => {
              return isActive
                ? "flex items-center gap-3 text-blue-400 capitalize"
                : "flex items-center gap-3 text-text-color capitalize my-transition hover:text-blue-400";
            }}
          >
            <MdDashboard></MdDashboard>
            Dashboard
          </NavLink>
          <button className="flex items-center gap-3   text-text-color capitalize my-transition hover:text-blue-400">
            <div className="flex items-center gap-3  my-transition hover:text-blue-400">
              <FaElementor></FaElementor>
              UI Elements
              <IoIosArrowDown></IoIosArrowDown>
            </div>
          </button>
          <button className="relative   text-text-color capitalize my-transition ">
            <div
              onMouseOver={() => {
                setAppsMegaMenu(true);
              }}
              onMouseLeave={() => {
                setAppsMegaMenu(false);
              }}
              className="flex items-center gap-3  my-transition hover:text-blue-400"
            >
              <FaElementor></FaElementor>
              Apps
              <IoIosArrowDown></IoIosArrowDown>
            </div>

            {/* apps mega menu */}
            <ul
              onMouseOver={() => {
                setAppsMegaMenu(true);
              }}
              onMouseLeave={() => {
                setAppsMegaMenu(false);
              }}
              className={`${
                appsMegaMenu ? "top-[35px] visible" : "top-[70px] invisible"
              } my-transition absolute  left-0 flex flex-col items-start bg-secondary rounded-md h-fit  w-[280px] ring-1 ring-text-color/20  *:w-full p-1`}
            >
              <li>
                <Link
                  to="/calender"
                  className="my-transition px-5 py-3 text-text-color hover:bg-primary w-full flex items-center"
                >
                  Calender
                </Link>
              </li>
              <li>
                <Link
                  to="/chat"
                  className="my-transition px-5 py-3 text-text-color hover:bg-primary w-full flex items-center"
                >
                  Chat
                </Link>
              </li>
              <li
                onMouseEnter={() => {
                  setAppsSubMenu(true);
                }}
                onMouseLeave={() => {
                  setAppsSubMenu(false);
                }}
                className="relative"
              >
                <button className="px-5 py-3 text-text-color hover:bg-primary w-full flex items-center justify-between hover:text-blue-400 my-transition">
                  Email
                  <IoIosArrowForward></IoIosArrowForward>
                </button>

                {/* sub menu */}
                <ul
                  onMouseEnter={() => {
                    setAppsSubMenu(true);
                  }}
                  onMouseLeave={() => {
                    setAppsSubMenu(false);
                  }}
                  className={`${
                    appsSubMenu ? "visible top-0" : "invisible top-[30px]"
                  } my-transition absolute -right-[76%] flex flex-col items-start bg-secondary rounded-md h-fit  w-[200px] ring-1 ring-text-color/20 overflow-hidden *:w-full p-1`}
                >
                  <li>
                    <Link
                      to="/inbox"
                      className="my-transition px-5 py-3 text-text-color hover:bg-primary w-full flex items-center"
                    >
                      Inbox
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                onMouseEnter={() => {
                  setTasksSubMenu(true);
                }}
                onMouseLeave={() => {
                  setTasksSubMenu(false);
                }}
                className="relative"
              >
                <button className="px-5 py-3 text-text-color hover:bg-primary w-full flex items-center justify-between hover:text-blue-400 my-transition">
                  Tasks
                  <IoIosArrowForward></IoIosArrowForward>
                </button>

                {/* sub menu */}
                <ul
                  onMouseEnter={() => {
                    setTasksSubMenu(true);
                  }}
                  onMouseLeave={() => {
                    setTasksSubMenu(false);
                  }}
                  className={`${
                    tasksSubMenu ? "visible top-0" : "invisible top-[30px]"
                  } my-transition absolute -right-[76%] flex flex-col items-start bg-secondary rounded-md h-fit  w-[200px] ring-1 ring-text-color/20 overflow-hidden *:w-full p-1`}
                >
                  <li>
                    <Link
                      to="/"
                      className="my-transition px-5 py-3 text-text-color hover:bg-primary w-full flex items-center"
                    >
                      Kanban Board
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="my-transition px-5 py-3 text-text-color hover:bg-primary w-full flex items-center"
                    >
                      Detailes
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="my-transition px-5 py-3 text-text-color hover:bg-primary w-full flex items-center"
                >
                  Projects
                </Link>
              </li>
              <li
                onMouseEnter={() => {
                  setContactsSubMenu(true);
                }}
                onMouseLeave={() => {
                  setContactsSubMenu(false);
                }}
                className="relative"
              >
                <button className="px-5 py-3 text-text-color hover:bg-primary w-full flex items-center justify-between hover:text-blue-400 my-transition">
                  Contacts
                  <IoIosArrowForward></IoIosArrowForward>
                </button>

                {/* sub menu */}
                <ul
                  onMouseEnter={() => {
                    setContactsSubMenu(true);
                  }}
                  onMouseLeave={() => {
                    setContactsSubMenu(false);
                  }}
                  className={`${
                    contactsSubMenu ? "visible top-0" : "invisible top-[30px]"
                  } my-transition absolute -right-[76%] flex flex-col items-start bg-secondary rounded-md h-fit  w-[200px] ring-1 ring-text-color/20 overflow-hidden *:w-full p-1`}
                >
                  <li>
                    <Link
                      to="/"
                      className="my-transition px-5 py-3 text-text-color hover:bg-primary w-full flex items-center"
                    >
                      Member List
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="my-transition px-5 py-3 text-text-color hover:bg-primary w-full flex items-center"
                    >
                      Profile
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </button>
          <button className="flex items-center gap-3   text-text-color capitalize my-transition hover:text-blue-400">
            <div className="flex items-center gap-3  my-transition hover:text-blue-400">
              <TbComponents></TbComponents>
              Components
              <IoIosArrowDown></IoIosArrowDown>
            </div>
          </button>
          <button className="relative flex items-center gap-3   text-text-color capitalize my-transition hover:text-blue-400">
            <div
              onMouseOver={() => {
                setPagesSubMenu(true);
              }}
              onMouseLeave={() => {
                setPagesSubMenu(false);
              }}
              className="flex items-center gap-3  my-transition hover:text-blue-400"
            >
              <SiPowerpages></SiPowerpages>
              Pages
              <IoIosArrowDown></IoIosArrowDown>
              {/* pages mega menu */}
              <ul
                onMouseOver={() => {
                  setPagesSubMenu(true);
                }}
                onMouseLeave={() => {
                  setPagesSubMenu(false);
                }}
                className={`${
                  pagesSubMenu ? "top-[35px] visible" : "top-[70px] invisible"
                } my-transition absolute  left-0 flex flex-col items-start bg-secondary rounded-md h-fit  w-[280px] ring-1 ring-text-color/20  *:w-full p-1`}
              >
                <li
                  onMouseEnter={() => {
                    setErrorsSubMenu(true);
                  }}
                  onMouseLeave={() => {
                    setErrorsSubMenu(false);
                  }}
                  className="relative"
                >
                  <button className="relative px-5 py-3 text-text-color hover:bg-primary w-full flex items-center justify-between hover:text-blue-400 my-transition">
                    Errors
                    <IoIosArrowForward></IoIosArrowForward>
                  </button>

                  {/* sub menu */}
                  <ul
                    onMouseEnter={() => {
                      setErrorsSubMenu(true);
                    }}
                    onMouseLeave={() => {
                      setErrorsSubMenu(false);
                    }}
                    className={`${
                      errorsSubMenu ? "visible top-0" : "invisible top-[30px]"
                    } my-transition absolute -right-[76%] flex flex-col items-start bg-secondary rounded-md h-fit  w-[200px] ring-1 ring-text-color/20 overflow-hidden *:w-full p-1`}
                  >
                    <li>
                      <Link
                        to="/"
                        className="my-transition px-5 py-3 text-text-color hover:bg-primary w-full flex items-center"
                      >
                        Error - 404
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="my-transition px-5 py-3 text-text-color hover:bg-primary w-full flex items-center"
                      >
                        Error - 500
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  onMouseEnter={() => {
                    setUtilitySubMenu(true);
                  }}
                  onMouseLeave={() => {
                    setUtilitySubMenu(false);
                  }}
                  className="relative"
                >
                  <button className="relative px-5 py-3 text-text-color hover:bg-primary w-full flex items-center justify-between hover:text-blue-400 my-transition">
                    Utility
                    <IoIosArrowForward></IoIosArrowForward>
                  </button>

                  {/* sub menu */}
                  <ul
                    onMouseEnter={() => {
                      setUtilitySubMenu(true);
                    }}
                    onMouseLeave={() => {
                      setUtilitySubMenu(false);
                    }}
                    className={`${
                      utilitySubMenu ? "visible top-0" : "invisible top-[30px]"
                    } my-transition absolute -right-[76%] flex flex-col items-start bg-secondary rounded-md h-fit  w-[200px] ring-1 ring-text-color/20 overflow-hidden *:w-full p-1`}
                  >
                    <li>
                      <Link
                        to="/"
                        className="my-transition px-5 py-3 text-text-color hover:bg-primary w-full flex items-center"
                      >
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="my-transition px-5 py-3 text-text-color hover:bg-primary w-full flex items-center"
                      >
                        Timeline
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="my-transition px-5 py-3 text-text-color hover:bg-primary w-full flex items-center"
                      >
                        Invoice
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="my-transition px-5 py-3 text-text-color hover:bg-primary w-full flex items-center"
                      >
                        FAQs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="my-transition px-5 py-3 text-text-color hover:bg-primary w-full flex items-center"
                      >
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="my-transition px-5 py-3 text-text-color hover:bg-primary w-full flex items-center"
                      >
                        Maintanence
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="my-transition px-5 py-3 text-text-color hover:bg-primary w-full flex items-center"
                      >
                        Coming Soon
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </button>
        </ul>
      </nav>
    </>
  );
}

export default DesktopNavbar;
