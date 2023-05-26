if (summer()) {
  charge = quantity * plan.sumerRate;
} else {
  charge = quantity * plan.regularRate + plan.regularServiceCharge;
}

function summer() {
  return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
}
