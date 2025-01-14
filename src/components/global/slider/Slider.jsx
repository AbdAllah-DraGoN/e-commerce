import { useEffect, useRef, useState } from "react";
import "./slider.css";
import ArrowBtn from "../ArrowBtn";

const data = [
  {
    id: 83,
    title: "Blue & Black Check Shirt",
    description:
      "The Blue & Black Check Shirt is a stylish and comfortable men's shirt featuring a classic check pattern. Made from high-quality fabric, it's suitable for both casual and semi-formal occasions.",
    category: "mens-shirts",
    price: 29.99,
    discountPercentage: 1.41,
    rating: 4.19,
    tags: ["clothing", "men's shirts"],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/thumbnail.png",
  },
  {
    id: 84,
    title: "Gigabyte Aorus Men Tshirt",
    description:
      "The Gigabyte Aorus Men Tshirt is a cool and casual shirt for gaming enthusiasts. With the Aorus logo and sleek design, it's perfect for expressing your gaming style.",
    category: "mens-shirts",
    price: 24.99,
    discountPercentage: 12.6,
    rating: 4.95,
    tags: ["clothing", "men's t-shirts"],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/thumbnail.png",
  },
  {
    id: 85,
    title: "Man Plaid Shirt",
    description:
      "The Man Plaid Shirt is a timeless and versatile men's shirt with a classic plaid pattern. Its comfortable fit and casual style make it a wardrobe essential for various occasions.",
    category: "mens-shirts",
    price: 34.99,
    discountPercentage: 17.53,
    rating: 3.66,
    tags: ["clothing", "men's shirts"],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/thumbnail.png",
  },
  {
    id: 86,
    title: "Man Short Sleeve Shirt",
    description:
      "The Man Short Sleeve Shirt is a breezy and stylish option for warm days. With a comfortable fit and short sleeves, it's perfect for a laid-back yet polished look.",
    category: "mens-shirts",
    price: 19.99,
    discountPercentage: 8.65,
    rating: 4.62,
    tags: ["clothing", "men's shirts"],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/thumbnail.png",
  },
  {
    id: 87,
    title: "Men Check Shirt",
    description:
      "The Men Check Shirt is a classic and versatile shirt featuring a stylish check pattern. Suitable for various occasions, it adds a smart and polished touch to your wardrobe.",
    category: "mens-shirts",
    price: 27.99,
    discountPercentage: 14.21,
    rating: 2.9,
    tags: ["clothing", "men's shirts"],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/thumbnail.png",
  },
];

const Slider = ({
  title = "title",
  header = "header",
  distance = 250,
  children,
}) => {
  const productsRef = useRef();

  return (
    <div className="slider-section-container">
      {/*  */}
      <div className="section-head">
        <div className="row-1">
          <div className="the-box"></div>
          <div className="section-title">{title}</div>
        </div>

        <div className="row-2">
          <div className="section-name">
            <h3>{header}</h3>
          </div>
          <div className="slider-btns">
            <ArrowBtn
              name="<"
              containerRef={productsRef}
              distance={`-${distance}`}
            />
            <ArrowBtn name=">" containerRef={productsRef} distance={distance} />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="my-slider" ref={productsRef}>
        {children ? children : <h3>SLIDER</h3>}
      </div>
    </div>
  );
};

export default Slider;
