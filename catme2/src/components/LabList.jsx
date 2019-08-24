import React from "react";
import { Route } from "react-router-dom";

const LabList = props => {
  const lab = [];

  const handleClick = index => {
    this.props.history.push("/allocate", { key: index });
  };

  for (const [index, value] of props.entries()) {
    lab.push(
      <li key={index} onClick={() => handleClick(index)}>
        {value}
      </li>
    );
  }

  return <div> {lab} </div>;
};

export default LabList;
