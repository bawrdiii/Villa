import { useState } from "react";

const order = (props) => {
  return (
    <div className="order">
      <h3>جزییات رزرو</h3>
      آیا از انتخاب خود مطمعن هستید؟
      <p></p>
      <button type="submit" className="btn-s" onClick={props.continue}>
        ادامه
      </button>
      <button className="btn-c" type="submit" onClick={props.cancel}>
        منصرف شدم
      </button>
    </div>
  );
};
export default order;
