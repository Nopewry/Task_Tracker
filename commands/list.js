import readFile from "../utils/readFiles.js";
async function listAll(id) {
  return await readFile();
}

async function list(type) {
  const tasks = await readFile();

  return tasks.filter((task) => task.status === type);
}

export { listAll, list };