/*
  Portfolio data file.
  See README.md in this folder for how to add new projects (including from another computer).
  Edit PROFILE and PROJECTS below; index.html renders whatever is in here, nothing else needs to change.

  Image rule (keep this on every new entry): each image needs `kind` set to either
    "screenshot" -> a real capture of the running app/tool
    "concept"    -> brand art / UI mockup / design concept, NOT a live screenshot
  Concept images get an on-page label saying so. Never present a mockup's fake numbers
  (fake call counts, fake revenue, etc.) as if they were real results; that goes in `impact`
  only when it's a real, true figure.
*/

const PROFILE = {
  // Add your name yourself, however you want it displayed, a few common formats:
  //   "Jordan Banman"      (full name)
  //   "Jordan B."          (first name + initial, more private)
  //   "Banman"             (just the brand/alias)
  // Whichever you pick, put it as a plain string below.
  name: "Hanzala Sheikh",

  // Title options: first one is set as default (best for recruiters/ATS scanning).
  // Swap in one of the others (or write your own) if you want more personality:
  //   "Builder of Things That Should Probably Be Automated"
  //   "Security-Minded Software Developer"
  //   "Full-Stack Problem Solver: Security, Automation, AI"
  title: "Software Developer & Automation Engineer",

  email: "Realhsheikh@gmail.com",
  location: "Leeds, UK & Bangkok, Thailand",
  logo: "assets/profile-photo.png",
  summary:
    "Started in IT and cybersecurity, got promoted fast to running the cybersecurity team and service desk. Automated most of the service desk's workflow, then automated most of my own workflow. Eventually left and started my own thing: built a personal AI assistant, still upgrading it with better hardware. Now I build SaaS and sell it to businesses as a service rather than as software; right now that's an eBay listing tool that speeds up how fast businesses can get inventory live, and a high-end backtesting platform for trading strategies. Python's my main language, but in an AI-assisted world the syntax barrier stopped being the hard part a while ago; the thinking transfers, the language is just whatever the job needs.",
  links: [
    // { "label": "GitHub", "url": "https://github.com/yourname" },
    // { "label": "LinkedIn", "url": "https://linkedin.com/in/yourname" }
  ],
  skills: [
    {
      label: "Cybersecurity & IT fundamentals",
      detail: "CompTIA-certified (A+, Network+, Security+), plus Cisco ICND1, Microsoft Windows 7/10 configuration, and ITIL, solid grounding across networking, systems administration, and security fundamentals. On top of that, full-stack Python, comfortable end-to-end across backend logic, APIs, data pipelines, desktop GUIs, and lightweight web frontends, not just scripting."
    },
    {
      label: "Programming",
      detail: "Primary language is Python, used across everything in this portfolio (automation, trading systems, data pipelines, desktop tooling), with working knowledge of JavaScript fundamentals. With AI-assisted development, a solid grasp of core programming concepts transfers directly across languages; AI closes the syntax gap, not the problem-solving one, so picking up a new language or stack to ship a real project is no longer the bottleneck it used to be."
    }
  ]
};

