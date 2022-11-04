import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Products from './components/Products';






function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([])
  // const search = (data) => {
  //   return data.filter((product) => product.title.toLowerCase().includes(query));
  // };
  useEffect(()=>{
const fetchProducts = async () =>{
  const res = await axios.get("https://fakestoreapi.com/products?limit=30")
  setData(res.data);
};
fetchProducts()
  },[])
  const search = (data) => {
    return data.filter((item) => item.title.toLowerCase().includes(query));
  };
  return (
<div className="container mx-auto max-w-2xl pt-5">
<input 
    type="text" 
    placeholder="Search..."
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    onChange={(e) => setQuery(e.target.value)}
     />
   <Products data={search(data)} /> 
</div>
)
  }


export default App
