import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";
import { useEffect, useState } from "react";
import Link from "next/link";
import { utils } from "react-modern-calendar-datepicker";
import { useRouter } from "next/router";

const Datepicker = ({ title, price }) => {
  const persianToday = utils("fa").getToday();

  const defaultRange = {
    from: persianToday,
    to: null,
  };
  const [selectedDayRange, setSelectedDayRange] = useState(defaultRange);

  const route = useRouter();

  const fromDay = selectedDayRange.from;
  const tounrooz = selectedDayRange.to;
  var fromDayArray = Object.keys(fromDay).map((key) => [key, fromDay[key]]);

  if (tounrooz) {
    var tounroozArray = Object.keys(tounrooz).map((key) => [
      key,
      tounrooz[key],
    ]);
  }
  if (fromDayArray[0].includes("year")) {
    testFrom = `${fromDayArray[0][1]}/${fromDayArray[1][1]}/${fromDayArray[2][1]}`;
  } else {
    var testFrom = `${fromDayArray[2][1]}/${fromDayArray[1][1]}/${fromDayArray[0][1]}`;
  }
  if (tounrooz) {
    var testTo = `${tounroozArray[2][1]}/${tounroozArray[1][1]}/${tounroozArray[0][1]}`;
  }

  async function purchaseSucces() {
    var myHeaders = new Headers();
    if (localStorage.getItem("Authorization")) {
      myHeaders.append("Authorization", localStorage.getItem("Authorization"));
    }
    var formData = new FormData();
    formData.append("code", route.query.id);
    formData.append("dates[0]", testFrom);
    formData.append("dates[1]", testTo);
    const option = {
      method: "POST",
      headers: myHeaders,
      body: formData,
      redirect: "follow",
    };
    await fetch("https://bsite.net/aradshamsi26/api/Estate/AddRequest", option)
      .then((res) => res.json())
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
    route.push("/order");
  }

  const orderHandler = () => {
    const orders = document.getElementById("d-none-o");
    const change = document.getElementById("orders");
    if (orders) {
      change.style.visibility = "visible";
      change.style.opacity = "1";
      orders.style.opacity = "1";
      orders.style.height = "350px";
    } else defaultHandler;
  };

  const defaultHandler = () => {
    setSelectedDayRange(defaultRange);
    const orders = document.getElementById("orders");
    orders.style.opacity = "1";
  };
  const forFooter = () => {
    return (
      <div className="footer-calendar">
        <button
          type="button"
          className="calendar-footer-btn"
          onClick={defaultHandler}
        >
          پاک کردن!
        </button>
        <button className="calendar-footer-btn-submit" onClick={orderHandler}>
          ثبت کردن
        </button>
      </div>
    );
  };

  return (
    <>
      <Calendar
        calendarClassName="responsive-calendar calendar"
        value={selectedDayRange}
        onChange={setSelectedDayRange}
        colorPrimary="#018aeb"
        minimumDate={utils("fa").getToday()}
        colorPrimaryLight="rgba(75, 207, 250, 0.8)"
        locale="fa"
        renderFooter={forFooter}
        shouldHighlightWeekends
      />
      <div className="d-none-order text-center-o" id="orders">
        <section className="orders">
          {tounrooz === null ? (
            <p className="text-center" id="dauern">
              لطفا یک بازه را انتخاب کنید
            </p>
          ) : (
            <div id="d-none-o">
              <h3>جزییات سفارش</h3>
              <p>
                شما درخواست رزرو {title} را به مدت{" "}
                <span className="fw-bold">
                  {tounrooz && tounrooz.day > fromDay.day
                    ? tounrooz.day - fromDay.day
                    : tounrooz.month > 6
                    ? tounrooz.day + 30 - fromDay.day
                    : tounrooz.day + 31 - fromDay.day}{" "}
                </span>
                شب داده اید
              </p>
              <div className="fs-1">
                قابل پرداخت{" "}
                {tounrooz && tounrooz.day > fromDay.day
                  ? (tounrooz.day - fromDay.day) * price
                  : tounrooz.month > 6
                  ? (tounrooz.day + 30 - fromDay.day) * price
                  : (tounrooz.day + 31 - fromDay.day) * price}
              </div>
              <section className="to-order">
                <p> آیا مایل به ادامه هستین؟</p>
                <div>
                  <button className="btn btn-success" onClick={purchaseSucces}>
                    ادامه
                  </button>
                  <button className="btn btn-cancel" onClick={defaultHandler}>
                    {" "}
                    انصراف
                  </button>
                </div>
              </section>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default Datepicker;
