import { Link } from "react-router-dom";

function Logo() {
  return (
    <>
      {/* logo */}
      <Link to={"/"}>
        <img
          className="object-cover max-w-[120px] h-auto"
          src="https://i.ibb.co/YpV3ncg/download.png"
          alt="Adminto"
        />
      </Link>
    </>
  );
}

export default Logo;
