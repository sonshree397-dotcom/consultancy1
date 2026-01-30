import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import SocialLinks from '../components/SocialLinks'

function SuccessStory() {
  const navigate = useNavigate()

  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.22 }}
      className="bg-slate-950 text-white"
    >
      <section className="relative min-h-[calc(100vh-96px)] overflow-hidden bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pb-12 pt-14 md:pb-16">
          <div className="mt-2 w-full">
            <div className="flex w-full justify-center">
              <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl md:w-[70%]">
                <img src="/success.jpg" alt="Success story" className="w-full object-contain" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-transparent" />

                <div className="pointer-events-none absolute inset-0 flex flex-col items-center pt-7 text-center md:pt-10">
                  <h1 className="text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] md:text-7xl">
                    STUDY ABROAD
                  </h1>
                  <p className="mt-4 text-sm font-medium text-white/95 drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] md:text-lg">
                    Chasing your overseas studies
                    <br />
                    dream is not an easy way, consult the expert
                    <br />
                    for guidance.
                  </p>
                </div>

                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: { opacity: 0, x: -18 },
                    show: { opacity: 1, x: 0, transition: { staggerChildren: 0.08 } },
                  }}
                  className="absolute inset-0 hidden md:block"
                >
                  {[
                    { label: 'NEW ZEALAND', code: 'nz', top: '26%', left: '12%' },
                    { label: 'AUSTRALIA', code: 'au', top: '38%', left: '9%' },
                    { label: 'CANADA', code: 'ca', top: '50%', left: '8%' },
                    { label: 'IRELAND', code: 'ie', top: '62%', left: '9%' },
                    { label: 'UK', code: 'gb', top: '74%', left: '12%' },
                    { label: 'USA', code: 'us', top: '84%', left: '22%' },
                  ].map((it) => (
                    <motion.div
                      key={it.label}
                      variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }}
                      whileHover={{ x: 6, scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 320, damping: 20 }}
                      style={{ top: it.top, left: it.left }}
                      onClick={() => navigate(`/certificate/${it.code}`, { state: { countryLabel: it.label } })}
                      onKeyDown={(e) => {
                        if (e.key !== 'Enter' && e.key !== ' ') return
                        e.preventDefault()
                        navigate(`/certificate/${it.code}`, { state: { countryLabel: it.label } })
                      }}
                      role="button"
                      tabIndex={0}
                      className="pointer-events-auto absolute flex cursor-pointer select-none items-center gap-4"
                    >
                      <div className="text-sm font-semibold tracking-widest text-white/90">{it.label}</div>
                      <div className="h-14 w-14 overflow-hidden rounded-full border border-white/25 bg-white shadow-soft">
                        <img
                          src={`https://flagcdn.com/w80/${it.code}.png`}
                          alt={`${it.label} flag`}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
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

export default SuccessStory
