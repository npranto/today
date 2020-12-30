import React from 'react';
import { BsPlusCircle, BsPlusCircleFill } from "react-icons/bs";
import './AddTask.css';

export default function AddTask(props) {
  const { className = '', isHovering = false } = props;  
  return (
    <button className={`AddTask ${className} ${isHovering ? 'hovering' : ''}`}>
      {isHovering ? <BsPlusCircleFill /> : <BsPlusCircle /> }
      <span>Add task</span>
    </button>
  )
}
