const { price } = require("./../CP6/extract_variable");
const { describe, it } = require("mocha");
const { expect } = require("chai");

describe("price 関数のテスト", function () {
  it("数量: 10, 単価: ¥500", function () {
    expect(price({ quantity: 10, itemPrice: 500 })).equal(5100);
  });
});
