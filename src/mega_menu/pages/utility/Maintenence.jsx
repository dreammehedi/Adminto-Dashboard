import * as Icons from "react-icons/bi";
import Logo from "../../../shared/header/Logo";
const maintenenceNotification = [
  {
    title: "Why is the Site Down?",
    message:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration. This is one of them.",
    icon: "BiError",
  },
  {
    title: "What is the Downtime?",
    message:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical but the majority.",
    icon: "BiTime",
  },
  {
    title: "Do you need Support?",
    message:
      "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing. dreammehedihassan@gmail.com",
    icon: "BiSupport",
  },
];
function Maintenence() {
  return (
    <>
      {/* maintenence page */}
      <section
        style={{
          backgroundImage: `url(https://i.ibb.co/nPc1rQV/bg-auth-dark-9f5c5b379d98c3f0f520.jpg)`,
        }}
        className="w-full flex flex-col min-h-screen justify-center items-center !bg-no-repeat !bg-cover !bg-center text-white py-6 md:py-8 lg:py-10"
      >
        {/* logo */}
        <div>
          <Logo></Logo>
        </div>

        {/* error content */}
        <div className="container max-w-md py-6 text-center flex flex-col justify-center items-center gap-3 rounded-md bg-transparent p-4 md:p-6">
          <h1 className="uppercase text-5xl md:text-6xl font-semibold text-blue-500"></h1>

          <h3 className="font-medium text-2xl text-text-color">
            Site is under Maintenance
          </h3>
          <p className="text-text-color text-sm">
            {`We're making the system more awesome.we'll be back shortly.`}
          </p>
        </div>

        {/* notification message */}

        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-6">
          {maintenenceNotification.map((notification) => {
            const { title, message, icon } = notification;
            const IconComponent = Icons[icon];
            return (
              <>
                <div className="bg-primary rounded-md p-6 md:p-8 lg:p-10 flex flex-col justify-center items-center text-center gap-3">
                  <div className="flex justify-center items-center bg-blue-400/20 rounded-full p-3">
                    <IconComponent className="text-blue-400 text-4xl"></IconComponent>
                  </div>

                  <h3 className="text-white font-medium text-xl">{title}</h3>
                  <p className="text-text-color text-xs">{message}</p>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Maintenence;
