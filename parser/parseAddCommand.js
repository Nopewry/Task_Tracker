function parseAdd(args) {
  return {
    action: "add",
    payload: {
      description: args[1],
      status: args[2] ? args[2] : "todo"
    }
  }
}

export default parseAdd;