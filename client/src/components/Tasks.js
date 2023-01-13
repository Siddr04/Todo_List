import React from "react";
import Task from "./Task";

const Tasks = (props) => {
  return (
    <>
      {props.task.map((task) => (
        <Task ide={task.id} text={task.text} day={task.day} onDelete={props.delete} onToggle={props.onToggle} reminder={task.reminder}/>
      ))}
    </>
  );
};

export default Tasks;
