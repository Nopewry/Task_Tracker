import readFile from "../utils/readFiles.js";
import writeFile from "../utils/writeFiles.js";
import { getTaskById } from "../utils/generateId.js";
import getTimestamp from "../utils/getTimestamp.js";

async function markInProgress(id) {
  const tasks = await readFile();
  const timestamp = getTimestamp();

  const task = getTaskById(id, tasks);

  task.status = 'in-progress';
  task.updatedAt = timestamp;

  await writeFile(tasks);
  return `Task update successfully (ID: ${id})`;
}

async function markDone(id) {
  const tasks = await readFile();
  const timestamp = getTimestamp();

  const task = getTaskById(id, tasks);

  task.status = 'done';
  task.updatedAt = timestamp;

  await writeFile(tasks);
  return `Task update successfully (ID: ${id})`;
}


async function markTodo(id) {
  const tasks = await readFile();
  const timestamp = getTimestamp();

  const task = getTaskById(id, tasks);

  task.status = 'todo';
  task.updatedAt = timestamp;

  await writeFile(tasks);
  return `Task update successfully (ID: ${id})`;
}



export { markInProgress, markDone, markTodo };
