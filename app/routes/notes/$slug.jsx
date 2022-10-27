import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { findNote } from "~/utils/notes.server";

export const loader = async ({ params }) => {
  const note = findNote(params.slug);
  return json({ note });
};

export default function NoteSlug() {
  const { note } = useLoaderData();

  return (
    <main className="mx-auto max-w-4xl">
      <h2>{note.title}</h2>
      <div>{note.content}</div>
    </main>
  );
}
