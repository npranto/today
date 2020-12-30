import React from 'react';
import Task from '../Task/Task';
import './Tasks.css';

export default function Tasks(props) {
  const { className = '' } = props;
  return (
    <ul className={`Tasks ${className}`}>
      <Task />
      <Task />
      <Task />
    </ul>
  )
}
