import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import SocialLinks from '../components/SocialLinks'
import { useSuccessStories } from '../context/SuccessStoriesContext'

function Certificate() {
  const { country } = useParams()
  const location = useLocation()
  const { addStory } = useSuccessStories()

  const countryLabel = useMemo(() => {
    const fromState = location.state?.countryLabel
    if (fromState) return fromState
    return (country || '').replace(/-/g, ' ').toUpperCase()
  }, [country, location.state])

  const students = useMemo(() => {
    const initialPhotoUrl = location.state?.photoUrl || ''
    const today = new Date().toISOString().slice(0, 10)

    return [
      {
        id: 's1',
        name: 'Aarav Sharma',
        course: 'IELTS',
        grade: 'A+',
        score: '7.5',
        issueDate: today,
        photoUrl: initialPhotoUrl,
        countryLabel,
      },
      {
        id: 's2',
        name: 'Sanjana Thapa',
        course: 'PTE',
        grade: 'A',
        score: '79',
        issueDate: today,
        photoUrl: '',
        countryLabel,
      },
      {
        id: 's3',
        name: 'Rohan Adhikari',
        course: 'IELTS',
        grade: 'B+',
        score: '7.0',
        issueDate: today,
        photoUrl: '',
        countryLabel,
      },
      {
        id: 's4',
        name: 'Priya Karki',
        course: 'PTE',
        grade: 'A+',
        score: '82',
        issueDate: today,
        photoUrl: '',
        countryLabel,
      },
    ]
  }, [countryLabel, location.state])

  const [selectedId, setSelectedId] = useState('s1')
  const [search, setSearch] = useState('')

  const filteredStudents = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return students
    return students.filter((s) => s.name.toLowerCase().includes(q))
  }, [students, search])

  const selectedStudent = useMemo(() => {
    const existing = students.find((s) => s.id === selectedId)
    if (existing) return existing
    return filteredStudents[0] || students[0]
  }, [students, filteredStudents, selectedId])

  const initials = useMemo(() => {
    const raw = (selectedStudent?.name || '').trim()
    if (!raw) return 'ST'
    const parts = raw.split(/\s+/g).slice(0, 2)
    return parts.map((p) => p[0]?.toUpperCase()).join('')
  }, [selectedStudent?.name])

  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.22 }}
      className="bg-slate-950 text-white"
    >
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="text-sm font-semibold tracking-widest text-white/70">SELECT STUDENT</div>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search student..."
                className="hidden w-64 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-white/40 focus:ring-2 focus:ring-brand-400/40 sm:block"
              />
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  addStory({
                    name: selectedStudent?.name || 'Student',
                    country: selectedStudent?.countryLabel || countryLabel || '',
                    photoUrl: selectedStudent?.photoUrl || '',
                  })
                }
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Add to Success Stories
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-soft transition hover:bg-brand-400"
              >
                Print / Save as PDF
              </button>
            </div>
          </div>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search student..."
            className="mt-4 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-white/40 focus:ring-2 focus:ring-brand-400/40 sm:hidden"
          />

          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {filteredStudents.map((s) => {
              const isActive = s.id === selectedId
              const nameInitials = s.name
                .trim()
                .split(/\s+/g)
                .slice(0, 2)
                .map((p) => p[0]?.toUpperCase())
                .join('')

              return (
                <motion.button
                  key={s.id}
                  type="button"
                  onClick={() => setSelectedId(s.id)}
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 20 }}
                  className={`rounded-2xl border p-4 text-left transition ${
                    isActive ? 'border-brand-400/60 bg-white/10' : 'border-white/10 bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 overflow-hidden rounded-full border border-white/10 bg-white/10">
                      {s.photoUrl ? (
                        <img src={s.photoUrl} alt={s.name} className="h-full w-full object-cover" />
                      ) : (
                        <div className="grid h-full w-full place-items-center text-sm font-extrabold text-white/80">
                          {nameInitials}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{s.name}</div>
                      <div className="mt-0.5 text-xs text-white/60">{s.course}</div>
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </div>

          <div className="mt-6 mx-auto w-full max-w-4xl rounded-3xl bg-white p-2 text-slate-900 shadow-[0_25px_90px_rgba(0,0,0,0.55)]">
            <div className="relative overflow-hidden rounded-[22px] border-2 border-slate-200 bg-white p-8 md:p-10">
              <div className="pointer-events-none absolute -left-28 -top-28 h-64 w-64 rounded-full bg-brand-100/60" />
              <div className="pointer-events-none absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-slate-100" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[96px] font-extrabold tracking-widest text-slate-200/40 md:text-[120px]">
                GIEC
              </div>

              <div className="relative flex flex-col gap-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="text-xs font-semibold tracking-widest text-slate-600">GIEC INTERNATIONAL EDUCATION</div>
                    <div className="mt-3 text-4xl font-extrabold tracking-tight">Certificate of Achievement</div>
                    <div className="mt-2 text-sm text-slate-600">This certifies that</div>
                    <div className="mt-4 text-5xl font-extrabold text-slate-900">{selectedStudent?.name || 'Student Name'}</div>
                  </div>

                  <div className="flex flex-col items-end gap-4">
                    <div className="h-28 w-28 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                      {selectedStudent?.photoUrl ? (
                        <img src={selectedStudent.photoUrl} alt="Student" className="h-full w-full object-cover" />
                      ) : (
                        <div className="grid h-full w-full place-items-center text-2xl font-extrabold text-slate-400">{initials}</div>
                      )}
                    </div>
                    <div className="grid h-16 w-16 place-items-center rounded-full border-2 border-brand-200 bg-brand-50 text-[10px] font-extrabold tracking-widest text-brand-700 shadow-sm">
                      VERIFIED
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 text-sm md:grid-cols-2 md:gap-4">
                  <div className="flex flex-wrap items-center gap-x-2">
                    <span className="font-semibold">Country:</span>
                    <span>{selectedStudent?.countryLabel || countryLabel || '-'}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2">
                    <span className="font-semibold">Issued:</span>
                    <span>{selectedStudent?.issueDate || '-'}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2">
                    <span className="font-semibold">Course:</span>
                    <span>{selectedStudent?.course || '-'}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2">
                    <span className="font-semibold">Score:</span>
                    <span>{selectedStudent?.score || '-'}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2">
                    <span className="font-semibold">Grade:</span>
                    <span>{selectedStudent?.grade || '-'}</span>
                  </div>
                </div>

                <div className="mt-2 grid grid-cols-2 gap-10">
                  <div>
                    <div className="h-px w-full bg-slate-200" />
                    <div className="mt-2 text-xs text-slate-600">Authorized Signature</div>
                  </div>
                  <div>
                    <div className="h-px w-full bg-slate-200" />
                    <div className="mt-2 text-xs text-slate-600">Student</div>
                  </div>
                </div>

                <div className="text-xs text-slate-500">Reference No: GIEC-{(country || 'xx').toUpperCase()}-{selectedStudent?.id || 's1'}</div>
              </div>
            </div>
          </div>
        </div>
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
                  { t: 'About Us', h: '/about' },
                  { t: 'News/Updates', h: '/news-updates' },
                  { t: 'Contact', h: '/contact' },
                ].map((l) => (
                  <a key={l.t} href={l.h} className="hover:text-white">
                    {l.t}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-white">Office Hours</div>
              <div className="mt-3 text-sm text-white/70">Sunday - Friday</div>
              <div className="mt-2 text-sm text-white/70">10:00 AM - 6:00 PM</div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/60">© {new Date().getFullYear()} GIEC. All rights reserved. Powered by Gecko Works Nepal</div>
        </div>
      </footer>
    </motion.main>
  )
}

export default Certificate
