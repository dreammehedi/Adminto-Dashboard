function SignIn() {
  return (
    <>
      <div className="bg-[#313844]">
        <h1 className="text-white font-semibold  text-center my-12">SIGN IN</h1>
        <form className="flex flex-col px-6">
          <label
            className="text-[#95989b] text-sm font-semibold mb-3"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            placeholder="email address.."
            className="outline-none rounded text-[#95989b] border-gray-600 border p-2 text-sm bg-[#363e4b]"
            type="email"
            name="email"
            id="email"
          />
          <label htmlFor="password">password</label>
          <input
            placeholder="password.."
            type="password"
            name="password"
            id="password"
          />
          <input type="checkbox" name="remember" id="remember" />
          <label htmlFor="remember" className="text-sm">
            Remember me
          </label>
          <button type="submit" className="">
            Log in
          </button>
        </form>
      </div>
    </>
  );
}

export default SignIn;
