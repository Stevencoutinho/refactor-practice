// client 1
const customerName = aCustomer.name;

// client 2
const plan = aCustomer.billingPlan;

// client 3
aCustomer.billingPlan = newPlan;

// client 4
const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;

// client 5
const name = !isUnknown(aCustomer) ? aCustomer.name : "unknown occupant";

function isUnknown(arg) {
  if (!(arg instanceof Customer || arg instanceof UnknownCustomer))
    throw new Error(`不正な値について要調査: <${arg}>`);
  return arg.isUnknown;
}

class Site {
  get customer() {
    return this._customer === "unknown"
      ? new UnknownCustomer()
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

class UnknownCustomer {
  get name() {
    return "occupant";
  }
  get billingPlan() {
    return registry.billingPlans.basic;
  }
  set billingPlan(arg) {
    /* 何もしない */
  }
  get paymentHistory() {
    return new NullPaymentHistory();
  }
  get isUnknown() {
    return true;
  }
}

class NullPaymentHistory {
  get weeksDelinquentInLastYear() {
    return 0;
  }
}
