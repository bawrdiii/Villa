import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
const Footer = ({ pFixed }) => {
  return (
    <>
      <footer className={`footer ${pFixed}`}>
        <div className="container-footer">
          <div className="for-footer">
            <h4 className="h4-for-footer">دسترسی سریع</h4>
            <ul className="ul-footer">
              <li>
                <Link href="/signup">
                  <a>ثبت نام</a>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <a>ورود</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="for-footer">
            <h4 className="h4-for-footer">میزبان شوید</h4>
            <ul className="ul-footer">
              <li>
                <Link href="/host">
                  <a>درخواست میزبانی</a>
                </Link>
              </li>
              <li>
                <Link href="/siterules">
                  <a>قوانین سایت</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="for-footer">
            <Link href="/">
              <a>
                <h4 className="logo">
                  sarivila<span>.com</span>
                </h4>
              </a>
            </Link>
            <p>
              سایت ساری ویلا در سال 1401 طراحی شد برای رفاه حال میزبانان و
              مهمانان گرامی و روزانه برای پیشرفتش تلاش می کنیم!
            </p>
          </div>
        </div>
        <div className="copyright">
          <p>
            All rights Reserved{" "}
            <span className="icon-footer">
              <FontAwesomeIcon icon={faCopyright} />
            </span>
            2022
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
