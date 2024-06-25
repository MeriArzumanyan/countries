import React, { useEffect } from "react";
import st from "./Nav.module.css";
import { requests } from "../../../api/api";
import { forGettingRegion, forManagingInput,forSearchingCountries } from "../../Store/Store";
const regionList = ["ALL", "Europa", "Asia", "America", "Oceania", "Africa"];
const Nav = ({ dispatch, text,name }) => {
  useEffect(()=>{
    requests.getOne(dispatch,name)
  },[dispatch,name])
  return (
    <nav>
      <div className={st.nav}>
        {regionList.map((el) => {
          return (
            <button onClick={() => dispatch(forGettingRegion(el))}>{el}</button>
          );
        })}
        <input
          type="text"
          value={text}
          onChange={(e) => dispatch(forManagingInput(e.target.value))}
        />
        <button onClick={()=>dispatch(forSearchingCountries(text))}>Submit</button>
      </div>
    </nav>
  );
};

export default Nav;
