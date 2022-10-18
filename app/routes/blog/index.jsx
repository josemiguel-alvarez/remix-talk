import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { POSTS } from "~/utils/posts.server";

export const loader = async () => {
  const data = {
    posts: POSTS.map((post) => ({
      title: post.attributes.title,
      slug: post.filename.replace(".md", ""),
    })),
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
    <article>
      <h1>Blog</h1>
      <p>Here is a list of blog posts:</p>
      <ul>
        {data.posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug} prefetch="intent">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
