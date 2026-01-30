import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import SocialLinks from '../components/SocialLinks'

function StudyInCanada({ onOpenModal }) {
  const reveal = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.25 }}
      className="bg-white text-slate-900"
    >
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <img src="/tokyo.webp" alt="" className="h-full w-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/40 to-slate-950/20" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16">
          <div className="text-center">
            <div className="text-sm font-semibold text-white/70">Study Abroad</div>
            <h1 className="mt-2 text-4xl font-extrabold text-white md:text-5xl">Study in Canada</h1>
            <div className="mt-4 text-sm text-white/70">Admissions guidance, documentation support, and visa assistance.</div>
          </div>
        </div>
      </section>

      <div className="sticky top-24 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl gap-8 overflow-x-auto px-4 py-3 text-base font-semibold text-slate-700">
          {[
            { t: 'Overview', h: '#can-overview' },
            { t: 'Requirements', h: '#can-requirements' },
            { t: 'Intakes', h: '#can-intakes' },
            { t: 'Costs', h: '#can-costs' },
            { t: 'Scholarships', h: '#can-scholarships' },
            { t: 'Post Study Work', h: '#can-psw' },
          ].map((l) => (
            <a key={l.t} href={l.h} className="whitespace-nowrap hover:text-brand-700">
              {l.t}
            </a>
          ))}
        </div>
      </div>

      <section id="can-overview" className="scroll-mt-28 mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 md:grid-cols-3">
        <motion.div
          variants={reveal}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="md:col-span-2"
        >
          <div className="prose prose-slate max-w-none">
            <p>
              Canada is a popular destination for Nepali students due to quality education, affordable options compared to
              many countries, and strong immigration pathways. Choosing the right program, province, and intake helps you
              build a clear and successful study plan.
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
                { k: 'Language spoken', v: 'English / French (region dependent)' },
                {
                  k: 'Cost of study',
                  v: 'Undergraduate - CAD 15,000 to CAD 35,000 per year | Postgraduate programs - CAD 16,000 to CAD 40,000 per year',
                },
                { k: 'Source of funding', v: 'Scholarships, Income, Education Loan, Savings' },
                { k: 'Education requirement', v: '+2, Diploma, Bachelor’s degree' },
                { k: 'Degrees', v: 'Diploma, Bachelors, Masters, Doctoral' },
                { k: 'Intakes', v: 'January, May, September (varies by institution)' },
                { k: 'Visa', v: 'Study Permit' },
              ].map((r) => (
                <div key={r.k} className="grid grid-cols-1 gap-2 px-6 py-4 text-sm text-slate-700 sm:grid-cols-3">
                  <div className="text-sm font-semibold text-slate-700">{r.k}</div>
                  <div className="sm:col-span-2 text-sm text-slate-700">{r.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="text-lg font-extrabold text-slate-900">Why Canada?</div>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                'Good education with practical learning',
                'Work while studying',
                'Post-graduation work permit options',
                'Safe and multicultural society',
                'Strong career outcomes in many fields',
                'Pathways for long-term settlement (policy dependent)',
              ].map((t) => (
                <div key={t} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <div className="text-xl font-extrabold text-slate-900">Popular Institutions in Canada</div>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <div className="grid grid-cols-1 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 sm:grid-cols-3">
                <div>Institution</div>
                <div>Average Tuition Fees (per year)</div>
                <div>Courses Offered</div>
              </div>
              <div className="divide-y divide-slate-200 bg-white">
                {[
                  { u: 'University of Toronto', f: 'CAD 30,000 - CAD 55,000', c: 'Business, CS, Engineering, Health' },
                  { u: 'University of British Columbia', f: 'CAD 28,000 - CAD 50,000', c: 'Science, Engineering, Arts' },
                  { u: 'York University', f: 'CAD 20,000 - CAD 35,000', c: 'Business, IT, Management' },
                  { u: 'Seneca / Humber (Colleges)', f: 'CAD 15,000 - CAD 22,000', c: 'Diplomas, PG programs' },
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

          <div id="can-requirements" className="scroll-mt-28 mt-12">
            <div className="text-3xl font-extrabold text-slate-900">Study in Canada: Requirements</div>
            <div className="mt-4 text-sm text-slate-600">
              Requirements vary by program and institution. We help you prepare academics, English scores, SOP, and visa
              documentation.
            </div>

            <ol className="mt-6 list-decimal space-y-4 pl-5 text-sm text-slate-700">
              <li>
                <span className="font-semibold">Offer Letter:</span> Admission offer from a designated learning institution
                (DLI).
              </li>
              <li>
                <span className="font-semibold">English Test:</span> IELTS/PTE/TOEFL (as required by institution/program).
              </li>
              <li>
                <span className="font-semibold">Financial:</span> Proof of funds to cover tuition and living costs.
              </li>
              <li>
                <span className="font-semibold">SOP / Study Plan:</span> Clear study plan and proper documentation.
              </li>
              <li>
                <span className="font-semibold">Biometrics & Medical:</span> As per visa requirements.
              </li>
            </ol>
          </div>

          <div id="can-intakes" className="scroll-mt-28 mt-12">
            <div className="text-3xl font-extrabold text-slate-900">Intakes in Canada</div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="grid grid-cols-2 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700">
                <div>Intake</div>
                <div>Month</div>
              </div>
              <div className="divide-y divide-slate-200">
                {[{ i: 'January', m: 'January' }, { i: 'May', m: 'May' }, { i: 'September', m: 'September' }].map((r) => (
                  <div key={r.i} className="grid grid-cols-2 px-5 py-3 text-sm text-slate-700">
                    <div className="font-semibold">{r.i}</div>
                    <div>{r.m}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="can-costs" className="scroll-mt-28 mt-12">
            <div className="text-3xl font-extrabold text-slate-900">Study in Canada: Approximate costs</div>
            <div className="mt-4 text-sm text-slate-600">
              Costs depend on institution and province. We help you estimate tuition + living costs before you apply.
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="grid grid-cols-3 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700">
                <div>S.no.</div>
                <div>Total cost to study in Canada</div>
                <div>Average fee (CAD)</div>
              </div>
              <div className="divide-y divide-slate-200">
                {[
                  { s: 1, c: 'Bachelor degree', a: 'CAD 15,000 to CAD 35,000 per year' },
                  { s: 2, c: "Master's degree", a: 'CAD 16,000 to CAD 40,000 per year' },
                  { s: 3, c: 'Doctoral degree', a: 'CAD 18,000 to CAD 45,000 per year (varies)' },
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
              Living expenses vary by city. We guide you based on your province and course.
            </div>
          </div>

          <div id="can-scholarships" className="scroll-mt-28 mt-12">
            <div className="text-3xl font-extrabold text-slate-900">Study in Canada: Scholarships</div>
            <div className="mt-4 space-y-4 text-sm text-slate-700">
              <div>
                <span className="font-semibold">Institution Scholarships:</span> Some universities/colleges provide entrance
                scholarships and fee reductions.
              </div>
              <div>
                <span className="font-semibold">Program Scholarships:</span> Scholarships depend on program, GPA, and
                availability.
              </div>
            </div>
          </div>

          <div id="can-psw" className="scroll-mt-28 mt-12">
            <div className="text-3xl font-extrabold text-slate-900">Study in Canada: Post Study Work</div>
            <div className="mt-4 text-sm leading-relaxed text-slate-700">
              Students may be eligible for work permits after graduation (policy dependent). We guide you on the latest
              pathways and documentation.
            </div>
          </div>

          <div className="mt-10">
            <div className="text-xl font-extrabold text-slate-900">FAQs</div>
            <div className="mt-4 space-y-3">
              {[
                {
                  q: 'Is IELTS required for Canada?',
                  a: 'Most institutions require IELTS/PTE/TOEFL. Requirements differ by program and level. We guide you based on your shortlist.',
                },
                {
                  q: 'Which intake should I choose?',
                  a: 'September is the main intake, but January/May also work for many programs. We help you plan based on your profile and deadlines.',
                },
                {
                  q: 'Can I work while studying?',
                  a: 'Yes, students may work part-time during studies (subject to visa conditions). We guide you with the current rules.',
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
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
          className="md:col-span-1"
        >
          <div className="sticky top-28 rounded-2xl border border-brand-600/40 bg-white p-6 shadow">
            <div className="text-2xl font-extrabold text-slate-900">We are just a click away!</div>

            <div className="mt-6 grid gap-4">
              <div>
                <div className="text-xs font-semibold text-slate-500">Full Name</div>
                <input
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-brand-500/30 focus:ring-2"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-500">Phone Number</div>
                <input
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-brand-500/30 focus:ring-2"
                  placeholder="Contact No"
                />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-500">Email</div>
                <input
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-brand-500/30 focus:ring-2"
                  placeholder="Email"
                />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-500">Message/Query</div>
                <textarea
                  rows={4}
                  className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-brand-500/30 focus:ring-2"
                  placeholder="Message/Query"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                toast.success('Submitted')
                if (onOpenModal) onOpenModal()
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

          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60">© {new Date().getFullYear()} GIEC. All rights reserved.</div>
        </div>
      </footer>
    </motion.main>
  )
}

export default StudyInCanada
