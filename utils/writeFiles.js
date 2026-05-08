import fs from 'fs';

async function writeFile(tasks) {
  const dataJson = JSON.stringify(tasks, null, 2);

  if (!fs.existsSync("./data")) {
    fs.mkdirSync("./data");
  }
  return new Promise((resolve, reject) => {
    fs.writeFile("./data/data.json", dataJson, "utf-8", (err) => {
      if (err) {
        console.log(err);
        reject();
      }

      resolve();
    });
  });
}

export default writeFile;