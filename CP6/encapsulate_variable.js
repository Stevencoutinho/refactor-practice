let defaultOwner = { firstName: "Martin", lastName: "Fowler" };

spaceship.owner = getDefaultOwner();

setDefaultOwner({ firstName: "Rebecca", lastName: "Parsons" });

function getDefaultOwner() {
  return defaultOwner;
}

function setDefaultOwner(arg) {
  defaultOwner = arg;
}
