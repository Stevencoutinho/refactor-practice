function disabilityAmount(anEmployee) {
  if (
    anEmployee.seniority < 2 ||
    anEmployee.monthsDisabled > 12 ||
    anEmployee.isPartTime
  )
    return 0;
  // 障がい手当を計算する
}
