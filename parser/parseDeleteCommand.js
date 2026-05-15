function parseDeleteTask(params) {
  return {
    action: "delete",
    payload: {
      id: params[1]
    }
  }
}

export default parseDeleteTask;