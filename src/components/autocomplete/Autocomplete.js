import React, { useEffect, useState } from "react";
import { autocompleteUrl, searchUrl } from "../../urls/urls";
import pin from "../../assets/images/pin.png";
import search from "../../assets/images/search.png";
import directions from "../../assets/images/directions.png";
import "./autocomplete.scss";
import close from "../../assets/images/close.png";
import Searchpoint from "../searchedplaces/Searchpoint";

const Autocomplete = () => {
  const [word, setWord] = useState("");
  const [data, setData] = useState([]);

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
          } else {
            console.log("failed to fetch data");
          }
        });
    };
    const url = `${autocompleteUrl}&word=${word}`;
    fetchApi(url);
  }, [word]);

  //   const handleClear = () => {
  //     setWord("");
  //   };

  return (
    <>
      <div className="autocomplete-search">
        <div className="search-box">
          <img src={pin} alt="pin" />
          <input
            name="myInput"
            placeholder="Search places here"
            onChange={(e) => {
              setWord(e.target.value);
            }}
          />
          <img src={search} alt="search" />
          <img src={directions} alt="directions" />
          {/* <div className="close-button">
            <img onClick={handleClear} src={close} alt="close" />
          </div> */}
        </div>

        <div className="search-data">
          {data.slice(0, 5).map((item, index) => (
            <ul key={index}>
              <li key={item.id}>
                <img src={item.logo} alt="logo" />
                <span>{item.name}</span>
                {/* <img src={close} alt="close" /> */}
                {/* <Searchpoint name={item.name} /> */}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default Autocomplete;
