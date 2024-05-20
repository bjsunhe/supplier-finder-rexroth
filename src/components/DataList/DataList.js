import React from 'react';
import './DataList.css';

const DataList = ({ items }) => {
    return (
      <ul className="data-list">
        {items.map((item, index) => (
          <li key={index} className="data-list-item">
            <div><strong>Key 1:</strong> {item.key1}</div>
            <div><strong>Key 2:</strong> {item.key2}</div>
          </li>
        ))}
      </ul>
    );
  };


export default DataList