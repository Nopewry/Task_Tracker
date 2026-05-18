function parseUpdateTask(params) {

  // update command require id and description
  if (!params[1] || !params[2]) return null;

  return {
    action: "update",
    payload: {
      id: params[1],
      description: params[2],
      status: params[3] ? params[3] : undefined
    }
  }
}

export default parseUpdateTask;