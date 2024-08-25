import PropTypes from "prop-types";
import { useState } from "react";
import { FaElementor } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { SiPowerpages } from "react-icons/si";
import { TbComponents } from "react-icons/tb";
import { NavLink } from "react-router-dom";

// subMenu component
function SubMenu({ label, icon: Icon, subItems }) {
  const [activeSubMenu, setActiveSubMenu] = useState(false);

  return (
    <li
      onMouseEnter={() => setActiveSubMenu(true)}
      onMouseLeave={() => setActiveSubMenu(false)}
      className="relative"
    >
      <button className="px-5 py-3 text-text-color hover:bg-primary w-full flex items-center justify-between hover:text-blue-400 my-transition">
        {Icon && <Icon className="mr-3" />}
        {label}
        <IoIosArrowForward />
      </button>
      {subItems && (
        <ul
          className={`${
            activeSubMenu ? "visible top-0" : "invisible top-[30px]"
          } my-transition absolute -right-[76%] flex flex-col items-start bg-secondary rounded-md h-fit w-[200px] ring-1 ring-text-color/20 overflow-hidden *:w-full p-1`}
        >
          {subItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                className={({ isActive }) => {
                  return isActive
                    ? "px-5 py-3 text-blue-400 w-full flex items-center"
                    : "my-transition px-5 py-3 text-text-color hover:bg-primary hover:text-blue-400 w-full flex items-center";
                }}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

// main dropdown menu component
function DropdownMenu({ label, icon: Icon, items }) {
  const [activeMegaMenu, setActiveMegaMenu] = useState(false);

  return (
    <div
      onMouseEnter={() => setActiveMegaMenu(true)}
      onMouseLeave={() => setActiveMegaMenu(false)}
      className="relative text-text-color capitalize my-transition cursor-pointer"
    >
      <div className="flex items-center gap-3 my-transition hover:text-blue-400">
        {Icon && <Icon />}
        {label}
        <IoIosArrowDown />
      </div>

      {/* sub menu */}
      {items?.length > 0 && (
        <ul
          className={`${
            activeMegaMenu ? "top-[35px] visible" : "top-[70px] invisible"
          } my-transition absolute left-0 flex flex-col items-start bg-secondary rounded-md h-fit w-[280px] ring-1 ring-text-color/20 *:w-full p-1`}
        >
          {items.map((item) =>
            item.subItems ? (
              <SubMenu
                key={item.label}
                label={item.label}
                icon={item.icon}
                subItems={item.subItems}
              />
            ) : (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => {
                    return isActive
                      ? "px-5 py-3 text-blue-400 w-full flex items-center"
                      : "my-transition px-5 py-3 text-text-color hover:bg-primary hover:text-blue-400 w-full flex items-center";
                  }}
                >
                  {item.icon && <item.icon className="mr-3" />}
                  {item.label}
                </NavLink>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
}

// render component
function DesktopNavbar() {
  const appsItems = [
    { label: "Calendar", to: "/apps/calendar" },
    { label: "Chat", to: "/apps/chat" },
    {
      label: "Email",
      subItems: [{ label: "Inbox", to: "/apps/inbox" }],
    },
    {
      label: "Tasks",
      subItems: [
        { label: "Kanban Board", to: "/apps/kanban-board" },
        { label: "Details", to: "/apps/detailes" },
      ],
    },
    { label: "Projects", to: "/apps/projects" },
    {
      label: "Contacts",
      subItems: [
        { label: "Member List", to: "/apps/memberlist" },
        { label: "Profile", to: "/apps/profile" },
      ],
    },
  ];

  const pagesItems = [
    {
      label: "Errors",
      subItems: [
        { label: "Error - 404", to: "/error-404" },
        { label: "Error - 500", to: "/error-500" },
      ],
    },
    {
      label: "Utility",
      subItems: [
        { label: "Pricing", to: "/extra-pages/pricing" },
        { label: "Timeline", to: "/extra-pages/timeline" },
        { label: "Invoice", to: "/extra-pages/invoice" },
        { label: "FAQs", to: "/extra-pages/FAQs" },
        { label: "Gallery", to: "/extra-pages/gallery" },
        { label: "Maintenance", to: "/extra-pages/maintenence" },
        { label: "Coming Soon", to: "/extra-pages/comingsoon" },
      ],
    },
  ];

  return (
    <nav className="hidden lg:block bg-primary">
      <ul className="container py-3 flex justify-start items-center gap-4 md:gap-6 text-sm font-normal overflow-hidden">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-3 text-blue-400 capitalize"
              : "flex items-center gap-3 text-text-color capitalize my-transition hover:text-blue-400"
          }
        >
          <MdDashboard />
          Dashboard
        </NavLink>
        <DropdownMenu label="UI Elements" icon={FaElementor} items={[]} />
        <DropdownMenu label="Apps" icon={FaElementor} items={appsItems} />
        <DropdownMenu label="Components" icon={TbComponents} items={[]} />
        <DropdownMenu label="Pages" icon={SiPowerpages} items={pagesItems} />
      </ul>
    </nav>
  );
}

// Prop validation
DropdownMenu.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

SubMenu.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.func,
  subItems: PropTypes.array,
};

export default DesktopNavbar;
