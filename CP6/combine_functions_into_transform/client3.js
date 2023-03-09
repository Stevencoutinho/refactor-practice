const { enrichReading } = require("./combine_functions_into_transform");

// client 3
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const basicChargeAmount = aReading.baseCharge;
