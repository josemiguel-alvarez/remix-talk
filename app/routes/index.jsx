import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <Link to="/blog" prefetch="intent">
            Blog posts
          </Link>
        </li>
        <li>
          <Link to="/about" prefetch="intent">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}
