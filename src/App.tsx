import "./App.scss";
import countries from "./country-data.json";
import { CountryList } from "./components/CountryList/CountryList";
import { getTransformCountries } from "./mapper/mapper";

export const App = () => {
  return (
    <div className="container p-0">
      <h1 className="display-1">Country list</h1>
      <CountryList country={getTransformCountries(countries)} />
    </div>
  );
};
