function parseList(args) {
  return {
    action: "list",
    payload: {
      type: args[1] ? args[1] : undefined
    }
  }
}

export default parseList;