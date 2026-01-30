import { motion } from 'framer-motion'

function EducationCounseling({ onOpenModal }) {
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
            <div className="text-sm font-semibold tracking-wide text-white/70">Services</div>
            <h1 className="mt-3 text-4xl font-extrabold text-white md:text-6xl">Education Counseling</h1>
            <div className="mt-4 text-sm text-white/70">
              Course selection, university shortlisting, intake planning, and a clear roadmap from Nepal to abroad.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="text-2xl font-extrabold text-slate-900">What we help you with</div>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[ 
                { t: 'Profile Evaluation', d: 'We review academics, gap, finances, goals, and suggest realistic options.' },
                { t: 'Course & Career Alignment', d: 'Choose programs that match your long-term career plans, not trends.' },
                { t: 'University Shortlisting', d: 'Shortlist based on ranking, tuition, city, scholarships, and visa success.' },
                { t: 'Intake & Timeline Planning', d: 'A clear checklist so you never miss deadlines for your intake.' },
                { t: 'Scholarship Guidance', d: 'Identify scholarship-friendly universities and prepare strong applications.' },
                { t: 'Application Strategy', d: 'Build a strong application narrative with the right documents and timing.' },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="text-sm font-bold text-slate-900">{c.t}</div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-600">{c.d}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <div className="text-lg font-extrabold text-slate-900">Our counseling process</div>
              <div className="mt-5 grid gap-4">
                {[
                  { s: '1', t: 'Discovery Call', d: 'Understand your goals, budget, and preferred destinations.' },
                  { s: '2', t: 'Shortlist & Plan', d: 'Finalize universities, intakes, and a timeline for documents.' },
                  { s: '3', t: 'Apply & Track', d: 'Submit applications and track outcomes with follow-ups.' },
                  { s: '4', t: 'Offer & Next Steps', d: 'Offer review, fee deposit plan, and prepare for visa.' },
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
                  { q: 'Can you help me choose between countries?', a: 'Yes. We compare costs, visa success, intakes, and job opportunities based on your profile.' },
                  { q: 'Do you shortlist budget-friendly options?', a: 'Yes. We create a shortlist based on your budget and scholarship opportunities.' },
                  { q: 'Will you guide me after I receive an offer?', a: 'Yes. We help with offer acceptance, deposits, and the next step—visa preparation.' },
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
              <div className="text-xl font-extrabold text-slate-900">Talk to a counselor</div>
              <div className="mt-3 text-sm text-slate-600">Get a clear roadmap for your study abroad plan.</div>
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

export default EducationCounseling
