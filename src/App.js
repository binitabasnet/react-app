import "./App.css";
import Map, {
  AttributionControl,
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
} from "react-map-gl/maplibre";
import Navbar from "./components/navbar.js";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useState } from "react";
import Controls from "./components/Controls";

function App() {
  const url = "https://map-init.gallimap.com/styles/light/style.json";
  const [data, setData] = useState();
  const [error, setError] = useState();

  const fetchInfo = () => {
    return fetch(url, {
      method: "GET",
      mode: "cors",
      headers: new Headers({ "Content-Type": "application/json" }),
    })
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch(setError("Failed to load data"));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="App">
      {data ? (
        <>
          <Map
            // mapLib={maplibregl}
            initialViewState={{
              longitude: 85.30014,
              latitude: 27.700769,
              zoom: 15,
            }}
            style={{ width: "100%", height: "100vh" }}
            mapStyle={data}
            attributionControl={false}
          >
            <Controls position="top-left" />
            <NavigationControl position="top-right" />
            <GeolocateControl
              positionOptions={{
                enableHighAccuracy: true,
              }}
              // trackUserLocation:true
            />
            <AttributionControl customAttribution="© 2023 Galli Maps. All rights reserved." />
            <FullscreenControl position="bottom-right" />
          </Map>
        </>
      ) : (
        error
      )}
    </div>
  );
}

export default App;
