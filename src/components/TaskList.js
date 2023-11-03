import React from "react";
import { ListGroup } from "react-bootstrap";
import TaskItem from "./TaskItem";

const TaskList = (props) => {
  return (
    <ListGroup>
      {props.tasksArray.map((task, index) => <TaskItem key={index} data={task} deleteTask={props.deleteTask}></TaskItem>)}
    </ListGroup>
  );
};

export default TaskList;
