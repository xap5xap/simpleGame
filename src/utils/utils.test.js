const { configureMatrix } = require("./utils");

describe("configureMatrix", () => {
  it.skip("Should return matriz filled", () => {
    const matrix = configureMatrix(2);
    expect(matrix).toBe(expect.any());
  });
});
