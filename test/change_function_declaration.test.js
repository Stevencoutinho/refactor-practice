const { circumference } = require("../CP6/change_function_declaration");
const { describe, it } = require("mocha");
const { expect } = require("chai");

describe("circumference 関数のテスト", function () {
  it("半径 10", function () {
    expect(circumference(10)).equal(62.83185307179586);
  });
});
