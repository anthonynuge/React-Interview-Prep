# React Interview Prep

A workspace for practicing React interview problems. Each problem lives in its own folder under `src/problems/` and is auto-discovered by the index page.

## Run

```sh
npm install
npm run dev
```

Open the printed localhost URL. The index lists every problem; click one to load it. Hash routing (`#/filter-recipes`) keeps each problem on its own URL.

## Add a new problem

1. Create `src/problems/<slug>/App.jsx` with a default-exported React component.
2. (Optional) Add `README.md`, `styles.css`, and any helper files in the same folder.
3. The index picks it up on next reload — no registry to update.

A problem folder is self-contained; import its own styles and data via relative paths.
