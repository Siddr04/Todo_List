import React from "react";
import { useState } from "react";
const AddTask = (props) => {
  const [text, setText] = useState("");
  const [daytime, setDayTime] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit=(e)=>{
    e.preventDefault();
    if(!text){
      alert('Please create a task first');
    }
    props.onAdd({text:text,day:daytime,reminder:reminder});
    setText('');
    setDayTime('');
  }



  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add New task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day and Time</label>
        <input
          type="text"
          placeholder="Set day and time"
          value={daytime}
          onChange={(e) => setDayTime(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
      
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Create" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
