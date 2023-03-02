let _title = "untitled";

function title() {
  return _title;
}

function setTitle(arg) {
  return (_title = arg);
}

result += `<h1>${title()}</h1>`;

setTitle(obj["articleTitle"]);

const companyName = "Acme Gooseberries";
const cpyNm = companyName;
