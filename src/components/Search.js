import MaplibreGeocoder from "@maplibre/maplibre-gl-geocoder";
import "@maplibre/maplibre-gl-geocoder/lib/maplibre-gl-geocoder.css";
import mapboxgl from "mapbox-gl";
import maplibregl, { Map } from "maplibre-gl";

import { useControl } from "react-map-gl";

const geocoder_api = {
  // autocomplete api:https://route-init.gallimap.com/api/v1/search/autocomplete?accessToken=89a40903-b75a-46b6-822b-86eebad4fa36
  // &word=kathmandu&currentLat=27.70088&currentLng=85.29645

  forwardGeocode: async (config) => {
    const features = [];
    try {
      let request =
        `https://route-init.gallimap.com/api/v1/search/currentLocation?accessToken=${process.env.REACT_APP_TOKEN_KEY}&name=` +
        config.query +
        `&currentLat=27.700769&currentLng=85.300140`;

      const response = await fetch(request, {
        method: "GET",
        mode: "cors",
        headers: new Headers({ "Content-Type": "application/json" }),
      });

      const geojson = await response.json();
      //  console.log(geojson.data);
      for (let feature of geojson.data?.features) {
        const ll = feature.geometry;
        let center = [
          ll.coordinates[0] + (ll.coordinates[2] - ll.coordinates[0]) / 2,
          ll.coordinates[1] + (ll.coordinates[3] - ll.coordinates[1]) / 2,
        ];
        let point = {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: center,
          },
          properties: feature.properties,
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
    var points = config.query;
    var coordinates = [points.lngLat.lng, points.lngLat.lat];

    while (Math.abs(points.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += points.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    let request =
      `https://route-init.gallimap.com/api/v1/reverse/generalReverse?accessToken=${process.env.REACT_APP_REVERSE_GEOCODING_TOKEN}&lat=` +
      coordinates[1] +
      `&lng` +
      coordinates[0];

    fetch(request, {
      method: "GET",
      mode: "cors",
      headers: new Headers({ "Content-Type": "application/json" }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.features.length) {
          const address = result.features[0].properties.formatted;
          new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(address)
            .addTo(Map);
        } else {
          new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML("No address found")
            .addTo(Map);
        }
      });
  },
};

const Search = () => {
  function LoadGeocoder() {
    useControl(
      () => {
        const ctrl = new MaplibreGeocoder(geocoder_api, {
          maplibregl: maplibregl,
          // collapsed: true,
          showResultsWhileTyping: true,
          minLength: 5,
          trackProximity: true,
          reverseGeocode: true,
          placeholder: "Search for places here",
        });
        return ctrl;
      },
      {
        position: "top-left",
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
        position: "top-left",
      }
    );
  }

  return LoadNavigator();
};

export default Search;
