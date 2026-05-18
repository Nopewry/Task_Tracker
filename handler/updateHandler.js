import updateTask from "../commands/update.js";

async function updateHandler(parsedData) {

  // update command require id and description
  if (!parsedData.id || !parsedData.description) return null; 

  return await updateTask(
    parsedData.id,
    parsedData.description,
    parsedData.status
  );
}

export default updateHandler;