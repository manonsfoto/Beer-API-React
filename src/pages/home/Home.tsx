import { Link } from "react-router-dom";
import TeaserCard from "../../components/teaserCard/TeaserCard";
import "./Home.css";
import imgAllbeers from "/public/img/allbeers.jpg";
import imgRandombeer from "/public/img/randombeer.png";

const Home = () => {
  return (
    <section className="stn-home">
      <Link to={"allbeers"}>
        {" "}
        <TeaserCard title={"All Beers"} imgUrl={imgAllbeers} />
      </Link>
      <Link to={"beers/random"}>
        {" "}
        <TeaserCard title={"Random Beer"} imgUrl={imgRandombeer} />
      </Link>
    </section>
  );
};

export default Home;
