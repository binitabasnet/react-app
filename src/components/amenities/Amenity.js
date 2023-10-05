import React from "react";
import { Button } from "react-bootstrap";
import fork from "../../assets/images/fork.png";
import education from "../../assets/images/education.png";
import hospital from "../../assets/images/hospital.png";
import museum from "../../assets/images/mueseum.png";
import atm from "../../assets/images/atm.png";
import drugs from "../../assets/images/drugs.png";
import fuel from "../../assets/images/fuel.png";
import "./amenity.scss";

const Amenity = () => {
  return (
    <>
      <div className="top">
        <div className="inner">
          <div className="places">
            <ul>
              <li>
                <Button>
                  <img src={fork} alt="restro" />
                  <span>Restaurants</span>
                </Button>
              </li>
              <li>
                <Button>
                  <img src={education} alt="education" />
                  <span>Education</span>
                </Button>
              </li>
              <li>
                <Button>
                  <img src={hospital} alt="hospital" />
                  <span>Hospitals</span>
                </Button>
              </li>
              <li>
                <Button>
                  <img src={museum} alt="museum" />
                  <span>Museum</span>
                </Button>
              </li>
              <li>
                <Button>
                  <img src={atm} alt="atm" />
                  <span>ATMs</span>
                </Button>
              </li>
              <li>
                <Button>
                  <img src={drugs} alt="drugs" />
                  <span>Pharmacies</span>
                </Button>
              </li>
              <li>
                <Button>
                  <img src={fuel} alt="fuel" />
                  <span>Petrol Pump</span>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Amenity;
