const { Order } = require("./replace_primitive_with_object");

const orders = [
  { priority: "high" },
  { priority: "high" },
  { priority: "rush" },
  { priority: "low" },
];

const highPriorityCont = orders.filter(
  (o) => "high" === o.priority || "rush" === o.priority
).length;
