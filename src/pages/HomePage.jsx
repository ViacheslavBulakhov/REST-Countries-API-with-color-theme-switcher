import { useEffect, useState } from "react";
import FiltersBox from "../components/Filters/FiltersBox";
import ListByCountry from "../components/ListByCountry/ListByCountry";
import axios from "axios";
import { ALL_COUNTRIES } from "../config";

const HomePage = () => {
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
      <FiltersBox />
      <ListByCountry data={countries} />
    </>
  );
};

export default HomePage;
