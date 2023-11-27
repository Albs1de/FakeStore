import { useState, useEffect } from "react";
import Card from "./Card";
const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [])

 

  if (!data) return <div>Loading...</div>;

  return (
    <div className="">
      {data.map((item) => (
        <Card
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        description={item.description}
        category={item.category}
        image={item.image}
        rating={item.rating}/>
      ))}
    </div>
  );
};



export default Home;