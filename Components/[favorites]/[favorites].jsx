import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
import MyImage from "../../public/images/Logo/Mainlogo.jpg";
const Favorites = () => {
  return (
    <>
      <div className="container-fav">
        <h1>پر طرفدار ترین ویلا ها</h1>
        <div className="favorites">
          <Link href="/vips">
            <a>
              <figure className="figure">
                <Image src={MyImage} alt="" width="350px" height="300px" />
                <figcaption>ویلاهای مجلل در فرح اباد ساری</figcaption>
              </figure>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Favorites;
