function parseList(args) {
  return {
    action: "mark",
    payload: {
      id: args[1],
      status: args[0].replace('mark-', '')
    }
  }
}

export default parseList;