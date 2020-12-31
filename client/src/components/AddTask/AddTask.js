import React, { useState } from 'react';
import { BsPlusCircle, BsPlusCircleFill } from "react-icons/bs";
import './AddTask.css';

const AddTaskButton = (props) => {
  const { className = '', isHovering = false, handleClickOnAddTask } = props;  
  return (
    <button 
      type="button"
      className={`AddTaskButton ${className} ${isHovering ? 'hover' : ''}`}
      onClick={() => handleClickOnAddTask()}
    >
      {isHovering ? <BsPlusCircleFill /> : <BsPlusCircle /> }
      <span>Add task</span>
    </button>
  );
};

const AddTaskField = (props) => {
  const { className = '', handleClickOnAdd } = props;  
  return (
    <div className={`AddTaskField ${className}`}>
      <input type="text" />
      <button 
        type="button" 
        onClick={() => handleClickOnAdd()}
      >
        Add
      </button>
    </div>
  );
};

export default function AddTask(props) {
  const [ isAddingTask, setIsAddingTask ] = useState(false);

  if (!isAddingTask) {
    return <AddTaskButton {...props} handleClickOnAddTask={() => setIsAddingTask(true)} />;
  }
  return <AddTaskField {...props} handleClickOnAdd={() => setIsAddingTask(false)} />;
}
