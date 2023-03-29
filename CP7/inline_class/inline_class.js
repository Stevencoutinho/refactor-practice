class TrackingInformation {
  constructor(data) {
    this._shippingCompany = data.shippingCompany;
    this._trackingNumber = data.trackingNumber;
  }

  get shippingCompany() {
    return this._shippingCompany;
  }
  set shippingCompany(arg) {
    this._shippingCompany = arg;
  }
  get trackingNumber() {
    return this._trackingNumber;
  }
  set trackingNumber(arg) {
    this._trackingNumber = arg;
  }
  get display() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

export class Shipment {
  constructor(data) {
    this._shippingCompany = data.shippingCompany;
    this._trackingNumber = data.trackingNumber;
  }

  get trackingInfo() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
  get trackingInformation() {
    return this._trackingInformation;
  }
  set trackingInformation(aTrackingInformation) {
    this._trackingInformation = aTrackingInformation;
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
