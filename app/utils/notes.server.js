const fs = require("fs");

export const getNotes = () => {
  const notes = fs.readFileSync("./notes.json");
  return JSON.parse(notes);
};

export const addNote = (note) => {
  const notes = getNotes();
  notes.push(note);
  fs.writeFileSync("./notes.json", JSON.stringify(notes));
};
