import readFile from "../utils/readFiles.js";
import writeFile from "../utils/writeFiles.js";
import { getTaskById } from "../utils/generateId.js";
import getTimestamp from "../utils/getTimestamp.js";

async function markStatus(id, status) {
  const tasks = await readFile();
  const timestamp = getTimestamp();

  const task = getTaskById(id, tasks);

  task.status = status;
  task.updatedAt = timestamp;

  await writeFile(tasks);
  return `Task update successfully (ID: ${id})`;
}

export { markStatus };
