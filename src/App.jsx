import { useEffect, useRef, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import toast from 'react-hot-toast'
import Layout from './components/Layout'
import Modal from './components/Modal'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NewsUpdates from './pages/NewsUpdates'
import SuccessStory from './pages/SuccessStory'
import Certificate from './pages/Certificate'
import Location from './pages/Location'
import StudyInAustralia from './pages/StudyInAustralia'
import StudyInCanada from './pages/StudyInCanada'
import StudyInIreland from './pages/StudyInIreland'
import StudyInUK from './pages/StudyInUK'
import StudyInNewZealand from './pages/StudyInNewZealand'
import StudyInUSA from './pages/StudyInUSA'

function App() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const [leadForm, setLeadForm] = useState({ fullName: '', email: '', phone: '', country: '' })
  const [leadErrors, setLeadErrors] = useState({})

  const fullNameRef = useRef(null)
  const emailRef = useRef(null)
  const phoneRef = useRef(null)
  const countryRef = useRef(null)

  const openModal = () => setOpen(true)
  const closeModal = () => {
    setOpen(false)
    setLeadErrors({})
  }

  const validateLead = (v) => {
    const next = {}
    if (!v.fullName.trim()) next.fullName = 'Full name is required.'

    if (!v.email.trim()) next.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) next.email = 'Enter a valid email.'

    const phone = v.phone.replace(/\s+/g, '')
    if (!phone) next.phone = 'Contact number is required.'
    else if (!/^\d+$/.test(phone)) next.phone = 'Contact number must be numeric.'
    else if (phone.length !== 10) next.phone = 'Enter a 10-digit contact number.'

    if (!v.country) next.country = 'Please select a destination.'
    return next
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const nextErrors = validateLead(leadForm)
    setLeadErrors(nextErrors)

    if (Object.keys(nextErrors).length) {
      toast.error(Object.values(nextErrors)[0] || 'Please fill the boxes')
      const first = Object.keys(nextErrors)[0]
      if (first === 'fullName') fullNameRef.current?.focus()
      else if (first === 'email') emailRef.current?.focus()
      else if (first === 'phone') phoneRef.current?.focus()
      else if (first === 'country') countryRef.current?.focus()
      return
    }

    toast.success('Thanks! Our team will reach out soon.')
    setLeadForm({ fullName: '', email: '', phone: '', country: '' })
    closeModal()
  }

  return (
    <Layout onOpenModal={openModal}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home onOpenModal={openModal} />} />
          <Route path="/about" element={<About />} />
          <Route path="/success-story" element={<SuccessStory />} />
          <Route path="/certificate/:country" element={<Certificate />} />
          <Route path="/location" element={<Location />} />
          <Route path="/news-updates" element={<NewsUpdates />} />
          <Route path="/contact" element={<Contact onOpenModal={openModal} />} />
          <Route path="/study-in-australia" element={<StudyInAustralia onOpenModal={openModal} />} />
          <Route path="/study-in-canada" element={<StudyInCanada onOpenModal={openModal} />} />
          <Route path="/study-in-ireland" element={<StudyInIreland onOpenModal={openModal} />} />
          <Route path="/study-in-uk" element={<StudyInUK onOpenModal={openModal} />} />
          <Route path="/study-in-usa" element={<StudyInUSA onOpenModal={openModal} />} />
          <Route path="/study-in-new-zealand" element={<StudyInNewZealand onOpenModal={openModal} />} />
          <Route path="*" element={<Home onOpenModal={openModal} />} />
        </Routes>
      </AnimatePresence>

      <Modal open={open} onClose={closeModal} title="Talk with us">
        <form onSubmit={onSubmit} className="grid gap-4">
          <div>
            <label className="text-sm font-medium text-white/80">Full Name</label>
            <input
              ref={fullNameRef}
              value={leadForm.fullName}
              onChange={(e) => {
                const val = e.target.value
                setLeadForm((p) => ({ ...p, fullName: val }))
                setLeadErrors((p) => ({ ...p, fullName: undefined }))
              }}
              className={`mt-1 w-full rounded-xl border bg-white/5 px-3 py-2 text-sm text-white outline-none ring-brand-400/40 focus:ring-2 ${
                leadErrors.fullName ? 'border-rose-400/70' : 'border-white/10'
              }`}
              placeholder="Your name"
            />
            {leadErrors.fullName ? <div className="mt-1 text-xs font-medium text-rose-300">{leadErrors.fullName}</div> : null}
          </div>

          <div>
            <label className="text-sm font-medium text-white/80">Email</label>
            <input
              ref={emailRef}
              value={leadForm.email}
              onChange={(e) => {
                const val = e.target.value
                setLeadForm((p) => ({ ...p, email: val }))
                setLeadErrors((p) => ({ ...p, email: undefined }))
              }}
              className={`mt-1 w-full rounded-xl border bg-white/5 px-3 py-2 text-sm text-white outline-none ring-brand-400/40 focus:ring-2 ${
                leadErrors.email ? 'border-rose-400/70' : 'border-white/10'
              }`}
              placeholder="Email"
            />
            {leadErrors.email ? <div className="mt-1 text-xs font-medium text-rose-300">{leadErrors.email}</div> : null}
          </div>

          <div>
            <label className="text-sm font-medium text-white/80">Phone</label>
            <input
              ref={phoneRef}
              value={leadForm.phone}
              onChange={(e) => {
                const val = e.target.value
                setLeadForm((p) => ({ ...p, phone: val }))
                setLeadErrors((p) => ({ ...p, phone: undefined }))
              }}
              className={`mt-1 w-full rounded-xl border bg-white/5 px-3 py-2 text-sm text-white outline-none ring-brand-400/40 focus:ring-2 ${
                leadErrors.phone ? 'border-rose-400/70' : 'border-white/10'
              }`}
              placeholder="Contact No"
            />
            {leadErrors.phone ? <div className="mt-1 text-xs font-medium text-rose-300">{leadErrors.phone}</div> : null}
          </div>

          <div>
            <label className="text-sm font-medium text-white/80">Destination</label>
            <select
              ref={countryRef}
              value={leadForm.country}
              onChange={(e) => {
                const val = e.target.value
                setLeadForm((p) => ({ ...p, country: val }))
                setLeadErrors((p) => ({ ...p, country: undefined }))
              }}
              className={`mt-1 w-full rounded-xl border bg-white/5 px-3 py-2 text-sm text-white outline-none ring-brand-400/40 focus:ring-2 ${
                leadErrors.country ? 'border-rose-400/70' : 'border-white/10'
              }`}
            >
              <option value="" className="bg-slate-950">
                Select destination
              </option>
              <option value="Australia" className="bg-slate-950">
                Australia
              </option>
              <option value="Canada" className="bg-slate-950">
                Canada
              </option>
              <option value="UK" className="bg-slate-950">
                UK
              </option>
              <option value="USA" className="bg-slate-950">
                USA
              </option>
            </select>
            {leadErrors.country ? <div className="mt-1 text-xs font-medium text-rose-300">{leadErrors.country}</div> : null}
          </div>
          <button
            type="submit"
            className="mt-2 rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-soft transition hover:bg-brand-400"
          >
            Submit
          </button>
        </form>
      </Modal>
    </Layout>
  )
}

export default App
