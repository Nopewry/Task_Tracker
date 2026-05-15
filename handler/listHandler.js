import { listAll, list } from "../commands/list.js";

async function listHandler(parsedData) {
  if (!parsedData.type) return await listAll();

  return await list(parsedData.type);
}

export default listHandler;