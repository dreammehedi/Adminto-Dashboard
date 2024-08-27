import { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";

const actionIconData = [
  "Action",
  "Another Action",
  "Something Else",
  "Separated Link",
];

const userInboxMessageData = [
  {
    image: "https://i.ibb.co/WsXJWvN/favicon.png",
    name: "Alice Johnson",
    message: "Hey, are you available for a meeting tomorrow?",
    time: "2024-08-27T09:15:00Z",
  },
  {
    image: "https://i.ibb.co/n7NVcL5/cta-1.png",
    name: "Bob Smith",
    message: "Please review the document I sent you.",
    time: "2024-08-27T08:45:00Z",
  },
  {
    image: "https://i.ibb.co/61K8wXk/ahidur-rahman.jpg",
    name: "Charlie Davis",
    message: "Can you update me on the project status?",
    time: "2024-08-27T07:30:00Z",
  },
  {
    image: "https://i.ibb.co/WsXJWvN/favicon.png",
    name: "Alice Johnson",
    message: "Hey, are you available for a meeting tomorrow?",
    time: "2024-08-27T09:15:00Z",
  },
  {
    image: "https://i.ibb.co/n7NVcL5/cta-1.png",
    name: "Bob Smith",
    message: "Please review the document I sent you.",
    time: "2024-08-27T08:45:00Z",
  },
  {
    image: "https://i.ibb.co/61K8wXk/ahidur-rahman.jpg",
    name: "Charlie Davis",
    message: "Can you update me on the project status?",
    time: "2024-08-27T07:30:00Z",
  },
];

function DashboardBottomInbox() {
  // active action button
  const [activeActionButton, setActiveActionButton] = useState(false);

  return (
    <>
      {/*  dashboard bottom inbox */}
      <div className="col-span-1 lg:col-span-2 p-4 md:p-6 rounded-md bg-primary h-fit">
        <div className="p-4 md:p-6 rounded-md bg-primary">
          {/* title */}
          <div className="flex justify-between items-center gap-3 relative mb-4">
            <h3 className="text-white font-semibold text-sm">Inbox</h3>
            <button
              onClick={() => {
                setActiveActionButton(!activeActionButton);
              }}
              className="text-text-color text-lg"
            >
              <BiDotsVerticalRounded></BiDotsVerticalRounded>
            </button>

            {/* action link */}
            <ul
              className={`${
                activeActionButton
                  ? "top-[25px] visible"
                  : "top-[50px] invisible"
              } my-transition absolute z-30  right-0 flex flex-col bg-primary rounded-md h-fit w-auto lg:w-[180px] ring-1 ring-text-color/20 *:w-full p-1 text-sm`}
            >
              {actionIconData.map((actionLink, ind) => {
                return (
                  <li key={ind}>
                    <button className="my-transition px-5 py-2 text-text-color hover:bg-primary hover:text-blue-400 w-full flex items-start text-left justify-start">
                      {actionLink}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* content */}
          <div className="flex flex-col gap-y-5 lg:gap-y-8">
            {userInboxMessageData.map((userMessage, ind) => {
              const { image, name, message, time } = userMessage;
              return (
                <div
                  key={ind}
                  className="flex justify-between items-start gap-4"
                >
                  {/* content */}
                  <div className="flex justify-start text-center gap-2">
                    {/* image */}
                    <img
                      className="size-[40px] rounded-full object-cover"
                      src={image}
                      alt={name}
                    />
                    <div className="flex flex-col justify-center lg:justify-normal text-center space-y-1 md:text-left break-words text-wrap">
                      <h5 className="text-white text-sm">{name}</h5>
                      <small className="text-text-color text-xs break-words text-wrap lg:max-w-[150px]">
                        {message.slice(0, 20)}...
                      </small>
                    </div>
                  </div>

                  {/* time */}
                  <span className="text-xs font-normal">
                    {new Date(time).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardBottomInbox;
