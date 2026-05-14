import readFile from "../utils/readFiles.js";
import writeFile from "../utils/writeFiles.js";
import { generateNextId } from "../utils/generateId.js";
import getTimestamp from "../utils/getTimestamp.js";

async function addTask(description, status = "todo") {
  const tasks = await readFile();

  const nextId = generateNextId(tasks);
  const timestamp = getTimestamp();

  if (!description) {
    return `don't have data to add`;
  }

  tasks.push({
    id: nextId,
    description: description,
    status: status,
    createAt: timestamp,
    updatedAt: null,
  });

  await writeFile(tasks);
  return `Task added successfully (ID: ${nextId})`;
}

export default addTask;
