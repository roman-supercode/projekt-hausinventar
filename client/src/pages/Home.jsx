import bigPic from "../assets/img/bigStuff.jpg";
import mediumPic from "../assets/img/mediumStuff.jpg";
import smallPic from "../assets/img/smallStuff.jpg";
import bgi from "../assets/img/bgi.jpg";
import BackButton from "../components/BackButton";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section className="headerHome">
        <img src={bgi} alt="Interior Design Sample" />
        <h1>MY FURNITURE</h1>
      </section>
      <section className="mainHome">
        <article className="thumbnailCat">
          <img src={bigPic} alt="Sofa in a living room" />
          <h2>BIG STUFF</h2>
        </article>
        <article className="thumbnailCat">
          <img src={mediumPic} alt="Chair and laundry bag" />
          <h2>NOT SO BIG STUFF</h2>
        </article>
        <article className="thumbnailCat">
          <img src={smallPic} alt="Decoration items on a shelf" />
          <h2>SMALL STUFF</h2>
        </article>
      </section>
    </div>
  )
}
export default Home