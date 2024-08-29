import moment from "moment";
import { useState } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calender.css";
function Calendar() {
  const localizer = momentLocalizer(moment);
  const [events, setEvents] = useState([
    {
      id: 0,
      title: "Board meeting",
      start: new Date(2024, 7, 29, 9, 0, 0),
      end: new Date(2024, 7, 29, 13, 0, 0),
      allDay: false,
    },
    {
      id: 1,
      title: "Lunch",
      start: new Date(2024, 7, 30, 12, 0, 0),
      end: new Date(2024, 7, 30, 13, 0, 0),
      allDay: false,
    },
    {
      id: 2,
      title: "Conference",
      start: new Date(2024, 7, 31, 9, 0, 0),
      end: new Date(2024, 7, 31, 17, 0, 0),
      allDay: true,
    },
  ]);
  const handleSelectEvent = (event) => {
    alert(`Event: ${event.title}`);
  };

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt("New Event name");
    if (title) {
      setEvents([...events, { start, end, title }]);
    }
  };
  return (
    <>
      {/* calendar apps */}
      <section className="bg-secondary pb-6 !text-text-color">
        <div className="container text-white">
          <BigCalendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            selectable
            onSelectEvent={handleSelectEvent}
            onSelectSlot={handleSelectSlot}
          />
        </div>
      </section>
    </>
  );
}

export default Calendar;
