// client 1
const aCustomer = site.customer;
// 省略...
let customerName;
if (isUnknown(aCustomer)) customerName = "occupant";
else customerName = aCustomer.name;

// client 2
const plan = isUnknown(aCustomer)
  ? CustomElementRegistry.billingPlans.basic
  : aCustomer.billingPlan;

// client 3
if (isUnknown(aCustomer)) aCustomer.billingPlan = newPlan;

// client 4
const weeksDelinquent = isUnknown(aCustomer)
  ? 0
  : aCustomer.paymentHistory.weeksDelinquentInLastYear;

function isUnknown(arg) {
  if (!(arg instanceof Customer || arg === "unknown"))
    throw new Error(`不正な値について要調査: <${arg}>`);
  return arg === "unknown";
}

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
