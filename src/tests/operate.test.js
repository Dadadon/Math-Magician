import operate from "../components/logic/operate";

test("Testing division operator", () => {
  expect(operate(10, 5, "÷")).toBe("2");
});
test("Testing subtraction operator", () => {
  expect(operate(6, 4, "-")).toBe("2");
});
test("Testing mupltiplication operator", () => {
  expect(operate(3, 4, "x")).toBe("12");
});
test("Testing addition operator", () => {
  expect(operate(10, 5, "+")).toBe("15");
});
