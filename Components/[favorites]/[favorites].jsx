import Link from "next/link";
const Favorites = () => {
  return (
    <>
      <div className="container-fav">
        <h1>پر طرفدار ترین ویلا ها</h1>
        <div className="favorites">
          <Link href="/vip1"><a>
            <figure className="figure">
              <img src="/images/vip 1/vip 1.jpeg" alt="The main Pic" />
              <figcaption>Vip 1 </figcaption>
            </figure>
          </a></Link>

          <Link href="/vip2"><a>

            <figure className="figure">
              <img src="/images/vip 2/vip 1.jpeg" alt="The main Pic" />
              <figcaption>Vip 2 </figcaption>
            </figure>
          </a></Link>

          <Link href="vip3"><a>

            <figure className="figure">
              <img src="/images/vip 3/vip 3.jpeg" alt="The main Pic" />
              <figcaption>Vip 3 </figcaption>
            </figure>
          </a></Link>

          <Link href="vip4"><a>

            <figure className="figure">
              <img src="/images/vip 4/vip 1.jpeg" alt="The main Pic" />
              <figcaption>Vip 4 </figcaption>
            </figure>
          </a></Link>

          <Link href="vip5"><a>

            <figure className="figure">
              <img src="/images/vip 5/vip 1.jpeg" alt="The main Pic" />
              <figcaption>Vip 5 </figcaption>
            </figure>
          </a></Link>
        </div>
      </div>
    </>
  );
};
export default Favorites;
