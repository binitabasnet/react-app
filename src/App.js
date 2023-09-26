import "./App.css";
import Map, {
  AttributionControl,
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
} from "react-map-gl/maplibre";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useState } from "react";
import Search from "./components/Search";
import { Button, Overlay } from "react-bootstrap";
import fork from "./assets/images/fork.png";
import education from "./assets/images/education.png";
import hospital from "./assets/images/hospital.png";
import museum from "./assets/images/mueseum.png";
import atm from "./assets/images/atm.png";

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
            mapLib={maplibregl}
            initialViewState={{
              longitude: 85.30014,
              latitude: 27.700769,
              zoom: 15,
            }}
            style={{ width: "100%", height: "100vh" }}
            mapStyle={data}
            attributionControl={false}
          >
            <Search />

            <NavigationControl position="top-right" />
            <GeolocateControl
              position="top-right"
              positionOptions={{
                enableHighAccuracy: true,
              }}
              // trackUserLocation:true
            />
            <AttributionControl
              position="bottom-right"
              customAttribution="© 2023 Galli Maps. All rights reserved."
            />
            <FullscreenControl position="bottom-right" />
          </Map>
          <div class="map-overlay top">
            <div class="map-overlay-inner">
              <div className="places">
                <ul>
                  <li>
                    <Button variant="outline-light">
                      <img
                        src={fork}
                        style={{ height: 30, width: 30 }}
                        alt="restro"
                      />
                      <span>Restaurants</span>
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <img
                        src={education}
                        style={{ height: 30, width: 30 }}
                        alt="restro"
                      />
                      <span>Education</span>
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <img
                        src={hospital}
                        style={{ height: 30, width: 30 }}
                        alt="restro"
                      />
                      <span>Hospitals</span>
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <img
                        src={museum}
                        style={{ height: 30, width: 30 }}
                        alt="restro"
                      />
                      <span>Mueseum</span>
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <img
                        src={atm}
                        style={{ height: 30, width: 30 }}
                        alt="restro"
                      />
                      <span>ATMs</span>
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      ) : (
        error
      )}
    </div>
  );
}

export default App;
