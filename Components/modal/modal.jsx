const Modal = ({ show, click }) => {
  return (
    <>
      <div
        className="modal"
        style={{
          transform: show ? "translateY(0)" : "translateY(-100vh)",
          opacity: show ? "1" : "0",
        }}
      >
        <div className="modal-style">
          <h2>درخواست شما با موفقیت ثبت شد</h2>
          <p>جواب درخواست شما تا چند روز آینده به شما اطلاع داده خواهد شد</p>
          <button className="btn btn-close" onClick={click}>
            باشه
          </button>
        </div>
      </div>
    </>
  );
};
export default Modal;
