import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import toast from 'react-hot-toast'
import SocialLinks from '../components/SocialLinks'

function StudyAbroadApplicationForm() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    fieldOfStudy: '',
    phoneCode: '+977',
    phoneNumber: '',
    currentEducationLevel: '',
    academicFieldOfStudy: '',
    preferredStudyDestination: '',
    desiredCourseOrProgram: '',
    preferredIntake: '',
    alternateIntake: '',
    document: null,
    consent: false,
  })

  const [errors, setErrors] = useState({})

  const fullNameRef = useRef(null)
  const emailRef = useRef(null)
  const phoneRef = useRef(null)
  const educationRef = useRef(null)
  const destinationRef = useRef(null)
  const courseRef = useRef(null)

  const validate = (v) => {
    const next = {}

    if (!v.fullName.trim()) next.fullName = 'Full name is required.'

    if (!v.email.trim()) next.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) next.email = 'Enter a valid email.'

    const phone = v.phoneNumber.replace(/\s+/g, '')
    if (!phone) next.phoneNumber = 'Contact number is required.'
    else if (!/^\d+$/.test(phone)) next.phoneNumber = 'Contact number must be numeric.'
    else if (phone.length !== 10) next.phoneNumber = 'Enter a 10-digit contact number.'

    if (!v.currentEducationLevel.trim()) next.currentEducationLevel = 'Current education level is required.'

    if (!v.preferredStudyDestination.trim()) next.preferredStudyDestination = 'Preferred study destination is required.'

    if (!v.desiredCourseOrProgram.trim()) next.desiredCourseOrProgram = 'Desired course or program is required.'

    if (!v.consent) next.consent = 'Please agree to be contacted regarding your application.'

    return next
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length) {
      toast.error(Object.values(nextErrors)[0] || 'Please fill the boxes')
      const first = Object.keys(nextErrors)[0]
      if (first === 'fullName') fullNameRef.current?.focus()
      else if (first === 'email') emailRef.current?.focus()
      else if (first === 'phoneNumber') phoneRef.current?.focus()
      else if (first === 'currentEducationLevel') educationRef.current?.focus()
      else if (first === 'preferredStudyDestination') destinationRef.current?.focus()
      else if (first === 'desiredCourseOrProgram') courseRef.current?.focus()
      return
    }

    toast.success('Application submitted')
    setForm({
      fullName: '',
      email: '',
      fieldOfStudy: '',
      phoneCode: '+977',
      phoneNumber: '',
      currentEducationLevel: '',
      academicFieldOfStudy: '',
      preferredStudyDestination: '',
      desiredCourseOrProgram: '',
      preferredIntake: '',
      alternateIntake: '',
      document: null,
      consent: false,
    })
    setErrors({})
    e.currentTarget?.reset?.()
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.22 }}
      className="bg-white text-slate-900"
    >
      <section className="relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0">
          <img src="/tokyo.webp" alt="" className="h-full w-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/70" />
        </div>

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900">Study Abroad</h1>
            <div className="mt-2 text-4xl font-extrabold text-slate-900">Application Form</div>
            <div className="mt-4 max-w-xl text-sm text-slate-600">
              Fill out the form below to start your study abroad journey. Our team will get in touch with you soon.
            </div>
          </div>

          <div className="hidden md:block">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
              <img src="/tokyo.webp" alt="" className="h-48 w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <form onSubmit={onSubmit} className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="text-sm font-bold text-slate-900">Personal Information</div>
              <div className="mt-4 grid gap-4">
                <div>
                  <div className="text-xs font-semibold text-slate-500">Full Name</div>
                  <input
                    ref={fullNameRef}
                    value={form.fullName}
                    onChange={(e) => {
                      const val = e.target.value
                      setForm((p) => ({ ...p, fullName: val }))
                      setErrors((p) => ({ ...p, fullName: undefined }))
                    }}
                    className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-brand-500/30 focus:ring-2 ${
                      errors.fullName ? 'border-rose-400/70' : 'border-slate-200'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName ? <div className="mt-1 text-xs font-medium text-rose-600">{errors.fullName}</div> : null}
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-500">Email Address</div>
                  <input
                    ref={emailRef}
                    value={form.email}
                    onChange={(e) => {
                      const val = e.target.value
                      setForm((p) => ({ ...p, email: val }))
                      setErrors((p) => ({ ...p, email: undefined }))
                    }}
                    className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-brand-500/30 focus:ring-2 ${
                      errors.email ? 'border-rose-400/70' : 'border-slate-200'
                    }`}
                    placeholder="Enter your email"
                  />
                  {errors.email ? <div className="mt-1 text-xs font-medium text-rose-600">{errors.email}</div> : null}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="text-sm font-bold text-slate-900">Personal Information</div>
              <div className="mt-4 grid gap-4">
                <div>
                  <div className="text-xs font-semibold text-slate-500">Field in Study</div>
                  <input
                    value={form.fieldOfStudy}
                    onChange={(e) => {
                      const val = e.target.value
                      setForm((p) => ({ ...p, fieldOfStudy: val }))
                    }}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-brand-500/30 focus:ring-2"
                    placeholder="e.g. Computer Science"
                  />
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-500">Phone Number</div>
                  <div className={`mt-2 flex overflow-hidden rounded-xl border bg-white ${errors.phoneNumber ? 'border-rose-400/70' : 'border-slate-200'}`}>
                    <select
                      value={form.phoneCode}
                      onChange={(e) => setForm((p) => ({ ...p, phoneCode: e.target.value }))}
                      className="bg-white px-3 text-sm text-slate-900 outline-none"
                      aria-label="Country code"
                    >
                      <option value="+977">+977</option>
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+61">+61</option>
                      <option value="+64">+64</option>
                    </select>
                    <div className="w-px bg-slate-200" />
                    <input
                      ref={phoneRef}
                      value={form.phoneNumber}
                      onChange={(e) => {
                        const val = e.target.value
                        setForm((p) => ({ ...p, phoneNumber: val }))
                        setErrors((p) => ({ ...p, phoneNumber: undefined }))
                      }}
                      className="w-full bg-white px-4 py-3 text-sm text-slate-900 outline-none"
                      placeholder="Phone number"
                      inputMode="numeric"
                    />
                  </div>
                  {errors.phoneNumber ? (
                    <div className="mt-1 text-xs font-medium text-rose-600">{errors.phoneNumber}</div>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft md:col-span-2">
              <div className="text-sm font-bold text-slate-900">Academic Information</div>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <div className="text-xs font-semibold text-slate-500">Current Education Level</div>
                  <input
                    ref={educationRef}
                    value={form.currentEducationLevel}
                    onChange={(e) => {
                      const val = e.target.value
                      setForm((p) => ({ ...p, currentEducationLevel: val }))
                      setErrors((p) => ({ ...p, currentEducationLevel: undefined }))
                    }}
                    className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-brand-500/30 focus:ring-2 ${
                      errors.currentEducationLevel ? 'border-rose-400/70' : 'border-slate-200'
                    }`}
                    placeholder="e.g. Bachelor's"
                  />
                  {errors.currentEducationLevel ? (
                    <div className="mt-1 text-xs font-medium text-rose-600">{errors.currentEducationLevel}</div>
                  ) : null}
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-500">Field in Study</div>
                  <input
                    value={form.academicFieldOfStudy}
                    onChange={(e) => setForm((p) => ({ ...p, academicFieldOfStudy: e.target.value }))}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-brand-500/30 focus:ring-2"
                    placeholder="e.g. Business"
                  />
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-500">Preferred Study Destination</div>
                  <input
                    ref={destinationRef}
                    value={form.preferredStudyDestination}
                    onChange={(e) => {
                      const val = e.target.value
                      setForm((p) => ({ ...p, preferredStudyDestination: val }))
                      setErrors((p) => ({ ...p, preferredStudyDestination: undefined }))
                    }}
                    className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-brand-500/30 focus:ring-2 ${
                      errors.preferredStudyDestination ? 'border-rose-400/70' : 'border-slate-200'
                    }`}
                    placeholder="e.g. USA"
                  />
                  {errors.preferredStudyDestination ? (
                    <div className="mt-1 text-xs font-medium text-rose-600">{errors.preferredStudyDestination}</div>
                  ) : null}
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-500">Desired Course or Program</div>
                  <input
                    ref={courseRef}
                    value={form.desiredCourseOrProgram}
                    onChange={(e) => {
                      const val = e.target.value
                      setForm((p) => ({ ...p, desiredCourseOrProgram: val }))
                      setErrors((p) => ({ ...p, desiredCourseOrProgram: undefined }))
                    }}
                    className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-brand-500/30 focus:ring-2 ${
                      errors.desiredCourseOrProgram ? 'border-rose-400/70' : 'border-slate-200'
                    }`}
                    placeholder="e.g. MBA"
                  />
                  {errors.desiredCourseOrProgram ? (
                    <div className="mt-1 text-xs font-medium text-rose-600">{errors.desiredCourseOrProgram}</div>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft md:col-span-2">
              <div className="text-sm font-bold text-slate-900">Additional Information</div>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <div className="text-xs font-semibold text-slate-500">Preferred Intake</div>
                  <input
                    value={form.preferredIntake}
                    onChange={(e) => setForm((p) => ({ ...p, preferredIntake: e.target.value }))}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-brand-500/30 focus:ring-2"
                    placeholder="e.g. Fall 2026"
                  />
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-500">Preferred Intake</div>
                  <input
                    value={form.alternateIntake}
                    onChange={(e) => setForm((p) => ({ ...p, alternateIntake: e.target.value }))}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-brand-500/30 focus:ring-2"
                    placeholder="e.g. Spring 2027"
                  />
                </div>

                <div className="md:col-span-2">
                  <div className="text-xs font-semibold text-slate-500">Upload your CV, Transcript or Supporting Document (optional)</div>
                  <input
                    type="file"
                    onChange={(e) => setForm((p) => ({ ...p, document: e.target.files?.[0] ?? null }))}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900"
                  />
                </div>

                <label className="md:col-span-2 mt-1 flex items-start gap-2 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => {
                      const val = e.target.checked
                      setForm((p) => ({ ...p, consent: val }))
                      setErrors((p) => ({ ...p, consent: undefined }))
                    }}
                    className="mt-1 h-4 w-4 rounded border-slate-300"
                  />
                  <span>
                    I agree to be contacted regarding my application
                    {errors.consent ? <div className="mt-1 text-xs font-medium text-rose-600">{errors.consent}</div> : null}
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="rounded-xl bg-slate-900 px-8 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-slate-800"
            >
              Submit Application
            </button>
          </div>
        </form>
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

export default StudyAbroadApplicationForm
