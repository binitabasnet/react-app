import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { searchUrl } from "../../urls/urls";
import { Marker } from "react-map-gl/maplibre";
import pin from "../../assets/images/pin.png";
import { Layer, Source } from "react-map-gl/maplibre";
import "./searchpoint.scss";

const Searchpoint = ({ name, settingZoomLevels }) => {
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
    const response = await fetch(url);
    const geojson = await response.json();

    if (geojson.success) {
      setPlace(geojson.data);

      const features = geojson.data.features.map((feature) => {
        const coordinates = feature.geometry.coordinates;
        let formattedFeature = null;

        if (feature.geometry.type === "Point") {
          // Handle Point geometry
          const [lng, lat] = coordinates;
          settingZoomLevels(lng, lat, 18);
          formattedFeature = {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [lng, lat],
            },
            properties: feature.properties,
          };
        } else if (feature.geometry.type === "Polygon") {
          // Handle Polygon geometry
          const polygonCoordinates = coordinates[0]; // Assuming the first set of coordinates represents the outer ring of the polygon
          settingZoomLevels(
            polygonCoordinates[0][0],
            polygonCoordinates[0][1],
            18
          ); // Assuming the first point of the polygon for setting zoom

          formattedFeature = {
            type: "Feature",
            geometry: {
              type: "Polygon",
              coordinates: [polygonCoordinates],
            },
            properties: feature.properties,
          };
        } else if (feature.geometry.type === "MultiPolygon") {
          // Handle MultiPolygon geometry
          const multiPolygonCoordinates = coordinates.map(
            (polygon) => polygon[0][0]
          ); // Assuming the first point of the first polygon for setting zoom

          settingZoomLevels(
            multiPolygonCoordinates[0][0],
            multiPolygonCoordinates[0][1],
            18
          ); // Assuming the first point of the first polygon for setting zoom

          // console.log(multiPolygonCoordinates[0][0]);
          formattedFeature = {
            type: "Feature",
            geometry: {
              type: "MultiPolygon",
              coordinates: [multiPolygonCoordinates],
            },
            properties: feature.properties,
          };
        } else if (feature.geometry.type === "LineString") {
          // Handle LineString geometry
          settingZoomLevels(coordinates[0][0], coordinates[0][1], 13); // Assuming the first point of the LineString for setting zoom
          formattedFeature = {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: [coordinates],
            },
            properties: feature.properties,
          };
        } else if (feature.geometry.type === "MultiLineString") {
          // Handle MultiLineString geometry
          const multiLineStringCoordinates = coordinates.map(
            (lineString) => lineString[0]
          );
          settingZoomLevels(
            multiLineStringCoordinates[0][0],
            multiLineStringCoordinates[0][1],
            16
          ); // Assuming the first point of the first LineString for setting zoom

          formattedFeature = {
            type: "Feature",
            geometry: {
              type: "MultiLineString",
              coordinates: [multiLineStringCoordinates],
            },
            properties: feature.properties,
          };
        }

        return formattedFeature;
      });

      return {
        type: "FeatureCollection",
        features: features.filter((feature) => feature !== null),
      };
    } else {
      console.log("failed to fetch data");
    }
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
          // let marker = null;

          if (feat.geometry.type === "Point") {
            // layer = <Layer key={index} {...pointStyle} />;
            const point = feat.geometry.coordinates;
            layer = (
              <Marker longitude={point[0]} latitude={point[1]} anchor="bottom">
                <img src={pin} alt="pin" style={{ height: "30px" }} />
              </Marker>
            );
          } else if (
            feat.geometry.type === "Polygon" ||
            feat.geometry.type === "MultiPolygon"
          ) {
            layer = <Layer key={index} {...polygonStyle} />;
          } else if (
            feat.geometry.type === "LineString" ||
            feat.geometry.type === "MultiLineString"
          ) {
            layer = <Layer key={index} {...lineStyle} />;
          }

          return layer;
        })}
      </Source>
    </div>
  );
};

export default Searchpoint;
