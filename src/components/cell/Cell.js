import React from "react";
import classNames from "classnames";
import "./Cell.css";

const Cell = ({ children, isMatched, selected }) => {
  return (
    <div className={classNames("cell", { match: isMatched }, { noMatch: !isMatched && selected })}>
      {isMatched ? null : children}
    </div>
  );
};

export default Cell;
