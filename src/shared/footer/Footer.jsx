import { NavLink } from "react-router-dom";

function Footer() {
  return (
    // footer
    <>
      <footer className="bg-primary text-text-color py-4 md:py-5 lg:py-6">
        <div className="container flex flex-col md:flex-row justify-center  md:justify-between items-center gap-4">
          <p className="text-sm">
            &copy; 2024 Adminto theme by{" "}
            <a
              href="https://www.facebook.com/dreammehedihassan/"
              target="_blank"
              className="text-blue-400 underline italic"
            >
              Mehedi Hassan
            </a>
          </p>
          <ul className="flex justify-center items-center gap-4 text-sm">
            <li>
              <NavLink
                to={"/about-us"}
                className={({ isActive }) => {
                  return isActive
                    ? "text-blue-400 capitalize"
                    : "text-text-color capitalize my-transition hover:text-blue-400";
                }}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/help"}
                className={({ isActive }) => {
                  return isActive
                    ? "text-blue-400 capitalize"
                    : "text-text-color capitalize my-transition hover:text-blue-400";
                }}
              >
                Help
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact-us"}
                className={({ isActive }) => {
                  return isActive
                    ? "text-blue-400 capitalize"
                    : "text-text-color capitalize my-transition hover:text-blue-400";
                }}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
