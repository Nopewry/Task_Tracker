function parseUpdateTask(params) {
  return {
    action: "update",
    payload: {
      id: params[1],
      description: params[2],
      status: params[3] ? params[3] : "todo"
    }
  }
}

export default parseUpdateTask;