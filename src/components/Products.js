import React from "react";





function Products( { data, loading } ) {
  //   const [products, setProducts] = useState([]);
  //   // console.log(products.filter(product=>product.title.toLowerCase().includes("me")))
  // // const url = 'https://fakestoreapi.com/products?limit=5'
  // // const query = "5";
  // // const templateUrl = `https://fakestoreapi.com/products?limit=${query}`
  // useEffect(() => {
  // const query = "30";
  // const templateUrl = `https://fakestoreapi.com/products?limit=${query}`
  // const fetchData = async () => {
  //   try {
  //     const result = await axios(templateUrl);
  //     setProducts(result.data);
  // } catch(e) {
  //   console.error(e)
  // }};
  //   fetchData();
  // }, []);
    if(loading) {
      return <h2>Loading...</h2>
    }
    
    return (
  <div>
 {data.map((item) => (
      <div className="border py-4 px-8 rounded flex flex-col items-center md-2 list-none" key={item.id}>
        <p className="font-bold">{item.title}</p>
        <p>{item.category}</p>
        <img src={item.image} alt={item.title} className="w-1/6" />
        <p>{item.price}</p>
      </div>
    )
    )}
    {/* <ul>
      {products.filter(product=>product.title.toLowerCase().includes(search)
      ).map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul> */}
  </div>
  )
    }
  
  
  export default Products