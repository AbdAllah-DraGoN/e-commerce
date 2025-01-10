import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layout/Layout";
import Product from "./components/global/Product";
import NotFound from "./components/global/NotFound";
import "./App.css";
import AllProducts from "./components/products/AllProducts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/e-commerc/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/e-commerc/products" element={<AllProducts />} />
          <Route path="/e-commerc/products/:id" element={<Product />} />
          <Route path="/e-commerc/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
