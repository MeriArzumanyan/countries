import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { requests } from "../../../api/api";

const Country = ({ dispatch, country }) => {
   const { name } = useParams();

  useEffect(() => {
    requests.getOne(dispatch, name);
  }, [dispatch, name]);

  return (
    <div>
      {country.map((el) => {
        return (
          <div>
            <img src={el.flags.png} alt="" />
            <h1>{el.name.common}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Country;
