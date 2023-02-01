import EditButton from "./EditButton";
import "./ItemCard.css";


const ItemCard = (props) => {
  return (
    <div>
      <section className="cardImg">
        <img src={"https://hausinventar-server.onrender.com/" + props.img} alt={props.name} />
      </section>
      <section className="cardDetails">
        <h2 className="cardTitle">{props.name}</h2>
        <p className="cardRoom">{props.room}</p>
        <p className="cardDescrTitle">Beschreibung</p>
        <p className="cardDescrText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
          obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
          nihil, eveniet aliquid culpa officia aut!</p>
        <EditButton />
      </section>
    </div>
  );
};
export default ItemCard;