import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Hero from '../components/Hero'
import CountUp from '../components/CountUp'
import SocialLinks from '../components/SocialLinks'

function Home({ onOpenModal }) {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onApplyNow = () => {
    toast.success('Application started. We will contact you shortly.')
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.22 }}
    >
      <div id="home" className="scroll-mt-24">
        <Hero onOpenModal={onOpenModal} onApplyNow={onApplyNow} />
      </div>

      <section id="about" className="scroll-mt-24 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2">
          <div className="relative">
            <div className="mx-auto grid w-full max-w-md grid-cols-3 gap-3">
              {[
                '/australia.jpg',
                '/uk.jpg',
                '/tokyo.webp',
                '/uk.jpg',
                '/australia.jpg',
                '/tokyo.webp',
              ].map((src, i) => (
                <motion.div
                  key={`${src}-${i}`}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
                >
                  <img src={src} alt="" className="h-24 w-full object-cover md:h-28" />
                </motion.div>
              ))}
            </div>
            <div className="group absolute -bottom-10 left-1/2 w-[320px] -translate-x-1/2 overflow-hidden rounded-2xl border-4 border-brand-700 bg-white px-7 py-7 shadow-soft transition hover:shadow-[0_0_0_1px_rgba(16,185,129,0.25),0_18px_60px_rgba(2,44,34,0.18)]">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-100/70" />
              <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-brand-50" />
              <div className="pointer-events-none absolute inset-0 -translate-x-[130%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-brand-200/40 to-transparent opacity-0 transition duration-700 group-hover:translate-x-[130%] group-hover:opacity-100" />

              <div className="relative">
                <div className="text-center text-xs font-semibold tracking-wider text-slate-700">
                  NEPAL'S POPULAR EDUCATION
                  <div>CONSULTANCY</div>
                </div>
                <div className="mt-6 grid place-items-center">
                  <div className="text-7xl font-extrabold leading-none text-brand-600">19</div>
                  <div className="mt-2 text-sm font-semibold text-slate-800">Years Of Experience</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-brand-700">About us</div>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
              Your Destination <span className="text-brand-600">→</span> Our Guidance
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Choosing where to study abroad is a big decision. At GIEC International Education, we help students from Nepal find the perfect place to pursue their dreams.
            </p>
            <button
              type="button"
              onClick={onOpenModal}
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700"
            >
              Read more
            </button>
          </div>
        </div>
      </section>

      <section id="events" className="scroll-mt-24 bg-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { title: 'Study in Australia', img: '/australia.jpg' },
              { title: 'Study in the UK', img: '/uk.jpg' },
              { title: 'Study in Ireland', img: '/tokyo.webp' },
            ].map((e) => (
              <motion.div
                key={e.title}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow"
              >
                <img src={e.img} alt="" className="h-44 w-full object-cover" />
                <div className="p-5 text-center">
                  <div className="text-base font-semibold text-slate-900">{e.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 rounded-3xl bg-slate-950 px-6 py-10 text-center text-white md:px-12">
            <div className="text-3xl font-extrabold md:text-4xl">
              Start your study abroad journey
            </div>
            <div className="mt-3 text-sm text-white/70">
              From test preparation and course selection to visa processing and pre-departure support.
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 mx-auto max-w-6xl px-4 pb-16">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {[
            {
              title: 'Test Preparation',
              desc: 'Preparation for IELTS, PTE, SAT and other tests with focused guidance.',
            },
            {
              title: 'Course Selection',
              desc: 'Choose the right course and university for your profile and goals.',
            },
            {
              title: 'Documentation',
              desc: 'Application documents, SOP, financials, and checklist-driven support.',
            },
          ].map((c) => (
            <motion.div
              key={c.title}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-base font-semibold text-white">{c.title}</div>
              <div className="mt-2 text-sm text-white/70">{c.desc}</div>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-300">
                Learn more
                <span aria-hidden="true">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-slate-200 bg-white md:grid-cols-2">
            <div className="h-64 md:h-full">
              <img src="/tokyo.webp" alt="" className="h-full w-full object-cover" />
            </div>
            <div className="bg-brand-600 px-7 py-10 text-white md:px-10">
              <div className="text-xs font-semibold text-white/90">Start Your Study abroad journey</div>
              <div className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">
                Embarking on your study abroad journey with GIEC International Education means receiving comprehensive support from start to finish.
              </div>
              <button
                type="button"
                onClick={() => {
                  toast.success('Opening assessment form')
                  onOpenModal()
                }}
                className="mt-6 inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Talk with us
              </button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 rounded-3xl bg-white p-6 shadow sm:grid-cols-3">
            {[
              { n: 500, s: '+', v: 'Partner Institutions' },
              { n: 99, s: '%', v: 'Visa Rate' },
              { n: 15000, s: '+', v: 'Visas Granted' },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-slate-200 p-6 text-center">
                <div className="text-4xl font-extrabold text-slate-900">
                  <CountUp value={s.n} suffix={s.s} />
                </div>
                <div className="mt-2 text-sm text-slate-600">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="test-prep" className="scroll-mt-24 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
            <div>
              <div className="text-3xl font-extrabold text-white md:text-4xl">Start Your Study abroad journey</div>
              <div className="mt-4 text-sm leading-relaxed text-white/70">
                We guide you through every step, from test prep and course selection to visa processing and pre-departure information.
              </div>
              <button
                type="button"
                onClick={onOpenModal}
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-soft transition hover:bg-brand-400"
              >
                Apply now
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'SAT Preparation', img: '/australia.jpg' },
                { name: 'IELTS Preparation', img: '/uk.jpg' },
                { name: 'PTE Preparation', img: '/tokyo.webp' },
                { name: 'TOEFL Preparation', img: '/uk.jpg' },
              ].map((t) => (
                <motion.div
                  key={t.name}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10"
                >
                  <img src={t.img} alt="" className="h-32 w-full object-cover opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-sm font-semibold text-white">{t.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="destinations" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center">
            <div className="text-xs font-semibold tracking-widest text-slate-500">YOUR DESTINATION</div>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">Our Guidance</h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { name: 'United States', img: '/tokyo.webp' },
              { name: 'Canada', img: '/uk.jpg' },
              { name: 'Australia', img: '/australia.jpg' },
              { name: 'New Zealand', img: '/tokyo.webp' },
              { name: 'Ireland', img: '/uk.jpg' },
              { name: 'United Kingdom', img: '/uk.jpg' },
            ].map((d) => (
              <motion.a
                key={d.name}
                href="#contact"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200"
              >
                <img src={d.img} alt="" className="h-44 w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-lg font-semibold text-white">{d.name}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="scroll-mt-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center">
            <div className="text-xs font-semibold tracking-widest text-slate-500">CLIENTS TESTIMONIALS</div>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">What our students say</h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                name: 'Manoj Shrestha',
                country: 'Australia',
                title: 'Australia Visa Granted with Dependent',
                body: 'Thank you for making my dream come true. Great support on documentation and the whole process.',
              },
              {
                name: 'Roshan Bista',
                country: 'Australia',
                title: 'Australia Visa Granted',
                body: 'Appropriate information during all stages, timely answers, and proper support for documentation.',
              },
            ].map((t) => (
              <motion.div
                key={t.name}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <div className="text-sm font-semibold text-slate-900">{t.title}</div>
                <div className="mt-2 text-xs text-amber-500">★★★★★</div>
                <div className="mt-4 text-sm leading-relaxed text-slate-600">{t.body}</div>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-slate-200 text-xs font-bold text-slate-700">
                    {t.name
                      .split(' ')
                      .slice(0, 2)
                      .map((w) => w[0])
                      .join('')}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.country}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
            <div className="rounded-3xl bg-slate-800/40 p-8">
              <div className="text-sm font-semibold text-white/80">Contact Us in 3 seconds!</div>
              <div className="mt-2 text-3xl font-extrabold text-white">We will get back to you</div>
              <div className="mt-6 grid gap-3">
                {['Full Name', 'Email', 'Contact No', 'Destination'].map((ph) => (
                  <input
                    key={ph}
                    placeholder={ph}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-brand-400/40 focus:ring-2"
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => toast.success('Message sent')}
                className="mt-5 inline-flex items-center justify-center rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-soft transition hover:bg-brand-400"
              >
                Submit
              </button>
            </div>

            <div className="rounded-3xl bg-slate-800/20 p-8">
              <div className="text-sm font-semibold text-white/80">Customer Ratings</div>
              <div className="mt-2 text-amber-400">★★★★★</div>
              <div className="mt-3 text-5xl font-extrabold text-white">5.0 / 5.0</div>
              <div className="mt-2 text-sm text-white/70">By 15000+ Visa Approved students</div>
              <div className="mt-7 grid gap-4 text-sm text-white/80">
                <div>
                  <div className="text-white/60">Any Questions? Call us</div>
                  <div className="mt-1 text-lg font-semibold text-white">01-5333565</div>
                </div>
                <div>
                  <div className="text-white/60">Any Questions? Email us</div>
                  <div className="mt-1 text-lg font-semibold text-white">info@example.com</div>
                </div>
                <button
                  type="button"
                  onClick={onOpenModal}
                  className="mt-2 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Get in touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid grid-cols-2 items-center gap-6 opacity-80 md:grid-cols-5">
            {['Holmes', 'CQ University', 'VIT', 'JCU', 'More Partners'].map((p) => (
              <div
                key={p}
                className="grid h-14 place-items-center rounded-2xl border border-slate-200 bg-slate-50 text-sm font-semibold text-slate-600"
              >
                {p}
              </div>
            ))}
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
                  { t: 'About Us', h: '#about' },
                  { t: 'Services', h: '#services' },
                  { t: 'Events', h: '#events' },
                  { t: 'Contact', h: '#contact' },
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
              <div className="mt-4 flex overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <input className="w-full bg-transparent px-4 py-2 text-sm text-white outline-none" placeholder="Email address" />
                <button
                  type="button"
                  onClick={() => toast.success('Subscribed')}
                  className="bg-brand-500 px-4 text-sm font-semibold text-slate-950"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60">
            © {new Date().getFullYear()} GIEC. All rights reserved.
          </div>
        </div>
      </footer>

      <motion.button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={false}
        animate={{ opacity: showTop ? 1 : 0, y: showTop ? 0 : 10, pointerEvents: showTop ? 'auto' : 'none' }}
        className="fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full bg-brand-500 text-slate-950 shadow-soft"
        aria-label="Back to top"
      >
        ↑
      </motion.button>
    </motion.main>
  )
}

export default Home
