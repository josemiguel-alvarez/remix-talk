import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { findNote } from "~/utils/notes.server";

export const loader = async ({ params }) => {
  const post = findNote(params.slug);
  return json({ post });
};

export default function PostSlug() {
  const { post } = useLoaderData();

  return (
    <main className="mx-auto max-w-4xl">
      <h2>{post.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </main>
  );
}
