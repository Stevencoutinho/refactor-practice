class HeatingPlan {
  withinRange(bottom, top) {
    return (
      bottom >= this.temperatureRange.low && top < +this.temperatureRange.high
    );
  }
}

const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;
if (!aPlan.withinRange(low, high)) alerts.push("室温が設定値を超えました");
