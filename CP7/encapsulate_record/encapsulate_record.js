const organization = new Organization({
  name: "Acme Gooseberries",
  country: "GB",
});

export function getOrganization() {
  return organization;
}

class Organization {
  constructor(data) {
    this._data = data;
  }

  get name() {
    return this._data.name;
  }
  set name(aString) {
    this._data.name = aString;
  }
}