const PROJECTS = [
  {
    id: "ebay-automation",
    name: "Banman Labs: eBay Listing Automation",
    logo: "assets/banman-labs-logo.png",
    tagline: "Automation pipeline that turns sourced parts into published eBay listings, about 10-15 seconds of human time per part (sort images, gather price), the tool does the rest.",
    period: "2025",
    status: "In production, actively used daily",
    stack: ["Python", "Browser automation (Firefox-driven)", "eBay REST API + OAuth", "Excel/xlsx as shared data layer", "AI-assisted image/listing identification"],
    problem:
      "Built for auto car-breaking companies (vehicle dismantlers/salvage yards) selling stripped parts on eBay; listing was only one piece of it, not the whole problem. Before this: identifying which part a photo actually was, sourcing its product data, writing descriptions, processing images, checking for duplicates, and publishing were all manual, capping throughput at roughly 30-50 listings per day per person.",
    solution:
      "Built an automation pipeline (data builder, duplicate checker, image reader/editor, AI-based listing identification rules) that takes raw sourced data to a published eBay listing with minimal manual steps: sort the images and gather the price (about 10-15 seconds of human time per part), and the tool handles everything else.",
    impact: [
      "Manual listing throughput (~30-50/day) replaced with an automated pipeline capable of 200+ listings/day, enabling rapid expansion and growth, and adaptable to each company's own workflow",
      "Human time per part is down to about 10-15 seconds (sort images, gather price), the tool does the rest automatically"
    ],
    highlights: [
      "Phase scripts handle data building, image processing, editing, and duplicate detection end-to-end",
      "AI identification rules for classifying listing images/content automatically",
      "eBay OAuth + REST API integration for direct publishing"
    ],
    flows: [
      {
        name: "Listing flow (~10-15s human time per part)",
        steps: ["Sort images", "Gather price", "Tool does the rest", "Published listing"]
      }
    ],
    images: [
      // TODO: add a real screenshot, kind: "screenshot"
    ],
    source: "Main PC: Desktop/Business/Ebay Lisitng pipeline, Ebay Listings scrapyard"
  },
  {
    id: "banman-labs-crm",
    name: "Banman Labs: CRM (Sales Call Assistant)",
    logo: "assets/banman-labs-logo.png",
    tagline: "Organizes every lead and their objection history, then actively walks you through the live call, surfacing the exact overturn the moment a prospect objects, so even a rookie can perform like a top 10-20% closer.",
    period: "2025",
    status: "In production, used to run my own sales",
    stack: ["Tauri", "Rust", "Web frontend (HTML/CSS/JS)", "Excel/xlsx sync"],
    problem:
      "Cold-calling businesses to win customers is hard: most calls run into an objection, and success rates stay low unless you already know how to handle them. Needed a way to make those calls easier to make and more likely to convert, even for someone with little to no sales experience.",
    solution:
      "Built a tool that walks you through the call itself: when you choose to call a lead, it takes you through the call live, and the moment a prospect raises an objection, it surfaces the specific overturn to use right then, turning objection handling into something closer to having a sales guru telling you what to say next than a skill you need years to build. Organizing every lead with their full objection history, synced to a shared pipeline.xlsx, came after, once actually using the tool made that need obvious.",
    impact: [
      "Currently used in production to run sales for my own products and business",
      "Turns objection handling into a real-time guided prompt instead of something a rep has to have memorized",
      "Lowers the skill floor for closing calls: lets someone with little sales experience perform closer to a top 80-90th-percentile salesperson"
    ],
    highlights: [
      "Live call-flow guidance: walks the rep through the call and surfaces the matching overturn per objection in real time",
      "Central lead record with full objection history so nothing about a prospect gets lost between calls",
      "Tauri + Rust desktop packaging with a web-based frontend",
      "Excel/xlsx used as the shared, human-editable source of truth"
    ],
    images: [
      { src: "assets/crm-screenshot-1.png", kind: "screenshot", caption: "Lead list: every lead organized by status, with one-click View/Call/Remove and Excel sync." },
      { src: "assets/crm-screenshot-2.png", kind: "screenshot", caption: "Live call console: call-opening scenarios on the right entry point, a running objection library (46 objections) on the left, and one-tap outcome buttons for what happened." },
      { src: "assets/crm-screenshot-3.png", kind: "screenshot", caption: "Guided call script mid-call: the exact line to say, why it works, what to listen for, and branches for how the prospect responds." },
      { src: "assets/crm-brand.png", kind: "concept", caption: "BanManLabs CRM: brand identity sheet (design mockup; the numbers shown are placeholder design content, not real data)." }
    ],
    source: "Main PC: Desktop/Business/Ebay Lisitng pipeline/BanManLabs CRM"
  },
  {
    id: "backtesting-software",
    name: "Banman Labs: Backtesting Suite (Kings Gold)",
    logo: "assets/banman-labs-logo.png",
    tagline: "Custom-built backtesting, parameter-optimization, and walk-forward validation suite for gold/forex strategies, wired directly into MetaTrader 5 for both data and live execution: the kind of research/backtesting environment institutional quant desks license or build in-house (QuantConnect's LEAN engine, Deltix, Bloomberg's BQuant), not what ships bundled with a retail platform.",
    period: "2025-2026",
    status: "Active development",
    stack: ["Python", "MetaTrader 5 API", "Tkinter / CustomTkinter GUI", "Local historical-data caching", "Custom parameter optimization engine", "Walk-forward out-of-sample validator"],
    problem:
      "Years spent backtesting trading strategies made it clear the tools out there don't cut it: not built for what's actually needed, or missing key features that matter. Needed something covering the whole process end to end, A to Z, so a strategy's results can be trusted enough to say for certain whether it actually works or not.",
    solution:
      "Built a backtesting and optimization platform that solves what the off-the-shelf tools can't: fast iteration on a custom, session-based strategy instead of a rigid built-in tester; no re-downloading data for every parameter sweep; a walk-forward validator that only trusts a rule if it still holds on data it never learned from, specifically built to catch the overfitting that makes most backtested edges disappear once live; and no gap between what's tested and what actually runs live. Built to rival the top 10 platforms actual institutional/quant trading desks use today: QuantConnect (LEAN engine), Deltix, QuantHouse, Bloomberg Terminal / BQuant, Refinitiv (LSEG) Eikon, Murex, Charles River IMS, MultiCharts, Kx Systems' kdb+, and AmiBroker.",
    impact: [
      "Built a backtesting/optimization pipeline that rivals top-tier institutional-grade tools: QuantConnect (LEAN engine), Deltix, QuantHouse, Bloomberg Terminal / BQuant, Refinitiv (LSEG) Eikon, Murex, Charles River IMS, MultiCharts, Kx Systems' kdb+, and AmiBroker; engine is strategy-agnostic, built to test any strategy fed into it, not locked to one",
      "Walk-forward validator tests every optimization on data it never learned from before it's trusted; closes the exact overfitting gap that makes most retail backtested edges fail to hold up live",
      "Local historical-data caching makes full parameter sweeps fast enough to iterate same-day instead of re-downloading data per run",
      "One MT5 integration covers both backtesting data and live execution, so optimized parameters go straight from the optimizer into a running strategy"
    ],
    highlights: [
      "Multiple independent strategy engines built and refined through repeated backtesting and iteration",
      "Parameter optimizer with baseline-vs-sweep comparison, per-parameter sensitivity charts, and plain-English tuning recommendations; tests thousands of combinations against a local historical-data cache in minutes",
      "Walk-forward hour-blocking validator: learns which hours to trade from one period, then re-tests that decision on a period it never saw, repeated across history, before anything gets written into a live strategy",
      "Custom live intelligence-dashboard integration plus a session-discovery tool for monitoring signals in real time",
      "Direct MetaTrader 5 API integration for both historical data and live order execution"
    ],
    flows: [
      {
        name: "Backtest-to-execution flow",
        steps: ["Historical data cache (MT5 API)", "Strategy engine", "Parameter optimizer (sweep & score)", "Walk-forward validation (unseen data)", "Optimized params -> live MT5 execution"]
      }
    ],
    images: [
      { src: "assets/hour-tightener-cards.png", kind: "screenshot", caption: "Hour Tightener HTML report: walk-forward hour-holdup table plus the A/B keep-hours verdict cards, each with real unseen-data profit and a beat-every-hour count." },
      { src: "assets/hour-tightener-charts.png", kind: "screenshot", caption: "Hour Tightener graphs: running profit on unseen data for every-hour vs. the A/B hour selections, each test period side by side, and the real profit/loss by hour that decided them." },
      { src: "assets/hour-tightener-console.png", kind: "screenshot", caption: "Hour Tightener console output: the per-hour walk-forward Score table (GOOD TO GO / TEST MORE / WEAK / WON'T WORK), the actual evidence behind which hours get written into a live strategy." }
    ],
    source: "Main PC: Desktop/Trader Bot (kings_gold_optimizer.py, hour_tightener.py); USB Backup/Nova 2/nova_ai"
  },
  {
    id: "banman-labs-commerce",
    name: "Banman Labs Commerce: Multi-Marketplace Dropshipping Platform",
    logo: "assets/banman-labs-logo.png",
    tagline: "Ops platform that runs product sourcing, AI-drafted listings, and order fulfilment across eBay (UK) and Shopee/Lazada/Tokopedia/TikTok Shop (Indonesia) from one shared database; connected to the real eBay account, still in progress, not final yet.",
    period: "2026",
    status: "In progress: V1 built and connected to the real eBay account; still in progress, not final yet",
    stack: ["Python", "FastAPI", "SQLAlchemy + SQLite", "Playwright (stealth browser automation)", "Selenium (AI description/image automation)", "eBay Sell API + OAuth", "Server-rendered Jinja2 frontend"],
    problem:
      "Running dropship listings end-to-end across multiple marketplaces and two countries (sourcing, pricing, writing descriptions, processing photos, checking real fees, publishing, then tracking orders and fulfilment) doesn't scale as a manual, per-marketplace process, and anything that touches real money needs a human to actually decide, not a bot running unattended.",
    solution:
      "Built a single FastAPI platform covering two country workflows on one shared database: Indonesia (Shopee/Lazada/Tokopedia/TikTok Shop, sourced from marketplace sellers and dropshippers) and UK (eBay only, sourced strictly from dedicated dropship suppliers to stay policy-compliant). Automates the parts that don't need a human: GoDropship product-pack fetching and checkout-to-payment via Playwright, AI-drafted product descriptions with a hard-coded anti-hallucination scrubber, AI photo enhancement, eBay category/item-specifics auto-selection, real order sync and traffic analytics; and routes anything irreversible (an actual purchase, a real payment) through an approval queue with a full audit log instead of letting it run on its own.",
    impact: [
      "Three country workspaces (Indonesia, UK, US) running off one shared database, each in its own currency, rolled up into a single cross-country Overview",
      "38 real products built end to end (identity, pricing, images, description) across the UK workspace, with 12 flagged by the app itself as 'built, awaiting listing': a real backlog ready to publish, not placeholder data",
      "Analytics page automatically separates 'no real views yet' (listing/SEO problem) from 'views but no sales' (price/photo problem) using eBay's own Sell Analytics traffic data, instead of leaving that as a guess",
      "GoDropship purchase automation drives a real checkout via Playwright through address entry and shipping selection, stopping deliberately at the payment step as a manual gate"
    ],
    highlights: [
      "Human-in-the-loop approvals plus a full audit log (who/when/why) on every status change: nothing with real money or account-standing risk executes unattended",
      "AI product-description generator with a deterministic scrubber that strips any certification/compliance claim not verbatim in the source text: added after live testing caught the model fabricating an uncredentialed claim in roughly 1 of 4 runs even with an explicit prompt rule against it",
      "GoDropship sourcing automation (Playwright + stealth): fetches product packs, checks live stock with no login required, and runs an automatic morning stock sync across every active source",
      "eBay Sell API integration: OAuth, Taxonomy-API category/item-specifics auto-selection, a legacy-API image-upload bridge built around a production-only Media API 404, and real order sync + traffic analytics"
    ],
    flows: [
      {
        name: "Product-to-sale flow",
        steps: ["Source (GoDropship / marketplace)", "AI description + photo pipeline", "Operator review & approval", "Publish (eBay Sell API)", "Order sync + analytics"]
      }
    ],
    images: [
      { src: "assets/commerce-overview.png", kind: "screenshot", caption: "Cross-country Overview: combined revenue/profit/orders rollup across Indonesia, UK, and US workspaces, plus what needs attention (approvals, issues, at-risk products, new opportunities)." },
      { src: "assets/commerce-products.png", kind: "screenshot", caption: "UK Products view: every built product with its sourcing, score, and status. The in-app banner visible here is real and current: it self-reports that no listing has sold end-to-end yet, and the whole dashboard is built to keep flagging that until it does." }
    ],
    source: "E:\\Ban Man Ecommerce\\BanmanLabsCommerce"
  },
];

