import bigPic from "../assets/img/bigStuff.jpg";
import mediumPic from "../assets/img/mediumStuff.jpg";
import smallPic from "../assets/img/smallStuff.jpg";
import BackButton from "../components/BackButton";

const Home = () => {
  return (
    <div>
      <section>
        <h1>MY FURNITURE</h1>
      </section>
      <section>
        <article>
          <img src={bigPic} alt="Sofa in a living room" />
          <h2>BIG STUFF</h2>
        </article>
        <article>
          <img src={mediumPic} alt="Chair and laundry bag" />
          <h2>NOT SO BIG STUFF</h2>
        </article>
        <article>
          <img src={smallPic} alt="Decoration items on a shelf" />
          <h2>SMALL STUFF</h2>
        </article>
      </section>
      <BackButton />
    </div>
  )
}
export default Home