import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import SocialLinks from '../components/SocialLinks'

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
      },
      {
        title: 'Why study in Ireland?',
        body: 'Are you a Gorkha starting on an international education adventure? Look no further than the Emerald Isle! Ireland, with its rich history, stunning landscapes and...',
      },
      {
        title: 'MRes in UK',
        body: 'The Benefits of a Master by Research in the UK. Are you passionate about diving deep into a specific field of study? Do you dream of...',
      },
      {
        title: 'Why UK for Nepalese students?',
        body: 'Unlocking Opportunities: Why Nepalese Students Should Consider Studying in the UK. The United Kingdom has long been a beacon for international students seeking world-class education and...',
      },
      {
        title: 'Why Choose Australia',
        body: 'Thinking about studying abroad? Australia might just be your perfect destination! This sun-soaked country offers more than just kangaroos and beautiful beaches. Let\'s dive into...',
      },
    ],
    [],
  )

  const updates = useMemo(
    () => [
      {
        title: 'Irish Government Scholarship',
        body: 'Government of Ireland Scholarships for 2025. Are you a Nepalese student dreaming of world-class education abroad? The Government of Ireland International Education Scholarships (GOI-IES) might be...',
      },
      {
        title: 'Australia visa updates after Ministerial Direction 111',
        body: 'How Ministerial Direction 111 and its impact on international students and students from Nepal? In the ever-evolving world of immigration policies, Australia has introduced significant changes...',
      },
      {
        title: 'UK Student Visa Updates',
        body: 'Key updates for international students applying for the UK. Timeline, documentation, and compliance notes you should know before you apply.',
      },
      {
        title: 'Canada Study Permit Changes',
        body: 'A quick overview of recent changes affecting study permit processing and what it means for students planning upcoming intakes.',
      },
    ],
    [],
  )

  const [articleCount, setArticleCount] = useState(4)
  const [updateCount, setUpdateCount] = useState(2)

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
                  <a href="#" className="mt-4 inline-flex text-sm font-semibold text-emerald-700 hover:text-emerald-800">
                    Learn More
                  </a>
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
                  <a href="#" className="mt-4 inline-flex text-sm font-semibold text-emerald-700 hover:text-emerald-800">
                    Learn More
                  </a>
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

          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60">© {new Date().getFullYear()} GIEC. All rights reserved.</div>
        </div>
      </footer>
    </motion.main>
  )
}

export default NewsUpdates
