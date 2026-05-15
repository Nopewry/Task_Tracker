#!/usr/bin/env node
import addTask from "./commands/add.js";
import updateTask from "./commands/update.js";
import deleteTask from "./commands/delete.js";
import { markStatus } from "./commands/mark.js";
import { listAll, list } from "./commands/list.js";

import parseAddTask from "./parser/parseAddCommand.js";
import addHandler from "./handler/addHandler.js";

const args = process.argv.slice(2);
const command = args[0];

const commands = {
  add: parseAddTask,
};

const handlers = {
  add: addHandler,
}

const parser = commands[command];

if (!parser) {
  console.log("Command not found");
  process.exit(1);
};

const prasedData = parser(args);

const handler = handlers[prasedData.action];

if (!handler) {
  console.log("Handler not found");
  process.exit(1);
};

const result = await handler(prasedData.payload);

console.log(result);


// if (command === "add") {
//   const description = args[1];
//   console.log(await addTask(description, "todo"));
// }

if (command === "update") {
  const id = args[1];
  const desc = args[2];
  const status = args[3] ? args[3] : undefined;

  console.log(await updateTask(id, desc, status));
}

if (command === "delete") {
  const id = args[1];
  console.log(await deleteTask(id));
}

if (/^mark-(in-progress|done|todo)$/.test(command)) {
  const id = args[1];
  const status = command.slice(command.indexOf("-") + 1);
  markStatus(id, status);
}

if (command === "list") {
  const type = args[1];
  if (!type) {
    console.log(await listAll());
  } else [console.log(await list(type))];
}