// Smaller tools/projects: shown as a compact bullet list on the page instead of full cards.
// Same honesty rules apply (no invented numbers), just less detail per entry.
const OTHER_PROJECTS = [
  {
    name: "Manuscript Comparison App",
    description: "Desktop app that compares ancient manuscripts side by side across different languages, to help verify textual authenticity."
  },
  {
    name: "Luxury Bag Inventory Software",
    description: "Stock management tool built for shop owners handling luxury bag inventory, tracking stock levels and handling day-to-day management."
  },
  {
    name: "Accounting & Invoice Tool",
    description: "Reads and sorts invoices automatically, then produces turnover figures and answers financial questions on demand."
  },
  {
    name: "eBay Listing Image Recovery Tool",
    description: "Cross-checks live eBay listings against the source store to detect and recover broken or missing product images."
  },
  {
    name: "Local AI Coding Assistant",
    description: "Desktop GUI for a locally-run coding assistant model, with persistent conversation memory: the personal AI assistant mentioned above."
  },
  {
    name: "Web Vulnerability Scanner",
    description: "Python tool that scans a target site for common web application vulnerabilities and outputs structured findings, for authorized security testing."
  },
  {
    name: "Image Generation & Download Pipeline",
    description: "Automated tool for generating and downloading images in bulk through Tor-routed browser sessions."
  },
  {
    name: "AI Product Photo Generator",
    description: "Self-hosted local pipeline (Qwen2.5-VL vision model + Qwen3 planning + ComfyUI/SDXL) that reads a product's real photos, writes a structured identity description, and generates a premium hero shot from it, still in progress, not finished yet (not yet pixel-accurate to the source photos)."
  }
];
