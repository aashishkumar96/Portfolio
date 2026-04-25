import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Github, Linkedin, ArrowUpRight, ArrowRight, ChevronLeft, ChevronRight, FileText } from 'lucide-react'
import {
  site, activity,
  projectsIntro, projects,
  jobsIntro, jobs,
  schoolIntro, degrees, honors,
  colophonIntro, colophonFlows, colophonAgents,
} from './content.js'

/* ----------------------------------------------------------------
   Reveal-on-scroll helper
---------------------------------------------------------------- */
function Reveal({ children, as: Tag = 'div', delay = 0, className = '', ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setShown(true); io.disconnect() } },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? 'is-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/* ----------------------------------------------------------------
   NAV
---------------------------------------------------------------- */
const NAV_ITEMS = [
  { id: 'home',     label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'jobs',     label: 'Day Jobs' },
  { id: 'school',   label: 'School' },
  { id: 'colophon', label: 'Colophon' },
]

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers = NAV_ITEMS.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return null
      const io = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      io.observe(el)
      return io
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  const scrollTo = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a href="#home" onClick={scrollTo('home')} className="nav__brand">{site.brand}</a>

      <div className="nav__links">
        {NAV_ITEMS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={scrollTo(id)}
            className={`nav__link ${active === id ? 'nav__link--active' : ''}`}
          >
            {active === id && <span className="dot" />}
            {label}
          </a>
        ))}
        <a href={site.socials.resume} className="nav__link">Resume</a>
      </div>

      <div className="nav__socials">
        <a href={site.socials.github}   aria-label="GitHub"><Github   size={18} strokeWidth={1.5} /></a>
        <a href={site.socials.linkedin} aria-label="LinkedIn"><Linkedin size={18} strokeWidth={1.5} /></a>
      </div>
    </nav>
  )
}

