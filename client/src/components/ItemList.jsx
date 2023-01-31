import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "./ItemCard";

const ItemList = () => {

  const cat = useParams().category;

  const [items, setItems] = useState([]);

  return (
    <div>
      {items.map((item) => {
        return <ItemCard img={item.img} name={item.name} room={item.room} />
      })}
    </div>
  )
}
export default ItemList