import Navbar from "../../Components/navbar/navbars";

import Footer from "../../Components/footer/footer";

import DatePicker from "../../Components/DatePicker/datepicker";

import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import axios from "axios";

const Id = () => {
  const [title, setTitle] = useState("");

  const [price, setPrice] = useState("");

  const [img, setImg] = useState("");

  const [des, setDes] = useState("");

  const [area, setArea] = useState("");
  const [address, setAddress] = useState("");
  //   const [products, setProducts] = useState([]);

  const route = useRouter();
  //   async function Products() {
  useEffect(async () => {
    if (!route.isReady) return;

    await axios
      .get(
        `https://bsite.net/aradshamsi26/api/Estate/GetEstateDetail?code=${route.query.id}`
      )
      .then((res) => {
        console.log(res.data.data.estate);
        // const forArray = Object.values(res.data.data.estate);
        const forArray = res.data.data.estate;
        console.log(forArray);
        setTitle(forArray.title);
        setPrice(forArray.price);
        setImg(forArray.image);
        setDes(forArray.description);
        setArea(forArray.area);
        setAddress(forArray.address);
      });
  }, [route.isReady]);
  //   };
  return (
    <>
      <Navbar />
      <section className="forvips">
        <h3>اجاره ی ویلای {title} </h3>
        <section className="d-grid-vips">
          <div>
            <div className="d-flex-k">
              <div className="d-flex-calendar">
                <div>
                  <p>شروع قیمت از {price} تومان </p>
                </div>
                <div>
                  <p className="description">
                    <span className="color-bl mx-1">ویژگی:</span>
                    {des}
                  </p>
                </div>
              </div>
              <div className="properties">
                <strong>{`متراژ: ${area} متر`} </strong>
                <strong>{`آدرس کلی: ${address}`}</strong>
              </div>

              <div className="d-flex-in js-c fd-c">
                <label className="mr-1">تعداد نفرات را انتخاب کنید</label>
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
              <img src={`https://bsite.net/aradshamsi26/${img}`} alt="" />
            </div>
          </Carousel>
          <DatePicker title={title} price={price} />
        </section>
      </section>
      <Footer />
    </>
  );
};
export default Id;
