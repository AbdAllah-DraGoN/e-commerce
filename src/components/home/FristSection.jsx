import { useEffect, useRef, useState } from "react";
import useGetApi from "../../hooks/useGetApi";
import Button from "../global/Button";
import ProductCard from "../global/ProductCard";
import Section from "../global/section/Section";
import SectionHeader from "../global/section/SectionHeader";
import { useNavigate } from "react-router-dom";

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
    `https://dummyjson.com/products?limit=3&skip=${skip}&select=${selectItemsList.join(
      ","
    )}`
  );
  const [products, setProducts] = useState(null);

  const prevBtn = useRef(null);
  // const nextBtn = useRef();

  useEffect(() => {
    if (data) {
      // console.log(data.products);

      setProducts(data.products);
    }
    if (error) {
      console.log(error);
    }
  }, [data, error]);

  useEffect(() => {
    if (skip <= 0) {
      prevBtn.current.style.opacity = "0.5";
    } else if (skip >= 194) {
      prevBtn.current.style.opacity = "0.5";
    } else {
      prevBtn.current.style.opacity = "1";
    }
  }, [skip]);

  return (
    <div>
      <Section title="today's">
        <SectionHeader title="Falsh Sales">
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button
              ref={prevBtn}
              name="Prev Items"
              btnFunction={() => {
                if (skip <= 3) {
                  setSkip(0);
                } else {
                  setSkip(() => skip - 3);
                }
              }}
            />
            <Button
              name="Next Items"
              btnFunction={() => setSkip(() => skip + 3)}
            />
          </div>
        </SectionHeader>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "space-between",
              margin: "1rem 0",
            }}
          >
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
          <Button
            name="view all products"
            btnFunction={() => {
              navigate("/products");
            }}
          />
        </div>
      </Section>
    </div>
  );
}

export default FristSection;
