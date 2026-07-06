// ============================================================
//  EDIT THIS FILE TO POPULATE YOUR PORTFOLIO
//  Everything that appears on the page lives here.
// ============================================================

export const site = {
  brand: "aashish.",
  name: "Aashish Kumar",
  location: "Seattle, WA",
  tagline: "Senior backend engineer. I build scalable, cloud-native services, high-throughput data pipelines, and production GenAI/RAG systems.",
  bio: "Five-plus years shipping production backends — most recently at Amazon Payments, building batch platforms processing 1M+ records daily and internal AI tooling adopted by 1K+ engineers. Before that, healthcare and public-sector platforms across Java, Python, and .NET. End-to-end ownership is the part I care about: system design, infra-as-code, observability, and the on-call that comes with it.",
  stats: [
    { value: "5+",  label: "Years in production" },
    { value: "1M+", label: "Records / day processed" },
    { value: "1K+", label: "Engineers using my tools" },
  ],
  socials: {
    github:   "https://github.com/aashishkumar96",
    linkedin: "https://linkedin.com/in/aashishkumar96",
    email:    "mailto:kumaraashish0796@gmail.com",
    resume:   "/AashishKumar_Resume.pdf",
  },
}

// ------------------------------------------------------------
//  LIVE ACTIVITY FEED
// ------------------------------------------------------------
export const activity = {
  todayCommits: 0,
  agentActions: 0,
  items: [
    { text: "Shipped RAG knowledge assistant at Amazon Payments",       time: "2025", actor: "Amazon Bedrock" },
    { text: "Launched Applyloop — AI job autofill platform for India",  time: "2025", actor: "Side Project" },
    { text: "Led design of batch platform processing 1M+ records/day",  time: "2025", actor: "Amazon Payments" },
  ],
}

// ------------------------------------------------------------
//  PROJECTS
// ------------------------------------------------------------
export const projectsIntro = {
  eyebrow: "Work",
  title: "Systems I built and still think about.",
  subtitle: "Each one started with a hard problem — partner files arriving out of order, healthcare APIs crawling, engineers waiting 30 minutes to fill a job form. These are the ones I'd build again.",
}

export const projects = [
  {
    name: "Applyloop",
    tagline: "An India-focused AI job application platform that fills any form in 30 seconds and attaches a tailored resume PDF automatically.",
    meta: "Solo · 2025 · applyloop.in",
    github: "https://github.com/aashishkumar96/applyloop-in",
    githubExt: "https://github.com/aashishkumar96/applyloop-extension",
    body: [
      "Indian job seekers were spending 30 minutes on every application — copy-pasting the same details into Naukri, Greenhouse, Lever, and 200+ company career pages, each with its own field naming and CTC-in-LPA quirks. Applyloop fixes that: a Chrome extension that discovers every fillable field using 7 label-extraction strategies, fills them from a saved profile, and calls an AI fallback for open-ended questions.",
      "The backend is FastAPI + Python on Render (Singapore region for India latency), with a Gemini → Groq → OpenRouter fallback chain so the free LLM tier covers all users until meaningful scale. Resume tailoring runs through an ATS match scorer and an AI rewriter that renders a fresh PDF per job. The extension attaches it via the DataTransfer API — the only method browsers accept as a genuine file upload.",
    ],
  },
  {
    name: "Batch Processing Platform",
    tagline: "A horizontally-scalable Java batch platform processing 1M+ records a day for Amazon Payments.",
    meta: "Amazon Payments · 2025",
    github: null,
    githubExt: null,
    body: [
      "Partner batch files arrive on their own schedule, in their own shape, and occasionally not at all. The platform I led design on ingests them, validates them, retries the pieces that fail, and isolates the failures that don't — so one bad file doesn't poison the rest of the run.",
      "Built on AWS Step Functions, Lambda, DynamoDB, and S3 with idempotent processing so partial-failure recovery is predictable rather than exciting. CloudWatch watches the whole pipeline and pages us when a partner file is late or malformed before the SLA is at risk.",
    ],
  },
  {
    name: "RAG Knowledge Assistant",
    tagline: "An internal AI assistant that lets payment-operations agents query policy, compliance, and runbook docs in natural language.",
    meta: "Amazon Payments · 2025",
    github: null,
    githubExt: null,
    body: [
      "Support agents were losing minutes per query digging through internal wikis. I built a RAG pipeline on Amazon Bedrock: document ingestion, chunking, embedding generation, and semantic search, wired to a chat interface. Hybrid search with reranking and metadata filtering cut hallucinated responses to near zero on operational queries.",
      "The same architecture underpins an MCP-integrated agent that autonomously generates integration tests across critical service boundaries — another internal tool that started as a prototype and ended up in daily use.",
    ],
  },
  {
    name: "CloudCover Onboarding Prompt",
    tagline: "An internal GenAI prompt adopted by 1K+ engineers that audits test coverage before code review.",
    meta: "Amazon · 2025",
    github: null,
    githubExt: null,
    body: [
      "Teams kept onboarding services into CloudCover and discovering coverage gaps in review — expensive and late. I authored and maintained a prompt that reads a service's unit and integration tests, finds the uncovered paths, and surfaces the gaps up front.",
      "Over a thousand engineers now use it as part of their pre-review flow. Teams that adopt it regularly clear 70% coverage without a fight.",
    ],
  },
  {
    name: "Oklahoma Healthcare Provider Portal",
    tagline: "Spring Boot microservices behind a statewide portal used daily by healthcare professionals.",
    meta: "Gainwell Technologies · 2022–2025",
    github: null,
    githubExt: null,
    body: [
      "Provider workflows — patient data retrieval, eligibility validation, reporting — are the boring, critical parts of healthcare IT. I built and maintained the Java Spring Boot services underneath them, with Redis-backed caching on the hot read paths and Kafka-based async messaging to decouple eligibility and reporting services.",
      "A focused pass on query optimization, indexing, and caching brought API throughput up 30%. Services were containerised with Docker and deployed to Kubernetes on AWS. Also mentored an intern end-to-end on their first production feature.",
    ],
  },
  {
    name: "Statewide Vaccination Backend",
    tagline: "Python and ASP.NET Core services for a statewide COVID-19 vaccination platform during peak rollout.",
    meta: "DXC Technology · 2019–2022",
    github: null,
    githubExt: null,
    body: [
      "Ingestion, validation, and analytics workloads for a statewide vaccination platform during the period when 'can the system stay up' was a genuine question. Built backend services in FastAPI, Flask, and ASP.NET Core, with Celery + Redis for async task execution and secure auth layered in from day one.",
      "Indexing and query optimisation on the high-traffic read endpoints picked up about 25% throughput — modest sounding, material at the scale it was running at.",
    ],
  },
]

