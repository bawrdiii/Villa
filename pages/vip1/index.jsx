// import { useEffect } from "react";
import Image from "next/image";
import Navbar from "../../Components/Navbar/navbars";

import DatePicker from "../../Components/DatePicker/datepicker";

import { Carousel } from "react-responsive-carousel";
import Footer from "../../Components/footer/footer";

import Picture1 from "../../public/images/vip 1/vip 1.jpeg";
import Picture2 from "../../public/images/vip 1/vip 2.jpeg";

const vip1 = () => {
  const title = `وی آی پی 1`;
  const price = 900000;
  return (
    <>
      <Navbar />
      <section className="forvips">
        <h3>اجاره ویلای {title} </h3>
        <section className="d-grid-vips">
          <div className="d-flex-k">
            <div className="d-flex-calendar">
              <div>
                <p>َشروع قیمت از شبی 900,000 تومان </p>
              </div>
              <div>
                <p className="description">
                  <span className="color-bl mx-1">ویژگی:</span>
                  ویلا ها بسیار تمیز هستند و در نزدیکی دریا قرار دارند
                </p>
              </div>
              <label className="mr-1">تعداد نفرات راانتخاب کنید</label>
              <select name="person" id="person">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
            <div className="properties">
              <strong>متراژ: 80 متر</strong>
              <strong>مبل تخت خواب شو</strong>
              <strong></strong>
              <strong></strong>
            </div>
          </div>

          <Carousel
            className="span"
            showArrows={true}
            useKeyboardArrows={true}
            swipeable={true}
            showThumbs={false}
            width="800px"
          >
            <div>
              <Image src={Picture1} alt="First picture of vip 1" />
            </div>
            <div>
              <Image
                src={Picture2}
                alt="Second Picture of vip 1"
              />
            </div>
          </Carousel>
          <div className="d-none-imgs">
            <Image src={Picture1} alt="Images" />

            <Image src={Picture2} alt="images" />
          </div>
          <DatePicker title={title} price={price} />
        </section>
      </section>
      <Footer />
    </>
  );
};
export default vip1;
