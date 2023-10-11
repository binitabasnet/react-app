import React from "react";
import { Route, Routes } from "react-router-dom";
import Addpoint from "../components/features/Addpoint";
import Addline from "../components/features/Addline";
import Addpolygon from "../components/features/Addpolygon";
import Home from "../pages/Home";
import Autocomplete from "../components/autocomplete/Autocomplete";
import Searchpoint from "../components/searchedplaces/Searchpoint";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route
        path="/searchpoint"
        element={
          <Home>
            <Searchpoint />
          </Home>
        }
      /> */}
      {/* <Route
        path="/point"
        element={
          <Home>
            <Addpoint />
          </Home>
        }
      /> */}
      {/* <Route
        path="/line"
        element={
          <Home>
            <Addline />
          </Home>
        }
      />
      <Route
        path="/polygon"
        element={
          <Home>
            <Addpolygon />
          </Home>
        }
      /> */}
    </Routes>
  );
};

export default Allroutes;
