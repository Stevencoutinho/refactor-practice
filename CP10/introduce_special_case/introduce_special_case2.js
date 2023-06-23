class Site {
  get customer() {
    return this._customer === "unknown"
      ? createUnknownCustomer()
      : this._customer;
  }
}

class Customer {
  get name() {
    return this._name;
  }
  get billingPlan() {
    return this._billingPlan;
  }
  set billingPlan(arg) {
    this._nillingPlan = arg;
  }
  get paymentHistory() {
    return this._paymentHistory;
  }
  get isUnknown() {
    return false;
  }
}

function createUnknownCustomer() {
  return {
    isUnknown: true,
    name: "occupant",
  };
}

function isUnknown(arg) {
  return arg.isUnknown;
}

// client 1
const aCustomer = site.customer;
// 省略...
let customerName;
if (isUnknown(aCustomer)) customerName = "occupant";
else customerName = aCustomer.name;

// client 2
const plan = isUnknown(aCustomer)
  ? registry.billingPlans.basic
  : aCustomer.billingPlan;

// client 3
const weeksDelinquent = isUnknown(aCustomer)
  ? 0
  : aCustomer.paymentHistory.weeksDelinquentInLastYear;
