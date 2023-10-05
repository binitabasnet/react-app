import React from "react";
import {
  AttributionControl,
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
} from "react-map-gl/maplibre";

const Controls = () => {
  return (
    <>
      <NavigationControl position="top-right" />
      <GeolocateControl
        position="top-right"
        positionOptions={{
          enableHighAccuracy: true,
        }}
        // trackUserLocation:true
      />

      <FullscreenControl position="top-right" />
      <AttributionControl
        position="bottom-right"
        customAttribution="© 2023 Galli Maps. All rights reserved."
      />
    </>
  );
};

export default Controls;
