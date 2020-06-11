import React from "react";
import Card from "./Card";

export default {
  title: "Card",
  component: Card,
};

export const Normal = () => <Card></Card>;
export const Selected0 = () => <Card isSelected imageNumber={1}></Card>;
export const Selected1 = () => <Card isSelected imageNumber={2}></Card>;
export const Selected2 = () => <Card isSelected imageNumber={3}></Card>;
export const Selected3 = () => <Card isSelected imageNumber={4}></Card>;
export const Selected4 = () => <Card isSelected imageNumber={5}></Card>;
export const Selected5 = () => <Card isSelected imageNumber={6}></Card>;
export const Selected6 = () => <Card isSelected imageNumber={7}></Card>;
export const Selected7 = () => <Card isSelected imageNumber={8}></Card>;
