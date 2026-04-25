// ============================================================
//  EDIT THIS FILE TO POPULATE YOUR PORTFOLIO
//  Everything that appears on the page lives here.
// ============================================================

export const site = {
  brand: "aashish.",
  name: "Aashish Kumar",
  location: "Seattle, WA",
  tagline: "Backend software engineer. I build scalable services and high-throughput data pipelines on AWS.",
  bio: "Five plus years shipping production backends — most recently on Amazon's Payments org, before that healthcare and public-sector platforms. End-to-end ownership is the part I care about: system design, infrastructure-as-code, observability, and the on-call that comes with it.",
  stats: [
    { value: "5+",   label: "Years in production" },
    { value: "1M+",  label: "Records / day processed" },
    { value: "1K+",  label: "Engineers using my tools" },
  ],
  socials: {
    github:   "https://github.com/aashishkumar96",
    linkedin: "https://linkedin.com/in/aashishkumar96",
    email:    "mailto:kumaraashish0796@gmail.com",
    resume:   "/AashishKumar_Resume.pdf", // place the PDF at public/AashishKumar_Resume.pdf and this link will work
  },
}

// ------------------------------------------------------------
//  LIVE ACTIVITY FEED (shown at the bottom of the hero)
//  Static for now — simple "recent work" highlights.
// ------------------------------------------------------------
export const activity = {
  todayCommits: 0,
  agentActions: 0,
  items: [
    { text: "Shipped GenAI log-analysis automation at Amazon",    time: "recent",    actor: "AWS" },
    { text: "Authored internal prompt adopted by 1K+ engineers",   time: "2025",      actor: "CloudCover" },
    { text: "Led design of batch platform processing 1M+/day",    time: "2025",      actor: "Amazon Payments" },
  ],
}

// ------------------------------------------------------------
//  PROJECTS  (tabbed carousel section)
//  Built from the strongest initiatives on your resume.
//  Add personal / GitHub projects here later to grow the list.
// ------------------------------------------------------------
export const projectsIntro = {
  eyebrow: "Work",
  title: "Systems I built and still think about.",
  subtitle: "Each one started with a hard problem — partner files arriving out of order, healthcare APIs crawling, engineers writing the same onboarding doc for the fifth time. These are the ones I'd build again.",
}

