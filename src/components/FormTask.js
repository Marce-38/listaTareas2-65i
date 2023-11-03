import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import TaskList from "./TaskList";


const FormTask = () => {
  let taskFromLocalStorage = JSON.parse(localStorage.getItem("taskslist")) || [];
  // definimos los estados-states
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(taskFromLocalStorage);

  const handleSubmit = (e) => {
    e.preventDefault();
    // tasks.push() no usar este modo sino usa spread operator haciendo uso de setTasks
    setTasks([...tasks, task]);
    //limpiar el form
    setTask("");
  };

  //Aqui uso el ciclo de vida del componente

  /* useEffect(()=> {
    // aqui se ejecuta tanto en montaje como actualizacion
    console.log('ejecutando el ciclo de vida del componente FormTask');
  }) */

  /* useEffect(()=> {
    // aqui solo ejecuta el montaje
    console.log('ejecutando el ciclo de vida del componente FormTask');
  }, []); */

  useEffect(() => {
    //aqui se ejecuta tanto en montaje como actualizacion pero dependiendo de uno o varios States
    //console.log('ejecutando el ciclo de vida del componente FormTask');
    localStorage.setItem("taskslist", JSON.stringify(tasks));
  }, [tasks]); // array de dependencias

 

  const deleteTask = (taskName) => {
    let filterArray = tasks.filter((task) => task !== taskName);
    setTasks(filterArray);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="my-3 text-center">
          <Form.Control
            className="mb-3"
            type="text"
            placeholder="Ingresar una tarea"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <Button variant="success" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <section className="container">
        <TaskList tasksArray={tasks} deleteTask={deleteTask}></TaskList>
      </section>
    </>
  );
};

export default FormTask;
