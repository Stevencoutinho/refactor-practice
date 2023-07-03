class HeatingPlan {
  withinRange(low, high) {
    return low >= this.temperatureRange.low && high <= temperatureRange.high;
  }
}

function xxNEWwithinRange(aPlan, tempRange) {
  const low = tempRange.low;
  const high = tempRange.high;
  const isWithinRange = aPlan.withinRange(low, high);
  return isWithinRange;
}

const tempRange = aRoom.daysTempRange;
const isWithinRange = xxNEWwithinRange(aPlan, tempRange);
if (!isWithinRange) alerts.push("室温が設定値を超えました");
