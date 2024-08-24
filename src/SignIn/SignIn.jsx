export default function SignIn() {
  return (
    <div className="flex items-center h-screen">
      <div className="bg-[#313844]  lg:w-1/3 mx-auto rounded-md ">
        <h1 className="text-white font-semibold  text-center py-12">SIGN IN</h1>
        <form className="flex flex-col px-12 ">
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
          <button type="submit" className="bg-[#71b6f9]  mt-6 mb-16 rounded text-white p-2">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
