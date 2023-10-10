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
import { useState } from "react";
import info from "../../assets/images/info.png";

const Controls = () => {
  const [toggle, setToggle] = useState(true);

  const customAttribution = () => {
    return (
      <div className="copyright">
        {/* <Button
        onClick={() => setToggle(!toggle)}
        className="btn btn-primary mb-5"
      >
        Toggle State
      </Button> */}
        <img src={info} alt="info" onClick={() => setToggle(!toggle)} />
        {toggle && (
          <div>
            <span>© 2023 Galli Maps. All rights reserved.</span>
          </div>
        )}
      </div>
    );
  };

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
      {/* <AttributionControl customAttribution={customAttribution()} /> */}
      {/* <Copyrightattribute position="bottom-right" /> */}
    </>
  );
};

export default Controls;
