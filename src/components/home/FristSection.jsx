import { useEffect, useRef, useState } from "react";
import useGetApi from "../../hooks/useGetApi";
import Button from "../global/Button";
import Section from "../global/section/Section";
import { useNavigate } from "react-router-dom";
import ProductsContainer from "../products/ProductsContainer";
import ProductCard from "../global/ProductCard";
import Slider from "../global/slider/Slider";

function FristSection() {
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
  const [data, loading, error] = useGetApi(
    `https://dummyjson.com/products?limit=10&skip=${skip}&select=${selectItemsList.join(
      ","
    )}`
  );
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (data) {
      // console.log(data.products);
      setProducts(data.products);
    }
    if (error) {
      console.log(error);
    }
  }, [data, error]);

  return (
    <div style={{ textAlign: "center", margin: "5rem 0 3rem" }}>
      <Slider title="today's" header="Falsh Sales" distance="270">
        {loading && <span className="loading">loading....</span>}

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
      </Slider>
      <Button
        name="view our products"
        btnFunction={() => {
          navigate("/e-commerce/our-products");
        }}
      />
    </div>
  );
}

export default FristSection;
