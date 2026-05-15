import updateTask from "../commands/update.js";

async function updateHandler(parsedData) {
  return await updateTask(
    parsedData.id,
    parsedData.description,
    parsedData.status
  );
}

export default updateHandler;