import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      {/* error page */}
      <section
        style={{
          backgroundImage: `url(https://i.ibb.co/nPc1rQV/bg-auth-dark-9f5c5b379d98c3f0f520.jpg)`,
        }}
        className="w-full h-screen flex justify-center items-center !bg-no-repeat !bg-cover !bg-center text-white"
      >
        {/* error content */}
        <div className="container max-w-md py-10  text-center flex flex-col justify-center items-center gap-3 rounded-md bg-secondary p-4 md:p-6">
          <h1 className="uppercase text-2xl font-semibold text-red-500">
            404 Error
          </h1>

          <h3 className="font-medium">Page not Found!</h3>
          <p className="text-gray-400">
            {`  Sorry, the page you are looking for doesn't exist. Here are some
            helpful links:`}
          </p>
          <Link to="/">
            <button className="px-4 py-2 text-white bg-primary rounded-md my-transition hover:bg-secondary ring-1 ring-primary">
              Go Home
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Error;
