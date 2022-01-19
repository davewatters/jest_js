/**
 * @jest-environment jsdom
 */

const addition = require("../scripts/calc");

describe("Calculator", () => {
  describe("Addition function", () => {
    test("shoud return 42 for 20 + 22", () => {
      expect(addition(20, 22)).toBe(42);
    })
    test("shoud return 73 for 42 + 31", () => {
      expect(addition(42, 31)).toBe(73);
    })
  });
  describe("Subtraction function", () => {
  
  });
  describe("Mulitply function", () => {
  
  });
  describe("Divison function", () => {
  
  });
});