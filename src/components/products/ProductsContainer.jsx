import { useEffect, useRef, useState } from "react";
import ProductCard from "../global/ProductCard";
import ArrowBtn from "../global/ArrowBtn";
import "./products.css";

const ProductsContainer = ({
  sectionName = "Section Name",
  data = null,
  loading = null,
  error = null,
}) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (data) {
      // console.log(data);
      setProducts(data);
    }
    if (error) {
      console.log(error);
    }
  }, [data, error]);

  const productsRef = useRef();

  return (
    <div className="section-container">
      <div className="section-header">
        <div className="section-name">
          <h3>{sectionName}</h3>
        </div>
        <div className="slider-btns">
          <ArrowBtn name="<" containerRef={productsRef} distance="-270" />
          <ArrowBtn name=">" containerRef={productsRef} distance="270" />
        </div>
      </div>
      <div className="products-container" ref={productsRef}>
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
    </div>
  );
};

export default ProductsContainer;
