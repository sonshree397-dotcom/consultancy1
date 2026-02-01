import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import SocialLinks from '../components/SocialLinks'
import Modal from '../components/Modal'

function NewsUpdates() {
  const reveal = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 },
  }

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  }

  const articles = useMemo(
    () => [
      {
        title: 'Scholarships in Australia',
        body: 'Various types of Merit Scholarships in Australia. Here we have provided various links to scholarship pages of universities in Australia.',
        content:
          'Australia offers a wide range of scholarships for international students, including merit-based awards, faculty scholarships, and destination-specific scholarships.\n\nWhat we help you with:\n- Shortlisting scholarship-friendly universities\n- Reviewing your academic profile and eligibility\n- Preparing strong SOP/CV and scholarship essays\n- Organising required documents and timelines\n\nTip: Start early and apply before course application deadlines, as scholarship deadlines can be earlier than admissions deadlines.',
      },
      {
        title: 'Why study in Ireland?',
        body: 'Are you a Gorkha starting on an international education adventure? Look no further than the Emerald Isle! Ireland, with its rich history, stunning landscapes and...',
        content:
          'Ireland is a top destination for international students due to globally ranked universities, strong research, and a welcoming environment.\n\nHighlights:\n- High-quality education and globally recognised degrees\n- Strong tech and business industries (great for internships/jobs)\n- Post-study work options (depends on program level)\n\nWe guide you through university shortlisting, documentation, SOP, financial planning, and visa preparation.',
      },
      {
        title: 'MRes in UK',
        body: 'The Benefits of a Master by Research in the UK. Are you passionate about diving deep into a specific field of study? Do you dream of...',
        content:
          'An MRes (Master by Research) is ideal if you want a research-focused degree, strong academic mentorship, and a pathway to PhD or research roles.\n\nWho should choose MRes?\n- Students interested in research-intensive careers\n- Students planning for PhD\n- Those who want advanced research skills and publications\n\nWe help you identify suitable supervisors, prepare research proposals, and build a strong academic application.',
      },
      {
        title: 'Why UK for Nepalese students?',
        body: 'Unlocking Opportunities: Why Nepalese Students Should Consider Studying in the UK. The United Kingdom has long been a beacon for international students seeking world-class education and...',
        content:
          'The UK is popular among Nepali students for globally recognised degrees, shorter course durations, and diverse course options.\n\nBenefits:\n- 1-year Masters programs\n- Strong university rankings and research\n- Wide range of scholarships\n- Clear visa process with proper preparation\n\nWe support you from course selection and SOP to visa documentation and interview preparation.',
      },
      {
        title: 'Why Choose Australia',
        body: 'Thinking about studying abroad? Australia might just be your perfect destination! This sun-soaked country offers more than just kangaroos and beautiful beaches. Let\'s dive into...',
        content:
          'Australia is known for quality education, practical learning, multicultural campuses, and strong student support services.\n\nWhy students choose Australia:\n- Globally recognised universities and colleges\n- Flexible course options and intakes\n- Work opportunities during and after studies\n- Safe cities and strong Nepali community\n\nWe help you plan your intake, documentation, finances, and visa process end-to-end.',
      },
    ],
    [],
  )

  const updates = useMemo(
    () => [
      {
        title: 'Irish Government Scholarship',
        body: 'Government of Ireland Scholarships for 2025. Are you a Nepalese student dreaming of world-class education abroad? The Government of Ireland International Education Scholarships (GOI-IES) might be...',
        content:
          'The Government of Ireland International Education Scholarship (GOI-IES) is a competitive scholarship for high-achieving international students.\n\nTypical requirements:\n- Strong academic background\n- A clear study plan and strong SOP\n- Evidence of leadership/extracurricular impact\n- Program offer from an Irish institution (varies by intake)\n\nWe help you with eligibility checks, SOP/essay preparation, document review, and timeline planning.',
      },
      {
        title: 'Australia visa updates after Ministerial Direction 111',
        body: 'How Ministerial Direction 111 and its impact on international students and students from Nepal? In the ever-evolving world of immigration policies, Australia has introduced significant changes...',
        content:
          'Ministerial Direction 111 influences how visa applications are prioritised and assessed. Processing outcomes can depend on the institution, intake timing, and completeness of documentation.\n\nWhat you should do:\n- Apply early and submit complete documentation\n- Choose compliant, credible institutions\n- Ensure financial and academic documents are consistent\n- Prepare genuine student (GS) statements carefully\n\nWe assist with document checklists, GS/SOP review, and visa preparation.',
      },
      {
        title: 'UK Student Visa Updates',
        body: 'Key updates for international students applying for the UK. Timeline, documentation, and compliance notes you should know before you apply.',
        content:
          'UK student visa requirements can change over time. Always confirm the latest guidance from your institution and official sources.\n\nKey areas to focus on:\n- CAS and timeline planning\n- Accurate financial documents\n- Academic transcripts and English requirements\n- Credibility interview readiness\n\nWe help you plan timelines, review documents, and prepare for a smooth application.',
      },
      {
        title: 'Canada Study Permit Changes',
        body: 'A quick overview of recent changes affecting study permit processing and what it means for students planning upcoming intakes.',
        content:
          'Canada study permit processes may include updated proof-of-funds expectations, processing timelines, and institution compliance requirements.\n\nBest practices:\n- Start documentation early\n- Maintain a clear academic progression\n- Prepare strong SOP/Study Plan\n- Ensure financial documents are verifiable\n\nWe guide you with study plan drafting, documentation review, and submission readiness.',
      },
    ],
    [],
  )

  const [articleCount, setArticleCount] = useState(4)
  const [updateCount, setUpdateCount] = useState(2)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterError, setNewsletterError] = useState('')
  const [newsletterTouched, setNewsletterTouched] = useState(false)
  const [activeItem, setActiveItem] = useState(null)

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

  const onLearnMore = (item) => {
    setActiveItem(item)
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.22 }}
      className="bg-white text-slate-900"
    >
      <section className="bg-slate-600">
        <motion.div
          variants={reveal}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-6xl px-4 py-24 md:py-36"
        >
          <h1 className="text-center text-5xl font-extrabold text-white md:text-7xl">News/Updates</h1>
        </motion.div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <section>
            <h1 className="text-4xl font-extrabold tracking-tight">Articles</h1>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2"
            >
              {articles.slice(0, articleCount).map((a) => (
                <motion.article
                  key={a.title}
                  variants={reveal}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="text-sm font-bold text-slate-900">{a.title}</div>
                  <div className="mt-3 text-sm leading-relaxed text-slate-600">{a.body}</div>
                  <button
                    type="button"
                    onClick={() => onLearnMore(a)}
                    className="mt-4 inline-flex text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                  >
                    Learn More
                  </button>
                </motion.article>
              ))}
            </motion.div>

            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setArticleCount((c) => Math.min(c + 2, articles.length))}
                className="rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                disabled={articleCount >= articles.length}
              >
                Load More
              </button>
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-extrabold tracking-tight">News and Updates</h2>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2"
            >
              {updates.slice(0, updateCount).map((u) => (
                <motion.article
                  key={u.title}
                  variants={reveal}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="text-sm font-bold text-slate-900">{u.title}</div>
                  <div className="mt-3 text-sm leading-relaxed text-slate-600">{u.body}</div>
                  <button
                    type="button"
                    onClick={() => onLearnMore(u)}
                    className="mt-4 inline-flex text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                  >
                    Learn More
                  </button>
                </motion.article>
              ))}
            </motion.div>

            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setUpdateCount((c) => Math.min(c + 2, updates.length))}
                className="rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                disabled={updateCount >= updates.length}
              >
                Load More
              </button>
            </div>
          </section>
        </div>
      </div>

      <Modal
        open={Boolean(activeItem)}
        title={activeItem?.title || 'Learn More'}
        onClose={() => setActiveItem(null)}
      >
        <div className="text-sm leading-relaxed text-white/80">
          {(activeItem?.content || activeItem?.body || '')
            .split('\n\n')
            .filter(Boolean)
            .map((p) => (
              <div key={p} className="mb-3 last:mb-0 whitespace-pre-line">
                {p}
              </div>
            ))}
        </div>
      </Modal>

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

          <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/60">© {new Date().getFullYear()} GIEC. All rights reserved. Powered by Gecko Works Nepal</div>
        </div>
      </footer>
    </motion.main>
  )
}

export default NewsUpdates
