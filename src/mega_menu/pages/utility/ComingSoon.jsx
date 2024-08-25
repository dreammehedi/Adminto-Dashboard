import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../../shared/header/Logo";

function ComingSoon() {
  return (
    <>
      {/* coming soon page */}
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
          <h1 className="uppercase text-5xl md:text-6xl font-semibold text-blue-500"></h1>

          <h3 className="font-medium text-2xl text-text-color">
            {"Stay tunned, we're launching very soon"}
          </h3>
          <p className="text-text-color">
            {`We're making the system more awesome.`}
          </p>
          <p className="text-white font-semibold text-2xl">Coming Soon</p>
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

export default ComingSoon;
