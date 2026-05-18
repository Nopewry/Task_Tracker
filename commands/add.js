import readFile from "../utils/readFile.js";
import writeFile from "../utils/writeFile.js";
import generateNextId from "../utils/generateId.js";
import getTimestamp from "../utils/getTimestamp.js";

async function addTask(description, status) {
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
    createdAt: timestamp,
    updatedAt: null,
  });

  await writeFile(tasks);
  return `Task added successfully (ID: ${nextId})`;
}

export default addTask;
