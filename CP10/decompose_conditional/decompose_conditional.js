if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd)) {
  charge = quantity * plan.sumerRate;
} else {
  charge = quantity * plan.regularRate + plan.regularServiceCharge;
}
