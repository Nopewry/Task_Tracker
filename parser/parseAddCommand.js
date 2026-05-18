function parseAddTask(args) {

  // add command require description
  if (!args[1]) return null;

  return {
    action: "add",
    payload: {
      description: args[1],
      status: args[2] ? args[2] : "todo"
    }
  }
}

export default parseAddTask;