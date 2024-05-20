import React from 'react';
import './Table.css';

const Table = ({ data }) => {
  return (
    <table className="attributes-table">
      <thead>
        <tr>
          <th colSpan="2">{data.question}</th>
        </tr>
      </thead>
      <tbody>
        {data.answer.map((item, index) => (
          <tr key={index}>
            <td>{item.attribute}</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};



export default Table;
