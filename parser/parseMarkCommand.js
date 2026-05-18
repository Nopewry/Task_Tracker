function parseMarkTask(args) {

  // mark command require id and status
  if (!args[0] || !args[1]) return null;

  return {
    action: "mark",
    payload: {
      id: args[1],
      status: args[0].replace('mark-', '')
    }
  }
}

export default parseMarkTask;