// ============================================================
//  EDIT THIS FILE TO POPULATE YOUR PORTFOLIO
//  Everything that appears on the page lives here.
// ============================================================

export const site = {
  brand: "yourname.",
  name: "Your Name",
  location: "City, State",
  tagline: "Software engineer. I build AI-powered products and the systems underneath them.",
  bio: "About a decade of shipping software — startups, big co's, and for the last year, working solo on a pile of things I make for myself. Lately the work is split between products with real users and agents that can run them without me watching.",
  stats: [
    { value: "10",  label: "Projects shipped" },
    { value: "8",   label: "Commits · this week" },
    { value: "232", label: "Agent actions · 24h" },
  ],
  socials: {
    github:   "https://github.com/yourhandle",
    linkedin: "https://linkedin.com/in/yourhandle",
    x:        "https://x.com/yourhandle",
    email:    "mailto:you@example.com",
    resume:   "#", // link to your resume PDF
  },
}

// ------------------------------------------------------------
//  LIVE ACTIVITY FEED (shown at the bottom of the hero)
//  Static for now — wire up to real data later if you want.
// ------------------------------------------------------------
export const activity = {
  todayCommits: 0,
  agentActions: 3,
  items: [
    { text: "Commented on Moltbook",                  time: "2h ago", actor: null },
    { text: "Posted to Moltbook",                     time: "2h ago", actor: null },
    { text: "All systems nominal — no action needed", time: "2h ago", actor: "Conductor" },
  ],
}

// ------------------------------------------------------------
//  PROJECTS  (tabbed carousel section)
//  Add as many as you want — the tabs auto-generate.
// ------------------------------------------------------------
export const projectsIntro = {
  eyebrow: "Work",
  title: "Ten projects I built and still think about.",
  subtitle: "Some are products people use every day. Some are internal tools I got tired of re-writing. Most started with a problem I had on a Saturday.",
}

export const projects = [
  {
    name: "FaB Stats",
    tagline: "A stats site and Discord bot for the Flesh and Blood TCG community.",
    meta: "Solo · 2024–Present",
    visit: "https://example.com",
    body: [
      "Flesh and Blood is a card game I play. The community kept arguing about the meta — what heroes are winning, what matchups are rough — without real data to back it up, so I started logging match data to answer the questions myself.",
      "It grew into a Chrome extension that imports whole tournament brackets in one click, a Discord bot living in community servers, and a rotating set of daily puzzle minigames that people play in the morning while they wait for coffee.",
    ],
  },
  {
    name: "Old Ways Today",
    tagline: "A wellness site about non-toxic living and the agent stack I use here.",
    meta: "Solo · 2025",
    visit: "https://example.com",
    body: [
      "Old Ways Today was the first place I took this portfolio and pointed it at a real product — a curated knowledge base about non-toxic home goods and product recommendations.",
      "It's a FastAPI backend and Next.js frontend with PostgreSQL for blog and product data, all written and maintained by the same agent stack that runs this site.",
    ],
  },
  {
    name: "Bench Only",
    tagline: "A readable GraphQL client that makes API debugging feel like reading prose.",
    meta: "Solo · 2024",
    visit: "https://example.com",
    body: [
      "Scribe fills the gap — it runs queries via GraphQL, groups them by intent, and turns the response into a narrative technical post that explains what happened and why.",
      "Useful when you're reviewing API changes across deploys and need the post summary answering \"what did you build this week\" without opening twelve tabs.",
    ],
  },
  {
    name: "RowCrew",
    tagline: "A scheduling tool for small crews with rotating shifts.",
    meta: "Solo · 2023",
    visit: "https://example.com",
    body: [
      "Built for a friend running a rowing team. Handles rotating shifts, substitutions, and a little nudging bot that texts people the night before their row.",
    ],
  },
  {
    name: "Spell Brigade",
    tagline: "A co-op deckbuilder prototype for 2–4 players.",
    meta: "Solo · 2023",
    visit: "https://example.com",
    body: [
      "A weekend prototype that kept growing. Multiplayer over websockets, a card drafting engine, and a hand-drawn art direction that came out of not wanting to learn 3D modeling.",
    ],
  },
  {
    name: "EmbedRoute",
    tagline: "Semantic router for LLM pipelines, open-source.",
    meta: "Solo · 2023",
    visit: "https://example.com",
    body: [
      "A tiny library for routing user intents to the right tool or prompt based on embedding similarity. Used it internally for a year before cleaning it up and releasing it.",
    ],
  },
  {
    name: "Moltbook Agent",
    tagline: "A journaling agent that turns my notes into publishable essays.",
    meta: "Solo · 2025",
    visit: "https://example.com",
    body: [
      "Reads a month of morning pages, clusters the recurring threads, and drafts the two or three essays hiding in them. I edit; it drafts.",
    ],
  },
  {
    name: "Launchpad",
    tagline: "A dashboard for all my side projects in one place.",
    meta: "Solo · 2024",
    visit: "https://example.com",
    body: [
      "Pulls uptime, revenue, and user counts across every side project. Saved me from the \"wait, is that one still up?\" problem.",
    ],
  },
]

