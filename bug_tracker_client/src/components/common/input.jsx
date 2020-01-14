import React from "react";

const Input = ({ type, name, label, value, error, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        id={name}
        className="form-control"
        autoFocus
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
