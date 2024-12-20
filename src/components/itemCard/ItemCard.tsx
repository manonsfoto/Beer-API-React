import { Link } from "react-router-dom";
import { IBeer } from "../../interface/IBeer";
import "./ItemCard.css";
interface Props {
  singleBeer: IBeer;
}
const ItemCard: React.FC<Props> = ({ singleBeer }) => {
  return (
    <article className="itemcard flex">
      <img src={singleBeer.image_url} alt={singleBeer.name} />
      <div className="card-textbox flex">
        <p className="card-name">{singleBeer.name}</p>
        <p className="card-tagline">{singleBeer.tagline}</p>
        <p className="card-createdBy">Created by: {singleBeer.name}</p>
        <Link to={`/beers/${singleBeer._id}`}>
          <button className="btn-details" type="button">
            Details
          </button>
        </Link>
      </div>
    </article>
  );
};

export default ItemCard;
