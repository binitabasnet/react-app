import React from "react";
import Map from "react-map-gl/maplibre";

import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

import Search from "../components/Search";
import Amenity from "../components/amenities/Amenity";
import Controls from "../components/controls/Controls";
import Addline from "../components/features/Addline";
import Addpoint from "../components/features/Addpoint";
import Addpolygon from "../components/features/Addpolygon";
import { Button } from "react-bootstrap";
import view from "../assets/images/360-degree.png";
import "./home.scss";
import Autocomplete from "../components/autocomplete/Autocomplete";
import { mapUrl } from "../urls/urls";

const Home = () => {
  return (
    <>
      <Map
        mapLib={maplibregl}
        initialViewState={{
          longitude: 85.30014,
          latitude: 27.700769,
          zoom: 15,
        }}
        style={{ width: "100%", height: "100vh" }}
        mapStyle="https://map-init.gallimap.com/styles/light/style.json"
        attributionControl={false}
      >
        {/* <Search /> */}
        <Autocomplete />
        <Controls />
      </Map>
      {/* <div className="view">
        <Button>
          <img src={view} alt="view" />
        </Button>
      </div> */}
      <Amenity />
    </>
  );
};

export default Home;
