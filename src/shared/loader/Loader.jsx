import { MutatingDots } from "react-loader-spinner";

function Loader() {
  return (
    <>
      {/* loader spinner */}
      <div className="flex justify-center items-center text-center p-4 md:p-6 w-full h-screen fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary z-[9999999]">
        <MutatingDots
          visible={true}
          height="150"
          width="150"
          color="#60a5fa"
          secondaryColor="#85a5fa"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </>
  );
}

export default Loader;
