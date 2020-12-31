import React from 'react'
import Header from '../Header/Header';
import './Notes.css';

export default function Notes(props) {
  const { className = '' } = props;
  return (
    <div className={`Notes ${className}`}>
      <Header sm>
        Notes
      </Header>
      <textarea className="note-content" name="notes" rows="10" cols="100">
        At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
      </textarea>
    </div>
  )
}
