
import React from "react";
import { ListGroup } from "react-bootstrap";

const TaskItem = ({ data , deleteTask }) => {
    

  return (
    <ListGroup.Item className='d-flex justify-content-between'>
        {data} <button className='btn btn-danger' onClick={()=> deleteTask(data)}>X</button>
    </ListGroup.Item>
  );
};

export default TaskItem;
