export class Shipment {
  constructor(data) {
    this._shippingCompany = data.shippingCompany;
    this._trackingNumber = data.trackingNumber;
  }

  get trackingInfo() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
  get shippingCompany() {
    return this._shippingCompany;
  }
  set shippingCompany(arg) {
    this._trackingInformation.shippingCompany = arg;
  }
  get trackingNumber() {
    return this._trackingNumber;
  }
  set trackingNumber(arg) {
    this._trackingNumber = arg;
  }
}
