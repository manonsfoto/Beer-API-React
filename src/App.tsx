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

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      .then((res: IBeer[]) => setDataBeers(res));
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="allbeers" element={<List dataBeers={dataBeers} />} />
        {/* <Route path="beers/random" element={<Details />} /> */}
        <Route
          path="allbeers/:idBeer"
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
