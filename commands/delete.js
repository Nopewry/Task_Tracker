import readFile from "../utils/readFile.js";
import writeFile from "../utils/writeFile.js";
import { getTaskIndexById } from "../utils/taskUtils.js";

async function deleteTask(id) {
  const tasks = await readFile();
  const index = getTaskIndexById(id, tasks);

  if (index === -1) return `Task not found (ID: ${id})`;
  tasks.splice(index, 1);

  await writeFile(tasks);
  return `Task deleted successfully (ID: ${id})`;
}

export default deleteTask;
