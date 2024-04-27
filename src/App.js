import React from "react";
import Home from "./modules/home/Index.jsx";
import Header from "./components/header/Index.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from "./modules/product/Index.jsx";
import Products from "./modules/products/Index.jsx";
import CategoryProducts from "./modules/categoryProducts/Index.jsx";
import Cart from "./modules/cart/Index.jsx";
import Contact from "./components/contact/Contact.jsx";
import About from "./components/about/About.jsx";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes> 
          <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories/:name" element={<CategoryProducts />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
