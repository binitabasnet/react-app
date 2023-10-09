import React, { useEffect, useState } from "react";
import { autocompleteUrl } from "../../urls/urls";
import "./autocomplete.scss";

const Autocomplete = () => {
  const [word, setWord] = useState("");
  const [data, setData] = useState([]);
  const [place, setPlace] = useState([]);

  useEffect(() => {
    const fetchApi = async (url) => {
      fetch(url, {
        method: "GET",
        mode: "cors",
        headers: new Headers({ "Content-Type": "application/json" }),
      })
        .then((res) => res.json())
        .then((json) => {
          if (json.success) {
            setData(json.data);
          }
        });
    };
    const url = `${autocompleteUrl}&word=${word}`;
    fetchApi(url);
  }, [word]);

  const searchCurrentLocation = async (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          setPlace(json.data);
        }
      });
  };

  return (
    <>
      <div className="autocomplete-search">
        <input
          name="myInput"
          placeholder="Search places here"
          onChange={(e) => {
            setWord(e.target.value);
          }}
        />
        <div className="search-data">
          {data.map((item, index) => (
            <ul key={index}>
              <li key={item.id}>{item.name}</li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default Autocomplete;
