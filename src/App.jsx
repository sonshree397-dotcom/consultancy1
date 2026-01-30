import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import toast from 'react-hot-toast'
import Layout from './components/Layout'
import Modal from './components/Modal'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NewsUpdates from './pages/NewsUpdates'
import StudyInAustralia from './pages/StudyInAustralia'
import StudyInCanada from './pages/StudyInCanada'
import StudyInIreland from './pages/StudyInIreland'
import StudyInUK from './pages/StudyInUK'
import StudyInNewZealand from './pages/StudyInNewZealand'
import StudyInUSA from './pages/StudyInUSA'

function App() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  const onSubmit = (e) => {
    e.preventDefault()
    toast.success('Thanks! Our team will reach out soon.')
    closeModal()
  }

  return (
    <Layout onOpenModal={openModal}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home onOpenModal={openModal} />} />
          <Route path="/about" element={<About />} />
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
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none ring-brand-400/40 focus:ring-2"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-white/80">Phone</label>
            <input
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none ring-brand-400/40 focus:ring-2"
              placeholder="98XXXXXXXX"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-white/80">Interested Country</label>
            <select className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none ring-brand-400/40 focus:ring-2">
              <option className="bg-slate-950">Australia</option>
              <option className="bg-slate-950">Canada</option>
              <option className="bg-slate-950">UK</option>
              <option className="bg-slate-950">USA</option>
            </select>
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
