import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { searchUrl } from "../../urls/urls";
import { Marker } from "react-map-gl/maplibre";
import pin from "../../assets/images/pin.png";
import { Layer, Source } from "react-map-gl/maplibre";
import "./searchpoint.scss";

const Searchpoint = ({ name }) => {
  const [place, setPlace] = useState("");

  //point style
  const pointStyle = {
    id: "point",
    type: "circle",
    source: "point",

    paint: {
      "circle-radius": 10,
      "circle-color": "#007cbf",
    },
  };

  //line style
  const lineStyle = {
    id: "route",
    type: "line",
    source: "route",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#888",
      "line-width": 8,
    },
  };

  //polygon style
  const polygonStyle = {
    id: "maine",
    type: "fill",
    source: "maine",
    layout: {},
    paint: {
      "fill-color": "#a1d1a7",
      "fill-opacity": 0.6,
    },
  };

  const searchCurrentLocation = async (url) => {
    // await fetch(url)
    //   .then((res) => res.json())
    //   .then((json) => {
    //     if (json.success) {
    //       setPlace(json.data);
    //       console.log(place);
    //     } else {
    //       console.log("failed to fetch data");
    //     }
    //   });
    const features = [];
    const response = await fetch(url);
    const geojson = await response.json();
    console.log("geojson", geojson);
    if (geojson.success) {
      setPlace(geojson.data);
    } else {
      console.log("failed to fetch data");
    }

    for (let feature of geojson.data?.features) {
      const coordinate = geojson.data?.features[0]?.geometry.coordinates;

      // Iterating through the coordinates (latitude and longitude)

      // const center=()=>{
      //   for (let i = 0; i < coordinate.length; i++) {
      //     console.log("Coordinate", i + 1, ":", coordinate[i]);
      //     const center = [coordinate[i], coordinate[i + 1]];
      //   }

      // }
      const center = [coordinate[0], coordinate[1]];

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
    return {
      features: features,
    };
  };

  useEffect(() => {
    const url = `${searchUrl}&name=${name}`;
    searchCurrentLocation(url);
  }, [name]);

  return (
    <div className="point">
      <Source id="my-map" type="geojson" data={place}>
        {place.features?.map((feat, index) => {
          let layer = null;

          if (feat.geometry.type === "Point") {
            layer = <Layer key={index} {...pointStyle} />;
          } else if (feat.geometry.type === "Polygon") {
            layer = <Layer key={index} {...polygonStyle} />;
          } else if (feat.geometry.type === "LineString") {
            layer = <Layer key={index} {...lineStyle} />;
          }

          return layer;
        })}
      </Source>
    </div>
  );
};

export default Searchpoint;
