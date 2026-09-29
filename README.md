# Software Portfolio — working notes

CV-style portfolio of everything I've built, meant to be attached to job applications.
Open `index.html` in a browser to view it.

## What this is / how it works

- `index.html` — the page (dark/gold theme, accordion project cards, image lightbox, animated flow
  diagrams, plus a compact "Other Projects" list). Don't add project content here directly.
- `projects.js` — all the actual content: a `PROFILE` object (name/title/contact/summary/skills), a
  `PROJECTS` array (one full card per major project), and an `OTHER_PROJECTS` array (smaller tools,
  shown as a plain bullet list). `index.html` just reads this file and renders it.
- `style.css` — styling. Rarely needs touching.
- `assets/` — logos and screenshots referenced by `projects.js`. Copy images IN here (don't reference
  files from elsewhere on disk) so the folder stays self-contained and portable between machines.

### Full project cards — `PROJECTS`

Use this for anything substantial enough to walk through in an interview. Follow the existing shape:

```js
{
  id: "short-slug",
  name: "Project name",
  logo: "assets/some-icon.png",              // optional, small badge next to the name
  tagline: "One sentence, what it does / why it matters",
  period: "e.g. 2025",
  status: "e.g. In production / Prototype / Shipped",
  stack: ["Python", "..."],
  problem: "What problem existed before this.",
  solution: "What was actually built to solve it.",
  impact: ["Concrete outcome 1", "Concrete outcome 2"],   // numbers if you have them
  highlights: ["Notable technical detail 1", "..."],
  flows: [                                    // optional, renders an animated step diagram
    { name: "Pipeline name", steps: ["Step 1", "Step 2", "Step 3"] }
  ],
  images: [                                   // optional, renders a gallery with click-to-enlarge
    { src: "assets/foo.png", kind: "screenshot", caption: "What this shows." }
    // kind must be "screenshot" (a real capture of the running app) or "concept" (brand art / mockup)
  ],
  source: "Which machine + folder this project lives in"   // internal tracking only — not shown on the page
}
```

**Image honesty rule:** `kind: "screenshot"` means a real capture of the tool actually running.
`kind: "concept"` means brand art / a design mockup. Concept images are kept in `projects.js` for
reference but `index.html` filters them out of the rendered page — only real screenshots are shown
to viewers. Never copy fake numbers from a mockup (fake revenue, fake call counts, etc.) into the
`impact` list as if they were real results. Only put real, true figures in `impact`.

### Smaller tools — `OTHER_PROJECTS`

Use this for anything real but too small/simple to justify a full card. Just:

```js
{ name: "Tool name", description: "One sentence: what it does and who/what it's for." }
```

Renders as a plain bullet list under "Other Projects" at the bottom of the page. If a tool in here
later grows into something worth a full writeup, move it up into `PROJECTS` instead.

