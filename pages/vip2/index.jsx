import Navbar from "../../Components/navbar/navbars"; 

import Footer from "../../Components/footer/footer";

import DatePicker from "../../Components/DatePicker/datepicker";

import { Carousel } from "react-responsive-carousel";

const vip1 = () => {
  const title = `وی آی پی 2`;
  const price = 900000;
  return (
    <>
      <Navbar />
      <section className="forvips">
        <h3>اجاره ی ویلای {title} </h3>
        <section className="d-grid-vips">
          <div className="d-flex-calendar">
            <div>
              <p>َشروع قیمت از 900,000 تومان </p>
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
            width="800px"
          >
            <div>
              <img
                src="/images/vip 2/vip 1.jpeg"
                alt="First picture of vip 2"
              />
            </div>
            <div>
              <img
                src="/images/vip 2/vip 2.jpeg"
                alt="Second picture of vip 2"
              />
            </div>
            <div>
              <img
                src="/images/vip 2/vip 3.jpeg"
                alt="Third picture of vip 2"
              />
            </div>
          </Carousel>
          <DatePicker title={title} price={price} />
        </section>
      </section>
      <Footer />
    </>
  );
};
export default vip1;
