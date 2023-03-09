const {
  enrichReading,
} = require("../CP6/combine_functions_into_transform/combine_functions_into_transform");
const { it } = require("mocha");
const { assert } = require("chai");

it("check reading unchanged", function () {
  const baseReading = { customer: "ivan", quantity: 15, month: 5, year: 2017 };
  const oracle = _.cloneDeep(baseReading);
  enrichReading(baseReading);
  assert.deepEqual(baseReading, oracle);
});
