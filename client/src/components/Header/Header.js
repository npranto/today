import React from 'react';
import './Header.css';

export default function Header(props) {
  const { className = '', children, sm, md, lg } = props;
  return (
    <h1 
      className={`
        Header 
        ${sm ? 'sm' : ''} 
        ${md ? 'md' : ''}
        ${lg ? 'lg' : ''}
        ${className}
      `}
    > 
      {children} 
    </h1>
  )
}
