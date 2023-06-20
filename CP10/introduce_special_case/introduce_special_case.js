// client 1
const aCustomer = site.customer;
// 省略...
let customerName;
if (aCustomer === "unknown") customerName = "occupant";
else customerName = aCustomer.name;

// client 2
const plan =
  aCustomer === "unknown"
    ? CustomElementRegistry.billingPlans.basic
    : aCustomer.billingPlan;

// client 3
if (aCustomer !== "unknown") aCustomer.billingPlan = newPlan;

// client 4
const weeksDelinquent =
  aCustomer === "unknown"
    ? 0
    : aCustomer.paymentHistory.weeksDelinquentInLastYear;

class Site {
  get customer() {
    return this._customer;
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

class UnknownCustomer {
  get isUnknown() {
    return true;
  }
}
