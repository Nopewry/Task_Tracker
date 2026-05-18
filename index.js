import addHandler from "./handler/addHandler.js";
import updateHandler from "./handler/updateHandler.js";
import deleteHandler from "./handler/deleteHandler.js";
import listHandler from "./handler/listHandler.js";
import markHandler from "./handler/markHandler.js";

import getParser from "./parser/resolveParser.js";

const args = process.argv.slice(2);
const command = args[0];

const handlers = {
  add: addHandler,
  update: updateHandler,
  delete: deleteHandler,
  mark: markHandler,
  list: listHandler
}

const parser = getParser(command);


if (!parser) {
  console.log("Command not found");
  process.exit(1);
};

const prasedData = parser(args);


if (!prasedData) {
  console.log("something went wrong");
  process.exit(1);
};

// console.log(prasedData.payload.status);

const handler = handlers[prasedData.action];

if (!handler) {
  console.log("Handler not found");
  process.exit(1);
};

const result = await handler(prasedData.payload);

console.log(result);
