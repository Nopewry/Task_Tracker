#!/usr/bin/env node
const fs = require("fs");

const args = process.argv.slice(2);
const command = args[0];

const tasks = [];

let id = 0;

function readFile() {
  return new Promise((resolve, reject) => {
    fs.readFile("./data/data.json", "utf-8", (err, data) => {
      if (err) {
        console.log(`don't have a data.json file`);
        resolve();
      }
      if (data) {
        tasks.push(...JSON.parse(data));
        // console.log(tasks.length);
        id = tasks.length;
        resolve();
      }
    });
  });
}

async function add(description, status = 'todo') {
  const date = new Date();
  const timestamp = date.toLocaleString('th-TH')

  await readFile();
  if (!description) {
    console.log(`don't have data to add`);
    return;
  }
  tasks.push({
    id: id + 1,
    description: description,
    status: status,
    createAt: timestamp,
    updatedAt: null
  });

  // console.log(task[0].id);

  await writeFile();
  console.log(`Task added successfully (ID: ${id + 1})`);
}

async function update(id, description, status='todo') {
  const date = new Date();
  const timestamp = date.toLocaleString('th-TH')

  await readFile();

  tasks.forEach((task) => {
    if (task.id === parseInt(id)) {
      task.description = description;
      task.status = status;
      task.updatedAt = timestamp;
    }
  })

  await writeFile();
  console.log(`Task update successfully (ID: ${id})`);

}


async function writeFile() {
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
  })
}

if (command === "add") {
  const description = args[1];

  add(description, 'todo');
}

if (command === "update") {
  const id = args[1];
  const desc = args[2];
  const status = args[3] ? args[3] : undefined;

  update(id, desc, status);
}