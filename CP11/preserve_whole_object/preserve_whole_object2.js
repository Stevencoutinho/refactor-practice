class HeatingPlan {
  withinRange(low, high) {
    return low >= this.temperatureRange.low && high <= temperatureRange.high;
  }
}

const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;
const isWithinRange = aPlan.withinRange(low, high);
if (!isWithinRange) alerts.push("室温が設定値を超えました");
