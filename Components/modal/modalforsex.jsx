import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalSex = ({ show, onClick, onChange, Closer }) => {
  return (
    <>
      <div
        className="modal"
        style={{
          transform: show ? "translateY(0)" : "translateY(-100vh)",
          opacity: show ? "1" : "0",
        }}
      >
        <div className="modalStyle">
          <h2 className="modal-h2">تغییر جنسیت</h2>

          <FontAwesomeIcon icon={faX} className="iconClose" onClick={onClick} />
          <div className="d-flex al-c js-c">
            <label htmlFor="male">مرد</label>
            <input
              name="sex"
              type="radio"
              onChange={onChange}
              value="male"
              className="input-sex"
              id="male"
            />
          </div>
          <div className="d-flex al-c js-c">
            <label htmlFor="female">زن</label>
            <input
              type="radio"
              onChange={onChange}
              value="female"
              name="sex"
              id="female"
            />
          </div>
          <div>
            <button className="btn btnClose" type="button" onClick={Closer}>
              ذخیره
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModalSex;
