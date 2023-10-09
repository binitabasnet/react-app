import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

const Copyrightattribute = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <Button onClick={() => setToggle(!toggle)} class="btn btn-primary mb-5">
        Toggle State
      </Button>
      {toggle && (
        <div>
          <span>© 2023 Galli Maps. All rights reserved.</span>
        </div>
      )}
    </>
  );
};

export default Copyrightattribute;
