import React from 'react'
import AddTask from '../AddTask/AddTask';
import Header from '../Header/Header';
import Task from '../Task/Task';
import './FollowUp.css';

export default function FollowUp(props) {
  const { className = '' } = props;
  return (
    <div className={`FollowUp ${className}`}>
      <Header sm>
        Follow Up
      </Header>
      <AddTask />
      <ul className="tasks">
        <Task removable />
        <Task removable />
        <Task removable />
      </ul>
    </div>
  )
}
