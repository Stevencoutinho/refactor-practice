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

function enrichSite(aSite) {
  const result = _.cloneDeep(aSite);
  const unknownCustomer = {
    isUnknown: true,
  };

  if (isUnknown(result.customer)) result.customer = unknownCustomer;
  else result.customer.isUnknown = false;
  return result;
}

function isUnknown(aCustomer) {
  return aCustomer === "unknown";
}

// client 1
const rawSite = acquireSiteData();
const site = enrichSite(rawSite);
const aCustomer = site.customer;
// ... 大量のコードが入る ...
let customerName;
if (isUnknown(aCustomer)) customerName = "occupant";
else customerName = aCustomer.name;

// client 2
const plan = isUnknown(aCustomer)
  ? CustomElementRegistry.billingPlans.basic
  : aCustomer.billingPlan;

// client 3
const weeksDelinquent = isUnknown(aCustomer)
  ? 0
  : aCustomer.paymentHistory.weeksDelinquentInLastYear;
