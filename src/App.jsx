import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layout/Layout";
import Product from "./components/global/Product";
import NotFound from "./components/global/NotFound";
import OurProducts from "./components/products/OurProducts";
import Slider from "./components/global/slider/Slider";

import "./App.css";
import Cart from "./components/cart/Cart";
import Checkout from "./components/cart/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/e-commerce/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="our-products" element={<OurProducts />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="slider" element={<Slider />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
