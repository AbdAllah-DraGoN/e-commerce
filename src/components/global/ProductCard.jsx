import { useNavigate } from "react-router-dom";

export default function ProductCard({
  id,
  description,
  thumbnail,
  discountPercentage = 0,
  title,
  price,
  rating,
}) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    if (e.target.className !== "add-to-cart") {
      // console.log("Show Product Has ID: " + id);
      navigate(`/e-commerce/products/${id}`);
    } else if (e.target.className === "add-to-cart") {
      console.log("Add To Cart Product Has ID: " + id);
    }
  };

  // For Discount
  let discount = {
    state: false,
    value: "",
  };
  if (discountPercentage > 0 && discountPercentage < 1) {
    (discount.state = true),
      (discount.value = `-${discountPercentage.toFixed(2)}%`);
  } else if (discountPercentage > 1) {
    (discount.state = true),
      (discount.value = `-${discountPercentage.toFixed()}%`);
  } else {
    (discount.state = false), (discount.value = "");
  }

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
        <button className="add-to-cart">Add to Cart</button>
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
          }}
        >
          rating: {rating}
        </div>
      </div>
    </div>
  );
}
