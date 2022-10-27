import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getNotes } from "~/utils/notes.server";

export const loader = () => {
  const data = {
    notes: getNotes(),
  };

  return json(data, {
    headers: {
      "Cache-Control": "max-age=300",
    },
  });
};

export default function NotesIndex() {
  const data = useLoaderData();

  return (
    <div>
      <h1>Notes</h1>
      <p>Here is the list of notes:</p>
      <ul>
        {data.notes.map((note) => (
          <li key={note.slug}>
            <Link to={note.slug} prefetch="intent">
              {note.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/notes/new">Add new note</Link>
    </div>
  );
}
