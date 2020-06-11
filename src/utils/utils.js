export function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function configureMatrix(n) {
  const values = {};
  const matrix = {};

  const getCellValue = () => {
    const number = randomIntFromInterval(1, (n * n) / 2);
    const cellValue = values[number] || 0;
    if (cellValue + 1 > 2) {
      return getCellValue();
    }
    values[number] = cellValue + 1;
    return number;
  };

  for (let i = 0; i < n; i++) {
    matrix[i] = {};
    for (let j = 0; j < n; j++) {
      const cellvalue = getCellValue();
      matrix[i][j] = cellvalue;
    }
  }
  return matrix;
}

export const getKey = (i, j) => {
  return `${i},${j}`;
};
