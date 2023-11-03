import React from "react";
import Status from "./Status";

const Heading = (props) => {
  // console.log(props);
  /* const { classroom , enable } = props;
    console.log(classroom , enable); */
  return (
    <div>
      <h1 className="display-4 text-center">
        Lista de Tareas {props.classroom}
      </h1>
      <Status classroom={props.classroom} enable={props.enable}/>
      <hr />
    </div>
  );
};

export default Heading;
