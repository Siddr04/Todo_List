import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState,useEffect } from "react";
import AddTask from "./components/AddTask";
import Axios from "axios";

function App() {
  const [tasks, settask] = useState([]);
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
    Axios.post("http://localhost:5000/api/insert",{ text:task.text,day:task.day,reminder:task.reminder}).then((response)=>{
      settask(response.data);
    });
    
  };

  const deleteTask = (id) => {
    // settask(tasks.filter((task) => task.id !== id));
    Axios.post("http://localhost:5000/api/delete",{ id: id}).then((response)=>{
        settask(response.data);
      });
    
  };

  const onToggle = (id) => {
    let rem = null;
    tasks.map((task)=> {
      if(task.id === id) {
        rem = task.reminder;
      }
    });
    rem=!rem;
    if(rem !== null){
      Axios.post("http://localhost:5000/api/update",{ id: id,updateReminder:rem}).then((response)=>{
        settask(response.data);
      });
    } else {
      throw new Error('rem is null, ID not found');
    }
    
  };
  return (
    
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
