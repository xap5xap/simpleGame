import React, { useState } from "react";
import classNames from "classnames";
import "./App.css";
import Cell from "./components/cell/Cell";
import Card from "./components/card/Card";
import { configureMatrix, getKey } from "./utils/utils";

const n = 4;

function App() {
  const [matrix] = useState(() => {
    return configureMatrix(n);
  });

  const [matchedNumbers, setMatchedNumbers] = useState([]);
  const [cardsSelected, setCardsSelected] = useState([]);

  const valueNumberOfId = (id) => {
    if (!id) return;
    const i = parseInt(id.split(",")[0]);
    const j = parseInt(id.split(",")[1]);
    return matrix[i][j];
  };
  const handleClickCard = (id) => {
    if (cardsSelected.length === 2) {
      setCardsSelected(() => [id]);
    } else {
      setCardsSelected((values) => {
        if (valueNumberOfId(values[0]) === valueNumberOfId(id)) {
          setMatchedNumbers((values) => {
            return [...values, valueNumberOfId(id)];
          });
        }
        return [...values, id];
      });
    }
  };

  const isSelceted = (id) => {
    return cardsSelected.findIndex((el) => el === id) !== -1;
  };

  const renderCells = () => {
    const cells = [];

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const id = getKey(i, j);
        const number = matrix[i][j];
        const isMatched = matchedNumbers.includes(number);
        cells.push(
          <Cell
            isMatched={isMatched}
            key={id}
            selected={isSelceted(id) && cardsSelected.length === 2}
          >
            <Card
              isSelected={isSelceted(id)}
              onClick={() => handleClickCard(id)}
              imageNumber={number}
            ></Card>
          </Cell>
        );
      }
    }
    return cells;
  };
  const finish = matchedNumbers.length === (n * n) / 2;
  return (
    <div className='App'>
      <h1>{finish ? "WINNER!!!" : "Let's play"}</h1>
      <div
        className={classNames("grid", { finish })}
        style={{
          gridTemplateColumns: `repeat(${n}, 100px)`,
          gridTemplateRows: `repeat(${n}, 100px)`,
        }}
      >
        {renderCells()}
      </div>
    </div>
  );
}

export default App;
