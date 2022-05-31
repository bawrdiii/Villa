import Navbar from "../../Components/navbar/navbars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import axios from "axios";
import GoogleLogin from "react-google-login";
import {
  faCity,
  faLock,
  faEyeSlash,
  faEye,
  faPhone,
  faIdCard,
  faUser,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Footer from "../../Components/footer/footer";
import { useRouter } from "next/router";

const Signup = () => {
  const route = useRouter();

  const [name, setName] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");

  const [inputPass, setInputPass] = useState("");

  const [inputReEnterPass, setReEnterPass] = useState("");

  const [cityInput, setCityInput] = useState("");

  const [inputIdCard, setIdCard] = useState("");

  const [provinceInput, setProvinceInput] = useState("");

  const [isHost, setIsHost] = useState(false);

  const [inputValid, setInputValid] = useState(false);

  async function signUp() {
    checkInputs();
    const option1 = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstLastname: name,
        phoneNumber: phoneNumber,
        password: inputPass,
        confirmPassword: inputReEnterPass,
      }),
      redirect: "follow",
    };
    const option2 = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstLastname: name,
        phoneNumber: phoneNumber,
        password: inputPass,
        confirmPassword: inputReEnterPass,
        province: provinceInput,
        city: cityInput,
        NationalCode: inputIdCard,
      }),
    };
    console.log(option1);
    if (isHost === false) {
      var result = await fetch(
        "https://bsite.net/aradshamsi26/api/account/register?&=",
        option1
      );
    } else
      result = await fetch(
        "https://bsite.net/aradshamsi26/api/account/register?&=",
        option2
      );

    console.log(result);
    if (result.status == 200 && isHost == false) {
      const resData = await result.json();
      const token = resData.data.token;
      localStorage.setItem("Authorization", `Bearer ${token.toString()}`);
      route.push("/");
    }
    if (result.status == 200 && isHost == true) {
      const resData = await result.json();
      const token = resData.data.token;
      localStorage.setItem("Authorization", `Bearer ${token.toString()}`);
      route.push("/host");
    }
  }

  const validHandler = () => {
    const host = document.getElementById("checkbox");
    if (host.checked) {
      setInputValid(true);
    } else {
      setInputValid(false);
    }
  };
  const hostChecker = (e) => {
    const host = document.getElementById("visibleHandler");
    if (host.checked) {
      setIsHost(true);
    } else {
      setIsHost(false);
    }
  };
  const getNameValue = (e) => {
    setName(e.target.value);
  };
  const getPhoneValue = (e) => {
    setPhoneNumber(e.target.value);
  };
  const getPassValue = (e) => {
    setInputPass(e.target.value);
  };

  const getIdValue = (e) => {
    setIdCard(e.target.value);
  };

  const getCityValue = (e) => {
    setCityInput(e.target.value);
  };
  const getReEnterpassValue = (e) => {
    setReEnterPass(e.target.value);
  };

  const getProvinceValue = (e) => {
    setProvinceInput(e.target.value);
  };

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
      eye.classList.add("d-none");
      eye.classList.remove("d-block");
      eyeslash.classList.add("d-block");
      eyeslash.classList.remove("d-none");
    });

    const passinput = document.getElementById("password2");
    const cheshmkhati = document.getElementById("unvisible");
    const cheshm = document.getElementById("visible");
    visible.addEventListener("click", () => {
      passinput.removeAttribute("type");
      passinput.setAttribute("type", "text");
      cheshm.classList.remove("d-block");
      cheshm.classList.add("d-none");
      cheshmkhati.classList.remove("d-none");
      cheshmkhati.classList.add("d-block");
    });
    cheshmkhati.addEventListener("click", () => {
      passinput.removeAttribute("type");
      passinput.setAttribute("type", "password");
      cheshmkhati.classList.remove("d-block");
      cheshmkhati.classList.add("d-none");
      cheshm.classList.remove("d-none");
      cheshm.classList.add("d-block");
    });
  }, []);

  const checkInputs = () => {
    const password = document.getElementById("password");
    const password2 = document.getElementById("password2");
    const phone = document.getElementById("phoneNumber");
    const city = document.getElementById("cityInput");
    const idCard = document.getElementById("idCard");
    const userName = document.getElementById("username");
    const province = document.getElementById("province");
    const checker = document.getElementById("visibleHandler");
    const checkPrimary = document.getElementById("checkbox");

    const passValue = inputPass.trim();
    const pass2Value = inputReEnterPass.trim();
    const phoneValue = phoneNumber.trim();
    const cityValue = cityInput.trim();
    const idCardValue = inputIdCard.trim();
    const userNameValue = name.trim();
    const provinceValue = provinceInput.trim();
    if (!checkPrimary.checked) {
      setError(checkPrimary, "شرایط را مطالعه کنید");
    }
    if (phoneValue.length !== 11) {
      setError(phone, "شماره تلفن را درست وارد کنید");
    } else {
      setSuccess(phone);
    }
    if (passValue === "") {
      setError(password, "رمز عبور را وارد کنید");
    } else {
      setSuccess(password);
    }
    if (pass2Value === "") {
      setError(password2, "تکرار رمز عبور را وارد کنید");
    } else if (passValue !== pass2Value) {
      setError(password2, "رمز عبور اشتباه است");
    } else {
      setSuccess(password2);
    }
    if (userNameValue === "") {
      setError(userName, "نام و نام خانوادگی خود را وارد کنید");
    } else {
      setSuccess(userName);
    }
    if (checker.checked) {
      if (idCardValue === "") {
        setError(idCard, "کد ملی خود را وارد کنید");
      } else {
        setSuccess(idCard);
      }
      if (cityValue === "") {
        setError(city, "شهر خود را وارد کنید");
      } else {
        setSuccess(city);
      }
      if (provinceValue === "") {
        setError(province, "لطفا استان خود را وارد کنید");
      } else {
        setSuccess(province);
      }
    } else null;
  };
  const setError = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.classList.add("error");
    formControl.classList.remove("success");
    small.innerText = message;
  };
  const setSuccess = (input) => {
    const forInput = input.parentElement;
    forInput.classList.remove("error");
    forInput.classList.add("success");
  };

  const hostHandler = () => {
    const city = document.getElementById("city");
    const citizenShip = document.getElementById("citizenship");
    const province = document.getElementById("ostan");
    const changer = document.getElementById("visibleHandler");
    if (changer.checked) {
      city.classList.add("changer");
      province.classList.add("changer");
      citizenShip.classList.add("changer");
    } else {
      city.classList.remove("changer");
      city.classList.add("v-hidden");
      citizenShip.classList.remove("changer");
      citizenShip.classList.add("v-hidden");
      province.classList.add("v-hidden");
      province.classList.remove("changer");
    }
  };

  async function responseGoogle(response) {
    console.log(response);
    const option = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: response.profileObj.email.split("@", 1)[0].toLowerCase(),
      }),
    };
  }

  function failureGoogle() {
    console.log("mioo");
  }

  return (
    <>
      <Navbar />
      <p className="failed" id="failed"></p>
      <div className="signup-container">
        <h3>ثبت نام</h3>

        <div id="form">
          <div className="for-input d-flex-in">
            <label>
              <FontAwesomeIcon icon={faUser} />
            </label>
            <input
              type="text"
              value={name}
              onChange={getNameValue}
              name="name and familyname"
              placeholder="نام و نام خانوادگی"
              id="username"
            />
            <small id="small"></small>
          </div>
          <div id="for-input" className="for-input d-flex-in">
            <label>
              <FontAwesomeIcon icon={faPhone} />
            </label>
            <input
              id="phoneNumber"
              value={phoneNumber}
              onChange={getPhoneValue}
              type="text"
              name="phone number"
              placeholder="شماره تلفن"
            />
            <small id="small"></small>
          </div>
          <div className="for-input d-flex-in" id="for-input">
            <label>
              <FontAwesomeIcon icon={faLock} />
            </label>
            <input
              type="password"
              name="password"
              autoComplete="off"
              placeholder="رمز عبور"
              min="6"
              autoSave="on"
              value={inputPass}
              onChange={getPassValue}
              id="password"
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

            <small id="small"></small>
          </div>

          <div className="for-input d-flex-in" id="for-input">
            <label>
              <FontAwesomeIcon icon={faLock} />
            </label>
            <input
              type="password"
              name="password"
              autoComplete="off"
              placeholder="تکرار رمز عبور"
              min="6"
              autoSave="on"
              value={inputReEnterPass}
              onChange={getReEnterpassValue}
              id="password2"
            />
            <FontAwesomeIcon
              icon={faEyeSlash}
              className="margin-right-min d-block"
              id="visible"
            />
            <FontAwesomeIcon
              icon={faEye}
              id="unvisible"
              className="margin-right-min d-none"
            />
            <small id="small"></small>
          </div>

          <div className="input-auth">
            <input
              type="checkbox"
              className="checkboxinput"
              id="visibleHandler"
              onClick={hostHandler}
              value={isHost}
              onChange={hostChecker}
            />
            <label htmlFor="visibleHandler">میزبان هستم.</label>
          </div>
          <div className="for-input d-flex-in v-hidden" id="city">
            <FontAwesomeIcon icon={faCity} />
            <input
              type="text"
              placeholder="شهر را وارد کنید"
              id="cityInput"
              value={cityInput}
              onChange={getCityValue}
            />
            <small id="noysz"></small>
          </div>
          <div className="for-input d-flex-in v-hidden" id="citizenship">
            <FontAwesomeIcon icon={faIdCard} />
            <input
              type="text"
              name="number"
              placeholder="کد ملی"
              value={inputIdCard}
              id="idCard"
              onChange={getIdValue}
            />
            <small id="noysz"></small>
          </div>
          <div className="for-input d-flex-in v-hidden" id="ostan">
            <FontAwesomeIcon icon={faMapLocationDot} />
            <input
              type="text"
              placeholder="استان خود را وارد کنید"
              id="province"
              value={provinceInput}
              onChange={getProvinceValue}
            />
            <small id="noysz"></small>
          </div>
          <div className="input-auth" id="for-input">
            <input
              type="checkbox"
              value={inputValid}
              onChange={validHandler}
              className="checkboxinput"
              id="checkbox"
            />
            <div>
              <Link href="/siterules">
                <a className="mr">شرایط و مقررات </a>
              </Link>
              را خوانده و پذیرفته ام
            </div>
            <small id="forchecker"></small>
          </div>
          <div className="text-center google-signup mb-1">
            <GoogleLogin
              className="w-100"
              buttonText="ورود با گوگل"
              clientId="415392216563-ku6vlt042ujbubvsjr54ute05ced0l8h.apps.googleusercontent.com"
              onSuccess={responseGoogle}
              onFailure={failureGoogle}
              cookiePolicy="single_host_origin"
              isSignedIn={true}
            />
          </div>
          <div className="text-center">
            <button className="btn-auth" type="submit" onClick={signUp}>
              ثبت نام
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
