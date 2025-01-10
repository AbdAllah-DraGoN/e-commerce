import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetApi from "../../hooks/useGetApi";
import ProductCard from "../global/ProductCard";
import "./products.css";
import Button from "../global/Button";

const AllProducts = () => {
  const selectItemsList = [
    "title",
    "description",
    "category",
    "price",
    "discountPercentage",
    "rating",
    "tags",
    "thumbnail",
  ];
  const navigate = useNavigate();
  const [skip, setSkip] = useState(0);
  const [productIndex, setProductIndex] = useState(0);
  const [products, setProducts] = useState(null);
  const btnsRef = useRef([]);

  let [data, loading, error] = useGetApi(
    `https://dummyjson.com/products?limit=12&skip=${skip}&select=${selectItemsList.join(
      ","
    )}`
  );

  useEffect(() => {
    if (data) {
      // console.log(data);
      setProducts(data.products);
    }
    if (error) {
      console.log(error);
    }
  }, [data, error]);

  useEffect(() => {
    setSkip(productIndex);
  }, [productIndex]);

  const handleClick = (e, num) => {
    btnsRef.current.forEach((btn) => {
      btn && btn.classList.remove("active");
    });
    e.target.className = "my-btn active";

    setProductIndex((num - 1) * 12);
  };

  return (
    <div className="all-products">
      <div className="my-container">
        <div className="page-title">
          <h1>our products</h1>
          <hr />
        </div>
        <div className="products">
          {loading && "loading...."}
          {products &&
            products.map((e) => {
              return (
                <ProductCard
                  key={e.id}
                  id={e.id}
                  description={e.description}
                  thumbnail={e.thumbnail}
                  title={e.title}
                  price={e.price}
                  discountPercentage={e.discountPercentage}
                  rating={e.rating}
                />
              );
            })}
        </div>
        <div className="pagination-btn">
          <button
            ref={(el) => (btnsRef.current[0] = el)}
            className="my-btn active"
            onClick={(e) => {
              handleClick(e, 1);
            }}
          >
            1
          </button>
          <button
            ref={(el) => (btnsRef.current[1] = el)}
            className="my-btn"
            onClick={(e) => {
              handleClick(e, 2);
            }}
          >
            2
          </button>
          <button
            ref={(el) => (btnsRef.current[2] = el)}
            className="my-btn"
            onClick={(e) => {
              handleClick(e, 3);
            }}
          >
            3
          </button>
          <button
            ref={(el) => (btnsRef.current[3] = el)}
            className="my-btn"
            onClick={(e) => {
              handleClick(e, 4);
            }}
          >
            4
          </button>
          <button
            ref={(el) => (btnsRef.current[4] = el)}
            className="my-btn"
            onClick={(e) => {
              handleClick(e, 5);
            }}
          >
            5
          </button>
          <button
            ref={(el) => (btnsRef.current[5] = el)}
            className="my-btn"
            onClick={(e) => {
              handleClick(e, 6);
            }}
          >
            6
          </button>
          <button
            ref={(el) => (btnsRef.current[6] = el)}
            className="my-btn"
            onClick={(e) => {
              handleClick(e, 7);
            }}
          >
            7
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
