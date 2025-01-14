import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetApi from "../../hooks/useGetApi";
import Button from "./Button";
import "./global.css";

function Product() {
  const { id } = useParams(); // جلب ID المنتج من الـ URL
  const [imgIndex, setImgIndex] = useState(0);

  const selectItemsList = [
    "title",
    "description",
    "category",
    "price",
    "discountPercentage",
    "rating",
    "tags",
    "images",
  ];

  const [product, loading, error] = useGetApi(
    `https://dummyjson.com/products/${id}?select=${selectItemsList.join(",")}`
  );

  useEffect(() => {
    if (product) {
      // console.log(product);
    }
    if (error) {
      console.log(error);
    }
  }, [product, error]);

  // For Discount
  let discount = {
    state: false,
    value: "",
  };
  if (product) {
    if (product.discountPercentage > 0 && product.discountPercentage < 1) {
      discount.state = true;
      discount.value = `-${product.discountPercentage.toFixed(2)}%`;
    } else if (product.discountPercentage > 1) {
      discount.state = true;
      discount.value = `-${product.discountPercentage.toFixed()}%`;
    } else {
      discount.state = false;
      discount.value = "";
    }
  }

  return (
    <div className="one-product">
      <div className="my-container">
        {loading && "loading ........"}
        {product ? (
          <>
            <div className="product-path">
              Account &nbsp; / &nbsp; {product.category}
              &nbsp; / &nbsp; {product.title}
            </div>
            <div className="product-show">
              <div className="images">
                {product.images[0] && (
                  <img
                    src={product.images[0]}
                    alt={product.description}
                    onClick={() => {
                      setImgIndex(0);
                    }}
                  />
                )}
                {product.images[1] && (
                  <img
                    src={product.images[1]}
                    alt={product.description}
                    onClick={() => {
                      setImgIndex(1);
                    }}
                  />
                )}
                {product.images[2] && (
                  <img
                    src={product.images[2]}
                    alt={product.description}
                    onClick={() => {
                      setImgIndex(2);
                    }}
                  />
                )}
                {product.images[3] && (
                  <img
                    src={product.images[3]}
                    alt={product.description}
                    onClick={() => {
                      setImgIndex(3);
                    }}
                  />
                )}
              </div>
              <div className="main-image">
                <img src={product.images[imgIndex]} alt={product.description} />
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>Rating: {product.rating}</p>
                {/* <p className="price">${product.price}</p> */}
                <p className="price">
                  $
                  {discount.state
                    ? (
                        product.price -
                        product.price * (product.discountPercentage / 100)
                      ).toFixed(2)
                    : product.price}
                  {discount.state && (
                    <del
                      style={{
                        margin: "1rem",
                        fontSize: "1.5rem",
                        fontWeight: "500",
                        lineHeight: "24px",
                        color: "#0005",
                      }}
                    >
                      {product.price}$
                    </del>
                  )}
                </p>
                <p>{product.description}</p>
                <hr />
                <div>
                  options
                  <br />
                </div>
                <div className="add-to-cart">
                  <div className="product-count">
                    <b>ID: {id}</b>
                  </div>
                  <Button name="buy now" />
                  <p style={{ fontSize: "30px" }}>❤</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          error
        )}
      </div>
    </div>
  );
}

export default Product;
