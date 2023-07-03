class HeatingPlan {
  xxNEWwithinRange(aNumberRange) {
    return this.withinRange(aNumberRange.low, aNumberRange.high);
  }
  withinRange(bottom, top) {
    return (
      bottom >= this.temperatureRange.low && top < +this.temperatureRange.high
    );
  }
}

if (!aPlan.xxNEWwithinRange(aRoom.daysTempRange))
  alerts.push("室温が設定値を超えました");
