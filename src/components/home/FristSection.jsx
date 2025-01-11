import { useEffect, useRef, useState } from "react";
import useGetApi from "../../hooks/useGetApi";
import Button from "../global/Button";
import Section from "../global/section/Section";
import { useNavigate } from "react-router-dom";
import ProductsContainer from "../products/ProductsContainer";

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
    <div>
      <Section title="today's">
        {/* <SectionHeader title="Falsh Sales"></SectionHeader> */}
        {!loading && products ? (
          <>
            <ProductsContainer sectionName="Falsh Sales" data={products} />
          </>
        ) : (
          "loading...."
        )}
        <Button
          name="view our products"
          btnFunction={() => {
            navigate("/e-commerce/our-products");
          }}
        />
      </Section>
    </div>
  );
}

export default FristSection;
