import { getNotes } from "app/utils/notes.server";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export function loader() {
  const notes = getNotes();
  return json(notes);
}

export default function NotesIndex() {
  const notes = useLoaderData();

  return (
    <div>
      <h1>Notes</h1>
      {notes.map((note) => (
        <div key={note.title}>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
}
