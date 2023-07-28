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
    return this._baseCharge + this._provider.connectionCharge;
  }
}

// caller
const monthCharge = new ChargeCalculator(customer, usage, provider).charge;
