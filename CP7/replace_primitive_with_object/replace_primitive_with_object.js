export class Order {
  constructor(data) {
    this.priority = data.priority;
    // 初期化が続く
  }

  get priority() {
    return this._priority;
  }
  get priorityString() {
    return this._priority.toString();
  }
  set priority(aString) {
    this._priority = new Priority(aString);
  }
}

class Priority {
  constructor(value) {
    this._value = value;
  }

  toString() {
    return this._value;
  }
}
