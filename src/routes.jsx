import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/home/HomePage";
import Layout from "./components/layout/Layout";
import Product from "./components/global/Product";
import NotFound from "./components/global/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} /> {/* الصفحة الرئيسية */}
          <Route path="product/:id" element={<Product />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
