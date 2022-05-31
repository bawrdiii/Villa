import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const ModalPassword = ({
  show,
  onClick,
  onChange,
  onChange1,
  onChange2,
  value,
  value1,
  value2,
  Closer,
  id,
  id1,
  id2,
}) => {
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
          <div className="Close">
            <FontAwesomeIcon icon={faX} className="fs-2" onClick={onClick} />
          </div>
          <h2 className="modal-h2">تغییر رمز عبور</h2>
          <div>
            <input
              type="password"
              onChange={onChange}
              value={value}
              className="input-dynamic my-1"
              placeholder="رمز عبور فعلی را وارد کنید"
              id={id}
            />
            <small className="d-block error-message"></small>
          </div>
          <div>
            <input
              type="password"
              onChange={onChange1}
              value={value1}
              placeholder="رمز عبور جدید را وارد کنید"
              className="input-dynamic my-1"
              id={id1}
            />
            <small className="d-block error-message"></small>
          </div>
          <div>
            <input
              type="password"
              onChange={onChange2}
              value={value2}
              placeholder="تکرار رمز عبور جدید را وارد کنید"
              className="input-dynamic my-1"
              id={id2}
            />
            <small className="d-block error-message"></small>
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
export default ModalPassword;
