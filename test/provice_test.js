const { Province, sampleProvinceData } = require("./../CP4/Province");
const { describe, it } = require("mocha");
const { expect } = require("chai");

describe("province", function () {
  it("shortfall", function () {
    const asia = new Province(sampleProvinceData());
    expect(asia.shortfall).equal(5);
  });
  it("profit", function () {
    const asia = new Province(sampleProvinceData());
    expect(asia.profit).equal(230);
  });
});
