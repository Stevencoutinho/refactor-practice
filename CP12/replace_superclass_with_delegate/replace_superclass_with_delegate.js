class CatalogItem {
  constructor(id, title, tags) {
    this._id = id;
    this._title = title;
    this._tags = tags;
  }
  get id() {
    return this._id;
  }
  get title() {
    return this._title;
  }
  hasTag(arg) {
    return this._tags.includes(arg);
  }
}

class Scroll {
  constructor(id, title, tags, dataLastCleaned, catalogID, catalog) {
    this._id = id;
    this._catalogItem = catalog.get(catalogID);
    this._lastCleaned = dataLastCleaned;
  }
  get id() {
    return this._id;
  }
  get title() {
    return this._catalogItem.title;
  }
  hasTag(aString) {
    return this._catalogItem.hasTag(aString);
  }
  needsCleaning(targetDate) {
    const threshold = this.hasTag("revered") ? 700 : 1500;
    return this.daysSinceLastCleaning(targetDate) > threshold;
  }
  daysSinceLastCleaning(targetDate) {
    return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
  }
}

// load routine...
const scrolls = aDocument.map(
  (record) =>
    new Scroll(
      record.id,
      record.catalogData.title,
      record.catalogData.tags,
      LocalDate.parse(record.lastCleaned),
      record.catalogData.id,
      catalog
    )
);
