import parseAddTask from "./parseAddCommand.js";
import parseUpdateTask from "./parseUpdateCommand.js";
import parseDeleteTask from "./parseDeleteCommand.js";
import parseListTask from "./parseListCommand.js";
import parseMarkTask from "./parseMarkCommand.js";

function getParser(command){
  const commands = {
    add: parseAddTask,
    update: parseUpdateTask,
    delete: parseDeleteTask,
    list: parseListTask
  };

  if (commands[command]) return commands[command];


  if (/^mark-(in-progress|done|todo)$/.test(command)) {
    return parseMarkTask;
  }

  return null;
}

export default getParser;