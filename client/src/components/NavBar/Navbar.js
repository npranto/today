import React from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import './NavBar.css';

export default function Navbar(props) {
  const { className = '' } = props;
  return (
    <div className={`NavBar ${className}`}>
      <h1 className="header">Today</h1>
      <div className="tabs">
        <span className="tab">
          <IoSettingsOutline />
        </span>
      </div>
    </div>
  )
}
