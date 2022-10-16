import React, {useEffect, useState} from "react";
import axios from "axios";



function Products() {
    const [products, setProducts] = useState([]);
  const url = 'https://fakestoreapi.com/products?limit=5'
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setProducts(result.data);
    };
    fetchData();
  }, []);
    
    return (
  <ul>
    {products.map(({ title, id, image, price}) => (
      <li className="border py-4 px-8 rounded flex flex-col items-center md-2 list-none" key={id}>
        <p className="font-bold">{title}</p>
        <img src={image} alt={title} className="w-1/6" />
        <p>{price}</p>
      </li>
    )
    )}
  </ul>
  )
    }
  
  
  export default Products