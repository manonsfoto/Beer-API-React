import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./Details.css";
import { IBeer } from "../../interface/IBeer";
import { useNavigate, useParams } from "react-router-dom";
import Back from "../../assets/back/Back";
interface Props {
  dataBeers?: IBeer[];
  randomDataBeers?: IBeer | null;
}
const Details: React.FC<Props> = ({ dataBeers, randomDataBeers }) => {
  const [singleBeer, setSingleBeer] = useState<IBeer | null>(null);
  const { idBeer } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (idBeer && dataBeers) {
      const findBeerById = dataBeers.find(
        (singleBeer) => singleBeer._id === idBeer
      );
      setSingleBeer(findBeerById || null);
    }
  }, [idBeer, dataBeers]);

  useEffect(() => {
    if (randomDataBeers) {
      setSingleBeer(randomDataBeers);
    }
  }, []);

  if (!singleBeer) return <p>Loading ...</p>;

  return (
    <>
      <section className="stn-details flex">
        <img src={singleBeer.image_url} alt={singleBeer.name} />
        <article className="details-text flex">
          <h1 className="details-name">{singleBeer.name}</h1>
          <p className="details-tagline">{singleBeer.tagline}</p>
          <div className="flex mini-textbox">
            <p>First brewed:</p>
            <p>{singleBeer.first_brewed}</p>
          </div>
          <div className="flex mini-textbox">
            <p>Attenuation level:</p>
            <p>{singleBeer.attenuation_level}</p>
          </div>
          <p className="details-desc">{singleBeer.description}</p>
          <button
            className="btn-back"
            type="button"
            onClick={() => navigate(-1)}
          >
            {" "}
            <Back />
          </button>
        </article>
      </section>{" "}
      <Navbar />
    </>
  );
};

export default Details;
