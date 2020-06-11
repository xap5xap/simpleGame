import React from "react";
import Cell from "./Cell";
import Card from "../card/Card";

export default {
  title: "Cell",
  component: Cell,
  decorators: [(storyFn) => <div style={{ width: "100px", height: "100px" }}>{storyFn()}</div>],
};

export const Normal = () => (
  <Cell>
    <Card imageNumber={1} isSelected></Card>
  </Cell>
);

export const Match = () => (
  <Cell match>
    <Card imageNumber={1} isSelected></Card>
  </Cell>
);
