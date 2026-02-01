import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function ScrollToTopButton() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      initial={false}
      animate={{ opacity: showTop ? 1 : 0, y: showTop ? 0 : 10, pointerEvents: showTop ? 'auto' : 'none' }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-brand-500 text-slate-950 shadow-soft ring-1 ring-white/10 transition hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-300/50"
      aria-label="Back to top"
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M12 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 11l6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.button>
  )
}

export default ScrollToTopButton
