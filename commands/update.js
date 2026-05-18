import readFile from "../utils/readFile.js";
import writeFile from "../utils/writeFile.js";
import { getTaskById } from "../utils/taskUtils.js";
import getTimestamp from "../utils/getTimestamp.js";

async function updateTask(id, description, status) {
  const tasks = await readFile();
  const timestamp = getTimestamp();

  const task = getTaskById(id, tasks);

  if (!task) return `Task not found (ID: ${id})`;

  task.description = description;
  if (status) task.status = status;
  task.updatedAt = timestamp;

  await writeFile(tasks);
  return `Task update successfully (ID: ${id})`;
}

export default updateTask;
