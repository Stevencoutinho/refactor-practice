class ChargeCalculator {
  constructor(customer, usage, provider) {
    this._customer = customer;
    this._usage = usage;
    this._provider = provider;
  }

  get baseCharge() {
    return this._customer.baseCharge * this._usage;
  }
  get charge() {
    const baseCharge = this._baseCharge;
    return baseCharge + this._provider.connectionCharge;
  }
}

function charge(customer, usage, provider) {
  return new ChargeCalculator(customer, usage, provider).charge;
}

// caller
const monthCharge = charge(customer, usage, provider);
