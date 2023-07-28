class ChargeCalculator {
  constructor(customer, usage, provider) {}

  get baseCharge() {
    return this._customer.baseCharge * this._usage;
  }
  charge(customer, usage, provider) {
    const baseCharge = customer.baseRate * usage;
    return baseCharge + provider.connectionCharge;
  }
}

function charge(customer, usage, provider) {
  const baseCharge = customer.baseRate * usage;
  return baseCharge + provider.connectionCharge;
}

// caller
const monthCharge = charge(customer, usage, provider);
