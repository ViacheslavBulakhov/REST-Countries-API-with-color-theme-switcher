/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import {
  CardBody,
  CardTitle,
  CardWrap,
  DescriptionList,
  Img,
} from "../ListByCountry/Card/CardStyled";

const CountryInfo = ({
  item: {
    name,
    capital = [],
    flags,
    population,
    region,
    subregion,
    nativeName,
    languages,
    tld,
  },
}) => {
  const navigate = useNavigate();

  const isCapital =
    capital.length > 0
      ? ` ${capital.join(", ")}`
      : ` ${name.common} does not have a capital.`;

  const localePopulation = ` ${population.toLocaleString()}`;

  return (
    <CardWrap onClick={() => navigate(`country/${name.common}`)}>
      <Img src={flags.png} alt={flags.alt} />
      <CardBody>
        <CardTitle>{name.common}</CardTitle>
        <DescriptionList>
          <p>
            Native Name:
            <span>{` ${nativeName.join(", ")}`}</span>
          </p>
          <p>
            Population:
            <span>{localePopulation}</span>
          </p>
          <p>
            Region:
            <span>{` ${region}`}</span>
          </p>
          <p>
            Sub Region:
            <span>{` ${subregion}`}</span>
          </p>
          <p>
            Capital:
            <span>{isCapital}</span>
          </p>

          <br />

          <p>
            Top Level Domain:
            <span>{` ${tld[0]}`}</span>
          </p>
          <p>
            Currencies:
            <span>{isCapital}</span>
          </p>
          <p>
            Languages:
            <span>{` ${languages.join(", ")}`}</span>
          </p>
        </DescriptionList>
      </CardBody>
    </CardWrap>
  );
};

export default CountryInfo;
