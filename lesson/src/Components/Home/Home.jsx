import React, { useEffect } from "react";
import st from "./Home.module.css";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { requests } from "../../../api/api";

const Home = ({ countries, region, dispatch }) => {
  const regionName  = useParams();
  console.log(regionName);////undefined եմ ստանում
  

  useEffect(() => {
    requests.getRegion(dispatch, regionName);
  }, [dispatch, regionName]);

  return (
    <div className={st.allCountries}>
      {region
        ? region.map((el) => (
            <div key={el.name.common} className={st.countryInfo}>
              <NavLink to={`/region/${el.region}`}>
                <img src={el.flags.png} alt="" />
              </NavLink>
              <h2>{el.name.common}</h2>
            </div>
          ))
        : countries.map((el) => (
            <div key={el.name.common} className={st.countryInfo}>
              <NavLink to={`/name/${el.name.common}`}>
                <img src={el.flags.png} alt="" />
              </NavLink>
              <h2>{el.name.common}</h2>
            </div>
          ))}
    </div>
  );
};

export default Home;
