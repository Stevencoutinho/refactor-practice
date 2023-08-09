class Employee {
  constructor(name) {
    /* ... */
  }
  get isPrivileged() {
    /* ... */
  }
  assignCar() {
    /* ... */
  }
}

class Manager extends Employee {
  constructor(name, grade) {
    super(name);
    this._grade = grade;
    if (this._isPrivileged) this._assignCar(); // 全てのサブクラスでこの処理を行っている
  }
  get isPrivileged() {
    return this._grade > 4;
  }
}
