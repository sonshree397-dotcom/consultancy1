import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import Hero from '../components/Hero'
import CountUp from '../components/CountUp'
import SocialLinks from '../components/SocialLinks'
import SuccessStoriesGrid from '../components/SuccessStoriesGrid'

function Home({ onOpenModal }) {
  const [showTop, setShowTop] = useState(false)
  const [openService, setOpenService] = useState(null)
  const [homeContact, setHomeContact] = useState({ fullName: '', email: '', phone: '', destination: '' })
  const [homeContactErrors, setHomeContactErrors] = useState({})
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterError, setNewsletterError] = useState('')
  const [newsletterTouched, setNewsletterTouched] = useState(false)

  const navigate = useNavigate()

  const homeFullNameRef = useRef(null)
  const homeEmailRef = useRef(null)
  const homePhoneRef = useRef(null)
  const homeDestinationRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onApplyNow = () => {
    toast.success('Application started. We will contact you shortly.')
  }

  const validateHomeContact = (v) => {
    const next = {}
    if (!v.fullName.trim()) next.fullName = 'Full name is required.'

    if (!v.email.trim()) next.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) next.email = 'Enter a valid email.'

    const phone = v.phone.replace(/\s+/g, '')
    if (!phone) next.phone = 'Contact number is required.'
    else if (!/^\d+$/.test(phone)) next.phone = 'Contact number must be numeric.'
    else if (phone.length !== 10) next.phone = 'Enter a 10-digit contact number.'

    if (!v.destination.trim()) next.destination = 'Destination is required.'
    return next
  }

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
              more: 'IELTS / PTE classes, practice materials, mock tests, and personalised feedback to improve score and confidence.',
            },
            {
              title: 'Course Selection',
              desc: 'Choose the right course and university for your profile and goals.',
              more: 'Profile evaluation, country & city selection, shortlisting universities, and intake planning based on budget and career goals.',
            },
            {
              title: 'Documentation',
              desc: 'Application documents, SOP, financials, and checklist-driven support.',
              more: 'SOP/CV review, academic document preparation, financial guidance, and step-by-step checklist support for a complete application.',
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
              <button
                type="button"
                onClick={() => setOpenService((v) => (v === c.title ? null : c.title))}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 hover:text-brand-200"
              >
                Learn more
                <span aria-hidden="true">→</span>
              </button>

              <AnimatePresence initial={false}>
                {openService === c.title ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="mt-3 overflow-hidden text-sm text-white/70"
                  >
                    {c.more}
                  </motion.div>
                ) : null}
              </AnimatePresence>
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
              { name: 'United States', img: '/tokyo.webp', to: '/study-in-usa' },
              { name: 'Canada', img: '/uk.jpg', to: '/study-in-canada' },
              { name: 'Australia', img: '/australia.jpg', to: '/study-in-australia' },
              { name: 'New Zealand', img: '/tokyo.webp', to: '/study-in-new-zealand' },
              { name: 'Ireland', img: '/uk.jpg', to: '/study-in-ireland' },
              { name: 'United Kingdom', img: '/uk.jpg', to: '/study-in-uk' },
            ].map((d) => (
              <motion.button
                key={d.name}
                type="button"
                onClick={() => navigate(d.to)}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-transparent p-0 text-left"
              >
                <img src={d.img} alt="" className="h-44 w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-lg font-semibold text-white">{d.name}</div>
                </div>
              </motion.button>
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

      <section id="success-stories" className="scroll-mt-24 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SuccessStoriesGrid title="Student Results" subtitle="Recent student achievements and success stories." limit={4} />
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
            <div className="rounded-3xl bg-slate-800/40 p-8">
              <div className="text-sm font-semibold text-white/80">Contact Us in 3 seconds!</div>
              <div className="mt-2 text-3xl font-extrabold text-white">We will get back to you</div>
              <div className="mt-6 grid gap-3">
                <div>
                  <input
                    ref={homeFullNameRef}
                    placeholder="Full Name"
                    value={homeContact.fullName}
                    onChange={(e) => {
                      const val = e.target.value
                      setHomeContact((p) => ({ ...p, fullName: val }))
                      setHomeContactErrors((p) => ({ ...p, fullName: undefined }))
                    }}
                    className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white outline-none ring-brand-400/40 focus:ring-2 ${
                      homeContactErrors.fullName ? 'border-rose-400/70' : 'border-white/10'
                    }`}
                  />
                  {homeContactErrors.fullName ? (
                    <div className="mt-1 text-xs font-medium text-rose-300">{homeContactErrors.fullName}</div>
                  ) : null}
                </div>

                <div>
                  <input
                    ref={homeEmailRef}
                    placeholder="Email"
                    value={homeContact.email}
                    onChange={(e) => {
                      const val = e.target.value
                      setHomeContact((p) => ({ ...p, email: val }))
                      setHomeContactErrors((p) => ({ ...p, email: undefined }))
                    }}
                    className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white outline-none ring-brand-400/40 focus:ring-2 ${
                      homeContactErrors.email ? 'border-rose-400/70' : 'border-white/10'
                    }`}
                  />
                  {homeContactErrors.email ? (
                    <div className="mt-1 text-xs font-medium text-rose-300">{homeContactErrors.email}</div>
                  ) : null}
                </div>

                <div>
                  <input
                    ref={homePhoneRef}
                    placeholder="Contact No"
                    value={homeContact.phone}
                    onChange={(e) => {
                      const val = e.target.value
                      setHomeContact((p) => ({ ...p, phone: val }))
                      setHomeContactErrors((p) => ({ ...p, phone: undefined }))
                    }}
                    className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white outline-none ring-brand-400/40 focus:ring-2 ${
                      homeContactErrors.phone ? 'border-rose-400/70' : 'border-white/10'
                    }`}
                  />
                  {homeContactErrors.phone ? (
                    <div className="mt-1 text-xs font-medium text-rose-300">{homeContactErrors.phone}</div>
                  ) : null}
                </div>

                <div>
                  <input
                    ref={homeDestinationRef}
                    placeholder="Destination"
                    value={homeContact.destination}
                    onChange={(e) => {
                      const val = e.target.value
                      setHomeContact((p) => ({ ...p, destination: val }))
                      setHomeContactErrors((p) => ({ ...p, destination: undefined }))
                    }}
                    className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white outline-none ring-brand-400/40 focus:ring-2 ${
                      homeContactErrors.destination ? 'border-rose-400/70' : 'border-white/10'
                    }`}
                  />
                  {homeContactErrors.destination ? (
                    <div className="mt-1 text-xs font-medium text-rose-300">{homeContactErrors.destination}</div>
                  ) : null}
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  const nextErrors = validateHomeContact(homeContact)
                  setHomeContactErrors(nextErrors)

                  if (Object.keys(nextErrors).length) {
                    toast.error(Object.values(nextErrors)[0] || 'Please fill all the boxes')
                    const first = Object.keys(nextErrors)[0]
                    if (first === 'fullName') homeFullNameRef.current?.focus()
                    else if (first === 'email') homeEmailRef.current?.focus()
                    else if (first === 'phone') homePhoneRef.current?.focus()
                    else if (first === 'destination') homeDestinationRef.current?.focus()
                    return
                  }

                  toast.success('Message sent')
                  setHomeContact({ fullName: '', email: '', phone: '', destination: '' })
                }}
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
                  <div className="text-white/60">Address :</div>
                  <a
                    href="/location"
                    className="mt-1 block text-lg font-semibold text-white hover:text-brand-300"
                  >
                    Putalisadak 28, Opposite Valley Hospital
                    <br />
                    Bagmati, Kathmandu
                  </a>
                </div>
                <div>
                  <div className="text-white/60">Any Questions? Call us</div>
                  <a
                    href="tel:01-5364723"
                    className="mt-1 inline-block text-lg font-semibold text-white hover:text-brand-300"
                  >
                    01-5364723
                  </a>
                </div>
                <div>
                  <div className="text-white/60">Any Questions? Email us</div>
                  <a
                    href="mailto:admin@giecintl.com.np"
                    className="mt-1 inline-block text-lg font-semibold text-white hover:text-brand-300"
                  >
                    admin@giecintl.com.np
                  </a>
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

          <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/60">
            © {new Date().getFullYear()} GIEC. All rights reserved. Powered by Gecko Works Nepal
          </div>
        </div>
      </footer>

      <motion.button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={false}
        animate={{ opacity: showTop ? 1 : 0, y: showTop ? 0 : 10, pointerEvents: showTop ? 'auto' : 'none' }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-brand-500 text-slate-950 shadow-soft ring-1 ring-white/10 transition hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-300/50"
        aria-label="Back to top"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
          <path d="M12 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M6 11l6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.button>
    </motion.main>
  )
}

export default Home
