import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layout/Layout";
import Product from "./components/global/Product";
import NotFound from "./components/global/NotFound";
import AllProducts from "./components/products/AllProducts";
import OurProducts from "./components/products/OurProducts";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/e-commerce/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="products" element={<AllProducts />} /> */}
          <Route path="our-products" element={<OurProducts />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
