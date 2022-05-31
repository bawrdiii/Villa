import Navbar from "../../Components/navbar/navbars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faLock,
  faEyeSlash,
  faEye,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "../../Components/footer/footer";
import GoogleLogin from "react-google-login";
const Login = () => {
  const route = useRouter();
  const [inputName, setInputName] = useState("");
  const [inputPass, setInputPass] = useState("");
  const [loginFail, setLoginFail] = useState(false);

  const getinputValue = (e) => {
    setInputName(e.target.value);
  };
  const getPassValue = (e) => {
    setInputPass(e.target.value);
  };

  async function logIn() {
    const data = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password: inputPass,
        phoneNumber: inputName,
      }),
      redirect: "follow",
    };
    console.log(data);
    var response = await fetch(
      "https://bsite.net/aradshamsi26/api/account/login",
      data
    );

    if (response.status == 200) {
      const resData = await response.json();
      const token = resData.data.token;
      localStorage.setItem("Authorization", `Bearer ${token.toString()}`);
      route.push("/");
    }
    if (response.status == 400) {
      setLoginFail(true);
    }
  }
  useEffect(() => {
    if (localStorage.getItem("Authorization")) {
      route.push("/user");
    }
  });
  async function GoogleOk(res) {
    //   setLoginFail(false);
    //   const data = JSON.stringify({
    //     userName: res.profileObj.email("@", 1)[0],
    //     password: "123456",
    //   });
    //   var result = await axios.post(
    //     "https://bsite.net/aradshamsi26/api/account/login",
    //     data
    //   );
    //   if (result.status == 200) {
    //     localStorage.setItem("token", result.data.token);
    //     localStorage.setItem("sub", result.data.current_subscription);
    //     if (route.route == "/") {
    //       route.reload();
    //     } else route.push("/");
    //   } else {
    //     setLoginFail(true);
    //   }
    // }

    console.log(res);
  }

  function GoogleFail() {
    // setLoginFail(true);
    console.log("mioo");
  }

  useEffect(() => {
    const input = document.getElementById("password");
    const eyeslash = document.getElementById("eyeslash");
    const eye = document.getElementById("eye");
    eyeslash.addEventListener("click", () => {
      input.removeAttribute("type");
      input.setAttribute("type", "text");
      eyeslash.classList.remove("d-block");
      eyeslash.classList.add("d-none");
      eye.classList.remove("d-none");
      eye.classList.add("d-block");
    });
    eye.addEventListener("click", () => {
      input.removeAttribute("type");
      input.setAttribute("type", "password");
      eye.classList.remove("d-block");
      eye.classList.add("d-none");
      eyeslash.classList.remove("d-none");
      eyeslash.classList.add("d-block");
    });
  }, []);

  return (
    <section>
      <Navbar />
      <section className="login-container">
        <h3>ورود</h3>

        <form id="form">
          <label className="for-input">
            <FontAwesomeIcon icon={faPhone} />
            <input
              type="text"
              name="phone number"
              autoComplete="off"
              placeholder="شماره تلفن "
              autoSave="on"
              value={inputName}
              onChange={getinputValue}
              id="username"
            />
          </label>
          <label className="for-input d-flex">
            <FontAwesomeIcon icon={faLock} />
            <input
              id="password"
              type="password"
              name="password"
              autoComplete="off"
              placeholder="رمز عبور"
              autoSave="on"
              value={inputPass}
              onChange={getPassValue}
            />
            <FontAwesomeIcon
              icon={faEyeSlash}
              className="margin-right-min d-block"
              id="eyeslash"
            />
            <FontAwesomeIcon
              icon={faEye}
              id="eye"
              className="margin-right-min d-none"
            />
          </label>
          {loginFail ? (
            <p className="fail">نام کاربری یا رمز عبور اشتباه است</p>
          ) : null}
          <div className="forGoogle">
            <GoogleLogin
              className="w-100"
              clientId="191100241151-t0pcu1cr5o50im16vc1odg3h2iu4bpgo.apps.googleusercontent.com"
              buttonText="ورود باگوگل"
              onSuccess={GoogleOk}
              onFailure={GoogleFail}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </form>
        <div className="d-block">
          <Link href="/forgot">
            <a className="for-forgot">فراموشی رمز عبور</a>
          </Link>
        </div>
        <div className="text-center">
          <button className="btn-auth" type="submit" onClick={logIn}>
            ورود
          </button>
          <p>
            برای اولین بار سر میزنید؟
            <span className="hover">
              <Link href="/signup">
                <a> ثبت نام کنید</a>
              </Link>
            </span>
          </p>
        </div>
      </section>
    </section>
  );
};
export default Login;
