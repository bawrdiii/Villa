import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Image from "next/image";
import My from "../../public/images/Logo/Logo.PNG";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("Authorization")) {
      setIsLoggedIn(true);
    }
  }, []);
  useEffect(() => {
    const hamburger = document.getElementById("hamburger");
    const uls = document.getElementById("uls");
    const container = document.getElementById("con-nav");
    const afterHam = document.getElementById("ham");
    const icon = document.getElementById("icon");

    hamburger.addEventListener("click", () => {
      container.style.height = "235px";
      container.style.transition = "0.7s all";
      uls.style.display = "flex";
      uls.style.flexDirection = "column";
      if (icon) {
        icon.style.display = "none";
      }
      hamburger.style.display = "none";
      afterHam.style.display = "block";
    });

    afterHam.addEventListener("click", () => {
      container.style.height = "72px";
      uls.style.display = "none";
      hamburger.style.display = "block";
      afterHam.style.display = "none";
    });
  });

  return (
    <>
      <div className="container-nav" id="con-nav">
        <div className="dflex-nav">
          <div className="p-1">
            <div className="hamburger" id="hamburger">
              <FontAwesomeIcon icon={faBars} />
            </div>
            <FontAwesomeIcon
              icon={faBarsStaggered}
              className="afterHamburger"
              id="ham"
            />

            <ul className="uls" id="uls">
              <li>
                <Link href="/">
                  <a>خانه</a>
                </Link>
              </li>
              {isLoggedIn ? (
                <li>
                  <Link href="/user">
                    <a>حساب کاربری</a>
                  </Link>
                </li>
              ) : (
                <li>
                  <Link href="/login">
                    <a>
                      <FontAwesomeIcon
                        icon={faUser}
                        className="icon"
                        id="icon"
                      />
                      ورود/ثبت نام
                    </a>
                  </Link>
                </li>
              )}

              <li>
                <Link href="/host">
                  <a>درخواست میزبانی</a>
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/">
            <a className="logoimage">
              <Image src={My} width="100px" height="100px" alt="Logo image" />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Navbar;
