import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../public/favicon.png";
export default function SignIn() {
  // show password
  const [showPassword, setShowPassword] = useState(false);

  // handle sign in
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const rememberMe = form.rememberMe.checked;
    const formData = { email, password, rememberMe };
    console.log(formData);
  };
  return (
    <>
      {/* sign in page */}

      <section
        style={{
          backgroundImage: `url(https://i.ibb.co/nPc1rQV/bg-auth-dark-9f5c5b379d98c3f0f520.jpg)`,
        }}
        className="w-full flex flex-col h-screen justify-center items-center !bg-no-repeat !bg-cover !bg-center text-white py-6 md:py-8 lg:py-10"
      >
        {/* logo */}
        <div className="flex justify-center items-center mb-6">
          <img className="w-9" src={logo} alt="logo" />
          <h1 className="text-3xl font-bold text-gray-200">Adminto</h1>
        </div>

        {/* form */}
        <div className="bg-primary w-[90%] max-w-md h-fit mx-auto rounded-md p-4 md:p-6 lg:p-8">
          <form onSubmit={handleSignIn} className="flex flex-col gap-4">
            <h1 className="text-white font-semibold  text-center uppercase">
              Sign In
            </h1>

            <div className="flex flex-col space-y-2">
              <label
                className="text-text-color text-sm font-semibold capitalize"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                placeholder="Enter Email Address.."
                className="outline-none rounded text-text-color border-gray-600 border p-2 text-sm bg-primary"
                type="email"
                name="email"
                id="email"
                required
              />
            </div>

            <div className="flex flex-col space-y-2 ">
              <label
                className="text-text-color text-sm font-semibold  capitalize"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="w-full outline-none rounded text-text-color border-gray-600 border p-2 text-sm bg-[#363e4b]"
                  placeholder="Enter Password.."
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  required
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowPassword(!showPassword);
                  }}
                  className="absolute top-1/2 -translate-y-1/2 right-3 text-text-color"
                >
                  {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                </button>
              </div>
            </div>
            <div className="flex gap-x-2">
              <input type="checkbox" name="rememberMe" id="rememberMe" />
              <label htmlFor="rememberMe" className="text-sm text-text-color">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#71b6f9] rounded-md text-white p-2 hover:bg-[#3973ad] transition-all duration-300"
            >
              Log in
            </button>
          </form>
        </div>
        <div className="mt-6 text-text-color text-center text-sm">
          <Link to={"/forget-password"}>
            {" "}
            <h1 className="mb-3 ">Forgot Your Password ?</h1>
          </Link>
          <h1 className="text-center text-text-color">
            {`Don't have an account?`}
            <Link to={"/signup"}>
              {" "}
              <span className="text-white font-bold cursor-pointer my-transition hover:text-blue-400 underline">
                Signup
              </span>{" "}
            </Link>
          </h1>
        </div>
      </section>
    </>
  );
}
