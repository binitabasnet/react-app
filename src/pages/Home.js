import React, { useState } from "react";
import Map, { Marker } from "react-map-gl/maplibre";

import maplibregl, { CameraOptions } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

import Search from "../components/Search";
import Amenity from "../components/amenities/Amenity";
import Controls from "../components/controls/Controls";
import Addline from "../components/features/Addline";
import Addpoint from "../components/features/Addpoint";
import Addpolygon from "../components/features/Addpolygon";
import { Button, Col, Row } from "react-bootstrap";
import view from "../assets/images/360-degree.png";
import pin from "../assets/images/pin.png";
import "./home.scss";
import Autocomplete from "../components/autocomplete/Autocomplete";
import { mapUrl } from "../urls/urls";
import Copyrightattribute from "../components/copyright_toggle/Copyrightattribute";
import { useRef } from "react";
import { useEffect } from "react";

const Home = () => {
  const [lng, setLng] = useState(85.30014);
  const [lat, setLat] = useState(27.700769);
  const [zoomLevel, setZoomLevel] = useState(15);

  const mapRef = useRef(null);

  useEffect(() => {
    console.log(lng, lat, "testing");
    // let map = mapContainer.current?.getMap();
    mapRef.current?.flyTo({
      center: [lng, lat],
      zoom: zoomLevel,
      speed: 1, // Controls the speed of the flight animation
      curve: 1, // Controls the easing of the flight animation
      essential: true,
      duration: 2000,
    });
    console.log(mapRef.current);
  }, [lat, lng, zoomLevel]);

  const settingZoomLevels = (lng, lat, zoomLevel) => {
    setLng(lng);
    setLat(lat);
    setZoomLevel(zoomLevel);
  };

  return (
    <>
      <Map
        ref={mapRef}
        // zoom={zoomLevel}
        minZoom={10}
        maxZoom={22}
        mapLib={maplibregl}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: zoomLevel,
        }}
        style={{ width: "100%", minHeight: "100vh" }}
        mapStyle="https://map-init.gallimap.com/styles/light/style.json"
        attributionControl={false}
      >
        <Row>
          <Col md={4}>
            <Autocomplete settingZoomLevels={settingZoomLevels} />
          </Col>
          <Col md={8}>
            <Amenity />
          </Col>
        </Row>
        <Controls />
      </Map>
      <Copyrightattribute />
      {/* <div className="view">
        <Button>
          <img src={view} alt="view" />
        </Button>
      </div> */}
    </>
  );
};

export default Home;
