class ChargeCalculator {
  constructor(customer, usage, provider) {
    this._usage = usage;
    this._provider = provider;
  }

  get baseCharge() {
    return this._customer.baseCharge * this._usage;
  }
  charge(customer, usage, provider) {
    const baseCharge = customer.baseRate * this._usage;
    return baseCharge + this._provider.connectionCharge;
  }
}

function charge(customer, usage, provider) {
  return new ChargeCalculator(customer, usage, provider).charge(
    customer,
    usage,
    provider
  );
}

// caller
const monthCharge = charge(customer, usage, provider);
