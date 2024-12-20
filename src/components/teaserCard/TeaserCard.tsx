import "./TeaserCard.css";

interface Props {
  title: string;
  imgUrl: string;
}

const TeaserCard: React.FC<Props> = ({ title, imgUrl }) => {
  return (
    <article className="teaser-card">
      <img src={imgUrl} alt="beers" />
      <h1>{title}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a,
        eleifend vitae varius venenatis.{" "}
      </p>
    </article>
  );
};

export default TeaserCard;
