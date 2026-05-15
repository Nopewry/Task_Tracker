import markStatus from "../commands/mark.js";

async function markHandler(parsedData) {
  return await markStatus(
    parsedData.id,
    parsedData.status
  );
  // console.log(`parsedData.id: ${parsedData.id}`);
  // console.log(`parsedData.status: ${parsedData.status}`);
}

export default markHandler;