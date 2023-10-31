import React, { useEffect, useState } from "react";
import { autocompleteUrl, searchUrl } from "../../urls/urls";
import pin from "../../assets/images/pin.png";
import search from "../../assets/images/search.png";
import directions from "../../assets/images/directions.png";
import "./autocomplete.scss";
import close from "../../assets/images/close.png";
import Searchpoint from "../searchedplaces/Searchpoint";
import { Col, Row } from "react-bootstrap";
import location from "../../assets/images/location.png";
import { Link } from "react-router-dom";
import { imageUrl } from "../../urls/urls";
import Direction from "../directions/Direction";

const Autocomplete = ({ settingZoomLevels }) => {
  const [word, setWord] = useState("");
  const [data, setData] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);

  const fetchApi = async (url) => {
    try {
      const response = await fetch(url); // Replace with your API endpoint
      const result = await response.json(); // Parse the JSON data from the response
      if (result.success) {
        // console.log(result.data);
        if (result?.data.length > 0) {
          setData(result.data); // Update state with the fetched data
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    // await fetch(url, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Network Response was not ok");
    //     }
    //     return response.json();
    //   })
    //   .then((json) => {
    //     setData(json.data);
    //   })
    //   .catch((error) => {
    //     console.error("There has been a problem with  fetch operation:", error);
    //   });
  };

  const autoCompleteFetchData = async (textWord) => {
    if (textWord.length > 2) {
      const url = `${autocompleteUrl}&word=${textWord}`;
      await fetchApi(url);
    }
  };

  // useEffect(() => {
  //   const url = `${autocompleteUrl}&word=${word}`;
  //   fetchApi(url);
  // });

  const [showDiv, setShowDiv] = useState(false);

  // Function to handle button click
  const handleButtonClick = () => {
    setShowDiv(!showDiv);
  };

  const [direction, setDirection] = useState(false);

  const handleClick = () => {
    setDirection(!direction);
  };

  const handleName = (name) => {
    setWord(name);
    setSelectedWord(name);
    setData([]);
  };

  return (
    <>
      <div className="autocomplete-search">
        <div className="search-box">
          <Row style={{ display: "flex", justifyContent: "space-between" }}>
            <Col md={2}>
              <img src={pin} alt="pin" />
            </Col>
            <Col md={8}>
              {/* {data.map((item, index) => ( */}
              <input
                type="search"
                name="myInput"
                id="textName"
                placeholder="Search places here"
                value={word}
                onChange={(e) => {
                  autoCompleteFetchData(e.target.value);
                  setWord(e.target.value);
                }}
              />
              {/* ))} */}

              {/* </div> */}
            </Col>
            <Col md={2}>
              <img src={search} alt="search" />
            </Col>
            <Col md={2}>
              <img
                src={directions}
                alt="directions"
                onClick={() => {
                  handleClick();
                }}
              />
            </Col>
          </Row>
          {direction && (
            <div>
              <Direction />
            </div>
          )}

          {/* <div className="close-button">
            <img onClick={handleClear} src={close} alt="close" />
          </div> */}
        </div>

        <div className="search-data">
          {data.slice(0, 12).map((item, index) => {
            // const logoImage = `${imageUrl}/${JSON.parse(item.logo)[0].image}`;
            // console.log(`${imageUrl}/${JSON.parse(item.logo)[0].image}`);
            // console.log(JSON.parse(item.logo)[0].image);
            return (
              <ul key={index.toString()}>
                <li key={item.id}>
                  <Row style={{ display: "flex" }}>
                    <Col md={2}>
                      <img src={location} alt="logo" />
                      {/* <img
                        src="https://route-init.gallimap.com/images/NabilBank/96a44137f817b3bb4938762a5ec576b72023848pi4924_447.png"
                        alt="logo"
                      /> */}
                    </Col>
                    <Col md={10}>
                      <Link
                        to="/"
                        onClick={() => {
                          handleName(item.name);
                          handleButtonClick();
                        }}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </Col>
                  </Row>
                </li>
              </ul>
            );
          })}
        </div>
        {/* Render div based on propToShow */}

        {showDiv && (
          <div>
            <Searchpoint
              name={selectedWord}
              settingZoomLevels={settingZoomLevels}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Autocomplete;