`PROFILE.skills` is a short list of `{ label, detail }` overview cards (e.g. "Cybersecurity & IT
fundamentals", "Programming") — keep these as a high-level overview, not an exhaustive list of every
certification or course.

## Status as of 2026-09-29

Built on the main PC by scanning the filesystem (Desktop/Business/*, Desktop/Trader Bot, and a few
other folders) for real software projects — folders with actual code, not just business plans or
content folders. Business-plan-only folders (e.g. "Automatic Gates", "oblox Game" — just a Word doc,
no code) were deliberately left out. Only include a folder here once it has real, working code.

Re-scanned same day, wider this time (Desktop top-level, Documents, and both E: drive project
folders exposed to this session) plus a refresh against actual current source:

- **Banman Labs Commerce** (new card): found at `E:\Ban Man Ecommerce\BanmanLabsCommerce` — a FastAPI
  ops platform covering eBay (UK) *and* Shopee/Lazada/Tokopedia/TikTok Shop (Indonesia) dropshipping,
  with real production eBay sales live since 2026-08. This is a separate, standalone product from the
  existing eBay Listing Automation entry below, not a replacement for it — kept as its own card at the
  end of `PROJECTS` (an earlier pass of this note wrongly merged the two into one entry; that was
  corrected).
- **Backtesting Suite (Kings Gold)**: description was written before `hour_tightener.py` (walk-forward
  out-of-sample validation) and the optimizer's sensitivity-chart/tuning-recommendation features
  existed in their current form — card updated to reflect what's actually there now, per source files
  timestamped as recently as today.

**Full project cards (`PROJECTS`):**

1. **Banman Labs — eBay Listing Automation** — automation pipeline (Hall Lane & Autowell sourcing) that turns sourced parts into published eBay listings.
2. **Banman Labs — CRM (Sales Call Assistant)** — Tauri/Rust desktop CRM that organizes leads and walks reps through live sales calls with real-time objection overturns.
3. **Banman Labs — Backtesting Suite (Kings Gold)** — custom backtesting/optimization/walk-forward-validation suite wired into MetaTrader 5.
4. **Banman Labs Commerce — Multi-Marketplace Dropshipping Platform** — FastAPI ops platform automating sourcing, AI-drafted listings, and fulfilment across eBay (UK) and Indonesian marketplaces, with human-in-the-loop approvals and a real production eBay integration. Separate product from #1 above.

**Other Projects (`OTHER_PROJECTS`, bullet list only):**

5. Manuscript Comparison App (the old "Total Religion" desktop app)
6. Luxury Bag Inventory Software
7. Accounting & Invoice Tool
8. eBay Listing Image Recovery Tool
9. Local AI Coding Assistant
10. Web Vulnerability Scanner
11. Image Generation & Download Pipeline
12. AI Product Photo Generator — local Qwen2.5-VL + Qwen3 + ComfyUI/SDXL pipeline for premium product photos (found at `E:\Image generator\EcommerceAI`; early prototype, no completed real outputs yet)

**Deliberately left out of this pass** (found while scanning, not portfolio material):
- `Desktop/Traffic/Clickflow.py` — a Playwright click/traffic script pointed at a bare-IP-style
  shortlink domain. Reads as ad-traffic/click tooling rather than something to present as a CV project;
  left out rather than guessing at intent.
- `Desktop/MAS.1.2-HD3D` — a cracked third-party software installer (references Warez-BB.org) — not
  the user's own work.
- `E:\umars files` — iCloud photo backup zips, not a software project.
- `Desktop/App` (BanmanLabs.sln, C#) and `Desktop/AiAsisstant` / `E:\AI\projects\qwen_engineering` — real
  code, but they're the underlying source for projects already listed above (Manuscript Comparison App
  and Local AI Coding Assistant respectively), not new projects.

**Still TODO:**
- Fill in `PROFILE.title` if you want something other than the current default, and expand
  `PROFILE.summary` further if you want to add more.
- Real screenshots still needed for: eBay Listing Automation (currently no images). Banman Labs
  Commerce, the Backtesting Suite, and the CRM all now have real screenshots of their own UI.
- Banman Labs Commerce's own screenshots (added from `Screenshots/commerce/`) surfaced a real
  correction: the app's own in-app banner says no eBay listing has sold end-to-end yet, which
  contradicted the "confirmed real sale" wording an earlier pass of this card had pulled from the
  project's README checklist. Card rewritten around what the live app actually shows as of
  2026-09-29 — treat the app's own live state as more current/authoritative than a checklist note
  whenever the two disagree again in future.
- Double check dates/status on all entries — they were inferred from file timestamps, not confirmed.
- Security note (not portfolio-related): `Desktop/Broken images fix/ebay_full_recovery_test.py` has a
  live WooCommerce API key/secret and a WordPress admin password hardcoded in plaintext — worth
  rotating and moving to an env file before that script is ever shared or committed anywhere. Also
  noticed `E:\Ban Man Ecommerce\BanmanLabsCommerce\Creds.txt` in the same pass — worth checking that's
  not another plaintext-credentials file before this folder is ever shared.
- Not yet scanned: the second computer this note is about (see below).

## Continuing this on another computer

If you're an AI assistant picking this up on a different machine: read this file, then do the following.

1. **Scan for real software projects** on this machine — folders containing actual code
   (look for `.git`, `package.json`, `requirements.txt`, `.csproj`/`.sln`, `Cargo.toml`, or a folder
   full of `.py`/`.cs`/`.js` source files), not just documents or business plans.
2. For each project found, figure out: what problem it solves, what was actually built, the tech
   stack, any concrete impact/numbers, and 2-4 technical highlights worth mentioning to an employer.
   Read enough of the actual code/README to describe it accurately — don't just guess from filenames.
3. Decide which list it belongs in: a substantial project goes in `PROJECTS` as a full card; a small
   single-purpose tool goes in `OTHER_PROJECTS` as a one-line bullet. When in doubt, start it in
   `OTHER_PROJECTS` — it's easy to promote later.
4. Don't duplicate a project that's already listed (check `id`/`name` in `PROJECTS` and `name` in
   `OTHER_PROJECTS` first).
5. Update the "Status as of" section and date in this README.
6. If this portfolio folder isn't already present on this machine (e.g. synced via cloud storage),
   ask the user how they want to get the finished `projects.js` additions back to the main copy —
   don't assume file sync is in place.

## Tone / writing conventions used

- CV-style: lead with problem -> solution -> impact, not a feature list.
- Impact bullets use real numbers where they exist (e.g. "30-50/day manual -> 200+/day automated"),
  not vague claims like "significantly improved."
- No marketing fluff. If a real number isn't known, leave a `TODO:` rather than inventing one.
- Written like a person talking, not a press release — plain, direct, no corporate buzzwords.
- For the trading/backtesting project specifically: don't name the actual strategies or strategy logic
  (that's proprietary). Describe capabilities and what was improved/iterated on instead — e.g. "multiple
  strategy engines refined through repeated backtesting," not which named strategy does what.
