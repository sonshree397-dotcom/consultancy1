import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import toast from 'react-hot-toast'
import SocialLinks from '../components/SocialLinks'

function StudyInAustralia() {
  const reveal = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 18,
        mass: 0.8,
      },
    },
  }

  const [sidebarForm, setSidebarForm] = useState({ fullName: '', phone: '', email: '', message: '' })
  const [sidebarErrors, setSidebarErrors] = useState({})

  const fullNameRef = useRef(null)
  const phoneRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef = useRef(null)

  const validateSidebar = (v) => {
    const next = {}
    if (!v.fullName.trim()) next.fullName = 'Full name is required.'

    const phone = v.phone.replace(/\s+/g, '')
    if (!phone) next.phone = 'Contact number is required.'
    else if (!/^\d+$/.test(phone)) next.phone = 'Contact number must be numeric.'
    else if (phone.length !== 10) next.phone = 'Enter a 10-digit contact number.'

    if (!v.email.trim()) next.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) next.email = 'Enter a valid email.'

    if (!v.message.trim()) next.message = 'Message is required.'
    return next
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ type: 'spring', stiffness: 90, damping: 18, mass: 0.9 }}
      className="bg-white text-slate-900"
    >
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <img src="/australia.jpg" alt="" className="h-full w-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/40 to-slate-950/20" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16">
          <motion.div variants={reveal} initial="hidden" animate="show" className="text-center">
            <div className="text-sm font-semibold text-white/70">Study Abroad</div>
            <h1 className="mt-2 text-6xl font-extrabold text-white md:text-8xl lg:text-9xl">Study in Australia</h1>
            <div className="mt-4 text-sm text-white/70">Admissions guidance, documentation support, and visa assistance.</div>
          </motion.div>
        </div>
      </section>

      <div className="sticky top-24 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 110, damping: 20, mass: 0.9, delay: 0.05 }}
          className="mx-auto flex max-w-6xl gap-8 overflow-x-auto px-4 py-3 text-base font-semibold text-slate-700"
        >
          {[
            { t: 'Overview', h: '#aus-overview' },
            { t: 'Requirements', h: '#aus-requirements' },
            { t: 'Intakes', h: '#aus-intakes' },
            { t: 'Costs', h: '#aus-costs' },
            { t: 'Scholarships', h: '#aus-scholarships' },
            { t: 'Post Study Work', h: '#aus-psw' },
          ].map((l) => (
            <a key={l.t} href={l.h} className="whitespace-nowrap hover:text-brand-700">
              {l.t}
            </a>
          ))}
        </motion.div>
      </div>

      <section id="aus-overview" className="scroll-mt-28 mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 md:grid-cols-3">
        <motion.div
          variants={reveal}
          initial="hidden"
          animate="show"
          className="md:col-span-2"
        >
          <div className="prose prose-slate max-w-none">
            <p>
              Australia is a top destination for Nepali students because of globally recognized universities, diverse
              programs, and strong post-study opportunities. Choosing the right course, city, and intake matters — our
              counsellors help you plan the full pathway.
            </p>
            <p>
              From course selection and scholarships to documentation and visa processing, we provide end-to-end support
              to make your journey smooth and stress-free.
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-white">
            <div className="border-b border-slate-200 px-6 py-4 text-2xl font-extrabold text-slate-900">Key Points</div>
            <div className="divide-y divide-slate-200">
              {[
                { k: 'Language spoken', v: 'English' },
                {
                  k: 'Cost of study',
                  v: 'Undergraduate - AUD 20,000 to AUD 45,000 per year | Postgraduate programs - AUD 22,000 to AUD 50,000 per year',
                },
                { k: 'Source of funding', v: 'Scholarships, Income, Education Loan, Savings' },
                { k: 'Education requirement', v: '+2, Diploma, Bachelor’s degree' },
                { k: 'Degrees', v: 'Diploma, Bachelors, Masters, Doctoral' },
                { k: 'Intakes', v: 'February, July, November (varies by institution)' },
                { k: 'Visa', v: 'Student visa (subclass 500)' },
              ].map((r) => (
                <div key={r.k} className="grid grid-cols-1 gap-2 px-6 py-4 text-sm text-slate-700 sm:grid-cols-3">
                  <div className="text-sm font-semibold text-slate-700">{r.k}</div>
                  <div className="sm:col-span-2 text-sm text-slate-700">{r.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="text-lg font-extrabold text-slate-900">Why Australia?</div>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                'High quality education',
                'Work while studying',
                'Post-study work opportunities',
                'Safe and multicultural environment',
                'Wide range of courses and cities',
                'Strong student support services',
              ].map((t) => (
                <div key={t} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <div className="text-xl font-extrabold text-slate-900">Popular Universities in Australia</div>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <div className="grid grid-cols-1 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 sm:grid-cols-3">
                <div>University</div>
                <div>Average Tuition Fees (per year)</div>
                <div>Courses Offered</div>
              </div>
              <div className="divide-y divide-slate-200 bg-white">
                {[
                  { u: 'University of Sydney', f: 'AUD 30,000 - AUD 50,000', c: 'Business, IT, Engineering, Health' },
                  { u: 'Monash University', f: 'AUD 28,000 - AUD 48,000', c: 'Engineering, Data Science, Nursing' },
                  { u: 'RMIT University', f: 'AUD 24,000 - AUD 42,000', c: 'IT, Design, Business, Construction' },
                  { u: 'Deakin University', f: 'AUD 22,000 - AUD 38,000', c: 'Business, Cyber Security, Health' },
                  { u: 'CQUniversity', f: 'AUD 20,000 - AUD 34,000', c: 'MBA, IT, Education, Public Health' },
                ].map((r) => (
                  <div key={r.u} className="grid grid-cols-1 gap-3 px-5 py-4 text-sm text-slate-700 sm:grid-cols-3">
                    <div className="font-semibold">{r.u}</div>
                    <div>{r.f}</div>
                    <div>{r.c}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="aus-requirements" className="scroll-mt-28 mt-12">
            <div className="text-3xl font-extrabold text-slate-900">Study in Australia: Requirements</div>
            <div className="mt-4 text-sm text-slate-600">
              Requirements vary by course and institution. We help you prepare academics, English scores, and complete
              visa documentation.
            </div>

            <ol className="mt-6 list-decimal space-y-4 pl-5 text-sm text-slate-700">
              <li>
                <span className="font-semibold">Academic Documents:</span> Transcripts, certificates, and relevant
                supporting documents.
              </li>
              <li>
                <span className="font-semibold">English Test:</span> IELTS, PTE, TOEFL, or other accepted tests depending on
                the institution.
              </li>
              <li>
                <span className="font-semibold">Financial:</span> Evidence of funds to cover tuition and living expenses.
              </li>
              <li>
                <span className="font-semibold">GTE/GS Requirement:</span> A clear study plan and genuine student intent.
              </li>
              <li>
                <span className="font-semibold">Visa Lodgement:</span> Online application with required documentation.
              </li>
            </ol>
          </div>

          <div id="aus-intakes" className="scroll-mt-28 mt-12">
            <div className="text-3xl font-extrabold text-slate-900">Intakes in Australia</div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="grid grid-cols-2 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700">
                <div>Intake</div>
                <div>Month</div>
              </div>
              <div className="divide-y divide-slate-200">
                {[{ i: 'February', m: 'February' }, { i: 'July', m: 'July' }, { i: 'November', m: 'November' }].map((r) => (
                  <div key={r.i} className="grid grid-cols-2 px-5 py-3 text-sm text-slate-700">
                    <div className="font-semibold">{r.i}</div>
                    <div>{r.m}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="aus-costs" className="scroll-mt-28 mt-12">
            <div className="text-3xl font-extrabold text-slate-900">Study in Australia: Approximate costs</div>
            <div className="mt-4 text-sm text-slate-600">
              Costs depend on the course and city. We help you estimate your tuition + living costs before you apply.
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="grid grid-cols-3 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700">
                <div>S.no.</div>
                <div>Total cost to study in Australia</div>
                <div>Average fee (AUD)</div>
              </div>
              <div className="divide-y divide-slate-200">
                {[
                  { s: 1, c: 'Bachelor degree', a: 'AUD 20,000 to AUD 45,000 per year' },
                  { s: 2, c: "Master's degree", a: 'AUD 22,000 to AUD 50,000 per year' },
                  { s: 3, c: 'Doctoral degree', a: 'AUD 25,000 to AUD 55,000 per year (varies)' },
                ].map((r) => (
                  <div key={r.s} className="grid grid-cols-3 px-5 py-3 text-sm text-slate-700">
                    <div className="font-semibold">{r.s}</div>
                    <div>{r.c}</div>
                    <div>{r.a}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 text-xs text-slate-500">
              Living expenses vary by city (Sydney/Melbourne vs other regions). We guide you based on your destination.
            </div>
          </div>

          <div id="aus-scholarships" className="scroll-mt-28 mt-12">
            <div className="text-3xl font-extrabold text-slate-900">Study in Australia: Scholarships</div>
            <div className="mt-4 space-y-4 text-sm text-slate-700">
              <div>
                <span className="font-semibold">University Scholarships:</span> Many universities provide merit-based
                scholarships and fee reductions for international students.
              </div>
              <div>
                <span className="font-semibold">Regional/Partner Scholarships:</span> Some institutions offer additional
                bursaries based on course and campus.
              </div>
            </div>
          </div>

          <div id="aus-psw" className="scroll-mt-28 mt-12">
            <div className="text-3xl font-extrabold text-slate-900">Study in Australia: Post Study Work</div>
            <div className="mt-4 text-sm leading-relaxed text-slate-700">
              Australia offers post-study work options depending on qualification level and region. We help you understand
              pathways after graduation.
            </div>
          </div>

          <div className="mt-10">
            <div className="text-xl font-extrabold text-slate-900">FAQs</div>
            <div className="mt-4 space-y-3">
              {[
                {
                  q: 'Is IELTS mandatory for Australia?',
                  a: 'It depends on the university and course. Many accept IELTS, PTE, TOEFL, and other tests. We guide you based on your target institutions.',
                },
                {
                  q: 'Can I work while studying?',
                  a: 'Yes, students can work part-time during study (subject to visa rules). We will guide you on current conditions.',
                },
                {
                  q: 'Can I get scholarships?',
                  a: 'Yes. Scholarships depend on your profile and university. We help shortlist scholarship-friendly options and prepare strong applications.',
                },
              ].map((f) => (
                <details key={f.q} className="group rounded-2xl border border-slate-200 bg-white p-5">
                  <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">{f.q}</summary>
                  <div className="mt-3 text-sm text-slate-600">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.aside
          variants={reveal}
          initial="hidden"
          animate="show"
          transition={{ type: 'spring', stiffness: 90, damping: 18, mass: 0.8, delay: 0.06 }}
          className="md:col-span-1"
        >
          <div className="sticky top-28 rounded-2xl border border-brand-600/40 bg-white p-6 shadow">
            <div className="text-2xl font-extrabold text-slate-900">We are just a click away!</div>

            <div className="mt-6 grid gap-4">
              <div>
                <div className="text-xs font-semibold text-slate-500">Full Name</div>
                <input
                  ref={fullNameRef}
                  value={sidebarForm.fullName}
                  onChange={(e) => {
                    const val = e.target.value
                    setSidebarForm((p) => ({ ...p, fullName: val }))
                    setSidebarErrors((p) => ({ ...p, fullName: undefined }))
                  }}
                  className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-brand-500/30 focus:ring-2 ${
                    sidebarErrors.fullName ? 'border-rose-400/70' : 'border-slate-200'
                  }`}
                  placeholder="Full Name"
                />
                {sidebarErrors.fullName ? <div className="mt-1 text-xs font-medium text-rose-600">{sidebarErrors.fullName}</div> : null}
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-500">Phone Number</div>
                <input
                  ref={phoneRef}
                  value={sidebarForm.phone}
                  onChange={(e) => {
                    const val = e.target.value
                    setSidebarForm((p) => ({ ...p, phone: val }))
                    setSidebarErrors((p) => ({ ...p, phone: undefined }))
                  }}
                  className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-brand-500/30 focus:ring-2 ${
                    sidebarErrors.phone ? 'border-rose-400/70' : 'border-slate-200'
                  }`}
                  placeholder="Contact No"
                />
                {sidebarErrors.phone ? <div className="mt-1 text-xs font-medium text-rose-600">{sidebarErrors.phone}</div> : null}
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-500">Email</div>
                <input
                  ref={emailRef}
                  value={sidebarForm.email}
                  onChange={(e) => {
                    const val = e.target.value
                    setSidebarForm((p) => ({ ...p, email: val }))
                    setSidebarErrors((p) => ({ ...p, email: undefined }))
                  }}
                  className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-brand-500/30 focus:ring-2 ${
                    sidebarErrors.email ? 'border-rose-400/70' : 'border-slate-200'
                  }`}
                  placeholder="Email"
                />
                {sidebarErrors.email ? <div className="mt-1 text-xs font-medium text-rose-600">{sidebarErrors.email}</div> : null}
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-500">Message/Query</div>
                <textarea
                  ref={messageRef}
                  rows={4}
                  value={sidebarForm.message}
                  onChange={(e) => {
                    const val = e.target.value
                    setSidebarForm((p) => ({ ...p, message: val }))
                    setSidebarErrors((p) => ({ ...p, message: undefined }))
                  }}
                  className={`mt-2 w-full resize-none rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-brand-500/30 focus:ring-2 ${
                    sidebarErrors.message ? 'border-rose-400/70' : 'border-slate-200'
                  }`}
                  placeholder="Message/Query"
                />
                {sidebarErrors.message ? <div className="mt-1 text-xs font-medium text-rose-600">{sidebarErrors.message}</div> : null}
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                const nextErrors = validateSidebar(sidebarForm)
                setSidebarErrors(nextErrors)

                if (Object.keys(nextErrors).length) {
                  toast.error(Object.values(nextErrors)[0] || 'Please fill all the boxes')
                  const first = Object.keys(nextErrors)[0]
                  if (first === 'fullName') fullNameRef.current?.focus()
                  else if (first === 'phone') phoneRef.current?.focus()
                  else if (first === 'email') emailRef.current?.focus()
                  else if (first === 'message') messageRef.current?.focus()
                  return
                }

                toast.success('Submitted')
                setSidebarForm({ fullName: '', phone: '', email: '', message: '' })
              }}
              className="mt-6 w-full rounded-xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              Submit
            </button>
          </div>
        </motion.aside>
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

          <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/60">© {new Date().getFullYear()} GIEC. All rights reserved. Powered by Gecko Works Nepal</div>
        </div>
      </footer>
    </motion.main>
  )
}

export default StudyInAustralia
