const readmes = import.meta.glob("./problems/*/README.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

const descriptions = Object.fromEntries(
  Object.entries(readmes).map(([path, content]) => {
    const slug = path.split("/")[2];
    const firstHeading = content.match(/^#\s+(.+)$/m);
    return [slug, firstHeading ? firstHeading[1].trim() : null];
  })
);

export default function ProblemIndex({ slugs }) {
  if (slugs.length === 0) {
    return <p>No problems yet. Add a folder at <code>src/problems/&lt;slug&gt;/App.jsx</code>.</p>;
  }
  return (
    <ul className="problem-list">
      {slugs.map((slug) => (
        <li key={slug}>
          <a href={`#/${slug}`}>
            <div className="problem-title">{descriptions[slug] || slug}</div>
            <div className="problem-desc">{slug}</div>
          </a>
        </li>
      ))}
    </ul>
  );
}
