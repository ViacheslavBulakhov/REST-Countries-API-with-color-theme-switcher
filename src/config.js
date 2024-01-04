const BASE_URL = "https://restcountries.com/v3.1";

const fields = "?fields=name,capital,flags,population,region";

const detailFields = `${fields},languages`;

export const ALL_COUNTRIES = `${BASE_URL}/all${fields}`;

export const searchByCountry = (name) =>
  `${BASE_URL}/name/${name}${detailFields}`;

export const filterByCode = (codes) =>
  `${BASE_URL}/alpha?codes=${codes.join(",")}`;
