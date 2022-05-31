import Link from "next/link";
import Navbar from "../../Components/navbar/navbars";
import Footer from "../../Components/footer/footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { BarLoader } from "react-spinner-animated";
const Vips = () => {
  const [products, setProducts] = useState([]);

  const route = useRouter();

  useEffect(async () => {
    await axios
      .get(
        "https://bsite.net/aradshamsi26/api/Estate/getall?pageNumber=1&pageCount=10"
      )
      .then((res) => {
        console.log(res);

        setProducts(res.data.data.list);
      });
  }, []);
  return (
    <>
      {products.length !== 0 ? (
        <BarLoader text="در حال لود اطلاعات" center="true" />
      ) : (
        <div>
          <Navbar />

          <section className="container-fav">
            <h2 className="h2-title">اجاره ی ویلا های مجلل سرای آرامش</h2>
            <div className="favorites">
              <Link href="/vip1">
                <a>
                  <figure className="figure">
                    <img src="/images/vip 1/vip 1.jpeg" alt="The main Pic" />
                    <figcaption>Vip 1</figcaption>
                  </figure>
                </a>
              </Link>

              <Link href="/vip2">
                <a>
                  <figure className="figure">
                    <img src="/images/vip 2/vip 1.jpeg" alt="The main Pic" />
                    <figcaption>Vip 2 </figcaption>
                  </figure>
                </a>
              </Link>

              <Link href="/vip3">
                <a>
                  <figure className="figure">
                    <img src="/images/vip 3/vip 3.jpeg" alt="The main Pic" />
                    <figcaption>Vip 3 </figcaption>
                  </figure>
                </a>
              </Link>

              <Link href="/vip4">
                <a>
                  <figure className="figure">
                    <img src="/images/vip 4/vip 1.jpeg" alt="The main Pic" />
                    <figcaption>Vip 4 </figcaption>
                  </figure>
                </a>
              </Link>

              <Link href="/vip5">
                <a>
                  <figure className="figure">
                    <img src="/images/vip 5/vip 3.jpeg" alt="The main Pic" />

                    <figcaption>Vip 5 </figcaption>
                  </figure>
                </a>
              </Link>
              {products.map((item) => {
                return (
                  <Link
                    key={item.code}
                    href="/vips/[id]"
                    as={`vips/${item.code}`}
                  >
                    <a>
                      <figure className="figure">
                        <img
                          src={`https://bsite.net/aradshamsi26/${item.image}`}
                          alt=""
                        />
                        <figcaption>{item.title}</figcaption>
                      </figure>
                    </a>
                  </Link>
                );
              })}
            </div>
          </section>

          <Footer />
        </div>
      )}
    </>
  );
};
export default Vips;
