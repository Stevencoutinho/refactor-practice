class HeatingPlan {
  withinRange(aNumberRange) {
    return (
      aNumberRange.low >= this.temperatureRange.low &&
      aNumberRange.high <= temperatureRange.high
    );
  }
}

if (!aPlan.withinRange(aRoom.daysTempRange))
  alerts.push("室温が設定値を超えました");
