const { circum, circumference } = require("../CP6/change_function_declaration");
const { describe, it } = require("mocha");
const { expect } = require("chai");

describe("circum 関数のテスト", function () {
  it("半径 10", function () {
    expect(circum(10)).equal(62.83185307179586);
  });
});

describe("circumference 関数のテスト", function () {
  it("半径 10", function () {
    expect(circumference(10)).equal(62.83185307179586);
  });
});
