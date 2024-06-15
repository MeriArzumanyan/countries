import { useEffect, useReducer, useState } from "react";
import { requests } from "../api/api";
import { initialState, reducer } from "./Store/Store";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Country from "./Pages/Country/Country";
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    requests.getAll(dispatch);
  }, []);
  return (
    <div className="container"> 
      <Nav />

      <Routes>
        <Route path="/" element={<Home countries={state.countries} />} />
        <Route
          path="/name/:name"
          element={<Country dispatch={dispatch} country={state.country} />}
        />
      </Routes>
    </div>
  );
}

export default App;
