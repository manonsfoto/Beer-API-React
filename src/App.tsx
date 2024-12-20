import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import RootLayout from "./rootLayout/RootLayout";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Details from "./pages/details/Details";
import { useEffect, useState } from "react";
import { IBeer } from "./interface/IBeer";

function App() {
  const [dataBeers, setDataBeers] = useState<IBeer[]>([]);
  const [randomDataBeers, setRandomDataBeers] = useState<IBeer | null>(null);
  const [counter, setCounter] = useState<number>(0);
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      .then((res: IBeer[]) => setDataBeers(res));
  }, []);
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((res) => res.json())
      .then((res: IBeer) => setRandomDataBeers(res));
  }, [counter]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route
          index
          element={<Home counter={counter} setCounter={setCounter} />}
        />
        <Route path="beers" element={<List dataBeers={dataBeers} />} />
        <Route
          path="beers/random"
          element={<Details randomDataBeers={randomDataBeers} />}
        />
        <Route
          path="beers/:idBeer"
          element={<Details dataBeers={dataBeers} />}
        />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
