import moment from "moment";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
const events = [
  {
    start: moment("2023-03-18T10:00:00").toDate(),
    end: moment("2023-03-18T11:00:00").toDate(),
    title: "MRI Registration",
  },
  {
    start: moment("2023-03-18T14:00:00").toDate(),
    end: moment("2023-03-18T15:30:00").toDate(),
    title: "ENT Appointment",
  },
];

function Calendar() {
  const localizer = momentLocalizer(moment);

  return (
    <>
      {/* calendar apps */}
      <section className="bg-secondary pb-6 !text-text-color">
        <div className="container text-white">
          <BigCalendar
            events={events}
            localizer={localizer}
            style={{ height: 550 }}
          />
        </div>
      </section>
    </>
  );
}

export default Calendar;
