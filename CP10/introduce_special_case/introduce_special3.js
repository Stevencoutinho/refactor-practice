const record = {
  name: "Acme Boston",
  location: "Malen MA",
  // 場所についての詳細が続く
  customer: {
    name: "Acme Industries",
    billingPlan: "plan-451",
    paymentHistory: {
      weeksDelinquentInLastYear: 7,
      // さらに続く
    },
    // さらに続く
  },
};

const record2 = {
  name: "Warehouse Unit 15",
  location: "Malden MA",
  // 場所についての詳細が続く
  customer: "unknown",
};

// client 1
const rawSite = acquireSiteData();
const site = enrichSite(rawSite);
const aCustomer = site.customer;
// ... 大量のコードが入る ...
let customerName;
if (aCustomer === "unknown") customerName = "occupant";
else customerName = aCustomer.name;

function enrichSite(inputSite) {
  return _.cloneDeep(inputSite);
}

// client 2
const plan =
  aCustomer === "unknown"
    ? CustomElementRegistry.billingPlans.basic
    : aCustomer.billingPlan;

// client 3
const weeksDelinquent =
  aCustomer === "unknown"
    ? 0
    : aCustomer.paymentHistory.weeksDelinquentInLastYear;