// ------------------------------------------------------------
//  DAY JOBS
// ------------------------------------------------------------
export const jobsIntro = {
  eyebrow: "Day Jobs",
  title: "Who paid me, and what I shipped there.",
}

export const jobs = [
  {
    company: "Amazon (via TEKsystems)",
    role: "Software Development Engineer II",
    period: "Apr 2025 – Present",
    logo: { letter: "A", bg: "#FF9900" },
    accent: "#FF9900",
    description: "Led design of a Java batch platform processing 1M+ records daily on Step Functions, Lambda, DynamoDB, and S3. Built a RAG knowledge assistant on Amazon Bedrock with hybrid search and reranking. Engineered AI agent workflows with MCP tools for automated integration test generation. Authored an internal GenAI prompt adopted by 1K+ engineers.",
    stack: ["Java", "Python", "AWS CDK", "Step Functions", "Lambda", "DynamoDB", "Amazon Bedrock", "RAG", "LangChain", "TypeScript"],
  },
  {
    company: "Gainwell Technologies",
    role: "Software Development Engineer",
    period: "Jun 2022 – Mar 2025",
    logo: { letter: "G", bg: "#0F5FA8" },
    accent: "#3B82F6",
    description: "Shipped Spring Boot microservices powering a statewide healthcare provider portal for Oklahoma. Improved API throughput 30% via query optimisation, Redis caching, and indexing. Introduced Kafka-based async messaging to decouple services. Containerised with Docker and deployed to Kubernetes on AWS.",
    stack: ["Java 17", "Spring Boot", "Kafka", "Redis", "MySQL", "DynamoDB", "Docker", "Kubernetes"],
  },
  {
    company: "DXC Technology",
    role: "Associate Software Developer",
    period: "Jul 2019 – Jun 2022",
    logo: { letter: "D", bg: "#5F249F" },
    accent: "#A78BFA",
    description: "Built Python backend services (FastAPI, Flask) and REST APIs for internal business workflows. Developed data ingestion and processing pipelines. Implemented async task execution with Celery + Redis. Contributed to PostgreSQL schema design and query optimisation via SQLAlchemy.",
    stack: ["Python", "FastAPI", "Flask", "Celery", "Redis", "PostgreSQL", "SQLAlchemy"],
  },
  {
    company: "University of Washington",
    role: "B.S. Computer Science",
    period: "Sep 2015 – Jun 2019",
    logo: { letter: "W", bg: "#4B2E83" },
    accent: "#34D399",
    description: "Undergraduate degree in Computer Science, Seattle. Graduated June 2019, moved directly into production backend engineering the following month.",
    stack: ["Algorithms", "Distributed Systems", "Operating Systems"],
  },
]

// ------------------------------------------------------------
//  SCHOOL & SKILLS
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

export const honors = [
  { label: "Languages",       org: "Java, Python, SQL, TypeScript, C#",                                          note: "Java and Python are home." },
  { label: "Backend",         org: "Spring Boot, FastAPI, Flask, Microservices, REST, Event-Driven, Kafka",      note: "Distributed systems end-to-end." },
  { label: "GenAI & RAG",     org: "LLMs, RAG, LangChain, LlamaIndex, Bedrock, Pinecone, OpenSearch, MCP",      note: "Embeddings, hybrid search, AI agents." },
  { label: "Cloud & DevOps",  org: "AWS (CDK, Lambda, Step Functions, DynamoDB, S3, EC2, RDS), Docker, K8s, Terraform", note: "Also Jenkins, GitHub Actions, CI/CD." },
  { label: "Datastores",      org: "DynamoDB, PostgreSQL, MySQL, Redis",                                         note: "Schema design, indexing, migrations." },
]

// ------------------------------------------------------------
//  COLOPHON
// ------------------------------------------------------------
export const colophonIntro = {
  eyebrow: "Colophon",
  title: "About this site.",
  subtitle: "Built with React, Vite, and Motion. Typography is Fraunces for display, Inter for body, and JetBrains Mono for metadata. Deployed on Vercel, source on GitHub.",
}

export const colophonFlows = [
  {
    source:  { label: "React",  color: "coral" },
    agent:   { label: "Vite",   color: "cream" },
    handoff: { label: "Vercel", color: "cream" },
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
