project for learning backend

# Task Tracker CLI

A simple command line interface (CLI) application for tracking and managing tasks.

This project was built as part of the roadmap.sh backend projects:

https://roadmap.sh/projects/task-tracker

## Features

- Add tasks
- Update tasks
- Delete tasks
- Mark tasks as:
  - todo
  - in-progress
  - done
- List all tasks
- List tasks by status
- Store tasks in a local JSON file
- Graceful handling for missing `data.json`

## Technologies

- JavaScript (Node.js)
- Native File System (`fs`) module

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/task-tracker.git
```

Go to the project directory:

```bash
cd task-tracker
```

Install dependencies:

```bash
npm install
```

Link the CLI globally:

```bash
npm link
```

## Usage

Add a task:

```bash
task-cli add "Buy groceries"
```

Update a task:

```bash
task-cli update 1 "Buy groceries and cook dinner"
```

Delete a task:

```bash
task-cli delete 1
```

Mark task as in progress:

```bash
task-cli mark-in-progress 1
```

Mark task as done:

```bash
task-cli mark-done 1
```

List all tasks:

```bash
task-cli list
```

List tasks by status:

```bash
task-cli list done
task-cli list todo
task-cli list in-progress
```

## Project Structure

```text
commands/   -> business logic
parser/     -> command parsing
utils/      -> helper functions
data/       -> JSON storage
```

## Notes

- Tasks are stored in `data/data.json`
- The file will be created automatically if it does not exist
- No external libraries were used for filesystem handling

## License

ISC