const { Person, Course } = require("./encapsulate_collection");

const aPerson = new Person("Steven");
const numAdvancedCourses = aPerson.courses.filter((c) => c.isAdvanced).length;

const basicCourseNames = readBasicCourseNames("hoge");
aPerson.courses = basicCourseNames.map((name) => new Course(name, false));

for (const name of readBasicCourseNames("hoge")) {
  aPerson.addCourse(new Course(name, false));
}
