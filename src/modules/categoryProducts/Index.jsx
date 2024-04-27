import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/productCard/Index';
import { useParams } from 'react-router-dom';

const CategoryProducts = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/category/${name}`);
      const data = await response.json();
      console.log(data);
      if (Array.isArray(data)) {
        setProducts(data);
      } else if (typeof data === 'object' && Object.keys(data).length > 0) {
        const dataArray = Object.values(data);
        setProducts(dataArray);
      } else {
        setProducts([]);
      }
    };
    fetchProducts();
  }, [name]);

  if(products.length === 0) return <div>Loading...</div>;

  return <ProductCard products={products}/>;
}

export default CategoryProducts;
