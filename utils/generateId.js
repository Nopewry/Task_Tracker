function generateNextId(tasks) {

  const maxId = tasks.reduce((max, task) => 
    task.id > max ? task.id : max
  , 0);
  
  const nextId = maxId + 1;
  return nextId;
}

export default generateNextId;