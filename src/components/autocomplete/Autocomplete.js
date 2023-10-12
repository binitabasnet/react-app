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

const Autocomplete = () => {
  const [word, setWord] = useState("");
  const [data, setData] = useState([]);

  const fetchApi = async (url) => {
    await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network Response was not ok");
        }
        return response.json();
      })
      .then((json) => {
        setData(json.data);
      })
      .catch((error) => {
        console.error("There has been a problem with  fetch operation:", error);
      });
  };

  useEffect(() => {
    const url = `${autocompleteUrl}&word=${word}`;
    fetchApi(url);
  }, [word]);

  const handleClear = () => {
    setWord("");
  };

  const [showDiv, setShowDiv] = useState(false);

  // Function to handle button click
  const handleButtonClick = () => {
    setShowDiv(!showDiv); // Toggle the state to show/hide the div
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
              <input
                name="myInput"
                placeholder="Search places here"
                onChange={(e) => {
                  setWord(e.target.value);
                }}
              />
            </Col>
            <Col md={2}>
              <img src={search} alt="search" />
            </Col>
            <Col md={2}>
              <img src={directions} alt="directions" />
            </Col>
          </Row>

          {/* <div className="close-button">
            <img onClick={handleClear} src={close} alt="close" />
          </div> */}
        </div>

        <div className="search-data">
          {data.slice(0, 5).map((item, index) => (
            <ul key={index}>
              <li key={item.id}>
                <Row style={{ display: "flex" }}>
                  <Col md={2}>
                    <img src={location} alt="logo" />
                  </Col>
                  <Col md={10}>
                    <Link to="/" onClick={handleButtonClick}>
                      <span>{item.name}</span>

                      {/* Render div based on propToShow */}
                      {showDiv && (
                        <div>
                          <Searchpoint name={item.name} />
                        </div>
                      )}
                    </Link>
                  </Col>
                </Row>

                {/* <img src={close} alt="close" /> */}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default Autocomplete;
