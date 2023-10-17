import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { searchUrl } from "../../urls/urls";
import { Marker } from "react-map-gl/maplibre";
import pin from "../../assets/images/pin.png";
import { Layer, Source } from "react-map-gl/maplibre";
import "./searchpoint.scss";

const Searchpoint = ({ name }) => {
  useEffect(() => {
    console.log(name);
  }, [name]);
  return <div></div>;

  // const [place, setPlace] = useState();
  // useEffect(() => {
  //   console.log(place);
  // }, [place]);
  // //point style
  // const pointStyle = {
  //   id: "point",
  //   type: "circle",
  //   source: "point",
  //   paint: {
  //     "circle-radius": 12,
  //     "circle-color": "#a1d1a7",
  //   },
  // };
  // //line style
  // const lineStyle = {
  //   id: "route",
  //   type: "line",
  //   source: "route",
  //   layout: {
  //     "line-join": "round",
  //     "line-cap": "round",
  //   },
  //   paint: {
  //     "line-color": "#888",
  //     "line-width": 8,
  //   },
  // };
  // //polygon style
  // const polygonStyle = {
  //   id: "maine",
  //   type: "fill",
  //   source: "maine",
  //   layout: {},
  //   paint: {
  //     "fill-color": "#a1d1a7",
  //     "fill-opacity": 0.6,
  //   },
  // };
  // const searchCurrentLocation = async (url) => {
  //   // const features = [];
  //   const response = await fetch(url);
  //   const geojson = await response.json();
  //   console.log(geojson);
  //   // if (geojson.success) {
  //   //   if (geojson?.data.length > 0) {
  //   //     setPlace(geojson.data); // Update state with the fetched data
  //   //     console.log("place", place);
  //   //   }
  //   // } else {
  //   //   console.log("failed to fetch data");
  //   // }
  //   // try {
  //   //   const response = await fetch(url); // Replace with your API endpoint
  //   //   const result = await response.json(); // Parse the JSON data from the response
  //   //   if (result.success) {
  //   //     // console.log(result.data);
  //   //     setPlace(result.data); // Update state with the fetched data
  //   //   }
  //   // } catch (error) {
  //   //   console.error("Error fetching data:", error);
  //   // }
  //   // for (let feature of geojson.data?.features) {
  //   //   const coordinate = geojson.data?.features[0]?.geometry.coordinates;
  //   //   // Iterating through the coordinates (latitude and longitude)
  //   //   // const center=()=>{
  //   //   //   for (let i = 0; i < coordinate.length; i++) {
  //   //   //     console.log("Coordinate", i + 1, ":", coordinate[i]);
  //   //   //     const center = [coordinate[i], coordinate[i + 1]];
  //   //   //   }
  //   //   // }
  //   //   const center = [coordinate[0], coordinate[1]];
  //   //   let point = {
  //   //     type: "Feature",
  //   //     geometry: {
  //   //       type: "Point",
  //   //       coordinates: center,
  //   //     },
  //   //     properties: feature.properties,
  //   //   };
  //   //   features.push(point);
  //   // }
  //   // return {
  //   //   features: features,
  //   // };
  // };
  // useEffect(() => {
  //   const url = `${searchUrl}&name=${name}`;
  //   console.log(url);
  //   // searchCurrentLocation(url);
  // }, [name]);
  // return (
  //   <div className="point">
  //     <Source id="my-map" type="geojson" data={place}>
  //       {place.features?.map((feat, index) => {
  //         let layer = null;
  //         if (feat.geometry.type === "Point") {
  //           layer = <Layer key={index} {...pointStyle} />;
  //         } else if (feat.geometry.type === "Polygon" || "MultiPolygon") {
  //           layer = <Layer key={index} {...polygonStyle} />;
  //         } else if (feat.geometry.type === "LineString" || "MultiLineString") {
  //           layer = <Layer key={index} {...lineStyle} />;
  //         }
  //         return layer;
  //       })}
  //     </Source>
  //   </div>
  // );
};

export default Searchpoint;
