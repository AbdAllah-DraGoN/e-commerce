import { forwardRef } from "react";

const ArrowBtn = forwardRef(
  ({ name = ">>", containerRef = null, distance = "250" }, btnRef) => {
    return (
      <button
        className="arrow-btn"
        ref={btnRef}
        onClick={() => {
          containerRef
            ? containerRef.current.scrollBy({
                left: distance,
                behavior: "smooth",
              })
            : console.log("Please Choose Container");
        }}
      >
        {name}
      </button>
    );
  }
);

export default ArrowBtn;
