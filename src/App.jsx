import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import toast from 'react-hot-toast'
import Layout from './components/Layout'
import Modal from './components/Modal'
import Home from './pages/Home'
import StudyInUK from './pages/StudyInUK'

function App() {
  const [open, setOpen] = useState(false)

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  const onSubmit = (e) => {
    e.preventDefault()
    toast.success('Thanks! Our team will reach out soon.')
    closeModal()
  }

  return (
    <Layout onOpenModal={openModal}>
      <Routes>
        <Route path="/" element={<Home onOpenModal={openModal} />} />
        <Route path="/study-in-uk" element={<StudyInUK onOpenModal={openModal} />} />
        <Route path="*" element={<Home onOpenModal={openModal} />} />
      </Routes>

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
