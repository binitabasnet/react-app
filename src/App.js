import "./App.css";
import Map, { NavigationControl } from "react-map-gl";
import Navbar from "./components/navbar.js";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Map
        mapLib={maplibregl}
        initialViewState={{
          longitude: 16.62662018,
          latitude: 49.2125578,
          zoom: 14,
        }}
        style={{ width: "100%", height: " calc(100vh - 98px)" }}
        mapStyle="https://api.maptiler.com/maps/basic-v2/style.json?key=d0X9pn0mMLK2F6CEa34M"
        // mapStyle="https://api.maptiler.com/maps/streets/style.json?key=qK7LLaG7piAsHQIB6JId"
      >
        <NavigationControl position="top-left" />
      </Map>
    </div>
  );
}

export default App;
