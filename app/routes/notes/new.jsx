import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { addNote } from "app/utils/notes.server";

export async function action({ request }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const content = formData.get("content");

  addNote({
    title,
    content,
  });

  return redirect("/notes");
}

export default function NewNote() {
  return (
    <div>
      <h1>Add new note</h1>
      <Form method="post">
        <div>
          <label htmlFor="title">Title:</label>
          <br />
          <input type="text" name="title" className="border-2 rounded" />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <br />
          <textarea
            id="content"
            rows={10}
            name="content"
            className="border-2 rounded w-full"
          />
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
          >
            Create note
          </button>
        </div>
      </Form>
    </div>
  );
}
