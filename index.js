#!/usr/bin/env node
import addTask from "./commands/add.js";
import updateTask from "./commands/update.js";
import deleteTask from "./commands/delete.js";
import { markInProgress, markDone, markTodo } from "./commands/mark.js";
import { listAll, list } from "./commands/list.js";

const args = process.argv.slice(2);
const command = args[0];

if (command === "add") {
  const description = args[1];
  console.log(await addTask(description, "todo"));
}

if (command === "update") {
  const id = args[1];
  const desc = args[2];
  const status = args[3] ? args[3] : undefined;

  console.log(await updateTask(id, desc, status));
}

if (command === 'delete') {
  const id = args[1];
  console.log(await deleteTask(id));
}

if (command === 'mark-in-progress') {
  const id = args[1];
  markInProgress(id);
}

if (command === 'mark-done') {
  const id = args[1];
  markDone(id);
}

if (command === 'mark-todo') {
  const id = args[1];
  markTodo(id);
}

if (command === 'list') {
  const type = args[1]
  if (!type) {
    console.log(await listAll());  
  } else [
    console.log(await list(type))
  ]
  
}
