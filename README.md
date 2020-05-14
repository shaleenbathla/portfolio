# Portfolio Website

- Portfolio Website of Shaleen Bathla
- Deployed on render.com
- Weather forecast service made in Node.JS

- Technologies used : node.js, templates, hbs, views, express.js, css, js, html

This project is made for educational and learning purposes.

(C) 2024-2099 Shaleen Bathla

# Usage

From project's root directory, run this command :
$ npm install

It will generate "node_modules" directory in root directory for further usage and execution.

Run the project like :
$ node src/app.js


# Notes CLI

You can manage notes from the command line using the notes CLI:

```
node src/utils/notes-cli.js <command> [options]
```

Available commands:

- `add --title="Title" --body="Body"` &nbsp; Add a new note
- `remove --title="Title"` &nbsp; Remove a note by title
- `list` &nbsp; List all notes
- `read --title="Title"` &nbsp; Read a note by title

**Examples:**

```
# Add a note
node src/utils/notes-cli.js add --title="Shopping" --body="Buy milk and eggs"

# List notes
node src/utils/notes-cli.js list

# Read a note
node src/utils/notes-cli.js read --title="Shopping"

# Remove a note
node src/utils/notes-cli.js remove --title="Shopping"
```
