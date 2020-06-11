import React from "react";
import classNames from "classnames";
import { images } from "../../utils/images";
import "./Card.css";

const Card = ({ isSelected, imageNumber, onClick }) => {
  const handleClick = () => {
    if (isSelected) {
      return;
    }
    onClick();
  };
  const image = String.fromCharCode(isSelected ? images[imageNumber] : images.iddle);
  return (
    <div className={classNames("card", { selected: isSelected })} onClick={handleClick}>
      <span aria-label='emoji' role='img'>
        {image}
      </span>
    </div>
  );
};

export default Card;
