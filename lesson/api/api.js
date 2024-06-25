import axios from "axios";
import { forGettingCountries, forGettingCountry, forGettingRegion } from "../src/Store/Store";
const instance = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
});

export const requests = {
  getAll(dispatch) {
    instance.get("all").then((res) => dispatch(forGettingCountries(res.data)));
  },
  getOne(dispatch, name) {
    instance
      .get(`name/${name}`)
      .then((res) => dispatch(forGettingCountry(res.data)));
  },
  getRegion(dispatch,regionName){
    instance.get(`region/${regionName}`).then((res)=>dispatch(forGettingRegion(res.data)))
  }
  
};
