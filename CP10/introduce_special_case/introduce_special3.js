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

function isUnknown(aCustomer) {
  if (aCustomer === "unknown") return true;
  else return aCustomer.isUnknown;
}

function enrichSite(aSite) {
  const result = _.cloneDeep(aSite);
  const unknownCustomer = {
    isUnknown: true,
    name: "occupant",
    billingPlan: CustomElementRegistry.billingPlans.basic,
    paymentHistory: {
      weeksDelinquentInLastYear: 0,
    },
  };

  if (isUnknown(result.customer)) result.customer = unknownCustomer;
  else result.customer.isUnknown = false;
  return result;
}

// client 1
const rawSite = acquireSiteData();
const site = enrichSite(rawSite);
const aCustomer = site.customer;
// ... 大量のコードが入る ...
const customerName = aCustomer.name;

// client 2
const plan = aCustomer.billingPlan;

// client 3
const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
