// import { useEffect } from "react";

import Navbar from "../../Components/Navbar/navbar";

import DatePicker from "../../Components/DatePicker/datepicker";

import { Carousel } from "react-responsive-carousel";
import Modal from "../../Components/modal.jsx/modal";
import { useState } from "react";

const vip1 = (props) => {
  const [purchased, setPurchased] = useState(false);
  const modalCloseHandler = () => {
    setPurchased(false);
  };
  const purchasedHandler = () => {
    setPurchased(true);
  };

  return (
    <>
      <Navbar />
      <section className="forvip1">
        <h3>اجاره ی ویلای وی آی پی 1 </h3>
        <Carousel
          showArrows={true}
          useKeyboardArrows={true}
          swipeable={true}
          showThumbs={false}
          width="800px"
        >
          <div>
            <img src="/images/vip 1/vip 1.jpeg" alt="First picture of vip 1" />
          </div>
          <div>
            <img src="/images/vip 1/vip 2.jpeg" alt="Second Picture of vip 1" />
          </div>
        </Carousel>
      </section>
      <section className="forcalendar-section">
        <DatePicker order={purchasedHandler} />
      </section>
    </>
  );
};
export default vip1;
