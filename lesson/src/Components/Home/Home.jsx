import React from "react";
import st from "./Home.module.css"
import { NavLink } from "react-router-dom";
const Home = ({ countries }) => {
  
  return (
    <div className={st.allCountries}>
      {countries.map((el) => {
        return (
          <div className={st.countryInfo}>
            <NavLink to={`/name/${el.name.common}`}>
              <img src={el.flags.png} alt="" />
            </NavLink>

            <h2>{el.name.common}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
