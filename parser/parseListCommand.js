function parseListTask(args) {

  // list that allowed
  const allowedStatusesList = [
    'in-progress',
    'done',
    'todo'
  ]

  if (args[1] && !allowedStatusesList.includes(args[1])) return null

  return {
    action: "list",
    payload: {
      type: args[1] ? args[1] : undefined
    }
  }
}

export default parseListTask;