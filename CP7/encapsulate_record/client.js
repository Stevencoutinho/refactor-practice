const { getOrganization } = require("./encapsulate_record.js");

const result = `<h1>${getRawDataOfOrganization().name}</h1>`;

const newName = "Steven coutinho";
getOrganization().name = newName;
