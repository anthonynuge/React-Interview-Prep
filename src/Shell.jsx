import { useEffect, useState } from "react";
import ProblemIndex from "./ProblemIndex.jsx";

const problemModules = import.meta.glob("./problems/*/App.jsx", { eager: true });

const problems = Object.fromEntries(
  Object.entries(problemModules).map(([path, mod]) => {
    const slug = path.split("/")[2];
    return [slug, mod.default];
  })
);

function getSlug() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  return hash || null;
}

export default function Shell() {
  const [slug, setSlug] = useState(getSlug());

  useEffect(() => {
    const onChange = () => setSlug(getSlug());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  const ProblemApp = slug ? problems[slug] : null;

  return (
    <div className="shell">
      <header className="shell-header">
        <h1>React Interview Prep</h1>
        {slug && (
          <a className="shell-back" href="#/">
            ← back to index
          </a>
        )}
      </header>
      {ProblemApp ? (
        <ProblemApp />
      ) : slug ? (
        <p>Problem "{slug}" not found.</p>
      ) : (
        <ProblemIndex slugs={Object.keys(problems)} />
      )}
    </div>
  );
}
