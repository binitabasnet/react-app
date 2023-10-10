import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { searchUrl } from "../../urls/urls";
import { Marker } from "react-map-gl/maplibre";
import pin from "../../assets/images/pin.png";

const Searchpoint = (name) => {
  const [place, setPlace] = useState([]);

  useEffect(() => {
    const searchCurrentLocation = async (url) => {
      await fetch(url)
        .then((res) => res.json())
        .then((json) => {
          if (json.success) {
            setPlace(json.data);
          } else {
            console.log("failed to fetch data");
          }
        });
    };
    const url = `${searchUrl}&name=${place}`;
    searchCurrentLocation(url);
  }, [place]);

  return (
    <div>
      <Marker longitude={-100} latitude={40} anchor="bottom">
        {setPlace(name)}
        <img src={pin} alt="location-marker" />
      </Marker>
    </div>
  );
};

export default Searchpoint;
