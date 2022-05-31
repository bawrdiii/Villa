import Footer from "../../Components/footer/footer";
import Navbar from "../../Components/Navbar/navbars";
import DatePicker from "../../Components/DatePicker/datepicker";

import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
const Vip4 = () => {
  const [number, setNumber] = useState('');

  const [price, setPrice] = useState(900000);
  const title = `وی آی پی 4`;

  const getNumberValue = (e) => {
    setNumber(e.target.value);
  };
  const changer = (e) => {
    setPrice(number);
    if (number === "" || 0) {
      setPrice(900000);
    }
    e.preventDefault();
  };
  return (
    <>
      <Navbar />
      <section className="forvips">
        <h3>اجاره ویلای {title}</h3>
        <section className="d-grid-vips">
          <div className="d-flex-k">
            <div className="d-flex-calendar">
              <form className="price-changer">
                <input
                  type="text"
                  id="number"
                  name="number"
                  value={number}
                  onChange={getNumberValue}
                />
                <label>
                  <button onClick={changer} className="btn btn-change">
                    تغییر قیمت
                  </button>
                </label>
              </form>
              <div>
                <p>{`شروع قیمت از ${price} تومان`}</p>
              </div>
              <div className="d-flex-in js-c fd-c">
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
              <img
                src="/images/vip 4/vip 1.jpeg"
                alt="First picture of vip 4"
              />
            </div>
            <div>
              <img
                src="/images/vip 4/vip 2.jpeg"
                alt="Second Picture of vip 4"
              />
            </div>
          </Carousel>
          <div className="d-none-imgs">
            <img src="/images/vip 4/vip 1.jpeg" alt="Images" />
            <img src="/images/vip 4/vip 2.jpeg" alt="images" />
          </div>
          <DatePicker title={title} price={price} />
        </section>
      </section>
      <Footer />
    </>
  );
};
export default Vip4;
