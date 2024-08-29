import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import { useState } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { IoMdCloseCircle } from "react-icons/io";
import Modal from "react-modal";
import useAxiosPublic from "./../../hooks/useAxiosPublic";
import "./calender.css";

function Calendar() {
  // axios public
  const axiosPublic = useAxiosPublic();

  // localizer
  const localizer = momentLocalizer(moment);

  // modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const customStyles = {
    overlay: {
      backgroundColor: "#0538915e",
      position: "fixed",
      zIndex: 9999,
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#282e38",
    },
  };

  // get events data
  const { data: calendarEvents } = useQuery({
    queryKey: ["calendarEvents"],
    queryFn: async () => {
      const fetchData = await axiosPublic.get("/calendar");
      const resData = await fetchData.data;
      return resData.payload;
    },
  });

  const calendarEventAdd = (e) => {
    e.preventDefault();
  };
  Modal.setAppElement("#root");
  return (
    <>
      {/* calendar apps */}
      <section className="bg-secondary pb-6 !text-text-color">
        <div className="container text-white">
          {/* calendar modal */}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => {
              setModalIsOpen(false);
            }}
            style={customStyles}
          >
            <form onSubmit={calendarEventAdd} className="flex flex-col gap-4">
              <div className="flex flex-col space-y-2">
                <label
                  className="text-text-color text-sm font-semibold capitalize"
                  htmlFor="eventName"
                >
                  Event Name
                </label>
                <input
                  placeholder="Enter Event Name.."
                  className="outline-none rounded text-text-color border-gray-600 border p-2 text-sm bg-primary"
                  type="text"
                  name="eventName"
                  id="eventName"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label
                  className="text-text-color text-sm font-semibold capitalize"
                  htmlFor="eventStartTime"
                >
                  Event Start Time
                </label>
                <input
                  placeholder="Enter Gallery Category.."
                  className="outline-none rounded text-text-color border-gray-600 border p-2 text-sm bg-primary"
                  type="time"
                  name="eventStartTime"
                  id="eventStartTime"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label
                  className="text-text-color text-sm font-semibold capitalize"
                  htmlFor="eventEndTime"
                >
                  Event End Time
                </label>
                <input
                  placeholder="Enter Gallery Short Description.."
                  className="outline-none rounded text-text-color border-gray-600 border p-2 text-sm bg-primary"
                  type="time"
                  name="eventEndTime"
                  id="eventEndTime"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-[#71b6f9] rounded-md text-white p-2 hover:bg-[#3973ad] transition-all duration-300"
              >
                Add Event
              </button>
            </form>

            <button
              onClick={() => {
                setModalIsOpen(false);
              }}
              className="absolute top-2 right-2 text-white font-semibold text-2xl my-transition hover:text-red-400"
            >
              <IoMdCloseCircle></IoMdCloseCircle>
            </button>
          </Modal>

          <BigCalendar
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            selectable
            onSelectSlot={() => {
              setModalIsOpen(true);
            }}
          />
        </div>
      </section>
    </>
  );
}

export default Calendar;
