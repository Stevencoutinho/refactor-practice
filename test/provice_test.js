const { Province, sampleProvinceData } = require("./../CP4/Province");
const { describe, it } = require("mocha");
const assert = require("assert");

describe("province", function () {
  it("shortfall", function () {
    const asia = new Province(sampleProvinceData());
    assert.equal(asia.shortfall, 5);
  });
  it("profit", function () {
    const asia = new Province(sampleProvinceData());
    assert.equal(asia.profit, 230);
  });
});
