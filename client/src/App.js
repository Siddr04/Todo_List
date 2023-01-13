import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState,useEffect } from "react";
import AddTask from "./components/AddTask";
import Axios from "axios";

function App() {
  

  




  const [tasks, settask] = useState([
    // {
    //   id: 1,
    //   text: "Meet with client",
    //   day: "12th Jan , 2:30 pm",
    //   reminder: false,
    // },
    // {
    //   id: 2,
    //   text: "Kids annual function",
    //   day: "15th Jan , 5:30 pm",
    //   reminder: false,
    // },
    // {
    //   id: 3,
    //   text: "Dinner with Amanda",
    //   day: "20th Jan , 7:30 pm",
    //   reminder: false,
    // },
    // {
    //   id: 4,
    //   text: "Deploy code into production",
    //   day: "22th Jan , 11:00 am",
    //   reminder: false,
    // },
  ]);
  useEffect(() => {
    Axios.get("http://localhost:5000/api/get").then((response) => {
      settask(response.data);
    });
  },[]);
  const [showAdd, setShowadd] = useState(false);

  const onAdd = () => {
    setShowadd(!showAdd);
  };
  const addTask = (task) => {
    Axios.post("http://localhost:5000/api/insert",{ text:task.text,day:task.day,reminder:task.reminder});
    // const id = Math.floor(Math.random() * 100) + 1;
    // const newTask = { id, ...task };
    // console.log(newTask);

    // settask([...tasks, newTask]);
    // console.log(tasks);
  };

  const deleteTask = (id) => {
    settask(tasks.filter((task) => task.id !== id));
    // console.log('click',id)
  };

  const onToggle = (id) => {
    var rem;
    tasks.map((task)=> task.id===id?rem=task.reminder:rem=0);
    rem=1-rem;
    console.log(id);
    Axios.post("http://localhost:5000/api/update",{ id: id,updateReminder:rem});


    // settask(
    //   tasks.map((task) =>
    //     task.id === id ? { ...task, reminder: !task.reminder } : task
    //   )

    // );
  };
  return (
    // console.log(tasks)
    <div className="container">
      <Header
        title="Task List"
        onAdd={onAdd}
        btnTitle={showAdd === true ? "Close" : "Add"}
        col={showAdd === true ? "red" : "green"}
      />
      {showAdd && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks task={tasks} delete={deleteTask} onToggle={onToggle} />
      ) : (
        "No Tasks"
      )}
    </div>
  );
}

export default App;
