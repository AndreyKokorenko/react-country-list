import { Badge } from "../Badge/Badge";
import { Color } from "../../types/types";
import { ICountry } from "../../types/types";

interface ICountryProps {
  country: ICountry;
}

export const CountryItem = ({
  country: { flag, name, capital, region, area, population },
}: ICountryProps) => {
  return (
    <>
      <li className="row row-cols-6 align-items-center border fw-bold">
        <img src={flag} className="img-thumbnail p-4"/>
        <p className="mt-1 mb-1">{name}</p>
        <p className="mt-1 mb-1">{capital}</p>
        <p className="mt-1 mb-1">{region}</p>
        <Badge color={Color.Primary} badgeLabel="area" count={area} />
        <Badge
          color={Color.Secondary}
          badgeLabel="population"
          count={population}
        />
      </li>
    </>
  );
};
