import { useEffect, useState } from "react";
// import Datepicker from "../../Components/DatePicker/datepicker";
import Footer from "../../Components/footer/footer";
import Navbar from "../../Components/Navbar/navbars";

const Order = () => {
  const [title, setTitle] = useState("");

  const [price, setPrice] = useState("");

  const [day, setDay] = useState(0);
  useEffect(async () => {
    const myHeaders = new Headers();
    const token = localStorage.getItem("Authorization");
    myHeaders.append("Authorization", token);
    var option = {
      method: "GET",
      headers: myHeaders,
      rediret: "follow",
    };
    await fetch(
      "https://bsite.net/aradshamsi26/api/Estate/GetRequest?id=4",
      option
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setDay(result.data.request.days);
        setTitle(result.data.request.estate.title);
        setPrice(result.data.request.price);
      })
      .catch((err) => console.log(err));
  });
  return (
    <>
      <Navbar />
      <section className="total-order">
        <h3>جزییات سفارش</h3>
        <p>{`شما درخواست رزرو ${title} را به مدت ${day} روز  داده اید`}</p>
        <p>{`قابل پرداخت ${price}`}</p>
        <div>
          <button className="btn btn-success">پرداخت نهایی</button>
          <button className="btn btn-cancel">انصراف</button>
        </div>
      </section>
      <Footer pFixed="pfix" />
    </>
  );
};
export default Order;
