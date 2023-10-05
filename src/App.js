import "./App.css";

import Allroutes from "./Routes/Allroutes";

function App() {
  // const url = "https://map-init.gallimap.com/styles/light/style.json";
  // const [data, setData] = useState();
  // const [error, setError] = useState();

  // const fetchInfo = () => {
  //   return fetch(url, {
  //     method: "GET",
  //     mode: "cors",
  //     headers: new Headers({ "Content-Type": "application/json" }),
  //   })
  //     .then((res) => res.json())
  //     .then((d) => setData(d))
  //     .catch(setError("Failed to load data"));
  // };

  // useEffect(() => {
  //   fetchInfo();
  // }, []);

  return (
    <div className="App">
      <Allroutes />
      {/* {data ? ( */}
      {/* <>
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
        </Map>
        <div className="map-overlay top">
          <div className="map-overlay-inner">
            <div className="places">
              <ul>
                <li>
                  <Button>
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
                    <span>Museum</span>
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
                <li>
                  <Button>
                    <img
                      src={drugs}
                      style={{ height: 30, width: 30 }}
                      alt="restro"
                    />
                    <span>Pharmacies</span>
                  </Button>
                </li>
                <li>
                  <Button>
                    <img
                      src={fuel}
                      style={{ height: 30, width: 30 }}
                      alt="restro"
                    />
                    <span>Petrol Pump</span>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </> */}
      {/* ) : (
      error
      )} */}
    </div>
  );
}

export default App;
