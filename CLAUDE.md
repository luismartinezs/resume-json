# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Luis Martinez's resume, authored as JavaScript modules and built into static JSON files served from `json/`. The published JSON is the product. There is no UI in this repo. `index.html` is only a placeholder so the host serves the directory.

## Commands

- `pnpm build` — runs `generate-json.js`, which writes every variant in `json/`. Re-run this any time `src/` or `_partials/` changes; the generated `json/*.json` files are committed.
- `npx http-server` — local static server for previewing the hosted JSON URLs.

There is no test runner, linter, or type-check step. `package.json` declares ESM (`"type": "module"`).

## Architecture

Three layers, composed together at build time:

1. `_partials/` — single source of truth for resume content (basic-info, education, work-experience, certifications, skills, projects, keywords). One default export per file.
2. `src/<variant>.js` — a "resume variant" that imports partials and composes a final object. `src/resume.js` is the generic resume. `src/react-typescript.js` is a targeted variant that overrides `jobTitle`/`about`/`mostAmazingDevelopment` and uses `starItemBySkill(items, ['react', 'typescript'])` from `src/util.js` to mark matching work/certs/projects with `star: true` so downstream renderers can highlight them.
3. `generate-json.js` — hardcodes the list of variant names (`['resume', 'react-typescript']`), dynamically imports `./src/<name>.js`, and writes `JSON.stringify(module.default, ...)` to `json/<name>.json`.

**Adding a new targeted variant**: create `src/<name>.js` exporting a default object, then add `<name>` to the array literal in `generate-json.js:4`. Skipping the second step means the variant never gets built.

`src/util.js` helpers (`slugify`, `filterBySkill`, `starItemBySkill`) match against the `skills` arrays inside partials. Skill matching is case- and punctuation-insensitive via `slugify`, so `"React"` and `"react"` match.

## Schema

`types.ts` documents the shape of a variant's default export (the `Resume` type). It is reference-only. Nothing in the build reads or type-checks against it. When changing a partial's shape, update `types.ts` by hand so it stays accurate.
