import React from 'react';
import './ChartBar.css';

export default function ChartBar(props) {
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          style={{ height: `${props.height}%` }}
          className="chart-bar__fill"
        ></div>
      </div>
      <p className="chart-bar__label">{props.label}</p>
    </div>
  );
}
