class HeatingPlan {
  xxNEWwithinRange(aNumberRange) {
    return (
      aNumberRange.low >= this.temperatureRange.low &&
      aNumberRange.high <= temperatureRange.high
    );
  }
}

if (!aPlan.xxNEWwithinRange(aRoom.daysTempRange))
  alerts.push("室温が設定値を超えました");
