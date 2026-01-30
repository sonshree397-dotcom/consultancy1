import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  const [openStudy, setOpenStudy] = useState(false)
  const [openServices, setOpenServices] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileStudyOpen, setMobileStudyOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const navWrapRef = useRef(null)
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

  useEffect(() => {
    if (!mobileOpen) return

    const onDocClick = (e) => {
      if (navWrapRef.current && navWrapRef.current.contains(e.target)) return
      setMobileOpen(false)
      setMobileStudyOpen(false)
      setMobileServicesOpen(false)
    }

    const onKeyDown = (e) => {
      if (e.key !== 'Escape') return
      setMobileOpen(false)
      setMobileStudyOpen(false)
      setMobileServicesOpen(false)
    }

    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [mobileOpen])

  const studyItems = [
    { label: 'STUDY IN THE UK', href: '/study-in-uk' },
    { label: 'STUDY IN CANADA', href: '/study-in-canada' },
    { label: 'STUDY IN IRELAND', href: '/study-in-ireland' },
    { label: 'STUDY IN THE USA', href: '/study-in-usa' },
    { label: 'STUDY IN AUSTRALIA', href: '/study-in-australia' },
    { label: 'STUDY IN NEW ZEALAND', href: '/study-in-new-zealand' },
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
    setMobileOpen(false)
    setMobileStudyOpen(false)
    setMobileServicesOpen(false)
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
    <div
      ref={navWrapRef}
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/35 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-5">
        <button type="button" onClick={() => onNav('/')} className="group inline-flex items-center">
          <img
            src="/logo.png"
            alt="GIEC abroad consultant"
            className="h-14 w-auto select-none opacity-95 transition group-hover:opacity-100 group-hover:brightness-110 group-hover:drop-shadow-[0_0_18px_rgba(16,185,129,0.55)]"
            draggable={false}
          />
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          <button
            type="button"
            onClick={() => onNav('#home')}
            className="rounded-lg px-4 py-2.5 text-base font-semibold text-white/80 transition hover:bg-white/5 hover:text-brand-300"
          >
            HOME
          </button>
          <button
            type="button"
            onClick={() => onNav('/about')}
            className="rounded-lg px-4 py-2.5 text-base font-semibold text-white/80 transition hover:bg-white/5 hover:text-brand-300"
          >
            ABOUT US
          </button>
          <button
            type="button"
            onClick={() => onNav('/success-story')}
            className="rounded-lg px-4 py-2.5 text-base font-semibold text-white/80 transition hover:bg-white/5 hover:text-brand-300"
          >
            SUCCESS STORY
          </button>

          <div ref={studyRef} className="relative">
            <button
              type="button"
              onClick={() => {
                setOpenStudy((v) => !v)
                setOpenServices(false)
              }}
              className={`rounded-lg px-4 py-2.5 text-base font-semibold transition hover:bg-white/5 hover:text-brand-300 ${
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
              className={`rounded-lg px-4 py-2.5 text-base font-semibold transition hover:bg-white/5 hover:text-brand-300 ${
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
            onClick={() => onNav('/news-updates')}
            className="rounded-lg px-4 py-2.5 text-base font-semibold text-white/80 transition hover:bg-white/5 hover:text-brand-300"
          >
            NEWS/UPDATES
          </button>
          <button
            type="button"
            onClick={() => onNav('/contact')}
            className="rounded-lg px-4 py-2.5 text-base font-semibold text-white/80 transition hover:bg-white/5 hover:text-brand-300"
          >
            CONTACT US
          </button>
        </nav>

        <button
          type="button"
          onClick={() => {
            setMobileOpen((v) => !v)
            setMobileStudyOpen(false)
            setMobileServicesOpen(false)
            setOpenStudy(false)
            setOpenServices(false)
          }}
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-3 text-white/80 transition hover:bg-white/10 hover:text-white md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-6 rounded bg-current transition duration-300 ease-in-out ${
                mobileOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] block h-0.5 w-6 rounded bg-current transition duration-300 ease-in-out ${
                mobileOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] block h-0.5 w-6 rounded bg-current transition duration-300 ease-in-out ${
                mobileOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-5 md:hidden">
        <div
          className={`overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 backdrop-blur transition-[max-height,opacity,transform] duration-300 ease-in-out ${
            mobileOpen ? 'max-h-[80vh] translate-y-0 opacity-100' : 'pointer-events-none max-h-0 -translate-y-2 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-1 p-2">
            <button
              type="button"
              onClick={() => onNav('#home')}
              className="w-full rounded-xl px-4 py-3 text-left text-base font-semibold text-white/80 transition hover:bg-white/5 hover:text-brand-300"
            >
              HOME
            </button>
            <button
              type="button"
              onClick={() => onNav('/about')}
              className="w-full rounded-xl px-4 py-3 text-left text-base font-semibold text-white/80 transition hover:bg-white/5 hover:text-brand-300"
            >
              ABOUT US
            </button>
            <button
              type="button"
              onClick={() => onNav('/success-story')}
              className="w-full rounded-xl px-4 py-3 text-left text-base font-semibold text-white/80 transition hover:bg-white/5 hover:text-brand-300"
            >
              SUCCESS STORY
            </button>

            <div className="rounded-xl border border-white/10 bg-white/5">
              <button
                type="button"
                onClick={() => {
                  setMobileStudyOpen((v) => !v)
                  setMobileServicesOpen(false)
                }}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-semibold transition hover:bg-white/5 hover:text-brand-300 ${
                  mobileStudyOpen ? 'text-brand-300' : 'text-white/80'
                }`}
              >
                <span>STUDY ABROAD</span>
                <span className={`text-xs transition duration-300 ${mobileStudyOpen ? 'rotate-180' : 'rotate-0'}`}>▾</span>
              </button>
              <div
                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                  mobileStudyOpen ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="flex flex-col border-t border-white/10 p-1">
                  {studyItems.map((it) => (
                    <button
                      key={it.label}
                      type="button"
                      onClick={() => onNav(it.href)}
                      className="w-full rounded-lg px-4 py-3 text-left text-sm font-semibold tracking-wide text-white/70 transition hover:bg-white/5 hover:text-brand-300"
                    >
                      {it.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5">
              <button
                type="button"
                onClick={() => {
                  setMobileServicesOpen((v) => !v)
                  setMobileStudyOpen(false)
                }}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-semibold transition hover:bg-white/5 hover:text-brand-300 ${
                  mobileServicesOpen ? 'text-brand-300' : 'text-white/80'
                }`}
              >
                <span>SERVICES</span>
                <span className={`text-xs transition duration-300 ${mobileServicesOpen ? 'rotate-180' : 'rotate-0'}`}>▾</span>
              </button>
              <div
                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                  mobileServicesOpen ? 'max-h-80' : 'max-h-0'
                }`}
              >
                <div className="flex flex-col border-t border-white/10 p-1">
                  {serviceItems.map((it) => (
                    <button
                      key={it.label}
                      type="button"
                      onClick={() => onNav(it.href)}
                      className="w-full rounded-lg px-4 py-3 text-left text-sm font-semibold tracking-wide text-white/70 transition hover:bg-white/5 hover:text-brand-300"
                    >
                      {it.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onNav('/news-updates')}
              className="w-full rounded-xl px-4 py-3 text-left text-base font-semibold text-white/80 transition hover:bg-white/5 hover:text-brand-300"
            >
              NEWS/UPDATES
            </button>
            <button
              type="button"
              onClick={() => onNav('/contact')}
              className="w-full rounded-xl px-4 py-3 text-left text-base font-semibold text-white/80 transition hover:bg-white/5 hover:text-brand-300"
            >
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
