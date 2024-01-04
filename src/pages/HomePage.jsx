import React from "react";
import FiltersBox from "../components/Filters/FiltersBox";
import ListByCountry from "../components/ListByCountry/ListByCountry";

const HomePage = () => {
  return (
    <>
      <FiltersBox />
      <ListByCountry data={countries} />
    </>
  );
};

export default HomePage;
