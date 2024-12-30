import sum from "../sum";

test("sum fun should calculate the sum of two No.", () => {
  const result = sum(55, 0);

  expect(result).toBe(55); // Assertion..
});
