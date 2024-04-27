import React, { useEffect, useState } from 'react'
import FeatureCard from '../featurCard/Index';

const Categories = () =>{
    const [categories, setCategories] = useState({});

    useEffect(()=>{
        const FetchCategories = async () =>{
            const response = await fetch('https://fakestoreapi.com/products/categories')
            const data = await response.json()
            console.log(data, 'data');
            setCategories(data)
          }
          FetchCategories()
    }, [])
    if(categories.length === 0){
        return <div>Loading...</div>
    }
    return (
          <FeatureCard cards={categories}/>
      
      );
}
export default Categories;