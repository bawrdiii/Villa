import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <>
      <div className="container-nav">
        <div className="dflex-nav">
          <ul className="uls">
            <li>
              <Link href="/"><a>خانه</a></Link>
            </li>
            <Link href="/signup"><a><FontAwesomeIcon icon={faUser} className="icon" /></a></Link>
            <li>
              <Link href="/signup"><a>ورود/ثبت نام</a></Link>
            </li>
            <li>
              <Link href="/rules"><a>قوانین سایت</a></Link>
            </li>
          </ul>
          <Link href="/"><a>
              <img
                src="/images/Logo/Logo.png"
                alt="Logo Image"
                className="logoimage"
              />
            </a></Link>
        </div>
      </div>
    </>
  );
};
export default Navbar;
