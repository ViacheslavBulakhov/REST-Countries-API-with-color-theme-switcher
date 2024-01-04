import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchByCountry } from "../config";

const Details = () => {
  const [countryData, setCountryData] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    try {
      axios.get(searchByCountry(name)).then(({ data }) => setCountryData(data));
    } catch (error) {
      return;
    }
  }, [name]);
  console.log(countryData);

  return <div>name</div>;
};

export default Details;
