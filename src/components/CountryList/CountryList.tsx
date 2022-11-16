import { CountryItem } from "../CountryItem/CountryItem";
import { ICountry } from "../../types/types";

interface ICountryProps {
  country: ICountry[];
}

export const CountryList = ({ country }: ICountryProps) => {
  return <CountryItem country={country} />;
};
