import Navbar from "../../Components/navbar/navbars";
import Footer from "../../Components/footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { faEdit, faUserLarge } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import ModalDynamic from "../../Components/modal/modaldynamic";
import Modal from "../../Components/modal/modalforsex";
import ModalPassword from "../../Components/modal/changepassword";

const User = () => {
  const [file, setFile] = useState("");

  const [firstLastName, setFirstLastName] = useState(`بردیا شهنازی`);
  const [phoneNumber, setPhoneNumber] = useState("09120723937");
  const [city, setCity] = useState(`ساری`);
  const [state, setState] = useState(`مازندران`);
  const [national] = useState(`2080918249`);
  const [email, setEmail] = useState(`Bardiabarbod@live.com`);
  const [sex, setSex] = useState(`مرد`);

  const [flNameShow, setflNameShow] = useState(false);
  const [sexShow, setSexShow] = useState(false);
  const [numberShow, setNumberShow] = useState(false);
  const [cityShow, setCityShow] = useState(false);
  const [stateShow, setStateShow] = useState(false);
  const [emailShow, setEmailShow] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);

  const [newName, setNewName] = useState("");
  const valueOfNewName = (e) => setNewName(e.target.value);
  const [newNumber, setNewNumber] = useState("");
  const valueOfnewNumber = (e) => setNewNumber(e.target.value);
  const [newCity, setNewCity] = useState("");
  const valueOfnewCity = (e) => setNewCity(e.target.value);
  const [newState, setNewState] = useState("");
  const valueOfnewState = (e) => setNewState(e.target.value);
  const [newEmail, setNewEmail] = useState("");
  const valueOfnewEmail = (e) => setNewEmail(e.target.value);
  const [newSex, setNewSex] = useState("");
  const valueOfnewSex = (e) => setNewSex(e.target.value);

  const [oldPass, setOldPass] = useState("");
  const valueOfOldPass = (e) => setOldPass(e.target.value);
  const [newPass, setNewPass] = useState("");
  const valueOfNewPass = (e) => setNewPass(e.target.value);
  const [newRePass, setNewRePass] = useState("");
  const valueOfNewRePass = (e) => setNewRePass(e.target.value);

  const DynamicOldPass = `123456`;

  const route = useRouter();

  const checkImage = () => {
    var hidden = document.getElementById("shown");
    var hiddenr = document.getElementById("user-container");
    var image = document.getElementById("profile-picture");
    var btn = document.getElementById("btn-submit");
    // change btn submit to btn edit
    var btnPrimary = document.getElementById("btn-edit");
    if (image) {
      hidden.classList.add("d-none");
      var div = document.createElement("div");
      div.innerText = `با موفقیت ثبت شد`;
      div.classList = `successful`;
      hiddenr.appendChild(div);
      btnPrimary.classList.remove("d-none");
      btn.classList.add("d-none");

      setTimeout(() => {
        div.remove();
      }, 5000);
    }
  };

  useEffect(() => {
    // if (!localStorage.getItem("Authorization")) {
    //   route.push("/login");
    // } else {
    var div = document.getElementById("user-image");
    var btn = document.getElementById("btn-container");
    var btnSecondary = document.getElementById("btn-submit");
    var btnPrimary = document.getElementById("btn-edit");
    if (localStorage.getItem("userPic")) {
      if (document.getElementById("shown")) {
        document.getElementById("shown").remove();
        var image = document.createElement("img");
        btnSecondary.classList.add("d-none");
        btnPrimary.classList.remove("d-none");
        image.src = `data:image/png;base64,${localStorage.getItem("userPic")}`;
        image.classList = `profile-picture`;
        div.insertBefore(image, btn);
      }
      // }
    }
  }, []);

  const editProfile = () => {
    var img = document.getElementById("profile-picture");
  };

  const CloseNameHandler = () => {
    setflNameShow(false);
    if (newName !== "") {
      setFirstLastName(newName);
    } else {
      setNewName("");
    }
  };

  const sexCloser = () => {
    setSexShow(false);
    if (newSex === "male") {
      setSex("مرد");
    }
    if (newSex === "female") {
      setSex("زن");
    }
  };

  const closePhoneHandler = () => {
    const small = document.getElementById("telephone");
    if (newNumber.trim().length !== 11) {
      small.classList.add("op-1");
      small.innerText = `شماره تلفن را درست وارد کنید`;
    } else if (newNumber.trim().length === 11) {
      setNumberShow(false);
      setPhoneNumber(newNumber);

      small.innerText = "";
      small.classList.remove("op-1");
    } else {
      setNewNumber("");
    }
  };

  const cityCloseHandler = () => {
    if (newCity !== "") {
      setCityShow(false);
      setCity(newCity);
    } else {
      setNewCity("");
    }
  };

  const stateCloseHandler = () => {
    if (newState !== "") {
      setStateShow(false);
      setState(newState);
    } else {
      setNewState("");
    }
  };

  const emailCloseHandler = () => {
    if (newEmail.includes("@")) {
      setEmailShow(false);
      setEmail(newEmail);
    } else if (!newEmail.includes("@")) {
      const small = document.getElementById("emailChecker");
      small.classList.add("op-1");
      small.innerText = `ایمیل شما صحیح نمی باشد`;
    } else {
      setNewEmail("");
    }
  };

  const closer = () => {
    setSexShow(false);
    setNumberShow(false);
    setflNameShow(false);
    setCityShow(false);
    setStateShow(false);
    setEmailShow(false);
    setShowNewPass(false);
  };

  const editFirsLastName = () => {
    setflNameShow(true);
  };

  const editPhoneNumber = () => {
    setNumberShow(true);
  };

  const editCity = () => {
    setCityShow(true);
  };

  const editState = () => {
    setStateShow(true);
  };

  const editEmail = () => {
    setEmailShow(true);
  };

  const editSex = () => {
    setSexShow(true);
  };

  function handleChange() {
    var file = document.getElementById("userImage").files;
    if (file.length > 0) {
      var fileReader = new FileReader();
      fileReader.onload = function (e) {
        var image = document.createElement("img");
        const base64String = fileReader.result
          .replace("data:", "")
          .replace(/^.+,/, "");

        localStorage.setItem("userPic", base64String);

        image.setAttribute("src", e.target.result);
        image.setAttribute("alt", "Profile Pictue");
        image.classList.add("profile-picture");
        image.id = `profile-picture`;

        var div = document.getElementById("user-image");
        var btn = document.getElementById("btn-container");

        div.insertBefore(image, btn);
      };
      fileReader.readAsDataURL(file[0]);
    }
  }

  const changePassword = () => {
    setShowNewPass(true);
  };

  const setError = (input, message) => {
    const formControl = input.parentElement;
    formControl.classList.add("error");
    formControl.classList.remove("success");
    var str = formControl.querySelector("small");
    str.innerText = message;
  };
  const setSuccess = (input) => {
    const forInput = input.parentElement;
    forInput.querySelector("small").innerText = "";
    forInput.classList.remove("error");
    forInput.classList.add("success");
  };

  const checkPassInputs = () => {
    var currentPassInput = document.getElementById("currentPassInput");
    var newPassInput = document.getElementById("passNewInput");
    var newRePassInput = document.getElementById("newRePassInput");
    if (oldPass === "" && oldPass !== DynamicOldPass) {
      setError(currentPassInput, "رمز عبور وارد شده درست نمی باشد");
    } else {
      setSuccess(currentPassInput);
    }
    if (newPass === "") {
      setError(newPassInput, "پسورد جدید را وارد کنید");
    } else {
      setSuccess(newPassInput);
    }
    if (newRePass === "") {
      setError(newRePassInput, "تکرار رمز عبور را وارد کنید");
    } else if (newRePass !== newPass) {
      setError(newRePassInput, "تکرار رمز عبور وارد شده غلط است");
    } else {
      setSuccess(newRePassInput);
    }
  };
  const CheckChangePass = () => {
    if (checkPassInputs) {
      checkPassInputs();
      setShowNewPass(true);
    } else {
      setShowNewPass(false);
    }
  };
  const LogOutHandler = () => {
    localStorage.clear();
    route.push("/");
  };
  return (
    <>
      <Navbar />
      <ModalDynamic
        title="ویرایش نام و نام خانوداگی"
        type="text"
        show={flNameShow}
        onChange={valueOfNewName}
        value={newName}
        placeholder={firstLastName}
        Closer={CloseNameHandler}
        onClick={closer}
      />

      <ModalDynamic
        title="ویرایش شماره تماس"
        type="number"
        show={numberShow}
        onChange={valueOfnewNumber}
        value={newNumber}
        placeholder={phoneNumber}
        Closer={closePhoneHandler}
        onClick={closer}
        id="telephone"
      />

      <ModalDynamic
        title="ویرایش شهر"
        type="text"
        show={cityShow}
        placeholder={city}
        value={newCity}
        onChange={valueOfnewCity}
        onClick={closer}
        Closer={cityCloseHandler}
      />

      <ModalDynamic
        title="ویرایش ادرس ایمیل"
        type="email"
        show={emailShow}
        value={newEmail}
        placeholder={email}
        onChange={valueOfnewEmail}
        Closer={emailCloseHandler}
        onClick={closer}
        id="emailChecker"
      />
      <ModalDynamic
        title="ویرایش استان"
        type="text"
        show={stateShow}
        placeholder={state}
        value={newState}
        onChange={valueOfnewState}
        onClick={closer}
        Closer={stateCloseHandler}
      />

      <Modal
        onChange={valueOfnewSex}
        show={sexShow}
        Closer={sexCloser}
        onClick={closer}
      />

      <ModalPassword
        show={showNewPass}
        onClick={closer}
        onChange={valueOfOldPass}
        onChange1={valueOfNewPass}
        onChange2={valueOfNewRePass}
        value={oldPass}
        value1={newPass}
        value2={newRePass}
        Closer={CheckChangePass}
        id="currentPassInput"
        id1="passNewInput"
        id2="newRePassInput"
      />

      <section className="user-container" id="user-container">
        <div className="user-image" id="user-image">
          <div id="shown">
            <label htmlFor="userImage" className="profile-label">
              <FontAwesomeIcon icon={faUserLarge} className="icon" />
              اضافه کردن عکس پروفایل
            </label>
            <input
              type="file"
              name="profile picture"
              id="userImage"
              accept="image/*"
              className="file"
              value={file}
              onChange={handleChange}
            />
          </div>
          <div id="btn-container">
            <button
              className="btn btn-check"
              type="submit"
              id="btn-submit"
              onClick={checkImage}
            >
              ثبت
            </button>
            <button
              type="submit"
              onClick={editProfile}
              className="btn btn-edit p-1-2 d-none"
              id="btn-edit"
            >
              ویرایش
            </button>
          </div>
        </div>
      </section>
      <section className="container-user">
        <h3>اطلاعات کاربر</h3>
        <div className="mt-1-x-auto d-grid cl-3 gap-1">
          <div className="m-2 b-bt information shadow mx-w">
            <strong>نام و نام خانوادگی</strong>
            <div className="d-flex-dir-r">
              <p>{firstLastName}</p>
              <i>
                <FontAwesomeIcon icon={faEdit} onClick={editFirsLastName} />
              </i>
            </div>
          </div>
          <div className="m-2 b-bt information mx-w shadow">
            <strong>کد ملی</strong>
            <div className="d-flex-dir-r">
              <p>{national}</p>
              <i></i>
            </div>
          </div>
          <div className="m-2 b-bt information mx-w shadow">
            <strong>شماره تماس</strong>
            <div className="d-flex-dir-r">
              <p>{phoneNumber}</p>
              <i>
                <FontAwesomeIcon icon={faEdit} onClick={editPhoneNumber} />
              </i>
            </div>
          </div>
          <div className="m-2 b-bt information mx-w shadow">
            <strong>شهر</strong>
            <div className="d-flex-dir-r">
              <p>{city}</p>
              <i>
                <FontAwesomeIcon icon={faEdit} onClick={editCity} />
              </i>
            </div>
          </div>
          <div className="m-2 b-bt information mx-w  shadow">
            <strong>استان</strong>
            <div className="d-flex-dir-r">
              <p>{state}</p>
              <i>
                <FontAwesomeIcon icon={faEdit} onClick={editState} />
              </i>
            </div>
          </div>
          <div className="m-2 b-bt information mx-w shadow">
            <strong>ایمیل</strong>
            <div className="d-flex-dir-r">
              <p>{email}</p>
              <i>
                <FontAwesomeIcon icon={faEdit} onClick={editEmail} />
              </i>
            </div>
          </div>
          <div className="m-2 b-bt information mx-w shadow">
            <strong>جنسیت</strong>
            <div className="d-flex-dir-r">
              <p>{sex}</p>
              <i>
                <FontAwesomeIcon icon={faEdit} onClick={editSex} />
              </i>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center">
        <button
          type="button"
          className="btn btn-logout"
          onClick={LogOutHandler}
        >
          خروج از حساب کاربری
        </button>
        <button type="button" className="btn btn-edit" onClick={changePassword}>
          تغییر رمز عبور
        </button>
      </div>
      <Footer />
    </>
  );
};
export default User;
