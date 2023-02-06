const { Province, sampleProvinceData } = require("./../CP4/Province");
const { describe, it, beforeEach } = require("mocha");
const { expect } = require("chai");

describe("province", function () {
  let asia;
  beforeEach(function () {
    asia = new Province(sampleProvinceData());
  });
  it("shortfall", function () {
    expect(asia.shortfall).equal(5);
  });
  it("profit", function () {
    expect(asia.profit).equal(230);
  });
});
