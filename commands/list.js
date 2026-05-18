import readFile from "../utils/readFile.js";
async function listAll() {
  return await readFile();
}

async function list(type) {
  const tasks = await readFile();

  const list = tasks.filter((task) => task.status === type);

  return list.length > 0 ? list : "Task not found";
}

export { listAll, list };
