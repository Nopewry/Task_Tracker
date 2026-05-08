import readFile from "../utils/readFiles.js";
import writeFile from "../utils/writeFiles.js";
import { getTaskById } from "../utils/generateId.js";
import getTimestamp from "../utils/getTimestamp.js";

async function updateTask(id, description, status = "todo") {
  const tasks = await readFile();
  const timestamp = getTimestamp();

  const task = getTaskById(id, tasks);

  task.description = description;
  task.status = status;
  task.updatedAt = timestamp;

  await writeFile(tasks);
  return `Task update successfully (ID: ${id})`;
}

export default updateTask;
