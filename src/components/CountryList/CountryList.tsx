import { CountryItem } from "../CountryItem/CountryItem";
import { ICountry } from "../../types/types";

interface ICountryProps {
  countries: ICountry[];
}

export const CountryList = ({ countries }: ICountryProps) => {
  return (
    <ul className="list-group">
      {countries.map((country) => (
        <CountryItem country={country} key={country.name} />
      ))}
    </ul>
  );
};
