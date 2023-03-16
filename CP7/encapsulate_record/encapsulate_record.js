export const organization = { name: "Acme Gooseberries", country: "GB" };

export function getRawDataOfOrganization() {
  return organization;
}

class Organization {
  constructor(data) {
    this._data = data;
  }
}
