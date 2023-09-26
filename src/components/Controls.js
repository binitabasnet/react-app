import MaplibreGeocoder from "@maplibre/maplibre-gl-geocoder";
import "@maplibre/maplibre-gl-geocoder/lib/maplibre-gl-geocoder.css";
import maplibregl from "maplibre-gl";
import { useControl } from "react-map-gl";

const geocoder_api = {
  //search api: https://route-init.gallimap.com/api/v1/search/currentLocation?accessToken=51bb27fd-fa08-4853-8a9b-78eb0a4e925e
  // &name=[search word]Lat=[LATITUDE]&currentLng=[LONGITUDE]
  // reverse geocoding:  https://route-init.gallimap.com/api/v1/reverse/generalReverse?accessToken=89a40903-b75a-46b6-822b-86eebad4fa36
  // &lat=[LATITUDE]&lng=[LONGITUDE]

  forwardGeocode: async (config) => {
    const features = [];
    try {
      let request =
        "https://route-init.gallimap.com/api/v1/search/currentLocation?accessToken=51bb27fd-fa08-4853-8a9b-78eb0a4e925e&name=" +
        config.query +
        "&Lat=[LATITUDE]&currentLng=[LONGITUDE]";

      const response = await fetch(request, {
        method: "GET",
        mode: "cors",
        headers: new Headers({ "Content-Type": "application/json" }),
      });
      console.log(config.query);
      const geojson = await response.json();
      for (let feature of geojson.features) {
        let center = [
          feature.bbox[0] + (feature.bbox[2] - feature.bbox[0]) / 2,
          feature.bbox[1] + (feature.bbox[3] - feature.bbox[1]) / 2,
        ];
        let point = {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: center,
          },
          place_name: feature.properties.display_name,
          properties: feature.properties,
          text: feature.properties.display_name,
          place_type: ["place"],
          center: center,
        };
        features.push(point);
      }
    } catch (e) {
      console.error(`Failed to forwardGeocode with error: ${e}`);
    }

    return {
      features: features,
    };
  },

  reverseGeocode: async (config) => {
    const features = [];
    try {
      let request =
        "https://route-init.gallimap.com/api/v1/reverse/generalReverse?accessToken=89a40903-b75a-46b6-822b-86eebad4fa36&lat=" +
        config.query +
        "&lng" +
        config.query;
      const response = await fetch(request, {
        method: "GET",
        mode: "cors",
        headers: new Headers({ "Content-Type": "application/json" }),
      });
      const geojson = await response.json();
      for (let feature of geojson.features) {
        let center = [
          feature.bbox[0] + (feature.bbox[2] - feature.bbox[0]) / 2,
          feature.bbox[1] + (feature.bbox[3] - feature.bbox[1]) / 2,
        ];
        let point = {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: center,
          },
          place_name: feature.properties.display_name,
          properties: feature.properties,
          text: feature.properties.display_name,
          place_type: ["place"],
          center: center,
        };
        features.push(point);
      }
    } catch (e) {
      console.error(`Failed to reverseGeocode with error: ${e}`);
    }
  },
};
const Controls = () => {
  function LoadGeocoder() {
    useControl(
      () => {
        const ctrl = new MaplibreGeocoder(geocoder_api, {
          maplibregl: maplibregl,
          collapsed: true,
          showResultsWhileTyping: true,
          minLength: 5,
        });
        return ctrl;
      },
      {
        position: "top-right",
      }
    );
  }
  return LoadGeocoder();

  function LoadNavigator() {
    useControl(
      () => {
        const ctrl2 = new maplibregl.NavigationControl();
        return ctrl2;
      },
      {
        position: "top-right",
      }
    );
  }

  return LoadNavigator();
};

export default Controls;
