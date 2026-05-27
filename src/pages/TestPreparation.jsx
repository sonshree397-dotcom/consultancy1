import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import SocialLinks from '../components/SocialLinks'

function TestPreparation() {
  const reveal = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 },
  }

  const [activeTab, setActiveTab] = useState('toefl')
  const [form, setForm] = useState({ fullName: '', phone: '', email: '', message: '' })
  const [errors, setErrors] = useState({})

  const fullNameRef = useRef(null)
  const phoneRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef = useRef(null)

  const validate = (v) => {
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

  const onSubmit = (e) => {
    e.preventDefault()

    const nextErrors = validate(form)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length) {
      toast.error(Object.values(nextErrors)[0] || 'Please fill all the boxes')
      const first = Object.keys(nextErrors)[0]
      if (first === 'fullName') fullNameRef.current?.focus()
      else if (first === 'phone') phoneRef.current?.focus()
      else if (first === 'email') emailRef.current?.focus()
      else if (first === 'message') messageRef.current?.focus()
      return
    }

    toast.success('Message sent')
    setForm({ fullName: '', phone: '', email: '', message: '' })
    setErrors({})
  }

  useEffect(() => {
    const ids = ['toefl', 'ielts', 'duolingo', 'pte']
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)

    if (!els.length) return

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top || 0) - (b.boundingClientRect.top || 0))[0]

        if (visible?.target?.id) setActiveTab(visible.target.id)
      },
      { root: null, threshold: 0.2, rootMargin: '-30% 0px -60% 0px' },
    )

    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const onTabClick = (id) => {
    setActiveTab(id)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.22 }}
      className="bg-slate-50 text-slate-900"
    >
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-700 to-slate-950" />
          <div className="absolute inset-0 opacity-90 [background:radial-gradient(circle_at_18%_18%,rgba(16,185,129,0.35),transparent_45%),radial-gradient(circle_at_78%_30%,rgba(56,189,248,0.25),transparent_50%),radial-gradient(circle_at_50%_85%,rgba(248,113,113,0.16),transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.25),rgba(2,6,23,0.55))]" />
        </div>

        <motion.div
          variants={reveal}
          initial="hidden"
          animate="show"
          className="relative mx-auto max-w-6xl px-4 py-20 md:py-28"
        >
          <div className="text-center">
            <div className="text-xs font-semibold tracking-[0.35em] text-white/70">SERVICES</div>
            <h1 className="mt-4 text-4xl font-extrabold text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)] md:text-6xl">
              Test Preparation class
            </h1>
            <div className="mx-auto mt-5 max-w-2xl text-sm text-white/75 md:text-base">
              TOEFL, IELTS, Duolingo English Test, and PTE — structured classes, mock tests, and feedback.
            </div>
          </div>
        </motion.div>
      </section>

      <div className="sticky top-24 z-40 border-b border-slate-200 bg-white/92 backdrop-blur">
        <div className="mx-auto max-w-6xl overflow-x-auto px-4 py-4">
          <div className="flex w-fit items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1 shadow-sm">
            {[
              { t: 'TOEFL', id: 'toefl' },
              { t: 'IELTS', id: 'ielts' },
              { t: 'Duolingo', id: 'duolingo' },
              { t: 'PTE', id: 'pte' },
            ].map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => onTabClick(l.id)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-[11px] font-semibold transition ${
                  activeTab === l.id
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-700 hover:bg-white/80 hover:text-slate-900'
                }`}
              >
                {l.t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="md:col-span-8"
          >
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
              <div className="prose prose-slate prose-sm max-w-none leading-relaxed prose-p:my-4 prose-li:my-2 prose-ul:my-4 prose-h2:mb-4 prose-h2:mt-10 prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-2 prose-strong:text-slate-900 sm:prose-base">
              <p>
                At Gecko Works Nepal, we understand the importance of achieving excellent test scores to secure
                admission to top universities abroad.
              </p>
              <p>
                We offer comprehensive exam preparation classes, including TOEFL, IELTS, Duolingo English Test, and PTE.
              </p>
              <p>
                Our experienced instructors and tailored curriculum ensure you are well-prepared to excel in these exams.
                Below is an overview of each test, including costs, result times, and structures.
              </p>

              <h2 id="toefl" className="scroll-mt-44">TOEFL</h2>
              <p>
                <strong>TOEFL Exam Fee in Nepal:</strong> The TOEFL exam fee in Nepal is approximately NPR 19,000.
              </p>
              <p>
                <strong>TOEFL Exam types in Nepal:</strong> TOEFL offers internet-based (iBT) and paper-based tests. The iBT is
                more widely accepted and preferred due to its comprehensive nature and availability.
              </p>
              <p>
                <strong>TOEFL Registration in Nepal:</strong> You can register for the TOEFL exam in Nepal through the official
                ETS website. The process is straightforward: You must create an account, select a test date, and make the
                payment online.
              </p>
              <p>
                <strong>TOEFL Result Time:</strong> TOEFL iBT results are typically available online within six days after the test
                date. Paper-based test results take about 11-13 days to be released.
              </p>
              <p>
                <strong>Structure of TOEFL:</strong>
              </p>
              <ul>
                <li>
                  <strong>Reading (60-80 minutes):</strong> This section includes 3-4 passages, each followed by 12-14 questions.
                  It assesses your ability to understand and analyze academic texts.
                </li>
                <li>
                  <strong>Listening (60-90 minutes):</strong> The listening section includes 4-6 lectures and 2-3 conversations,
                  followed by questions. It evaluates your ability to comprehend spoken English in academic settings.
                </li>
                <li>
                  <strong>Speaking (20 minutes):</strong> This section consists of 6 tasks, including expressing an opinion on a
                  familiar topic and speaking based on reading and listening tasks. It measures your ability to communicate
                  clearly and coherently in English.
                </li>
                <li>
                  <strong>Writing (50 minutes):</strong> The writing section includes two tasks: an integrated task requiring you
                  to write based on what you read and listened to and an independent task where you express your opinion on
                  a given topic.
                </li>
              </ul>
              <p>
                At Gecko Works Nepal, our TOEFL preparation classes focus on developing these skills through practice tests, interactive
                sessions, and personalized feedback to ensure you achieve a high score.
              </p>

              <h2 id="ielts" className="scroll-mt-44">IELTS</h2>
              <p>
                <strong>IELTS Exam Fee in Nepal:</strong> The IELTS exam fee in Nepal is approximately NPR 25,300.
              </p>
              <p>
                <strong>IELTS Exam types:</strong> IELTS offers both Academic and General Training versions, available in
                computer-based and paper-based formats. The Academic version is intended for those applying for higher
                education, while the General Training version is for those seeking work or immigration opportunities.
              </p>
              <p>
                <strong>IELTS Registration in Nepal:</strong> You can register for the IELTS exam through the British Council or
                IDP websites. Both organizations offer extensive support and resources for test-takers.
              </p>
              <p>
                <strong>Result Time:</strong> Computer-delivered IELTS results are available within 3-5 days, while paper-based
                results take about 13 days.
              </p>
              <p>
                <strong>Structure:</strong>
              </p>
              <ul>
                <li>
                  <strong>Listening (30 minutes):</strong> This section includes four recordings of native English speakers and a
                  series of questions. It tests your ability to understand main ideas and specific information.
                </li>
                <li>
                  <strong>Reading (60 minutes):</strong> The section includes three passages and 40 questions. It assesses a wide
                  range of reading skills, including reading for gist, reading for detail, and understanding logical
                  arguments.
                </li>
                <li>
                  <strong>Writing (60 minutes):</strong> The writing section consists of 2 tasks. Task 1 describes visual
                  information for the Academic version, and Task 2 is an essay. For the General Training version, Task 1
                  involves writing a letter, and Task 2 is an essay.
                </li>
                <li>
                  <strong>Speaking (11-14 minutes):</strong> The speaking test is a face-to-face interview with an examiner. It
                  includes three parts: an introduction and interview, a short speech, and a discussion. It measures your
                  ability to communicate effectively in English.
                </li>
              </ul>
              <p>
                Gecko Works Nepal’s IELTS preparation classes are designed to cover all these sections comprehensively, with practice
                tests, interactive activities, and detailed feedback to help you excel.
              </p>

              <h2 id="duolingo" className="scroll-mt-44">Duolingo</h2>
              <p>
                <strong>Duolingo Exam Fee in Nepal:</strong> The Duolingo English Test costs approximately USD 49 (about NPR 5,800).
              </p>
              <p>
                <strong>Exam Options:</strong> The Duolingo English Test is entirely computer-based and can be taken online from home.
              </p>
              <p>
                <strong>Duolingo Registration in Nepal:</strong> You can register for the Duolingo English Test on the official
                Duolingo website. The registration process is simple: you must create an account and pay online.
              </p>
              <p>
                <strong>Result Time:</strong> Results are typically available within 48 hours of test completion.
              </p>
              <p>
                <strong>Structure:</strong>
              </p>
              <ul>
                <li>
                  <strong>Adaptive Test (45 minutes):</strong> This section includes a variety of question types, such as reading,
                  Writing, speaking, and listening. The difficulty level adapts to your performance in real time.
                </li>
                <li>
                  <strong>Video Interview (10 minutes):</strong> This part involves responding to open-ended questions on video. It
                  evaluates your spoken English skills and provides a holistic view of your proficiency.
                </li>
              </ul>
              <p>
                At Gecko Works Nepal, we offer Duolingo test preparation classes that include practice questions, mock tests, and
                personalized coaching to ensure you are well-prepared for the test’s unique format.
              </p>

              <h2 id="pte" className="scroll-mt-44">PTE Academic</h2>
              <p>
                <strong>PTE Exam Fee in Nepal:</strong> Nepal’s PTE Academic exam fee is approximately USD 170 (about NPR 20,200).
              </p>
              <p>
                <strong>Exam Options:</strong> PTE Academic is a computer-based test that evaluates your English proficiency for academic
                purposes.
              </p>
              <p>
                <strong>Registration:</strong> Register for the PTE Academic test on the official Pearson website. The process involves
                creating an account, selecting a test date, and paying the exam fee online.
              </p>
              <p>
                <strong>Result Time:</strong> PTE Academic results are typically available within two business days after the test.
              </p>
              <p>
                <strong>PTE Academic Structure:</strong>
              </p>
              <ul>
                <li>
                  <strong>Speaking &amp; Writing (77-93 minutes):</strong> This section includes reading aloud, repeating sentences,
                  describing images, re-telling lectures, and writing essays. It assesses your speaking and writing skills in an
                  academic context.
                </li>
                <li>
                  <strong>Reading (32-40 minutes):</strong> The reading section includes tasks like multiple-choice questions, re-ordering
                  paragraphs, and filling in the blanks. It tests your ability to understand written texts.
                </li>
                <li>
                  <strong>Listening (45-57 minutes):</strong> This section includes tasks such as summarizing spoken text, multiple-choice
                  questions, and filling in the blanks based on audio recordings. It evaluates your listening skills in an
                  academic setting.
                </li>
              </ul>
              <p>
                Gecko Works Nepal’s PTE preparation classes cover all these sections thoroughly, with practice tests, interactive exercises,
                and personalized feedback to help you achieve a high score.
              </p>
              </div>
            </div>
          </motion.div>

          <div className="md:col-span-4 md:sticky md:top-36">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mx-auto w-full max-w-xl rounded-3xl border border-emerald-200 bg-white p-7 shadow-lg shadow-emerald-100/60 md:p-8"
            >
              <div className="text-left">
                <div className="text-2xl font-extrabold tracking-tight text-slate-900">We are just a click away!</div>
                <div className="mt-1 text-sm text-slate-500">Fill the form and our team will contact you shortly.</div>
              </div>

              <form onSubmit={onSubmit} className="mt-6 grid gap-4">
                <div>
                  <label className="text-xs text-slate-500">Full Name</label>
                  <input
                    ref={fullNameRef}
                    value={form.fullName}
                    onChange={(e) => {
                      const val = e.target.value
                      setForm((p) => ({ ...p, fullName: val }))
                      setErrors((p) => ({ ...p, fullName: undefined }))
                    }}
                    className={`mt-1 w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none ring-emerald-400/30 focus:ring-2 ${
                      errors.fullName ? 'border-red-400/70' : 'border-slate-200'
                    }`}
                    placeholder="Full Name"
                    aria-label="Full Name"
                  />
                  {errors.fullName ? <div className="mt-1 text-xs font-medium text-red-500">{errors.fullName}</div> : null}
                </div>

                <div>
                  <label className="text-xs text-slate-500">Phone Number</label>
                  <input
                    ref={phoneRef}
                    value={form.phone}
                    onChange={(e) => {
                      const val = e.target.value
                      setForm((p) => ({ ...p, phone: val }))
                      setErrors((p) => ({ ...p, phone: undefined }))
                    }}
                    className={`mt-1 w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none ring-emerald-400/30 focus:ring-2 ${
                      errors.phone ? 'border-red-400/70' : 'border-slate-200'
                    }`}
                    placeholder="Contact No"
                    aria-label="Contact No"
                  />
                  {errors.phone ? <div className="mt-1 text-xs font-medium text-red-500">{errors.phone}</div> : null}
                </div>

                <div>
                  <label className="text-xs text-slate-500">Email</label>
                  <input
                    ref={emailRef}
                    value={form.email}
                    onChange={(e) => {
                      const val = e.target.value
                      setForm((p) => ({ ...p, email: val }))
                      setErrors((p) => ({ ...p, email: undefined }))
                    }}
                    className={`mt-1 w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none ring-emerald-400/30 focus:ring-2 ${
                      errors.email ? 'border-red-400/70' : 'border-slate-200'
                    }`}
                    placeholder="Email"
                    type="email"
                    aria-label="Email"
                  />
                  {errors.email ? <div className="mt-1 text-xs font-medium text-red-500">{errors.email}</div> : null}
                </div>

                <div>
                  <label className="text-xs text-slate-500">Message/Query</label>
                  <textarea
                    ref={messageRef}
                    value={form.message}
                    onChange={(e) => {
                      const val = e.target.value
                      setForm((p) => ({ ...p, message: val }))
                      setErrors((p) => ({ ...p, message: undefined }))
                    }}
                    rows={4}
                    className={`mt-1 w-full resize-none rounded-xl border bg-white px-4 py-3 text-sm outline-none ring-emerald-400/30 focus:ring-2 ${
                      errors.message ? 'border-red-400/70' : 'border-slate-200'
                    }`}
                    placeholder="Message/Query"
                    aria-label="Message/Query"
                  />
                  {errors.message ? <div className="mt-1 text-xs font-medium text-red-500">{errors.message}</div> : null}
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                >
                  Submit
                </button>
              </form>
            </motion.div>
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
                  alt="Gecko Works Nepal abroad consultant"
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
                {[
                  { t: 'IELTS Preparation', h: '/test-preparation#ielts' },
                  { t: 'PTE Preparation', h: '/test-preparation#pte' },
                  { t: 'Study in Australia', h: '/study-in-australia' },
                  { t: 'Study in Canada', h: '/study-in-canada' },
                ].map((l) => (
                  <a key={l.t} href={l.h} className="hover:text-white">
                    {l.t}
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
                <button type="button" onClick={() => toast.success('Subscribed')} className="bg-brand-500 px-4 text-sm font-semibold text-slate-950">
                  →
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/60">© {new Date().getFullYear()} Gecko Works Nepal. All rights reserved. Powered by Gecko Works Nepal</div>
        </div>
      </footer>
    </motion.main>
  )
}

export default TestPreparation
