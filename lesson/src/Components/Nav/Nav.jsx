import React from "react";
import st from "./Nav.module.css";
const regions = ["ALL", "Europa", "Asia", "America", "Oceania", "Africa"];
const Nav = () => {
  return (
    <nav>
      <div className={st.nav}>
        
          {regions.map((el) => {
            return (
              
                 <button>{el}</button>
              
            );
          })}
        
      </div>
    </nav>
  );
};

export default Nav;
