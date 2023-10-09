import React from "react";
import { Button } from "react-bootstrap";
import {
  AttributionControl,
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
} from "react-map-gl/maplibre";
import view from "../../assets/images/360-degree.png";
import "./controls.scss";
import Copyrightattribute from "../copyright_toggle/Copyrightattribute";

const Controls = () => {
  return (
    <>
      <NavigationControl
        position="bottom-right"
        style={{ borderRadius: "26.02px" }}
      />
      <GeolocateControl
        style={{ borderRadius: "50%" }}
        position="bottom-right"
        positionOptions={{
          enableHighAccuracy: true,
        }}
        // trackUserLocation:true
      />

      {/* <FullscreenControl
        style={{ borderRadius: "50%" }}
        position="bottom-right"
      /> */}
      {/* <AttributionControl customAttribution="© 2023 Galli Maps. All rights reserved." /> */}
      <Copyrightattribute />
    </>
  );
};

export default Controls;
