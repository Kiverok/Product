import React, {useEffect, useState} from "react";
import axios from "axios";




function Products() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    // console.log(products.filter(product=>product.title.toLowerCase().includes("me")))
  // const url = 'https://fakestoreapi.com/products?limit=5'
  // const query = "5";
  // const templateUrl = `https://fakestoreapi.com/products?limit=${query}`
  useEffect(() => {
  const query = "30";
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
    <input 
    type="text" 
    placeholder="Search..."
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    onChange={(e) => setSearch(e.target.value)}
     />
    <ul>
      {products.filter(product=>product.title.toLowerCase().includes(search)
      ).map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  </div>
  )
    }
  
  
  export default Products