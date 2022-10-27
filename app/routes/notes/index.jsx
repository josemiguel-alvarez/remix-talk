import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getNotes } from "~/utils/notes.server";

export const loader = async () => {
  const data = {
    posts: getNotes(),
  };

  return json(data, {
    headers: {
      "Cache-Control": "max-age=300",
    },
  });
};

export default function BlogIndex() {
  const data = useLoaderData();

  return (
    <div>
      <h1>Notes</h1>
      <p>Here is the list of notes:</p>
      <ul>
        {data.posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug} prefetch="intent">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/notes/new">Add new note</Link>
    </div>
  );
}
