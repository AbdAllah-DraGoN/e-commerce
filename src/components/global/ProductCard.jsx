import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import addToCart from "../../functions/addToCart.js";

export default function ProductCard({
  id,
  description,
  thumbnail,
  discountPercentage = 0,
  title,
  price,
  rating,
}) {
  function isMobileDevice() {
    const userAgent = navigator.userAgent.toLowerCase();

    if (
      userAgent.includes("mobile") ||
      userAgent.includes("tablet") ||
      userAgent.includes("android") ||
      userAgent.includes("iphone") ||
      userAgent.includes("ipad")
    ) {
      return true;
    } else {
      return false;
    }
  }

  // Because Mobiles not have Hover
  const addToCartRef = useRef();
  const isMoblie = isMobileDevice();
  useEffect(() => {
    if (isMoblie) {
      if (addToCartRef.current) {
        addToCartRef.current.style.cssText = "bottom: 0 !important";
      }
    }
  }, [addToCartRef]);

  // For Discount
  let discount = {
    state: false,
    value: "",
  };
  if (discountPercentage > 0 && discountPercentage < 1) {
    discount.state = true;
    discount.value = `-${discountPercentage.toFixed(2)}%`;
  } else if (discountPercentage > 1) {
    discount.state = true;
    discount.value = `-${discountPercentage.toFixed()}%`;
  } else {
    discount.state = false;
    discount.value = "";
  }
  //

  const navigate = useNavigate();
  const handleClick = (e) => {
    if (e.target.className !== "add-to-cart") {
      navigate(`/e-commerce/products/${id}`);
    } else if (e.target.className === "add-to-cart") {
      addToCart({
        id,
        title,
        price: (price - price * (discountPercentage / 100)).toFixed(2),
        img: thumbnail,
      });
    }
  };
  return (
    <div
      onClick={handleClick}
      id={id}
      className="productCard"
      style={{
        width: "270px",
        height: "350px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        justifyContent: "space-between",
        overflow: "hidden",
        //
        flexShrink: "0",
      }}
    >
      <div
        className="imgBack"
        style={{
          width: "270px",
          height: "250px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F5F5F5",
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
        }}
      >
        <img
          loading="lazy"
          src={thumbnail}
          alt={description}
          style={{ maxWidth: "70%", maxHeight: "72%" }}
        />
        <button className="add-to-cart" ref={addToCartRef}>
          Add to Cart
        </button>
        {discount.state && (
          <div className="discount-badge">{discount.value}</div>
        )}
        <div className="right-icons"></div>
      </div>
      <div className="productInfo">
        <h3
          style={{
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "24px",
            textAlign: " start",
          }}
        >
          {title}
        </h3>
        <div
          className="productPrice"
          style={{
            display: "flex",
            gap: "12px",
            color: "var(--bg-secondary-color)",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              lineHeight: "24px",
              color: "var(var(--bg-secondary-color))",
            }}
          >
            {discount.state
              ? (price - price * (discountPercentage / 100)).toFixed(2)
              : price}
            $
          </span>

          {discount.state && (
            <del
              style={{
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "24px",
                color: "#0005",
              }}
            >
              {price}$
            </del>
          )}
        </div>
        <div
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "flex-end",
            fontSize: "1.2rem",
          }}
        >
          rating: {rating}
        </div>
      </div>
    </div>
  );
}
