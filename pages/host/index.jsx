import axios from "axios";

import React, { useEffect, useState } from "react";

import Navbar from "../../Components/navbar/navbars";

import { BarLoader } from "react-spinner-animated";

import Link from "next/link";

import Resume from "../../Components/resume/resume";

import { useRouter } from "next/router";

const Host = () => {
  const route = useRouter();

  const [province, setProvince] = useState([]);
  const [cities, setCities] = useState([]);
  const [item, setItem] = useState("");
  const [entery, setEntery] = useState("");
  const [cityValue, setCityValue] = useState("");
  const [file, setFile] = useState("");
  const [about, setAbout] = useState("");
  const [resume, setResume] = useState(false);
  const [files, setFiles] = useState([]);

  // resume States

  const [area, setArea] = useState(" متر ");
  const [container, setContainer] = useState("");
  const [properties, setProperties] = useState("");
  const [checkOut, setChechkout] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [price, setPrice] = useState("");
  const [rules, setRules] = useState("");
  const [cancelRules, setCancelRules] = useState("");
  const [safety, setSafety] = useState("");

  // End resume States

  // Values of resume states
  const getAreaValue = (e) => {
    setArea(e.target.value);
  };
  const getContainerValue = (e) => {
    setContainer(e.target.value);
  };
  const getPropertiesValue = (e) => {
    setProperties(e.target.value);
  };
  const getCheckOutValue = (e) => {
    setChechkout(e.target.value);
  };
  const getCheckInValue = (e) => {
    setCheckIn(e.target.value);
  };
  const getPriceValue = (e) => {
    setPrice(e.target.value);
  };
  const getRulesValue = (e) => {
    setRules(e.target.value);
  };
  const getCancelRulesValue = (e) => {
    setCancelRules(e.target.value);
  };
  const getSafetyValue = (e) => {
    setSafety(e.target.value);
  };

  // End of resume states

  async function loadProvince() {
    await axios
      .get("https://bsite.net/aradshamsi26/api/account/provinces")
      .then((res) => {
        setProvince(res.data.data);
      });
  }
  const getEntery = (e) => {
    setEntery(e.target.value);
  };
  const getAbout = (e) => {
    setAbout(e.target.value);
  };

  function deleteHandler(target) {
    var deleter = target.target.parentElement.parentElement;
    if (deleter.classList.contains("p-relative") === true) {
      deleter.remove();
    } else {
      deleter.parentElement.remove();
    }
  }
  const visibler = () => {
    document.getElementById("continue").style.opacity = "1";
  };

  var base64String;

  function handleChange(e) {
    var file = document.getElementById("forfile").files;
    if (file.length > 0) {
      var fileReader = new FileReader();
      fileReader.onload = function (e) {
        var image = document.createElement("img");
        image.setAttribute("src", e.target.result);

        base64String = fileReader.result
          .replace("data:", "")
          .replace(/^.+,/, "");
        files.push(e.target.result);
        var section = document.getElementById("imagecontainer");
        var newDiv = document.createElement("div");
        newDiv.classList = `p-relative`;

        var i = document.createElement("i");
        i.innerHTML = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" class="svg-inline--fa fa-trash " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"></path></svg>`;
        i.classList = `delete`;
        i.addEventListener("click", deleteHandler);

        newDiv.appendChild(image);
        newDiv.appendChild(i);
        var btn = document.getElementById("continue");
        section.insertBefore(newDiv, btn);
      };
      fileReader.readAsDataURL(file[0]);
    }
  }

  console.log(files);
  console.log(item);

  const request = async () => {
    check();
    var MyHeader = new Headers();
    MyHeader.append("Authorization", localStorage.getItem("Authorization"));
    var formData = new FormData();
    formData.append("city", cityValue);
    formData.append("province", item);
    formData.append("address", entery);
    formData.append("aboutEstate", about);
    for (let i = 0; i < files.length; i++) {
      `Images[${i}].File = ${files[i]}`;
      formData.append(`Images[${i}].files`, files[i]);
    }
    var reqOption = {
      method: "POST",
      headers: MyHeader,
      body: formData,
      redirect: "follow",
    };

    await fetch(
      "https://bsite.net/aradshamsi26/api/Estate/RequestCreateNewEstateFirstLevel",
      reqOption
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          const host = document.getElementById("container-host");
          const label = document.getElementById("forafter");
          const msg = document.getElementById("message");
          const container = document.getElementById("imagecontainer");

          if (container && container.childElementCount > 5) {
            msg.classList.remove("message-error");
            msg.innerText = "";
            host.classList.add("op-0");
            host.classList.add("w-h-0");
            label.classList.add("op-0");
            label.classList.add("w-h-0");
            container.classList.add("after");
            setResume(true);
          }
        } else {
          setResume(false);
        }
      });
  };

  const check = () => {
    if (container && container.childElementCount <= 5) {
      msg.classList.add("message-error");
      msg.innerText = `حداقل 5 عکس نیاز است`;
    }
  };

  useEffect(() => {
    loadProvince();
  }, []);

  useEffect(() => {
    const mainSection = document.getElementById("mainSection");
    if (!localStorage.getItem("Authorization") && mainSection) {
      mainSection.classList = `w-h-0`;
    }
  });
  async function Loader() {
    await axios
      .get(
        `https://bsite.net/aradshamsi26/api/account/Cities?provinceName=${item}`
      )
      .then((res) => {
        setCities(res.data.data);
      });
  }
  function checker(e) {
    e.preventDefault();
    const label = document.getElementById("labelfile");
    if (entery === "" && item === "" && about === "" && cityValue === "") {
      return;
    }
    if (entery !== "" && item !== "" && about !== "" && cityValue !== "") {
      label.classList.add("label-file-after");
    }
  }

  return (
    <>
      {province.length === 0 ? (
        <BarLoader text="در حال لود اطلاعات" center="true" />
      ) : (
        <div>
          <Navbar />
          <div className="host-alert" id="host-alert">
            <div>
              برای میزبان شدن نیاز است که گزینه میزبان هستم را هنگام ثبت نام
              فعال کنید یا در صفحه{" "}
              <Link href="/user">
                <a className="user-a">حساب کاربری</a>
              </Link>{" "}
              آنرا به میزبان تغییر دهید
            </div>
          </div>
          <section id="mainSection">
            <section className="container-host" id="container-host">
              <h2>میزبان گرامی</h2>
              <strong>
                جهت میزبانی فیلد پایین را پر کرده و درخواست را ارسال نمایید
              </strong>
              <form className="for-host">
                <div className="d-flex-in js-center">
                  <label htmlFor="province1">انتخاب استان</label>
                  <select
                    name="province"
                    id="province1"
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                    onClick={Loader}
                  >
                    <option value="choose">انتخاب کنید</option>
                    {province.map((item) => {
                      return (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="d-flex-in js-center">
                  <label>انتخاب شهر</label>
                  <select
                    name="cities"
                    value={cityValue}
                    onChange={(e) => setCityValue(e.target.value)}
                    id="cities"
                  >
                    <option value="choose">انتخاب کنید</option>
                    {cities.map((item) => {
                      return (
                        <option
                          value={item}
                          onChange={(e) => (item = e.target.value)}
                          key={item}
                        >
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="d-flex-in js-center">
                  <label htmlFor="textarea">آدرس را وارد کنید</label>
                  <textarea
                    name="address"
                    id="textarea"
                    rows="5"
                    className="textarea"
                    value={entery}
                    onChange={getEntery}
                  ></textarea>
                </div>
                <div className="d-flex-in js-center">
                  <label htmlFor="textarea1">درباره ی اقامت گاه</label>
                  <textarea
                    name="about"
                    id="textarea1"
                    rows="5"
                    className="textarea"
                    value={about}
                    onChange={getAbout}
                  ></textarea>
                </div>
                <div className="text-center">
                  <button className="btn btnchecker" onClick={checker}>
                    بعدی
                  </button>
                </div>
              </form>
            </section>
            <section id="forafter">
              <label
                htmlFor="forfile"
                className="w100 h-100 label-file"
                id="labelfile"
                onClick={visibler}
              >
                تصویر را اضافه کنید
                <small className="hint">حداقل 5 عکس</small>
                <input
                  type="file"
                  name="file"
                  value={file}
                  onChange={(e) => handleChange(e.target.value)}
                  id="forfile"
                  multiple
                  className="file"
                  accept="image/png, image/jpg,image/jpeg"
                />
              </label>
            </section>
            <section className="images-container" id="imagecontainer">
              <div id="continue" className="continue col-c">
                <button
                  className="btn btn-continue"
                  type="button"
                  onClick={request}
                >
                  ادامه
                </button>
              </div>
            </section>
            <div className="message" id="message"></div>
          </section>
          {resume ? (
            <Resume
              area={area}
              getAreaValue={getAreaValue}
              container={container}
              getContainerValue={getContainerValue}
              properties={properties}
              getPropertiesValue={getPropertiesValue}
              checkIn={checkIn}
              getCheckInValue={getCheckInValue}
              checkOut={checkOut}
              getCheckOutValue={getCheckOutValue}
              price={price}
              getPriceValue={getPriceValue}
              rules={rules}
              getRulesValue={getRulesValue}
              cancelRules={cancelRules}
              getCancelRulesValue={getCancelRulesValue}
              safety={safety}
              getSafetyValue={getSafetyValue}
            />
          ) : null}
        </div>
      )}
    </>
  );
};
export default Host;
