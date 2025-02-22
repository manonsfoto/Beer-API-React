import ItemCard from "../../components/itemCard/ItemCard";
import Navbar from "../../components/navbar/Navbar";
import { IBeer } from "../../interface/IBeer";
import "./List.css";
interface Props {
  dataBeers: IBeer[];
}
const List: React.FC<Props> = ({ dataBeers }) => {
  return (
    <section>
      <main className="stn-list">
        {" "}
        {dataBeers.map((singleBeer) => (
          <ItemCard key={singleBeer._id} singleBeer={singleBeer} />
        ))}
      </main>

      <Navbar />
    </section>
  );
};

export default List;
