import { useEffect, useState } from "react";
import "./App.css";
import FiltersBox from "./components/Filters/FiltersBox";
import Header from "./components/Header/Header";
import ListByCountry from "./components/ListByCountry/ListByCountry";
import Main from "./components/Main/Main";
import axios from "axios";
import { ALL_COUNTRIES } from "./config";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    try {
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    } catch (error) {
      return;
    }
  }, []);

  return (
    <>
      <Header />
      <Main>
        <FiltersBox />
        <ListByCountry data={countries} />
      </Main>
    </>
  );
}

export default App;
