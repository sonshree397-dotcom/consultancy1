import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  const [openStudy, setOpenStudy] = useState(false)
  const [openServices, setOpenServices] = useState(false)
  const studyRef = useRef(null)
  const servicesRef = useRef(null)

  useEffect(() => {
    const onDocClick = (e) => {
      if (studyRef.current && studyRef.current.contains(e.target)) return
      if (servicesRef.current && servicesRef.current.contains(e.target)) return
      setOpenStudy(false)
      setOpenServices(false)
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  const studyItems = [
    { label: 'STUDY IN THE UK', href: '/study-in-uk' },
    { label: 'STUDY IN CANADA', href: '#destinations' },
    { label: 'STUDY IN IRELAND', href: '#destinations' },
    { label: 'STUDY IN THE USA', href: '#destinations' },
    { label: 'STUDY IN AUSTRALIA', href: '#destinations' },
    { label: 'STUDY IN NEW ZEALAND', href: '#destinations' },
  ]

  const serviceItems = [
    { label: 'TEST PREPARATION', href: '#test-prep' },
    { label: 'EDUCATION COUNSELING', href: '#services' },
    { label: 'DOCUMENTATION GUIDANCE', href: '#services' },
    { label: 'CAREER COUNSELING', href: '#services' },
  ]

  const onNav = (href) => {
    setOpenStudy(false)
    setOpenServices(false)
    if (href.startsWith('/')) {
      navigate(href)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    navigate(`/${href}`)
    requestAnimationFrame(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  return (
    <div className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/35 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <button type="button" onClick={() => onNav('#home')} className="group inline-flex items-center">
          <img
            src="/logo.png"
            alt="GIEC abroad consultant"
            className="h-12 w-auto select-none opacity-95 transition group-hover:opacity-100 group-hover:brightness-110 group-hover:drop-shadow-[0_0_18px_rgba(16,185,129,0.55)]"
            draggable={false}
          />
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          <button
            type="button"
            onClick={() => onNav('#home')}
            className="rounded-lg px-3 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/5 hover:text-brand-300"
          >
            HOME
          </button>
          <button
            type="button"
            onClick={() => onNav('#about')}
            className="rounded-lg px-3 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/5 hover:text-brand-300"
          >
            ABOUT US
          </button>

          <div ref={studyRef} className="relative">
            <button
              type="button"
              onClick={() => {
                setOpenStudy((v) => !v)
                setOpenServices(false)
              }}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition hover:bg-white/5 hover:text-brand-300 ${
                openStudy ? 'text-brand-300' : 'text-white/80'
              }`}
            >
              STUDY ABROAD <span className="ml-1 text-xs">▾</span>
            </button>

            {openStudy && (
              <div className="absolute left-0 top-full mt-2 w-64 overflow-hidden rounded-xl border border-white/10 bg-slate-100 text-slate-900 shadow-soft">
                {studyItems.map((it) => (
                  <button
                    key={it.label}
                    type="button"
                    onClick={() => onNav(it.href)}
                    className="block w-full border-b border-slate-200 px-5 py-4 text-left text-sm font-semibold tracking-wide transition hover:bg-white hover:text-brand-700"
                  >
                    {it.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div ref={servicesRef} className="relative">
            <button
              type="button"
              onClick={() => {
                setOpenServices((v) => !v)
                setOpenStudy(false)
              }}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition hover:bg-white/5 hover:text-brand-300 ${
                openServices ? 'text-brand-300' : 'text-white/80'
              }`}
            >
              SERVICES <span className="ml-1 text-xs">▾</span>
            </button>

            {openServices && (
              <div className="absolute left-0 top-full mt-2 w-64 overflow-hidden rounded-xl border border-white/10 bg-slate-100 text-slate-900 shadow-soft">
                {serviceItems.map((it) => (
                  <button
                    key={it.label}
                    type="button"
                    onClick={() => onNav(it.href)}
                    className="block w-full border-b border-slate-200 px-5 py-4 text-left text-sm font-semibold tracking-wide transition hover:bg-white hover:text-brand-700"
                  >
                    {it.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => onNav('#events')}
            className="rounded-lg px-3 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/5 hover:text-brand-300"
          >
            NEWS/UPDATES
          </button>
          <button
            type="button"
            onClick={() => onNav('#contact')}
            className="rounded-lg px-3 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/5 hover:text-brand-300"
          >
            CONTACT US
          </button>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
