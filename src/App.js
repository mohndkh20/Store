import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Cart from "./component/Cart";
import { Routes, Route } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
