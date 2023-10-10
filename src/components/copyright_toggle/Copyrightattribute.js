import React from "react";
import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./copyright.scss";
import info from "../../assets/images/info.png";

const Copyrightattribute = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <Row className="copyright">
      <Col md={3}>
        {toggle && (
          <div>
            <span>© 2023 Galli Maps. All rights reserved.</span>
          </div>
        )}
      </Col>
      <Col md={9} className="info">
        <img src={info} alt="info" onClick={() => setToggle(!toggle)} />
      </Col>
    </Row>
  );
};

export default Copyrightattribute;
