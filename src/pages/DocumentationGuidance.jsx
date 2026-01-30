import { motion } from 'framer-motion'

function DocumentationGuidance({ onOpenModal }) {
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
          <img src="/uk.jpg" alt="" className="h-full w-full object-cover opacity-55" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/40 to-slate-950/20" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
          <div className="text-center">
            <div className="text-sm font-semibold tracking-wide text-white/70">Services</div>
            <h1 className="mt-3 text-4xl font-extrabold text-white md:text-6xl">Documentation Guidance</h1>
            <div className="mt-4 text-sm text-white/70">
              SOP, academic documents, financials, and visa-ready documentation—organized and error-free.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="text-2xl font-extrabold text-slate-900">What we prepare & review</div>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[ 
                { t: 'SOP / Statement of Purpose', d: 'Structure, clarity, and alignment with your course and profile.' },
                { t: 'CV / Resume', d: 'Professional formatting for admissions and scholarship applications.' },
                { t: 'Academic Documents', d: 'Transcripts, certificates, backlogs, and equivalency requirements.' },
                { t: 'English Test Documents', d: 'IELTS/PTE/TOEFL details and supporting proofs as required.' },
                { t: 'Financial Documents', d: 'Savings, income, education loan, and sponsor proofs (as applicable).' },
                { t: 'Visa File Checklist', d: 'A checklist-based process to reduce missing or incorrect documents.' },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="text-sm font-bold text-slate-900">{c.t}</div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-600">{c.d}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <div className="text-lg font-extrabold text-slate-900">Common mistakes we help you avoid</div>
              <div className="mt-4 grid gap-3 text-sm text-slate-700">
                {[
                  'Inconsistent information across documents',
                  'Unclear SOP narrative or generic statements',
                  'Missing financial evidence or weak source-of-funds explanation',
                  'Incomplete translations / formatting issues',
                  'Last-minute document rush and missed deadlines',
                ].map((t) => (
                  <div key={t} className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <div className="text-lg font-extrabold text-slate-900">FAQs</div>
              <div className="mt-4 space-y-3">
                {[
                  { q: 'Do you write SOP for students?', a: 'We help you build and refine the SOP. You provide the details, and we help structure and improve it.' },
                  { q: 'Can you check my documents before submission?', a: 'Yes. We review your documents and provide corrections and a final checklist.' },
                  { q: 'Do you help with financial documentation?', a: 'Yes. We guide you on what proofs are needed based on destination and profile.' },
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
              <div className="text-xl font-extrabold text-slate-900">Need a checklist?</div>
              <div className="mt-3 text-sm text-slate-600">We’ll share a step-by-step document plan for your destination.</div>
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

export default DocumentationGuidance