/* ----------------------------------------------------------------
   HERO
---------------------------------------------------------------- */
function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="wrap">
        <Reveal>
          <div className="eyebrow hero__eyebrow">
            <span className="dot" />
            {site.name.toUpperCase()} · {site.location.toUpperCase()}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="display hero__name">{site.name}</h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="hero__tagline">{site.tagline}</p>
        </Reveal>

        <Reveal delay={300}>
          <div className="hero__stats">
            {site.stats.map((s, i) => (
              <div key={i}>
                <div className="stat__value">{s.value}</div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={400}>
          <p className="hero__bio">{site.bio}</p>
        </Reveal>

        <Reveal delay={500}>
          <div className="hero__ctas">
            <a href={site.socials.resume} className="btn btn--primary">
              Resume <ArrowRight size={16} />
            </a>
            <a href={site.socials.email} className="btn btn--ghost">
              Email me <ArrowUpRight size={16} />
            </a>
            <a href={site.socials.github} className="btn btn--ghost">
              GitHub <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={600} className="activity">
          <div className="activity__head">
            <div className="eyebrow"><span className="dot" /> LIVE FROM THE SITE</div>
            <div className="activity__meta">
              <strong>{activity.todayCommits}</strong> commits today · <strong>{activity.agentActions}</strong> agent actions · 24h
            </div>
          </div>
          <ul className="activity__list">
            {activity.items.map((item, i) => (
              <li key={i} className="activity__item">
                <span className="activity__bullet">◆</span>
                <span>{item.text}</span>
                <span className="activity__actor">{item.actor || ''}</span>
                <span className="activity__time">{item.time}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   PROJECTS
---------------------------------------------------------------- */
function Projects() {
  const [i, setI] = useState(0)
  const count = projects.length
  const go = (dir) => setI((prev) => (prev + dir + count) % count)
  const current = projects[i]
  const prev = projects[(i - 1 + count) % count]
  const next = projects[(i + 1) % count]

  return (
    <section id="projects" className="section projects">
      <div className="wrap">
        <div className="projects__head">
          <Reveal><div className="eyebrow projects__eyebrow">{projectsIntro.eyebrow.toUpperCase()}</div></Reveal>
          <Reveal delay={100}><h2 className="display projects__title">{projectsIntro.title}</h2></Reveal>
          <Reveal delay={200}><p className="lede">{projectsIntro.subtitle}</p></Reveal>
        </div>

        <Reveal>
          <div className="projects__tabs">
            {projects.map((p, idx) => (
              <button
                key={p.name}
                onClick={() => setI(idx)}
                className={`tab ${idx === i ? 'tab--active' : ''}`}
              >
                <span className="tab__num">{String(idx + 1).padStart(2, '0')}</span>
                <span>{p.name}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="projects__stage">
          <button className="project-nav project-nav--prev" onClick={() => go(-1)} aria-label="Previous project">
            <ChevronLeft size={20} />
          </button>

          {/* Peek cards (desktop only, via CSS) */}
          <div className="project-peek project-peek--prev" aria-hidden="true">
            <h3>{prev.name}</h3>
            <p>{prev.tagline}</p>
          </div>
          <div className="project-peek project-peek--next" aria-hidden="true">
            <h3>{next.name}</h3>
            <p>{next.tagline}</p>
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={current.name}
              className="project-card"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
            >
              <div className="project-card__head">
                <div className="project-card__num">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <div className="project-card__icon"><FileText size={24} strokeWidth={1.5} /></div>
                </div>
                <div style={{ gridColumn: '2 / 3' }}>
                  <h3 className="display project-card__title">{current.name}</h3>
                  <p className="project-card__tagline">{current.tagline}</p>
                  <div className="project-card__meta">{current.meta}</div>
                </div>
                <a href={current.visit} className="btn btn--ghost project-card__visit">
                  Visit site <ArrowUpRight size={14} />
                </a>
              </div>

              <div className="project-card__body">
                {current.body.map((para, idx) => <p key={idx}>{para}</p>)}
              </div>
            </motion.article>
          </AnimatePresence>

          <button className="project-nav project-nav--next" onClick={() => go(1)} aria-label="Next project">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   DAY JOBS
---------------------------------------------------------------- */
function Jobs() {
  return (
    <section id="jobs" className="section jobs">
      <div className="wrap">
        <div className="jobs__head">
          <Reveal><div className="eyebrow jobs__eyebrow">{jobsIntro.eyebrow.toUpperCase()}</div></Reveal>
          <Reveal delay={100}><h2 className="display">{jobsIntro.title}</h2></Reveal>
        </div>

        <Reveal>
          <div className="jobs__grid">
            {jobs.map((job, idx) => (
              <article key={job.company} className="job-card">
                <div className="job-card__head">
                  <span className="job-card__num" style={{ color: job.accent }}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="job-card__logo" style={{ background: job.logo.bg }}>
                    {job.logo.letter}
                  </div>
                  <div>
                    <div className="job-card__company">{job.company}</div>
                    <div className="job-card__role">{job.role} · {job.period}</div>
                  </div>
                </div>
                <p className="job-card__desc">{job.description}</p>
                <div className="job-card__stack">
                  {job.stack.map((t) => <span key={t} className="monotag">{t}</span>)}
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   SCHOOL + HONORS
---------------------------------------------------------------- */
function School() {
  return (
    <section id="school" className="section school">
      <div className="wrap">
        <div className="school__head">
          <Reveal><div className="eyebrow school__eyebrow">{schoolIntro.eyebrow.toUpperCase()}</div></Reveal>
          <Reveal delay={100}><h2 className="display school__title">{schoolIntro.title}</h2></Reveal>
        </div>

        <div className="school__grid">
          <Reveal>
            <div className="degrees__list">
              {degrees.map((d, idx) => (
                <div key={d.name} className="degree">
                  <div className="degree__num">{String(idx + 1).padStart(2, '0')}</div>
                  <div>
                    <div className="degree__name">{d.name}</div>
                    <div className="degree__meta">
                      {d.school}
                      <span className="dot">·</span>
                      <span className="degree__year">{d.year}</span>
                    </div>
                    <div className="degree__note">{d.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <div className="honors__head">Stack</div>
              <div className="honors__list">
                {honors.map((h, idx) => (
                  <div key={idx} className="honor">
                    <span className="honor__label">{h.label}</span>
                    <span className="honor__org">{h.org}</span>
                    <div className="honor__note">{h.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   COLOPHON
---------------------------------------------------------------- */
function Colophon() {
  return (
    <section id="colophon" className="section colophon">
      <div className="wrap">
        <div className="colophon__head">
          <Reveal><div className="eyebrow colophon__eyebrow">{colophonIntro.eyebrow.toUpperCase()}</div></Reveal>
          <Reveal delay={100}><h2 className="display">{colophonIntro.title}</h2></Reveal>
          <Reveal delay={200}><p className="lede" style={{ marginTop: 20 }}>{colophonIntro.subtitle}</p></Reveal>
        </div>

        <Reveal>
          <div className="flow">
            {colophonFlows.map((row, idx) => (
              <div key={idx} className="flow__row">
                <span className={`flow__node flow__node--${row.source.color}`}>{row.source.label}</span>
                <span className="flow__arrow">→</span>
                <span className={`flow__node flow__node--${row.agent.color}`}>{row.agent.label}</span>
                {row.handoff && (
                  <>
                    <span className="flow__arrow">→</span>
                    <span className={`flow__node flow__node--${row.handoff.color}`}>{row.handoff.label}</span>
                  </>
                )}
                <span className="flow__arrow">→</span>
                <span className="flow__targets">
                  {row.targets.map((t) => <span key={t}>{t}</span>)}
                </span>
              </div>
            ))}
            <p className="flow__note">Inputs come from humans (you) and cron. Everything is observable in the activity log.</p>
          </div>
        </Reveal>

        {colophonAgents.map((agent, idx) => (
          <Reveal key={agent.name} delay={idx * 100}>
            <div className="colophon-agent">
              <div className="colophon-agent__num">{String(idx + 1).padStart(2, '0')}</div>
              <div className="colophon-agent__icon" style={{ background: agent.logo.bg }}>
                {agent.logo.letter}
              </div>
              <div>
                <div className="colophon-agent__name">{agent.name}</div>
                <div className="colophon-agent__desc">{agent.description}</div>
              </div>
              <a href={agent.link} className="colophon-agent__link">
                {agent.linkLabel} <ArrowRight size={14} />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   FOOTER
---------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div>© {new Date().getFullYear()} {site.name.toUpperCase()}</div>
        <div>BUILT WITH REACT, VITE, MOTION</div>
      </div>
    </footer>
  )
}

/* ----------------------------------------------------------------
   ROOT
---------------------------------------------------------------- */
export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Jobs />
        <School />
        <Colophon />
      </main>
      <Footer />
    </>
  )
}
