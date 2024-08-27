import moment from "moment";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

function Calendar() {
  const localizer = momentLocalizer(moment);
  return (
    <>
      {/* calendar apps */}
      <section className="bg-secondary pb-6 !text-text-color">
        <div className="container">
          <BigCalendar localizer={localizer} style={{ height: 550 }} />
        </div>
      </section>
    </>
  );
}

export default Calendar;
