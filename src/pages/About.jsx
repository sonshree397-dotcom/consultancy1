import { motion } from 'framer-motion'
import { useState } from 'react'
import toast from 'react-hot-toast'
import SocialLinks from '../components/SocialLinks'

function About() {
  const reveal = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 },
  }

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  }

  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterError, setNewsletterError] = useState('')
  const [newsletterTouched, setNewsletterTouched] = useState(false)

  const validateNewsletterEmail = (v) => {
    const email = v.trim()
    if (!email) return 'Email is required.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Enter a valid email.'
    return ''
  }

  const onNewsletterSubmit = (e) => {
    e.preventDefault()
    setNewsletterTouched(true)
    const err = validateNewsletterEmail(newsletterEmail)
    setNewsletterError(err)
    if (err) return
    toast.success('Subscribed')
    setNewsletterEmail('')
    setNewsletterError('')
    setNewsletterTouched(false)
  }

  const values = [
    {
      t: 'Integrity and Transparency',
      d: 'We provide clear guidance, honest advice, and realistic timelines so you can make confident decisions.',
    },
    {
      t: 'Passion',
      d: 'Our team is committed to helping students succeed with a supportive and student-first approach.',
    },
    {
      t: 'Innovation with Collaboration',
      d: 'We combine experience with up-to-date processes and partner insights to deliver better outcomes.',
    },
  ]

  const impact = [
    {
      t: 'Client Success',
      d: 'We guide students through course selection, documentation, and applications with a structured process.',
    },
    {
      t: 'Test Preparation Success',
      d: 'IELTS, PTE, TOEFL, and more — with classes, practice materials, and mock tests to improve performance.',
    },
    {
      t: 'Visa Success',
      d: 'Complete visa file preparation with strong documentation, interview readiness, and compliance support.',
    },
    {
      t: 'Record Placement',
      d: 'We aim for quality placements by matching students to the right institution, location, and budget.',
    },
    {
      t: 'Social Responsibility',
      d: 'We promote responsible counselling and long-term student wellbeing through ethical guidance.',
    },
  ]

  const timeline = [
    {
      year: '2010',
      side: 'right',
      title: 'Establishment',
      sub: 'We have walked more than 16 years in this field of international education recruitment.',
      bullets: [
        'Garden International Education is established',
        'Office located in Kathmandu, Butwal and Pokhara',
        'Test Preparation Services and study abroad services',
        'The company continues operations from kathmandu office located at Putalisadak, Kathmandu for majority of time',
      ],
    },
    {
      year: '2014',
      side: 'left',
      title: 'Started Operations',
      sub: 'Foundations of international education, careers and consultancy operations.',
    },
    {
      year: '2023',
      side: 'right',
      title: 'Achievements',
      sub: 'Held recruitment record for the organisation.',
      bullets: ['Australia (70%)', 'Canada (10%)', 'New Zealand (10%)', 'USA (5%)', 'UK (5%)'],
      footer: 'Students enrolled mainly for Diploma, Bachelors and Masters Degree',
    },
    {
      year: '2024',
      side: 'left',
      title: 'Rebranding',
      sub: 'GIEC international Education Pvt Ltd officially rebranded to new name, logos and mission.',
      footer:
        'Expansion and network building under new brand leveraging existing infrastructure, experience and networks',
    },
  ]

  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.22 }}
      className="bg-white text-slate-900"
    >
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <img src="/tokyo.webp" alt="" className="h-full w-full object-cover opacity-55" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/40 to-slate-950/20" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
          <div className="text-center">
            <div className="text-sm font-semibold tracking-wide text-white/70">About Us</div>
            <h1 className="mt-3 text-4xl font-extrabold text-white md:text-6xl">About Us</h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="mx-auto max-w-4xl">
          <div className="text-lg font-semibold text-slate-500">Our values</div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {values.map((v) => (
              <motion.div key={v.t} variants={reveal} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="text-lg font-extrabold text-slate-900">{v.t}</div>
                <div className="mt-3 text-base leading-relaxed text-slate-600">{v.d}</div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10">
            <div className="text-lg font-semibold text-slate-500">Our impact</div>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3"
            >
              {impact.map((it) => (
                <motion.div key={it.t} variants={reveal} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="text-lg font-extrabold text-slate-900">{it.t}</div>
                  <div className="mt-3 text-base leading-relaxed text-slate-600">{it.d}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="mt-14">
            <div className="text-center">
              <div className="text-2xl font-extrabold text-slate-900 md:text-3xl">Simplifying the study abroad process since 2010</div>
              <div className="mt-2 text-base text-slate-600">A simple, clear process from consultation to departure.</div>
            </div>

            <div className="relative mt-10">
              <div className="absolute left-1/2 top-0 z-0 hidden h-full w-0.5 -translate-x-1/2 bg-emerald-200 md:block" />

              <div className="space-y-10">
                {timeline.map((it) => {
                  const Card = (
                    <motion.div
                      variants={reveal}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.25 }}
                      className="rounded-2xl border border-emerald-500/40 bg-white p-6 shadow-sm"
                    >
                      <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-full border border-emerald-500 bg-emerald-600 text-sm font-extrabold text-white md:hidden">
                        {it.year}
                      </div>
                      <div className="text-lg font-extrabold text-slate-900">{it.title}</div>
                      <div className="mt-2 text-base text-slate-600">{it.sub}</div>
                      {it.bullets?.length ? (
                        <ul className="mt-4 list-disc space-y-1 pl-5 text-base text-slate-700">
                          {it.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      ) : null}
                      {it.footer ? <div className="mt-4 text-base text-slate-700">{it.footer}</div> : null}
                    </motion.div>
                  )

                  return (
                    <div key={it.year} className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto_1fr] md:items-start">
                      <div className="md:pr-8">{it.side === 'left' ? Card : <div className="hidden md:block" />}</div>

                      <div className="flex items-start justify-center">
                        <div className="relative z-10 hidden md:grid h-14 w-14 place-items-center rounded-full border border-emerald-500 bg-emerald-600 text-sm font-extrabold text-white">
                          {it.year}
                        </div>
                      </div>

                      <div className="md:pl-8">{it.side === 'right' ? Card : <div className="hidden md:block" />}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            <div>
              <a href="/#home" className="inline-flex items-center">
                <img
                  src="/logo.png"
                  alt="GIEC abroad consultant"
                  className="h-12 w-auto select-none opacity-95 transition hover:opacity-100 hover:brightness-110 hover:drop-shadow-[0_0_18px_rgba(16,185,129,0.55)]"
                  draggable={false}
                />
              </a>
              <div className="mt-3 text-sm text-white/70">
                We help you with test preparation, course selection, documentation, and visa processing — from start to finish.
              </div>
              <div className="mt-4">
                <SocialLinks />
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-white">Services</div>
              <div className="mt-3 grid gap-2 text-sm text-white/70">
                {['IELTS Preparation', 'PTE Preparation', 'Study in Australia', 'Study in Canada'].map((l) => (
                  <a key={l} href="#" className="hover:text-white">
                    {l}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-white">Quick Links</div>
              <div className="mt-3 grid gap-2 text-sm text-white/70">
                {[
                  { t: 'Home', h: '/#home' },
                  { t: 'About Us', h: '/#about' },
                  { t: 'Services', h: '/#services' },
                  { t: 'Contact', h: '/#contact' },
                ].map((l) => (
                  <a key={l.t} href={l.h} className="hover:text-white">
                    {l.t}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-white">Newsletter Signup</div>
              <div className="mt-3 text-sm text-white/70">Enter your email address to get latest updates and offers.</div>
              <form className="mt-4 grid gap-2" onSubmit={onNewsletterSubmit}>
                <div
                  className={`flex overflow-hidden rounded-xl border bg-white/5 ${newsletterError ? 'border-red-400/60' : 'border-white/10'}`}
                >
                  <input
                    className="w-full bg-transparent px-4 py-2 text-sm text-white outline-none"
                    placeholder="Email address"
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => {
                      const next = e.target.value
                      setNewsletterEmail(next)
                      if (newsletterTouched) setNewsletterError(validateNewsletterEmail(next))
                    }}
                    onBlur={() => {
                      setNewsletterTouched(true)
                      setNewsletterError(validateNewsletterEmail(newsletterEmail))
                    }}
                    aria-label="Email address"
                  />
                  <button type="submit" className="bg-brand-500 px-4 text-sm font-semibold text-slate-950">
                    →
                  </button>
                </div>

                {newsletterError ? <div className="text-xs text-red-400">{newsletterError}</div> : null}
              </form>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60">© {new Date().getFullYear()} GIEC. All rights reserved.</div>
        </div>
      </footer>
    </motion.main>
  )
}

export default About
