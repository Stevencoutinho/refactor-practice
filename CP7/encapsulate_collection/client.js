const { Person } = require("./encapsulate_collection");

const aPerson = new Person("Steven");
const numAdvancedCourses = aPerson.courses.filter((c) => c.isAdvanced).length;
