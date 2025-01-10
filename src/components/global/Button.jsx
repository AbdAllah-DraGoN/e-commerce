import { forwardRef } from "react";

const Button = forwardRef(
  ({ name = "Click Here", btnFunction = null }, btnRef) => {
    return (
      <button className="my-btn" ref={btnRef} onClick={btnFunction}>
        {name}
      </button>
    );
  }
);

export default Button;
