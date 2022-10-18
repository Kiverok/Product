import React, {useEffect, useState} from "react";
import axios from "axios";



function Products() {
    const [products, setProducts] = useState([]);
  // const url = 'https://fakestoreapi.com/products?limit=5'
  // const query = "5";
  // const templateUrl = `https://fakestoreapi.com/products?limit=${query}`
  useEffect(() => {
  const query = "5";
  const templateUrl = `https://fakestoreapi.com/products?limit=${query}`
  const fetchData = async () => {
    try {
      const result = await axios(templateUrl);
      setProducts(result.data);
  } catch(e) {
    console.error(e)
  }};
    fetchData();
  }, []);
    
    return (
  <div>
    {products.map(({ title, id, image, price }) => (
      <div className="border py-4 px-8 rounded flex flex-col items-center md-2 list-none" key={id}>
        <p className="font-bold">{title}</p>
        <img src={image} alt={title} className="w-1/6" />
        <p>{price}</p>
      </div>
    )
    )}
  </div>
  )
    }
  
  
  export default Products