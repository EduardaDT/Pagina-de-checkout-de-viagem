import React, { useState } from 'react';

export const Square = ({ count, label }) => (
    <div className="square">
        <span className="count">{count}</span>
        <span style={{ marginTop: "-60px", fontWeight: "bold", color: "GrayText"}}>{label}</span>
    </div>
);

export const PlusButton = ({ onClick }) => (
    <div className="plus-button" onClick={onClick}>+</div>
);

export const MinusButton = ({ onClick }) => (
    <div className="minus-button" onClick={onClick}>-</div>
);

export const TextBox = ({ placeholder, label, onChange }) => (
    <div className="text-box">
      <label htmlFor={placeholder} className="text-label">{label}</label>
      <input
        id={placeholder}
        type="text"
        placeholder={placeholder}
        style={{ paddingLeft: '10px' }}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
  
  export const DateBox = ({ label, onChange }) => (
    <div className="date-box">
      <span className="date-label"><span></span>{label}</span>
      <input
        className="date-input"
        type="date"
        style={{ margin: '0 auto' }}
        onChange={(e) => onChange(e)}
      />
    </div>
  );

  
  
