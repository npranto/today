import React from 'react'
import AddTask from '../AddTask/AddTask';
import Header from '../Header/Header';
import Task from '../Task/Task';
import './ForToday.css';

export default function ForToday(props) {
  const { className = '' } = props;
  return (
    <div className={`ForToday ${className}`}>
      <Header sm>
        For Today
      </Header>
      <AddTask />
      <ul className="tasks">
        <Task controlStatus removable />
        <Task controlStatus removable />
        <Task controlStatus removable />
      </ul>
    </div>
  )
}
