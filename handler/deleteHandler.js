import deleteTask from "../commands/delete.js";

async function deleteHandler(parsedData) {  
  return await deleteTask(
    parsedData.id,
  );
}

export default deleteHandler;