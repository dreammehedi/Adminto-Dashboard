import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import {
  IoIosArrowDown,
  IoIosNotifications,
  IoIosSearch,
} from "react-icons/io";
import { MdLockOpen, MdSettingsSuggest } from "react-icons/md";
import { PiArrowCounterClockwiseBold } from "react-icons/pi";
import Logo from "./Logo";

function Header() {
  // user account info
  const [userAccountInfo, setUserAccountInfo] = useState(false);

  // mobile search show
  const [mobileSearchForm, setMobileSearchForm] = useState(false);

  return (
    <>
      {/* header */}
      <header className="bg-header-bg">
        <div className="relative container flex justify-between items-center gap-4 py-4 md:py-5">
          {/* logo */}
          <Logo></Logo>

          {/* navigation */}
          <div className="flex justify-between items-center gap-4">
            {/* search form */}
            <form className="hidden lg:inline-block relative">
              <input
                className="bg-primary text-text-color rounded-full px-4 py-2 text-sm placeholder:text-sm outline-none"
                name="searchDashboard"
                type="text"
                placeholder="Search..."
              />
              <button
                type="submit"
                className="absolute top-1/2 -translate-y-1/2 right-3"
              >
                <IoIosSearch className="text-white"></IoIosSearch>
              </button>
            </form>

            {/* search icon */}
            <button
              onClick={() => {
                setMobileSearchForm(!mobileSearchForm);
                setUserAccountInfo(false);
              }}
            >
              <IoIosSearch
                className={`${
                  mobileSearchForm && "text-orange-500"
                } lg:hidden text-white text-2xl`}
              ></IoIosSearch>
            </button>

            {/* notification icon */}
            <button className="relative">
              <IoIosNotifications className="text-white text-2xl"></IoIosNotifications>
              <span className="bg-orange-500 text-white font-medium flex justify-center items-center text-center absolute -top-1 right-0 p-px size-3 text-xs rounded-full">
                5
              </span>
            </button>

            {/* user avatar name */}
            <div
              onClick={() => {
                setUserAccountInfo(!userAccountInfo);
                setMobileSearchForm(false);
              }}
              className={` relative flex place-items-center gap-2 cursor-pointer`}
            >
              <img
                className="size-[35px] object-cover rounded-full"
                src="https://i.ibb.co/FnB9kzw/download.jpg"
                alt="user"
              />
              <strong
                className={`${
                  userAccountInfo && "text-orange-500"
                } flex place-items-center gap-2 text-sm text-white`}
              >
                Mehedi <IoIosArrowDown></IoIosArrowDown>
              </strong>

              {/* user account info */}
              <div
                className={`${
                  userAccountInfo
                    ? "top-[52px] md:top-[56px] visible"
                    : "top-[104px] invisible"
                } py-2 my-transition w-[180px] absolute left-0 bg-secondary rounded-md overflow-hidden`}
              >
                <span className="text-xs text-white px-4 pb-4 inline-block">
                  Welcome!
                </span>
                <ul className="text-sm text-text-color *:flex *:place-items-center *:gap-2 *:px-4 *:py-2">
                  <li className="hover:bg-primary hover:text-white">
                    <FaRegUser></FaRegUser> My Account
                  </li>
                  <li className="hover:bg-primary hover:text-white border-b border-primary">
                    <MdLockOpen></MdLockOpen> Lock Screen
                  </li>
                  <li className="hover:bg-primary hover:text-white">
                    <PiArrowCounterClockwiseBold></PiArrowCounterClockwiseBold>
                    Logout
                  </li>
                </ul>
              </div>
            </div>

            {/* seeting/gear button */}
            <button>
              <MdSettingsSuggest className="text-text-color text-3xl"></MdSettingsSuggest>
            </button>
          </div>

          {/* mobile search form */}
          <form
            className={`${
              mobileSearchForm
                ? "top-[70px] md:top-[78px] visible"
                : "top-[100px] invisible"
            } my-transition !lg:hidden absolute w-[90%] left-1/2 -translate-x-1/2 bg-secondary p-4 md:p-6 rounded-md ring-1 ring-primary`}
          >
            <input
              className="bg-secondary text-text-color rounded-md w-full px-4 py-2 text-sm placeholder:text-sm outline-none ring-1 ring-primary"
              name="searchDashboard"
              type="text"
              placeholder="Search..."
            />
          </form>
        </div>
      </header>
    </>
  );
}

export default Header;
