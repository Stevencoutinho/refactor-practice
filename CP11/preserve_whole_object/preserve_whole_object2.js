class HeatingPlan {
  xxNEWwithinRange(aPlan, tempRange) {
    const low = tempRange.low;
    const high = tempRange.high;
    const isWithinRange = aPlan.withinRange(low, high);
    return isWithinRange;
  }
  withinRange(low, high) {
    return low >= this.temperatureRange.low && high <= temperatureRange.high;
  }
}

const tempRange = aRoom.daysTempRange;
const isWithinRange = aPlan.xxNEWwithinRange(aPlan, tempRange);
if (!isWithinRange) alerts.push("室温が設定値を超えました");
