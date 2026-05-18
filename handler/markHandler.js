import markStatus from "../commands/mark.js";

async function markHandler(parsedData) {
  return await markStatus(
    parsedData.id,
    parsedData.status
  );
}

export default markHandler;