export const projects = [
  {
    name: "Batch Processing Platform",
    tagline: "A horizontally-scalable Java batch platform processing 1M+ records a day for Amazon Payments.",
    meta: "Amazon Payments · 2025",
    visit: "#",
    body: [
      "Partner batch files arrive on their own schedule, in their own shape, and occasionally not at all. The platform I led design on ingests them, validates them, retries the pieces that fail, and isolates the failures that don't — so one bad file doesn't poison the rest of the run.",
      "Built on AWS Step Functions, Lambda, DynamoDB, and S3 with idempotent processing so partial-failure recovery is predictable rather than exciting. CloudWatch watches the whole pipeline and pages us when a partner file is late or malformed before the SLA is at risk.",
    ],
  },
  {
    name: "GenAI Incident Response",
    tagline: "LLM-driven log analysis that writes the first draft of an incident ticket, not the engineer.",
    meta: "Amazon Payments · 2025",
    visit: "#",
    body: [
      "On-call engineers spend the first ten minutes of every page re-reading the same CloudWatch queries. This tool reads the logs for them: it clusters recent errors, correlates them with deploys, and drafts an incident summary pre-filled into the ticketing system.",
      "The integration cut mean-time-to-first-response meaningfully and, more quietly, turned a chunk of 3am toil into a 30-second triage.",
    ],
  },
  {
    name: "CloudCover Onboarding Prompt",
    tagline: "An internal GenAI prompt, adopted across 1K+ engineers, that audits test coverage before code review.",
    meta: "Amazon · 2025",
    visit: "#",
    body: [
      "Teams kept onboarding services into CloudCover and discovering coverage gaps in review — expensive and late. I authored and maintained a prompt that reads a service's unit and integration tests, finds the uncovered paths, and surfaces the gaps up front.",
      "Over a thousand engineers now use it as part of their pre-review flow. Teams that adopt it regularly clear 70% coverage without a fight.",
    ],
  },
  {
    name: "Oklahoma Healthcare Provider Portal",
    tagline: "Spring Boot microservices behind a statewide portal used daily by healthcare professionals.",
    meta: "Gainwell Technologies · 2022–2025",
    visit: "#",
    body: [
      "Provider workflows — patient data retrieval, eligibility validation, reporting — are the boring, critical parts of healthcare IT. I built and maintained the Java Spring Boot services underneath them.",
      "A focused pass on query optimization, indexing, and service-layer caching for the hot endpoints brought API performance up 30%. Also mentored an intern end-to-end on their first production feature, which was the more rewarding half.",
    ],
  },
  {
    name: "Statewide Vaccination Backend",
    tagline: "ASP.NET Core services for a statewide COVID-19 vaccination platform during peak rollout.",
    meta: "DXC Technology · 2019–2022",
    visit: "#",
    body: [
      "Ingestion, validation, and analytics workloads for a statewide vaccination platform during the period when \"can the system stay up\" was a genuine question. Wrote the backend services in ASP.NET Core, with secure authentication and encryption patterns layered in from day one.",
      "Indexing and query work on the high-traffic read endpoints picked up about 25% throughput — modest sounding, material at the scale it was running at.",
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
    company: "Amazon (via TEKsystems)",
    role: "Software Development Engineer II",
    period: "2025–2026",
    logo: { letter: "A", bg: "#FF9900" },
    accent: "#FF9900",
    description: "Led design of a Java batch platform processing 1M+ records daily on Step Functions, Lambda, DynamoDB, and S3. Built CDK infrastructure-as-code, CloudWatch-driven SLA monitoring, and GenAI log-analysis automation integrated with ticketing. Authored an internal prompt adopted by 1K+ engineers that drives teams to 70%+ code coverage.",
    stack: ["Java", "AWS CDK", "Step Functions", "Lambda", "DynamoDB", "S3", "TypeScript", "CloudWatch"],
  },
  {
    company: "Gainwell Technologies",
    role: "Software Development Engineer",
    period: "2022–2025",
    logo: { letter: "G", bg: "#0F5FA8" },
    accent: "#3B82F6",
    description: "Shipped Spring Boot microservices powering a statewide healthcare provider portal for Oklahoma. Improved API performance by 30% via query optimization, indexing, and caching. Designed relational and NoSQL schemas across MySQL and DynamoDB, and mentored an intern through their first production feature.",
    stack: ["Java", "Spring Boot", "MySQL", "DynamoDB", "REST APIs"],
  },
  {
    company: "DXC Technology",
    role: "Associate Software Developer",
    period: "2019–2022",
    logo: { letter: "D", bg: "#5F249F" },
    accent: "#A78BFA",
    description: "Built ASP.NET Core backend services for a statewide COVID-19 vaccination platform — ingestion, validation, analytics, and secure auth. Lifted DB performance by 25% with indexing and query tuning on high-traffic endpoints.",
    stack: ["C#", "ASP.NET Core", "SQL", "REST APIs"],
  },
  {
    company: "University of Washington",
    role: "B.S. Computer Science",
    period: "2015–2019",
    logo: { letter: "W", bg: "#4B2E83" },
    accent: "#34D399",
    description: "Undergraduate degree in Computer Science. Graduated June 2019, moving directly into full-time backend engineering work the following month.",
    stack: ["Algorithms", "Systems", "Distributed Computing"],
  },
]

// ------------------------------------------------------------
//  SCHOOL & HONORS
// ------------------------------------------------------------
export const schoolIntro = {
  eyebrow: "School & Skills",
  title: "Degree, and the tools I reach for.",
}

export const degrees = [
  {
    name: "B.S. Computer Science",
    school: "University of Washington, Seattle",
    year: "2019",
    note: "Moved straight from graduation into production backend work.",
  },
]

// Repurposed the right column from "Honors" to "Stack" — a clean way to surface
// your technical skills without adding a whole new section.
export const honors = [
  { label: "Languages",          org: "Java, Python, C#, TypeScript",                            note: "Java is home; TypeScript for IaC." },
  { label: "Backend",             org: "Spring Boot, ASP.NET Core, Microservices, REST",          note: "Distributed systems, API-driven architectures." },
  { label: "Cloud & DevOps",      org: "AWS (CDK, Lambda, DynamoDB, S3, Step Functions, EC2, RDS)", note: "Also Docker, Jenkins, Git." },
  { label: "Datastores",          org: "DynamoDB, PostgreSQL, MySQL, Redis",                      note: "Schema design, indexing, migrations." },
  { label: "Testing & Tooling",   org: "JUnit, Mockito, Integration Testing",                     note: "Observability, GenAI tooling, prompt engineering." },
]

// ------------------------------------------------------------
//  COLOPHON  (repurposed as a simple "about this site" footer)
//  Kept the section because the design hangs together with it.
//  You can remove it later by deleting the <Colophon /> line in App.jsx.
// ------------------------------------------------------------
export const colophonIntro = {
  eyebrow: "Colophon",
  title: "About this site.",
  subtitle: "Built with React, Vite, and Motion. Typography is Fraunces for display, Inter for body, and JetBrains Mono for metadata. Deployed on Vercel, source on GitHub.",
}

// Simplified flow: just shows the stack, honest and quiet.
export const colophonFlows = [
  {
    source:  { label: "React",    color: "coral"  },
    agent:   { label: "Vite",     color: "cream"  },
    handoff: { label: "Vercel",   color: "cream"  },
    targets: ["Static build", "Global CDN", "Auto-deploy on push"],
  },
]

export const colophonAgents = [
  {
    name: "Source on GitHub",
    description: "The code for this site is public. Every push to main auto-deploys through Vercel.",
    link: "https://github.com/aashishkumar96/Portfolio",
    linkLabel: "View repo",
    logo: { letter: "G", bg: "#1F2937" },
  },
]
