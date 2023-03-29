const { Shipment } = require("./inline_class");

const aShipment = new Shipment({
  shippingCompany: "HogeHoge",
  trackingNumber: 12345,
});

aShipment.trackingInformation.shippingCompany = "Foo";
