function getTaskById(id, tasks) {
  if(!id || !tasks) return null;

  return tasks.find((task) => task.id === parseInt(id));
}

function getTaskIndexById(id, tasks) {
  return tasks.findIndex((task) => task.id === parseInt(id));
}

export { getTaskById, getTaskIndexById };