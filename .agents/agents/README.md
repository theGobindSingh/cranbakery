# Subagent fleet

Source of truth for this repo's subagents. `.claude/agents` is a generated symlink to this
directory (`scripts/skills.js`, run on `pnpm install`) so Claude Code discovers them. **New
agents go here, never in `.claude/agents/`.**

## The idea

A medium model (Sonnet) orchestrates; specialized subagents do the work in their own context and
return only a summary. Each agent is a thin identity + `model` + `tools` + a **preloaded skill**
(`skills:` frontmatter injects the full skill content at startup). The skill carries the exact
repo procedure and conventions, so even a **Haiku** agent produces reliable, on-convention output
— the intelligence lives in the instructions, not the model.

## Roster

| Agent              | Model  | Role                                                     | Skill           | Read-only    |
| ------------------ | ------ | -------------------------------------------------------- | --------------- | ------------ |
| `section-builder`  | sonnet | Build one page section/module to spec                    | `new-section`   | no           |
| `route-scaffolder` | haiku  | Mechanical new-route skeleton (metadata, constants, nav) | `new-section`   | no           |
| `token-smith`      | haiku  | Palette/token/font edits, CSS + DESIGN.md in sync        | `token-edit`    | no           |
| `design-auditor`   | haiku  | DESIGN.md conformance / drift audit                      | `design-audit`  | yes          |
| `dod-check`        | haiku  | Definition-of-Done + CONVENTIONS + lint gate             | `dod-check`     | yes          |
| `seo-auditor`      | haiku  | Per-route SEO/metadata/JSON-LD audit                     | `seo-audit`     | yes          |
| `responsive-qa`    | sonnet | Browser test across breakpoints/themes (Playwright)      | `responsive-qa` | no (browser) |

Visual redesign / taste work stays with the `impeccable` skill on the orchestrator — it is not a
subagent.

## Orchestration pattern (build a new page)

1. **Scaffold** — `route-scaffolder` creates the route skeleton with stubbed sections.
2. **Build** — fan out `section-builder` (one per section), in parallel where sections don't
   depend on each other.
3. **Verify** (parallel, read-only) — `design-auditor` (matches DESIGN.md), `seo-auditor`,
   `perf-auditor`.
4. **Test** — `responsive-qa` drives it in a browser across breakpoints/themes.
5. **Gate** — `dod-check` last, before declaring done.

Editors (`asset-organizer`, `token-smith`) are delegated ad-hoc for their task types. Auditors
run in parallel because they're read-only and don't collide. The orchestrator keeps the
propose-before-building agreement (AGENTS.md) with the owner; subagents execute already-approved,
scoped specs.

## Notes

- Custom subagents load `CLAUDE.md`/`AGENTS.md` + git status; the built-in `Explore`/`Plan` do
  not. Each skill still tells its agent to read the specific docs it needs, so a fresh Haiku
  context has the rules regardless.
- After adding the **first** agent file to a new `agents/` dir, restart Claude Code once so the
  file watcher picks the directory up (per the subagents doc). Edits to existing agents are
  hot-reloaded.
