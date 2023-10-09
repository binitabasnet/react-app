import React from "react";
import { Layer, Source } from "react-map-gl/maplibre";

const Addpoint = () => {
  // point geojson
  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          coordinates: [85.4301907442819, 27.66684588468881],
          type: "Point",
        },
      },
    ],
  };

  //point style
  const layerStyle = {
    id: "point",
    type: "circle",
    source: "point",

    paint: {
      "circle-radius": 10,
      "circle-color": "#007cbf",
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

export default Addpoint;
