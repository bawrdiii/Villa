import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalDynamic = ({
  show,
  onClick,
  title,
  type,
  onChange,
  value,
  placeholder,
  Closer,
  id,
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
          <h2 className="modal-h2">{title}</h2>

          <input
            type={type}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            className="input-dynamic"
          />
          <small className="error-message d-block my op-0" id={id}></small>
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
export default ModalDynamic;
