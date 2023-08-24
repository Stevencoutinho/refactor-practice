class Person {
  constructor(name) {
    this._name = name;
    this._genderCode = genderCode || "X";
  }
  get name() {
    return this._name;
  }
  get genderCode() {
    return this._genderCode;
  }
  get isMale() {
    return "M" === this._genderCode;
  }
  // 後は省略
}

class Female extends Person {
  get genderCode() {
    return "F";
  }
}

function createPerson(name) {
  return new Person(name);
}

function createMale(name) {
  return new Male(name);
}

function createFemale(name) {
  return new Female(name);
}

function createPerson(aRecord) {
  switch (aRecord.gender) {
    case "M":
      return new Person(aRecord.name, "M");
    case "F":
      return new Person(aRecord.name, "F");
    default:
      return new Person(aRecord.name, "X");
  }
}

function loadFromInput(data) {
  return data.map((aRecord) => createPerson(aRecord));
}

function isMale(aPerson) {
  return aPerson instanceof Male;
}

// client
const numberOfMales = people.filter((p) => p.isMale).length;
