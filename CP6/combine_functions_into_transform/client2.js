const { enrichReading } = require("./combine_functions_into_transform");

// client 2
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const taxableCharge = aReading.taxableCharge;
