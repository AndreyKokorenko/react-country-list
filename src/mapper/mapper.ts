import { ICountryAPI } from "../types/types";
import { ICountry } from "../types/types";

export const getTransformCountries = (countries: ICountryAPI[]): ICountry[] => {
  return countries.map(({ flags, name, capital, region, area, population }) => {
    return {
      flag: flags.svg,
      name: name.common,
      capital: capital[0],
      region: region,
      area: area,
      population: population,
    };
  });
};
