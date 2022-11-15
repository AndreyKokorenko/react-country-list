export enum Color {
  Primary = "primary",
  Secondary = "secondary",
  Success = "success",
  Danger = "danger",
  Warning = "warning",
  Info = "info",
  Light = "light",
  Dark = "dark",
}

export type BadgeLabel = "area" | "population";

export interface ICountry {
  flags: string;
  name: string;
  capital: string;
  population: number;
  area: number;
  region: string;
}

export interface ICountryAPI {
  flags: ICountryFlagAPI;
  name: ICountryNativeNameAPI;
  capital: string[];
  region: string;
  area: number;
  population: number;
}

export interface ICountryFlagAPI {
  png: string;
  svg: string;
}

export interface ICountryNativeNameAPI {
  common: string;
  official: string;
  nativeName?: ICountryNativeLangAPI;
}

export interface ICountryNativeLangAPI {
  spa?: ICountryNativeNameAPI;
}

export interface ICountryNativeNameAPI {
  official: string;
  common: string;
}
