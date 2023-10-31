import React from "react";
import { Col, Row } from "react-bootstrap";
import walk from "../../assets/images/walk.png";
import bike from "../../assets/images/manbiking.png";
import cycle from "../../assets/images/bike.png";
import taxi from "../../assets/images/taxi-stop.png";
import circle from "../../assets/images/circle.png";
import destination from "../../assets/images/destination.png";
import reverse from "../../assets/images/reversearrow.png";
import "./direction.scss";

const Direction = () => {
  return (
    <div className="directions">
      <Row className="icons">
        <Col md={3}>
          <img src={walk} alt="walk" />
        </Col>
        <Col md={3}>
          <img src={bike} alt="bike" />
        </Col>
        <Col md={3}>
          <img src={cycle} alt="cycle" />
        </Col>
        <Col md={3}>
          <img src={taxi} alt="taxi" />
        </Col>
      </Row>
      <Row style={{ display: "flex" }}>
        <Col md={9}>
          <div className="direction-from">
            <Row style={{ display: "flex" }}>
              <Col md={3}>
                <img src={circle} alt="circle" />
              </Col>
              <Col md={9}>
                <input
                  type="text"
                  name="myInput"
                  id="text"
                  placeholder="From"
                />
              </Col>
            </Row>
          </div>

          <div className="direction-to">
            <Row style={{ display: "flex" }}>
              <Col md={3}>
                <img src={destination} alt="circle" />
              </Col>
              <Col md={9}>
                <input type="text" name="myInput" id="text" placeholder="To" />
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={3}>
          <div className="reverse-places">
            <img src={reverse} alt="reverse" />
          </div>
        </Col>
      </Row>

      <div className="locate">
        <Row style={{ display: "flex" }}>
          <Col md={3}>
            <img src={destination} alt="circle" />
          </Col>
          <Col md={9}>
            <span>Your location</span>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Direction;
