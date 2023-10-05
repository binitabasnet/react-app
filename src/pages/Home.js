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

const Home = () => {
  const url = "https://map-init.gallimap.com/styles/light/style.json";

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
        mapStyle={url}
        attributionControl={false}
      >
        <Search />
        {/* <Addpoint /> */}
        {/* <Addline /> */}
        {/* <Addpolygon /> */}
        <Controls />
      </Map>
      <Amenity />
    </>
  );
};

export default Home;
