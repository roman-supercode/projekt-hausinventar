import AddItem from "../components/AddItem";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";

const Overview = () => {

  const cat = useParams().category;

  return (
    <div>Overview
      <AddItem />
      <ItemList cat={cat} />

    </div>
  );
};
export default Overview;