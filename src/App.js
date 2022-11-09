import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Pagination from './components/Pagination';
import Products from './components/Products';






function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const keys = ["title", "category"];
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5)

  // const search = (data) => {
  //   return data.filter((product) => product.title.toLowerCase().includes(query));
  // };
  useEffect(()=>{
const fetchProducts = async () =>{
  setLoading(true)
  const res = await axios.get("https://fakestoreapi.com/products")
  setData(res.data);
  setLoading(false)
};
fetchProducts()
  },[])

const lastProductIndex = currentPage * productsPerPage
const firstProductIndex = lastProductIndex - productsPerPage
const currentProduct = data.slice(firstProductIndex, lastProductIndex)

const paginate = pageNumber => setCurrentPage(pageNumber)

  const search = (data) => {
    return data.filter((item) => 
    keys.some((key) => item[key].toLowerCase().includes(query))
  );
  };
  return (
<div className="container mx-auto max-w-2xl pt-5">
<input 
    type="text" 
    placeholder="Search..."
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    onChange={(e) => setQuery(e.target.value)}
     />
   <Products data={search(currentProduct)} loading={loading} /> 
   <Pagination 
   productsPerPage={productsPerPage}
   totalProducts={data.length}
   paginate={paginate}
   />
</div>
)
  }


export default App
