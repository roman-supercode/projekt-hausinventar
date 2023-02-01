import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

const ItemList = ({ cat }) => {
  const [items, setItems] = useState([]);


  const getFetch = async () => {
    try {
      const response = await fetch(`http://localhost:9898/api/${cat}`);
      const data = await response.json();
      setItems(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFetch();
  }, []);



  return (
    <div>
      {items.map((item) => {
        return <ItemCard img={item.img} name={item.name} room={item.room} key={item._id} />;
      })}
    </div>
  );
};
export default ItemList;