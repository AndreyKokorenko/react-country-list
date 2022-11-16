import { Badge } from "../Badge/Badge";
import { Color } from "../../types/types";
import { ICountry } from "../../types/types";

interface ICountryProps {
  country: ICountry[];
}

export const CountryItem = ({ country }: ICountryProps) => {
  return (
    <ul className="list-group">
      {Object.values(country).map(
        ({ name, flags, capital, region, area, population }) => (
          <li
            className="row row-cols-6 align-items-center border fw-bold"
            key={name}
          >
            <img src={flags} className="img-thumbnail p-4"></img>
            <p className="mt-1 mb-1">{name}</p>
            <p className="mt-1 mb-1">{capital}</p>
            <p className="mt-1 mb-1">{region}</p>
            <Badge color={Color.Primary} badgeLabel="area">
              : {area}
            </Badge>
            <Badge color={Color.Secondary} badgeLabel="population">
              : {population}
            </Badge>
          </li>
        )
      )}
    </ul>
  );
};
