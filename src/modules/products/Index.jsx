import ProductCard from "../../components/productCard/Index";
import Categories from "../../components/categories/Index";
import { useEffect, useState } from "react";
import Footer from "../../components/footer/Index";

const Products = () => {
const [products, setProducts] = useState([]);

  useEffect(() => {
    const FetchProducts = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products"
      );
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    FetchProducts();
  }, []);

  return (
    <div>
      <Categories/>
      <div className="flex flex-col text-center w-full">
        <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">
          Produducts
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          All PRODUCTS
        </h1>
      </div>
      {
        products.length > 0 ?  <ProductCard products={products}/> : <div>Loading...</div>
      }
     <Footer />
    </div>
  );
};
export default Products;