// ------------------------------------------------------------
//  DAY JOBS  (4-up grid)
// ------------------------------------------------------------
export const jobsIntro = {
  eyebrow: "Day Jobs",
  title: "Who paid me, and what I shipped there.",
}

export const jobs = [
  {
    company: "Company One",
    role: "Software Engineer II",
    period: "2018–2022",
    logo: { letter: "C", bg: "#E91E63" }, // background color of the avatar tile
    accent: "#E91E63",
    description: "Built an internal automation platform that consolidated 4-5 separate tools into a single interface, reducing manual work for network operations teams by over 80%. Migrated the frontend from Django templates to Angular.",
    stack: ["Python", "Django", "Angular", "PostgreSQL", "GitLab CI/CD"],
  },
  {
    company: "Company Two",
    role: "Senior Software Engineer",
    period: "2022–2023",
    logo: { letter: "C", bg: "#0F5FA8" },
    accent: "#3B82F6",
    description: "Designed a JSON schema system for automated email testing — new test cases added without code changes. Definitions stored in S3, executed via Lambda, results piped to CloudWatch. Mentored intern to production deployment.",
    stack: ["AWS Lambda", "S3", "CloudWatch", "Python", "JSON Schema"],
  },
  {
    company: "Side Project",
    role: "Autonomous Trading · Solo",
    period: "2021",
    logo: { letter: "S", bg: "#6B7280" },
    accent: "#A78BFA",
    description: "Fully autonomous bidding system distributed across 50 machines, tracking every collection on a public marketplace in real-time. Adapted daily to stay profitable over 6 months in a bot-vs-bot arms race.",
    stack: ["Node.js", "Redis", "Marketplace SDK", "Docker", "Web3.js"],
  },
  {
    company: "Early Startup",
    role: "Co-founder & Engineer · Startup",
    period: "2017–2018",
    logo: { letter: "S", bg: "#1F2937" },
    accent: "#34D399",
    description: "Real-time weightlifting form analyzer using Kinect — 25 joints at 30fps, scored against expert references. Led a team of 5 through an ACM CHI publication and startup competitions.",
    stack: ["C#", "Kinect SDK", "Computer Vision", "Unity"],
  },
]

// ------------------------------------------------------------
//  SCHOOL & HONORS
// ------------------------------------------------------------
export const schoolIntro = {
  eyebrow: "School",
  title: "Degrees, and a couple of things I'm proud of.",
}

export const degrees = [
  {
    name: "M.S. Software Engineering",
    school: "Your Graduate School",
    year: "2021",
    note: "Completed while working full-time",
  },
  {
    name: "B.S. Computer Science",
    school: "Your Undergrad School",
    year: "2017",
    note: "Graduated with Honors · Teaching Assistant · President, Coding Club",
  },
]

export const honors = [
  { label: "1st Place",      org: "Hackathon Name",           note: "Auto-tagging tool" },
  { label: "Finalist",       org: "Another Hackathon",        note: "Presented at a conference" },
  { label: "Published",      org: "ACM CHI 2017",             note: "Computer vision for fitness applications" },
  { label: "Head Organizer", org: "Regional Hackathon 2017",  note: "Coordinated sponsors and judges" },
]

// ------------------------------------------------------------
//  COLOPHON  (the "how this site runs" section)
// ------------------------------------------------------------
export const colophonIntro = {
  eyebrow: "Colophon",
  title: "Most of this site is written by agents.",
  subtitle: "Not just for show — the same stack I ship in production runs this portfolio. The blog, the chatbot, and the activity feed you scrolled past are all live systems, not mocked content.",
}

// The flow diagram shown in the colophon.
// Each row is a pipeline: [source] → [agent] → [target list]
export const colophonFlows = [
  {
    source:  { label: "Visitor",   color: "coral"  },
    agent:   { label: "Your AI",   color: "cream"  },
    handoff: { label: "MCP",       color: "cream"  },
    targets: ["BenchPress", "RowCrew", "FaB Stats", "Old Ways", "…"],
  },
  {
    source:  { label: "CRON · 3H", color: "sage"   },
    agent:   { label: "Conductor", color: "violet" },
    handoff: null,
    targets: ["Scribe", "Moltbook agent", "Medic"],
  },
]

export const colophonAgents = [
  {
    name: "Scribe",
    description: "Reads yesterday's commits off GitHub GraphQL at 5pm UTC, asks Claude (via an API) to turn them into a narrative post, and publishes.",
    link: "#",
    linkLabel: "Latest post",
    logo: { letter: "S", bg: "#CA9A3E" },
  },
]
