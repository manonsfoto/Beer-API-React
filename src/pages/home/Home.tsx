import { Link } from "react-router-dom";
import TeaserCard from "../../components/teaserCard/TeaserCard";
import "./Home.css";
import imgAllbeers from "/public/img/allbeers.jpg";
import imgRandombeer from "/public/img/randombeer.png";
interface Props {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}
const Home: React.FC<Props> = ({ counter, setCounter }) => {
  return (
    <section className="stn-home">
      <Link to={"allbeers"}>
        {" "}
        <TeaserCard title={"All Beers"} imgUrl={imgAllbeers} />
      </Link>
      <Link to={"beers/random"} onClick={() => setCounter(counter + 1)}>
        {" "}
        <TeaserCard title={"Random Beer"} imgUrl={imgRandombeer} />
      </Link>
    </section>
  );
};

export default Home;
