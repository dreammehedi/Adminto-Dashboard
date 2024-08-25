import { Link } from "react-router-dom";
import logo from "../../../public/favicon.png";
function Logo() {
  return (
    <>
      {/* logo */}
      <Link to={"/"} className=" flex items-center gap-2 ">
        <img
          className="object-cover max-w-[40px] h-auto"
          src={logo}
          alt="Adminto"
        />
        <span className="hidden lg:inline-block text-2xl font-semibold text-white leading-tight">
          Adminto
        </span>
      </Link>
    </>
  );
}

export default Logo;
