
import logo from '../../../public/favicon.png'
export default function SignIn() {
  const handlesubmit = (e)=> {
     e.preventDefault();
     const form = e.target;
     const email = form.email.value;
     const password = form.password.value;
     const formData =  { email , password} ;
     console.log(formData)
  }
  return (
    <div
    style={{
      backgroundImage: `url(https://i.ibb.co/nPc1rQV/bg-auth-dark-9f5c5b379d98c3f0f520.jpg)`,
    }}
    className="w-full flex flex-col h-screen  justify-center items-center !bg-no-repeat !bg-cover !bg-center text-white">
      <div className='flex justify-center items-center my-4'>
         <img className='w-9' src={logo} alt="logo" />
         <h1 className='text-3xl font-semibold text-gray-400'>Adminto</h1>
      </div>
      <div className="bg-[#313844]  lg:w-2/6 mx-auto rounded-md ">
        <h1 className="text-white font-semibold  text-center py-12">SIGN IN</h1>
        <form onSubmit={handlesubmit} className="flex flex-col px-12 ">
          <label
            className="text-[#95989b] text-sm font-semibold mb-3"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            placeholder="email address.."
            className="outline-none rounded text-[#95989b] border-gray-600 border p-2 text-sm bg-[#363e4b] mb-8"
            type="email"
            name="email"
            id="email"
          />
          <label
            className="text-[#95989b] text-sm font-semibold mb-3"
            htmlFor="password"
          >
            password
          </label>
          <input
            className="outline-none rounded text-[#95989b] border-gray-600 border p-2 text-sm bg-[#363e4b]"
            placeholder="password.."
            type="password"
            name="password"
            id="password"
          />
          <div className="flex gap-3 my-3 ">
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember" className="text-sm text-gray-400">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="bg-[#71b6f9]  mt-6 mb-16 rounded text-white p-2 hover:bg-[#3973ad] transition-all duration-300"
          >
            Log in
          </button>
        </form>
      </div>
      <div className="my-6 text-gray-400">
         <h1 className="mb-3">Forgot Your Password ?</h1>
         <h1>Dont have account? <span className="text-white  font-semibold">Singup</span></h1>
      </div>
    </div>
  );
}
