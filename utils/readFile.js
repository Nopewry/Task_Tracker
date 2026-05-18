import fs from "fs";

function readFile() {
  const filePath = "./data/data.json";

  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {

      if (err?.code === "ENOENT") {

        if (!fs.existsSync("./data")) {
          fs.mkdirSync("./data");
        }

        fs.writeFileSync(filePath, "[]", "utf-8");

        return resolve([]);
      }

      if (err) {
        return reject(err);
      }

      try {
        const tasks = JSON.parse(data);
        return resolve(tasks);

      } catch (parseError) {
        return reject(
          new Error("Invalid JSON format in data.json")
        );
      }
    });
  });
}

export default readFile;