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
      <div>
        <p>{singleBeer.name}</p>
        <p>{singleBeer.tagline}</p>
        <p>Created by: {singleBeer.name}</p>
        <Link to={`/allbeers/${singleBeer._id}`}>
          <button type="button">Details</button>
        </Link>
      </div>
    </article>
  );
};

export default ItemCard;
