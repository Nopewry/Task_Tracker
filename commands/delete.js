import readFile from "../utils/readFiles.js";
import writeFile from "../utils/writeFiles.js";
import { getTaskIndexById } from "../utils/generateId.js";

async function deleteTask(id) {
 const tasks = await readFile();
 const index = getTaskIndexById(tasks, id);

 if (index === -1) return `Task not found (ID: ${id})`;
 tasks.splice(index, 1);

 await writeFile(tasks);
 return `Task deleted successfully (ID: ${id})`;

}

export default deleteTask;