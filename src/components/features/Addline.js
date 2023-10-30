import React from "react";
import { Layer, Marker, Source } from "react-map-gl/maplibre";
import pin from "../../assets/images/pin.png";

const Addline = () => {
  //line geojson
  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          coordinates: [
            [85.32212662010994, 27.71028602848675],
            [85.32553359341227, 27.71002374683431],
            [85.33180435430302, 27.708581200324332],
            [85.33338438854344, 27.70823148920708],
            [85.3367419613125, 27.708100347287512],
            [85.34049454297349, 27.707969205100326],
            [85.34321022682411, 27.7079254910268],
            [85.34223318139834, 27.705180742699696],
            [85.34011001038778, 27.701421172269434],
          ],
          type: "LineString",
        },
      },
    ],
  };

  //line style
  const layerStyle = {
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

  return (
    <>
      <Source id="my-map" type="geojson" data={geojson}>
        <Layer {...layerStyle} />
      </Source>
    </>
  );
};

export default Addline;
