import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";
import { useState } from "react";
import Link from "next/link";
import { utils } from "react-modern-calendar-datepicker";

const Datepicker = ({ order }) => {
  const persianToday = utils("fa").getToday();

  const defaultRange = {
    from: persianToday,
    to: "",
  };

  const [selectedDateRange, setSelectedDayRange] = useState(defaultRange);

  const forFooter = () => {
    return (
      <div className="footer-calendar">
        <button
          type="button"
          className="calendar-footer-btn"
          onClick={() => setSelectedDayRange(defaultRange)}
        >
          پاک کردن!
        </button>
        <Link href="/order">
          <a className="calendar-footer-btn-submit">ثبت کردن</a>
        </Link>
      </div>
    );
  };

  return (
    <>
      <Calendar
        calendarClassName="responsive-calendar calendar"
        value={selectedDateRange}
        onChange={setSelectedDayRange}
        colorPrimary="#018aeb"
        colorPrimaryLight="rgba(75, 207, 250, 0.8)"
        locale="fa"
        renderFooter={forFooter}
        shouldHighlightWeekends
      />
    </>
  );
};

export default Datepicker;
