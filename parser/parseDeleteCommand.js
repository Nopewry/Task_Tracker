function parseDeleteTask(args) {

  // delete command require id
  if (!args[1]) return null;

  return {
    action: "delete",
    payload: {
      id: args[1]
    }
  }
}

export default parseDeleteTask;