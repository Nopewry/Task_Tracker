import fs from "fs";

function readFile() {

  const tasks = [];
  return new Promise((resolve, reject) => {
    fs.readFile("./data/data.json", "utf-8", (err, data) => {
      if (err) {
        console.log(`don't have a data.json file`);
        resolve(tasks);
      }
      if (data) {
        tasks.push(...JSON.parse(data));
        resolve(tasks);
      }
    });
  });
}

export default readFile;
