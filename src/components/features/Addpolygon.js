import React from "react";
import { Layer, Source } from "react-map-gl/maplibre";

const Addpolygon = () => {
  //polygon geojson
  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          coordinates: [
            [
              [85.3158980002408, 27.717098456398787],
              [85.31432600169347, 27.70793657757605],
              [85.31419500181505, 27.706544832441907],
              [85.33161798568233, 27.71605473698449],
              [85.32880148937136, 27.726374725459507],
              [85.314719002412, 27.724635335371588],
              [85.314719002412, 27.72353370729516],
              [85.31504650210803, 27.72185225350647],
              [85.31530850186653, 27.72011279126474],
              [85.31557050162337, 27.718373301272834],
              [85.3158980002408, 27.717098456398787],
            ],
          ],
          type: "Polygon",
        },
      },
    ],
  };
  //polygon style
  const layerStyle = {
    id: "maine",
    type: "fill",
    source: "maine",
    layout: {},
    paint: {
      "fill-color": "#a1d1a7",
      "fill-opacity": 0.6,
    },
  };

  return (
    <>
      <Source id="my-map" type="geojson" data={geojson}>
        <Layer {...layerStyle} />
      </Source>
    </>
  );
};

export default Addpolygon;
