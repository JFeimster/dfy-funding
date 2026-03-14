import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ padding: "80px 24px", maxWidth: 960, margin: "0 auto" }}>
      <h1>Page not found</h1>
      <p>The page you requested does not exist.</p>
      <Link href="/">Return home</Link>
    </main>
  );
}
