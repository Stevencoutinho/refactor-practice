const { organization } = require("./encapsulate_record.js");

const result = `<h1>${organization.name}</h1>`;

const newName = "Steven coutinho";
organization.name = newName;
