const { Reading } = require("./combine_functions_into_class");

// client 2
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const taxableCharge = Math.max(
  0,
  aReading.baseCharge - taxThreshold(aReading.year)
);
