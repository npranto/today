import React from 'react'
import AddTask from '../AddTask/AddTask';
import Header from '../Header/Header';
import Tasks from '../Tasks/Tasks';
import './ForToday.css';

export default function ForToday(props) {
  const { className = '' } = props;
  return (
    <div className={`ForToday ${className}`}>
      <Header md>
        For Today
      </Header>
      <AddTask />
      <Tasks />
    </div>
  )
}
