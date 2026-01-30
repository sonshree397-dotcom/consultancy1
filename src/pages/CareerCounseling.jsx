import { motion } from 'framer-motion'

function CareerCounseling({ onOpenModal }) {
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
          <img src="/australia.jpg" alt="" className="h-full w-full object-cover opacity-55" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/40 to-slate-950/20" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
          <div className="text-center">
            <div className="text-sm font-semibold tracking-wide text-white/70">Services</div>
            <h1 className="mt-3 text-4xl font-extrabold text-white md:text-6xl">Career Counseling</h1>
            <div className="mt-4 text-sm text-white/70">
              Choose a study path that leads to a real career—based on your strengths, budget, and future plans.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="text-2xl font-extrabold text-slate-900">Who this is for</div>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                'Students confused between fields (IT, Business, Nursing, Engineering, etc.)',
                'Students planning diploma/bachelors/masters and unsure about outcomes',
                'Students trying to balance budget vs career ROI',
                'Students targeting scholarships and strong employability',
              ].map((t) => (
                <div key={t} className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
                  {t}
                </div>
              ))}
            </div>

            <div className="mt-10">
              <div className="text-2xl font-extrabold text-slate-900">What we cover</div>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[ 
                  { t: 'Career Direction', d: 'Identify suitable industries and roles based on your profile and interests.' },
                  { t: 'Course Roadmap', d: 'Select programs that build skills and improve employability.' },
                  { t: 'University vs College Choices', d: 'Understand which option matches your goals and budget.' },
                  { t: 'Scholarship & ROI Planning', d: 'Plan for scholarships and estimate return on investment.' },
                  { t: 'Skill Gaps', d: 'Understand what you should learn before departure to be ready.' },
                  { t: 'Application Strategy', d: 'Decide where to apply first and how to build a strong application.' },
                ].map((c) => (
                  <div key={c.t} className="rounded-2xl border border-slate-200 bg-white p-6">
                    <div className="text-sm font-bold text-slate-900">{c.t}</div>
                    <div className="mt-2 text-sm leading-relaxed text-slate-600">{c.d}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <div className="text-lg font-extrabold text-slate-900">A simple 3-step plan</div>
              <div className="mt-5 grid gap-4">
                {[
                  { s: '1', t: 'Assess', d: 'Your strengths, academics, budget, and goals.' },
                  { s: '2', t: 'Align', d: 'Courses, universities, and destinations to your career pathway.' },
                  { s: '3', t: 'Act', d: 'Applications, documentation, and next steps for visa readiness.' },
                ].map((r) => (
                  <div key={r.s} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-sm font-extrabold text-white">{r.s}</div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">{r.t}</div>
                      <div className="mt-1 text-sm text-slate-600">{r.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <div className="text-lg font-extrabold text-slate-900">FAQs</div>
              <div className="mt-4 space-y-3">
                {[
                  { q: 'Can you help me choose between IT and Business?', a: 'Yes. We compare course structure, job outcomes, and suitability based on your profile.' },
                  { q: 'Do you suggest diploma or masters?', a: 'We recommend based on your academics, budget, and long-term plan (and visa fit).' },
                  { q: 'Do you also help after deciding a path?', a: 'Yes. We support you through applications, documentation, and visa preparation.' },
                ].map((f) => (
                  <details key={f.q} className="group rounded-2xl border border-slate-200 bg-white p-5">
                    <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">{f.q}</summary>
                    <div className="mt-3 text-sm text-slate-600">{f.a}</div>
                  </details>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-28 rounded-2xl border border-brand-600/40 bg-white p-6 shadow">
              <div className="text-xl font-extrabold text-slate-900">Plan your career path</div>
              <div className="mt-3 text-sm text-slate-600">Get clarity on course + destination choices.</div>
              <button
                type="button"
                onClick={onOpenModal}
                className="mt-6 w-full rounded-xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                Talk with us
              </button>
              <a
                href="/contact"
                className="mt-3 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Contact page
              </a>
            </div>
          </aside>
        </div>
      </section>
    </motion.main>
  )
}

export default CareerCounseling
