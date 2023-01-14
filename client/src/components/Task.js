import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = (props) => {
  // const [col, setCol] = useState("yellow");
  // AXIOS CALL IF REM VAL 1 THEN SETCOLO TO GREEN .. 
  return (
    <div
    
    className={`task ${props.reminder && 'reminder'}`}
    onDoubleClick={() => props.onToggle(props.ide)}
  >
    
      <h3>
        {props.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => props.onDelete(props.ide)}
        />
      </h3>
      <p>{props.day}</p>
    </div>
  );
};

export default Task;
