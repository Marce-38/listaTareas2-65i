import React from "react";
import { Alert } from "react-bootstrap";

const Status = ({ classroom , enable }) => {
  return (
    <div>
      { enable? <Alert variant='info'>
        La comisión { classroom } está habilitada. 
      </Alert>: null}
    </div>
  );
};

export default Status;
