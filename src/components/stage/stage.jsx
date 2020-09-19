import React from 'react';
import Cell from '../cell';

const Stage = ({ stage }) => (
  <div>
    {
      stage.map((row) => {
        return row.map((cell, index) => <Cell key={index} type={cell[0]} />)
      })
    }
  </div>
);

export default Stage;