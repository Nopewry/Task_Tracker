import readFile from "../utils/readFiles.js";
async function listAll(id) {
  return await readFile();
}

async function list(type) {
  const tasks = await readFile();

  const list = tasks.filter((task) => task.status === type);

  return list.length > 0 ? list : 'Task not found';
}

export { listAll, list };