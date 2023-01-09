import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'
import AddTask from "./components/AddTask";

function App() {
  const [tasks,settask]=useState([
    {
      id:1,
      text:'Meet with client',
      day:'12th Jan , 2:30 pm',
      reminder:false
    },
    {
      id:2,
      text:'Kids annual function',
      day:'15th Jan , 5:30 pm',
      reminder:false
    },
    {
      id:3,
      text:'Dinner with Amanda',
      day:'20th Jan , 7:30 pm',
      reminder:false
    },
    {
      id:4,
      text:'Deploy code into production',
      day:'22th Jan , 11:00 am',
      reminder:false
    },
  
  ])
  const deleteTask=(id)=>{
    settask(tasks.filter((task)=> task.id !== id))
    // console.log('click',id)
  }

  const onToggle=(id)=>{
      settask(tasks.map((task)=> task.id===id ?{...task,reminder:!(task.reminder)}:task))
  }
  return (
    <div className="container">
      
      <Header title="Task List"/>
      <AddTask/>
      {tasks.length>0 ? ( <Tasks task={tasks} delete={deleteTask} onToggle={onToggle}/>):('No Tasks')}
    </div>
  );
}

export default App;
