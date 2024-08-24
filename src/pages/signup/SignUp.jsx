import { Link } from "react-router-dom";
import bgSignUp from "../../image/bgSignUp.jpg";
import logo from "../../../public/favicon.png";
const SignUp = () => {
const handleRegister = e => {
  e.preventDefault();
  const form = e.target;
const name = form.name.value;
const email = form.email.value;
const pass = form.pass.value;
const checkbox = form.checkbox.value;
 const registerData = {name,email,pass,checkbox};
 console.log(registerData);
}
  
  return (
    <div
      className="min-h-screen w-full bg-cover bg-no-repeat bg-center flex flex-col gap-y-4 justify-center items-center"
      style={{ backgroundImage: `url(${bgSignUp})` }}
    >
      <div className="flex flex-col justify-center items-center gap-y-2">
       <div className="flex justify-center items-center"> <img className="md:w-8" src={logo} alt="" /><h1 className='text-3xl font-bold text-gray-200'>Adminto</h1></div>
        <p className="text-gray-300 text-sm ">Responsive Admin Dashboard</p>
      </div>
      {/* form */}
      <div className="md:w-[480px] md:h-[580px] p-[36px] bg-gray-700 rounded-xl   ">
       <div>
       <h2 className=" mt-4  mb-8 text-xl font-semibold text-white text-center">
          Register
        </h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4 flex flex-col space-y-4">
            {/* name */}
            <label htmlFor="">
              <p className="text-gray-300 mb-2">Full name</p>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none  border-gray-500 focus:ring-1 bg-gray-700 text-gray-300  mb-3"
                placeholder="Username"
                name="name"
                type="text"
                required
              />
            </label>
            {/* email */}
            <label htmlFor="">
              <p className="text-gray-300 mb-2">Email address </p>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none  border-gray-500 focus:ring-1 bg-gray-700 text-gray-300 mb-3"
                placeholder="Enter yur email"
                name="email"
                type="text"
                required
              />
            </label>
            {/* password */}
            <label htmlFor="">
              <p className="text-gray-300 mb-2">Password</p>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none  border-gray-500 focus:ring-1 bg-gray-700 text-gray-300  mb-3"
                placeholder="Enter your password"
                name="pass"
                type="text"
                required
              />
            </label>
          </div>
          <div className="mb-6 flex items-center space-x-2 accent-sky-600">
            <input type="checkbox" id="keep_signed_in" name="checkbox" required />
            <label
              className="select-none text-sm font-medium text-gray-300"
              htmlFor="keep_signed_in"
            >
              I accept Terms and Conditions
            </label>
          </div>
          <button className="inline-flex h-10 w-full items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-blue-400">
            Sign Up
          </button>
        </form>
       </div>
      </div>




      <h1 className="text-center text-gray-300">
        All ready have an account?
        <Link to={"/signin"}>
          {" "}
          <span className="text-white font-bold cursor-pointer">
            SignIn
          </span>{" "}
        </Link>
      </h1>
    </div>
  );
};

export default SignUp;
