const GET_COUNTRIES = "getCountries";
const GET_COUNTRY = "getCountry";
const GET_REGIONS = "getRegions";
const MANAGE_INPUT = "manageInput";
const SEARCH_COUNTRIES = "searchCountries";

export const initialState = {
  countries: [],
  country: [],
  region: [],
  text: "",
};

export function reducer(state, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case GET_REGIONS:
      return { ...state, region: action.payload };
    case MANAGE_INPUT:
      return {
        ...state,
        text: action.payload,
      };
    case SEARCH_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    default:
      return state;
  }
}

export function forGettingCountries(countriesData) {
  return { type: GET_COUNTRIES, payload: countriesData };
}

export function forGettingCountry(countryData) {
  return { type: GET_COUNTRY, payload: countryData };
}

export function forGettingRegion(regionData) {
  return { type: GET_REGIONS, payload: regionData };
}

export function forManagingInput(inputField) {
  return { type: MANAGE_INPUT, payload: inputField };
}

export function forSearchingCountries(countriesData) {
  return { type: SEARCH_COUNTRIES, payload: countriesData };
}
