import React from 'react';
import { MdCancel } from "react-icons/md";
import './Task.css';


export default function Task(props) {
  const { 
    className = '', 
    controlStatus = false,  
    removable = false,
  } = props;
  return (
    <li className={`Task ${className}`}>
      <span className="task-content">Get milk from groceries Get milk from groceries Get milk from groceries Get milk from groceries Get milk from groceries Get milk from groceries Get milk from groceries</span>
      <div className="task-actions">
        {controlStatus && (
          <span className="task-action task-check">
            <input type="checkbox" name="taskStatus" />
          </span>
        )}
        {removable && (
          <span className="task-action task-remove">
            <MdCancel size="1.5em" class />
          </span>
        )}
      </div>
    </li>
  )
}
