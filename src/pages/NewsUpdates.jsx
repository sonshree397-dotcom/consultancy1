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
          'Thinking about studying abroad? Australia might just be your perfect destination! This sun-soaked country offers more than just kangaroos and beautiful beaches. Let\'s dive into why choosing to study in Australia could be one of the best decisions you\'ll ever make.\n\nWorld-Class Education at Your Fingertips\nAustralia isn\'t just about surfing and barbecues. It\'s home to some of the best universities in the world. Imagine learning from top-notch professors in state-of-the-art facilities. Australian universities are known for their high-quality education and research opportunities. You\'ll be getting a degree that\'s respected globally, opening doors to exciting career prospects. Not just university degree, Australia is also home to Vocational and Training Education providing courses to meet the labor market needs.\n\nA Warm Welcome Awaits You\nFeeling nervous about studying in a new country? Don\'t be! Australians are famous for their friendly and laid-back nature. You\'ll find yourself in a welcoming environment where diversity is celebrated. With students from all over the world, you\'ll make friends from different cultures and broaden your horizons.\n\nWork While You Learn\nHere\'s some great news - you can work part-time while studying in Australia. This means you can earn some extra cash (and valuable work experience), and practice your English skills in real-life situations. It\'s a win-win situation that helps you become more independent and job-ready.\n\nAdventure Around Every Corner\nAustralia is a playground for adventure seekers. From the stunning Great Barrier Reef to the vast Outback, there\'s always something exciting to explore. Imagine spending your weekends surfing, hiking, or discovering hidden gems in vibrant cities. Your study breaks will never be boring!\n\nA Safe and High-Quality Lifestyle\nWorried about safety? Australia\'s got you covered. It\'s known for its high standard of living and safe environment for international students. You\'ll enjoy excellent healthcare, efficient public transport, and a clean, green environment. It\'s the perfect place to focus on your studies without any worries.\n\nEnglish Language Immersion\nWant to improve your English? Studying in Australia gives you the perfect opportunity to immerse yourself in the language. You\'ll be speaking like a local in no time, boosting your confidence and communication skills.\n\nDiverse Course Options\nWhatever you\'re passionate about, you\'ll find a course that fits your dreams. Australian universities offer a wide range of programs, from traditional subjects to cutting-edge fields. Whether you\'re into marine biology, digital marketing, or anything in between, there\'s a perfect course waiting for you.\n\nMulticultural Melting Pot\nAustralia is like a colorful tapestry of cultures. You\'ll experience a rich blend of traditions, foods, and festivals from all over the world. It\'s a chance to broaden your perspective and make lifelong friends from diverse backgrounds.\n\nSupport Every Step of the Way\nFeeling overwhelmed? Don\'t worry! Australian universities offer excellent support services for international students. From help with accommodation to academic guidance, you\'ll always have someone to turn to.\n\nA Stepping Stone to Your Dream Career\nMany Australian degrees offer internships or work placements. This hands-on experience is invaluable, giving you a taste of your future career and helping you build a professional network even before you graduate.\n\nChoosing to study in Australia isn\'t just about getting a degree. It\'s about embarking on a life-changing adventure. You\'ll grow personally and professionally, make amazing memories, and set yourself up for a bright future. So, why not give it a go? Australia is waiting to welcome you with open arms and endless opportunities!\n\nDiscover Study in Australia process at our website. Speak to our Counselors via Whatsapp.',
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
        <div className="max-h-[70vh] overflow-y-auto pr-1">
          {(activeItem?.content || activeItem?.body || '')
            .split('\n\n')
            .filter(Boolean)
            .map((p, idx) => (
              <div
                key={`${idx}-${p.slice(0, 24)}`}
                className={
                  p.length <= 50 && !p.includes('.')
                    ? 'mb-3 text-base font-semibold text-white'
                    : 'mb-3 whitespace-pre-line text-sm leading-relaxed text-white/80'
                }
              >
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

          <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/60">© {new Date().getFullYear()} Gecko Works Nepal. All rights reserved. Powered by Gecko Works Nepal</div>
        </div>
      </footer>
    </motion.main>
  )
}

export default NewsUpdates
