function generateNextId(tasks) {

  const maxId = tasks.reduce((max, task) => 
    task.id > max ? task.id : max
  , 0);
  
  const nextId = maxId + 1;
  return nextId;
}

function getTaskById(id, tasks) {
  if(!id || !tasks) return null;

  return tasks.find((task) => task.id === parseInt(id));
}

function getTaskIndexById(tasks, id) {
  return tasks.findIndex((task) => task.id === parseInt(id));
}

export { generateNextId, getTaskById, getTaskIndexById };