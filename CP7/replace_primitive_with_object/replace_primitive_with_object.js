export class Order {
  constructor(data) {
    this._priority = data.priority;
    // 初期化が続く
  }

  get priority() {
    return this._priority;
  }
  set priority(aString) {
    this._priority = aString;
  }
}
