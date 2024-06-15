const GET_COUNTRIES = "getCountries";
const GET_COUNTRY = "getCountry";
export const initialState = {
  countries: [],
  country: [],
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
    default:
    return  state;
  }
}
export function forGettingCountries(countriesData) {
  return { type: GET_COUNTRIES, payload: countriesData };
}
export function forGettingCountry(countryData) {
  return { type: GET_COUNTRY, payload: countryData };
}
