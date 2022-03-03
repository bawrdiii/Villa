import { useState } from "react";

import BackDrop from "../backdrop/backdrop";

import Order from "../order/order";

const Modal = ({ show, modalClose }) => {
  const [purchased, setPurchased] = useState(true);
  const modalCloseHandler = () => {
    setPurchased(false);
  };
  const purchasedSuccess = () => {
    const data = {
      customer: {
        name: "Bardia",
        email: "example@gmail.com",
      },
    };
    console.log(data);
  };
  return (
    <>
      <BackDrop show={show} click={modalClose} />
      <div
        className="modal"
        style={{
          transform: show ? "transalteY(0)" : "translateY(-100vh)",
          opacity: show ? "1" : "0",
        }}
      >
        <Order continue={purchasedSuccess} cancel={modalCloseHandler} />
      </div>
    </>
  );
};
export default Modal;
