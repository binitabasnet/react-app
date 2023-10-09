import React, { useEffect, useState } from "react";
import { autocompleteUrl } from "../../urls/urls";
import "./autocomplete.scss";

const Autocomplete = () => {
  const [word, setWord] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async (url) => {
      //   const response = await fetch(url).then((rep) => console.log(rep));
      fetch(url)
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

  return (
    <>
      <div className="autocomplete-search">
        <input
          name="myInput"
          placeholder="Search for location"
          onChange={(e) => {
            setWord(e.target.value);
          }}
        />
        <div className="search-data">
          {data.map((item, index) => (
            <>
              <ul>
                <li key={index}>{item.name}</li>
              </ul>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Autocomplete;
