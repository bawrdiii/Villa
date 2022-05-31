import { useState } from "react";

import Modal from "../../Components/modal/modal";

const Resume = ({
  area,
  getAreaValue,
  container,
  getContainerValue,
  properties,
  getPropertiesValue,
  checkIn,
  getCheckInValue,
  checkOut,
  getCheckOutValue,
  price,
  getPriceValue,
  rules,
  getRulesValue,
  cancelRules,
  getCancelRulesValue,
  safety,
  getSafetyValue,
}) => {
  const [show, setShow] = useState(false);

  const checkInput = () => {
    const metrazh = document.getElementById("number-m");
    const zarfiat = document.getElementById("num-per");
    const emkanat = document.getElementById("properties");
    const tahvil = document.getElementById("check-in");
    const takhlie = document.getElementById("check-out");
    const ejare = document.getElementById("num-pri");
    const rulesVil = document.getElementById("rules");
    const rulesCancel = document.getElementById("cancel-rules");
    const imeni = document.getElementById("safety");
    if (area.trim() === "متر" || area.trim() === "") {
      setError(metrazh, `فیلد را پر کنید`);
    } else {
      setSuccess(metrazh);
    }
    if (container.trim() === "") {
      setError(zarfiat, `فیلد را پر کنید`);
    } else {
      setSuccess(zarfiat);
    }
    if (properties.trim() === "") {
      setError(emkanat, `فیلد را پر کنید`);
    } else {
      setSuccess(emkanat);
    }
    if (checkIn.trim() === "") {
      setError(tahvil, `فیلد را پر کنید`);
    } else {
      setSuccess(tahvil);
    }
    if (checkOut.trim() === "") {
      setError(takhlie, `فیلد را پر کنید`);
    } else {
      setSuccess(takhlie);
    }
    if (price.trim() === "") {
      setError(ejare, `فیلد را پر کنید`);
    } else {
      setSuccess(ejare);
    }
    if (rules.trim() === "") {
      setError(rulesVil, `فیلد را پر کنید`);
    } else {
      setSuccess(rulesVil);
    }
    if (cancelRules.trim() === "") {
      setError(rulesCancel, `فیلد را پر کنید`);
    } else {
      setSuccess(rulesCancel);
    }
    if (safety.trim() === "") {
      setError(imeni, `فیلد را پر کنید`);
    } else {
      setSuccess(imeni);
    }
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
    forInput.classList.remove("error");
    forInput.querySelector("small").innerText = "";
    forInput.classList.add("success");
  };

  const resumeHandler = () => {

    if (checkInput) {
      checkInput();
      setShow(false);
    }
    if (
      area.trim() &&
      container.trim() &&
      properties.trim() &&
      checkIn.trim() &&
      checkOut.trim() &&
      rules.trim() &&
      cancelRules.trim() &&
      safety.trim() !== ""
    ) {
      setShow(true);
    }
  };

  const closeHandler = () => {
    setShow(false);
  };

  return (
    <>
      <Modal show={show} click={closeHandler} />
      <section className="text-center mt-1">
        <div className="container-resume">
          <div className="d-grid-resume">
            <div className="inputer">
              <label htmlFor="number-m">متراژ اقامتگاه</label>
              <input
                type="tel"
                id="number-m"
                name="number"
                value={area}
                onChange={getAreaValue}
              />
              <small className="err-msg mt" id="strng"></small>
            </div>

            <div className="inputer">
              <label htmlFor="num-per">ظرفیت اقامتگاه</label>
              <input
                type="tel"
                name="number"
                id="num-per"
                value={container}
                placeholder="تعداد افراد"
                onChange={getContainerValue}
              />
              <small className="p-rlt err-msg" id="strng"></small>
            </div>

            <div className="inputer">
              <label htmlFor="properties">امکانات</label>
              <input
                type="text"
                name="properties"
                id="properties"
                value={properties}
                onChange={getPropertiesValue}
              />
              <small className="p-rlt err-msg" id="strng"></small>
            </div>

            <div className="inputer">
              <label htmlFor="check-in">ساعت تحویل</label>
              <input
                type="time"
                id="check-in"
                name="check-in"
                value={checkIn}
                onChange={getCheckInValue}
              />
              <small className="p-rlt err-msg" id="strng"></small>
            </div>

            <div className="inputer">
              <label htmlFor="check-out">ساعت تخلیه</label>
              <input
                type="time"
                name="check-out"
                id="check-out"
                value={checkOut}
                onChange={getCheckOutValue}
              />
              <small className="p-rlt err-msg" id="strng"></small>
            </div>

            <div className="inputer">
              <label htmlFor="num-pri">قیمت اجاره</label>
              <input
                type="tel"
                name="price"
                id="num-pri"
                value={price}
                onChange={getPriceValue}
              />
              <small className="p-rlt err-msg" id="strng"></small>
            </div>
            <div className="inputer">
              <label htmlFor="rules">مقررات اقامتگاه</label>
              <textarea
                name="text"
                id="rules"
                rows="5"
                className="inputer-textarea"
                value={rules}
                onChange={getRulesValue}
              ></textarea>
              <small className="p-rlt err-msg" id="strng"></small>
            </div>

            <div className="inputer">
              <label htmlFor="cancel-rules">مقررات لغو رزرو</label>
              <textarea
                name="text"
                id="cancel-rules"
                rows="5"
                className="inputer-textarea"
                value={cancelRules}
                onChange={getCancelRulesValue}
              ></textarea>
              <small className="p-rlt err-msg" id="strng"></small>
            </div>

            <div className="inputer">
              <label htmlFor="safety">ایمنی</label>
              <textarea
                name="text"
                id="safety"
                rows="5"
                className="inputer-textarea"
                value={safety}
                onChange={getSafetyValue}
              ></textarea>
              <small className="p-rlt err-msg" id="strng"></small>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-resume"
            onClick={resumeHandler}
          >
            ثبت
          </button>
        </div>
      </section>
    </>
  );
};
export default Resume;
