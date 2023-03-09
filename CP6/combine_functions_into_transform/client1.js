const { enrichReading } = require("./combine_functions_into_transform");

// client 1
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const baseCharge = aReading.baseCharge;
