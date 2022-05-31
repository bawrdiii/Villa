import Footer from "../../Components/footer/footer";
import Navbar from "../../Components/Navbar/navbars";
import DatePicker from "../../Components/DatePicker/datepicker";

import { Carousel } from "react-responsive-carousel";
const Vip3 = () => {
  const title = `وی آی پی 3`;
  const price = 900000;

  return (
    <>
      <Navbar />
      <section className="forvips">
        <h3>اجاره ویلای {title} </h3>
        <section className="d-grid-vips">
          <div className="d-flex-calendar">
            <div>
              <p>َشروع قیمت از شبی 900,000 تومان </p>
              <p>پ.ن: در تعطیلات قیمت 1,200,000 تومان</p>
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
          <Carousel
            className="span"
            showArrows={true}
            useKeyboardArrows={true}
            swipeable={true}
            showThumbs={false}
            width="400px"
          >
            <div>
              <img
                src="/images/vip 3/vip 1.jpeg"
                alt="First picture of vip 3"
              />
            </div>
            <div>
              <img
                src="/images/vip 3/vip 2.jpeg"
                alt="Second Picture of vip 3"
              />
            </div>
            <div>
              <img
                src="/images/vip 3/vip 3.jpeg"
                alt="Third Picture of vip 3"
              />
            </div>
          </Carousel>
          <div className="d-none-imgs">
            <img src="/images/vip 3/vip 1.jpeg" alt="Images" />
            <img src="/images/vip 3/vip 2.jpeg" alt="images" />
            <img src="/images/vip 3/vip 3.jpeg" alt="images" />
          </div>
          <DatePicker title={title} price={price}/>
        </section>
      </section>
      <Footer />
    </>
  );
};
export default Vip3;
