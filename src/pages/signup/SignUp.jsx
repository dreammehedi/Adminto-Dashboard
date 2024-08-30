import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";
import Logo from "../../shared/header/Logo";
const SignUp = () => {
  // show password
  const [showPassword, setShowPassword] = useState(false);

  // handle sign up
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const pass = form.pass.value;
    const checkbox = form.checkbox.value;
    const registerData = { name, email, pass, checkbox };
    console.log(registerData);
  };

  // user
  const { user } = useContext(AuthContext);
  if (user) {
    return <Navigate to={"/"}></Navigate>;
  }

  return (
    <>
      {/* sign up page */}
      <section
        style={{
          backgroundImage: `url(https://i.ibb.co/nPc1rQV/bg-auth-dark-9f5c5b379d98c3f0f520.jpg)`,
        }}
        className="w-full flex flex-col h-screen justify-center items-center !bg-no-repeat !bg-cover !bg-center text-white py-6 md:py-8 lg:py-10"
      >
        {/* logo */}
        <div className="mb-4">
          <Logo></Logo>
        </div>

        {/* form */}
        <div className="bg-primary w-[90%] max-w-md h-fit mx-auto rounded-md p-4 md:p-6 lg:p-8">
          <form onSubmit={handleSignUp} className="flex flex-col gap-4">
            <h1 className="text-white font-semibold  text-center uppercase">
              Sign Up
            </h1>
            <div className="flex flex-col space-y-2">
              <label
                className="text-text-color text-sm font-semibold capitalize"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                placeholder="Enter Full Name.."
                className="outline-none rounded text-text-color border-gray-600 border p-2 text-sm bg-primary"
                type="email"
                name="fullName"
                id="fullName"
                required
              />
            </div>

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
              <input
                type="checkbox"
                name="termsCondition"
                id="termsCondition"
              />
              <label
                htmlFor="termsCondition"
                className="text-sm text-text-color"
              >
                I accept Terms and Conditions
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#71b6f9] rounded-md text-white p-2 hover:bg-[#3973ad] transition-all duration-300"
            >
              Sign Up
            </button>
          </form>
        </div>

        <div className="mt-6 text-text-color text-center text-sm">
          <h1 className="text-center text-text-color">
            Already have an account?
            <Link to={"/signin"}>
              {" "}
              <span className="text-white font-bold cursor-pointer my-transition hover:text-blue-400 underline">
                SignIn
              </span>{" "}
            </Link>
          </h1>
        </div>
      </section>
    </>
  );
};

export default SignUp;
