import { useEffect, useState } from "react";
import useGetApi from "../../hooks/useGetApi";
import ProductsContainer from "./ProductsContainer";
import "./products.css";

const OurProducts = () => {
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

  const [skip, setSkip] = useState(0);
  const [products1, setProducts1] = useState(null);

  let [data1, loading1, error1] = useGetApi(
    `https://dummyjson.com/products/category/groceries?limit=30&skip=${skip}&select=${selectItemsList.join(
      ","
    )}`
  );

  useEffect(() => {
    if (data1) {
      // console.log(data);
      setProducts1(data1.products);
    }
    if (error1) {
      console.log(error1);
    }
  }, [data1, error1]);
  // --------------------------------------
  const [products2, setProducts2] = useState(null);

  let [data2, loading2, error2] = useGetApi(
    `https://dummyjson.com/products/category/kitchen-accessories?limit=30&skip=${skip}&select=${selectItemsList.join(
      ","
    )}`
  );

  useEffect(() => {
    if (data2) {
      // console.log(data);
      setProducts2(data2.products);
    }
    if (error2) {
      console.log(error2);
    }
  }, [data2, error2]);
  // --------------------------------------
  const [products3, setProducts3] = useState(null);

  let [data3, loading3, error3] = useGetApi(
    `https://dummyjson.com/products/category/mobile-accessories?limit=30&skip=${skip}&select=${selectItemsList.join(
      ","
    )}`
  );

  useEffect(() => {
    if (data3) {
      // console.log(data);
      setProducts3(data3.products);
    }
    if (error3) {
      console.log(error3);
    }
  }, [data3, error3]);

  return (
    <div className="our-products">
      <div className="my-container">
        <div className="page-title">
          <h1>our products</h1>
          <hr />
        </div>
        {!loading1 && products1 ? (
          <>
            <ProductsContainer sectionName="groceries" data={products1} />
            <hr />
          </>
        ) : (
          "loading...."
        )}

        {!loading2 && products2 ? (
          <>
            <ProductsContainer
              sectionName="kitchen accessories"
              data={products2}
            />
            <hr />
          </>
        ) : (
          "loading...."
        )}
        {!loading3 && products3 ? (
          <ProductsContainer
            sectionName="mobile accessories"
            data={products3}
          />
        ) : (
          "loading...."
        )}
      </div>
    </div>
  );
};

export default OurProducts;
