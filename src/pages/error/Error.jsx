import PropTypes from "prop-types";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../shared/header/Logo";

function Error({ code, title, message }) {
  return (
    <>
      {/* error 404 page */}
      <section
        style={{
          backgroundImage: `url(https://i.ibb.co/nPc1rQV/bg-auth-dark-9f5c5b379d98c3f0f520.jpg)`,
        }}
        className="w-full flex flex-col min-h-screen justify-center items-center !bg-no-repeat !bg-cover !bg-center text-white py-6 md:py-8 lg:py-10"
      >
        {/* logo */}
        <div className="mb-4">
          <Logo></Logo>
        </div>

        {/* error content */}
        <div className="container max-w-md py-10 text-center flex flex-col justify-center items-center gap-3 rounded-md bg-primary p-4 md:p-6">
          <h1 className="uppercase text-5xl md:text-6xl font-semibold text-blue-500">
            {code || 404}
          </h1>

          <h3 className="font-medium text-2xl">{title || "Page not Found!"}</h3>
          <p className="text-text-color">
            {message ||
              `It's looking like you may have taken a wrong turn. Don't worry... it happens to the best of us. You might want to check your internet connection. Here's a little tip that might help you get back on track.`}
          </p>
          <Link to="/">
            <button className="px-4 py-2 text-white bg-blue-400 rounded-md my-transition hover:bg-blue-400/50 ring-1 ring-primary flex items-center gap-2">
              <FaHome></FaHome>
              Back to Home
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

// prop validation

Error.propTypes = {
  code: PropTypes.number,
  title: PropTypes.string,
  message: PropTypes.string,
};
export default Error;
