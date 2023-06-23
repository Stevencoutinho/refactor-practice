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
    billingPlan: registry.billingPlans.basic,
    paymentHistory: {
      weeksDelinquentInLastYear: 0,
    },
  };
}

function isUnknown(arg) {
  return arg.isUnknown;
}

// client 1
const customerName = aCustomer.name;

// client 2
const plan = aCustomer.billingPlan;

// client 3
const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
