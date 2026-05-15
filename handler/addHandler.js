import addTask from "../commands/add.js";

async function addHandler(parsedData) {
  return await addTask(
    parsedData.description,
    parsedData.status
  );
}

export default addHandler;