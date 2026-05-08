#!/usr/bin/env node
const fs = require("fs");

const args = process.argv.slice(2);
const command = args[0];

const task = [];

let id = 0;

function readFile() {
  return new Promise((resolve, reject) => {
    fs.readFile("./data/data.json", "utf-8", (err, data) => {
      if (err) {
        console.log(`don't have a data.json file`);
        resolve();
      }
      if (data) {
        task.push(...JSON.parse(data));
        // console.log(task.length);
        id = task.length;
        resolve();
      }
    });
  });
}

async function add(description, status = 'todo', timestamp) {
  await readFile();
  if (!description) {
    console.log(`don't have data to add`);
    return;
  }
  task.push({
    id: id + 1,
    description: description,
    status: status,
    createAt: timestamp,
    updatedAt: null
  });

  // console.log(task);

  writeFile();
}

async function writeFile() {
  const dataJson = JSON.stringify(task, null, 2);

  if (!fs.existsSync("./data")) {
    fs.mkdirSync("./data");
  }
  fs.writeFile("./data/data.json", dataJson, "utf-8", (err) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(`Output Task added successfully (ID: ${id + 1})`);
  });
}

if (command === "add") {
  const date = new Date();
  const timestamp = date.toLocaleString('th-TH')

  const description = args[1];

  add(description, 'todo', timestamp);
}