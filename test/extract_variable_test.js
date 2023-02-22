const { price, Order } = require("./../CP6/extract_variable");
const { describe, it, beforeEach } = require("mocha");
const { expect } = require("chai");

describe("price 関数のテスト", function () {
  it("数量: 10, 単価: ¥500", function () {
    expect(price({ quantity: 10, itemPrice: 500 })).equal(5100);
  });
});

describe("Order クラスのテスト", function () {
  let order;
  beforeEach(function () {
    order = new Order({ quantity: 10, itemPrice: 500 });
  });
  it("price", function () {
    expect(order.price).equal(5100);
  });
});
