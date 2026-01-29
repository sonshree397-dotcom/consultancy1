import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'

function Modal({ open, title, children, onClose }) {
  useEffect(() => {
    if (!open) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
        >
          <motion.button
            type="button"
            className="absolute inset-0 bg-black/60"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-label="Close modal"
          />

          <motion.div
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 shadow-soft backdrop-blur"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
              <div className="text-base font-semibold text-white">{title}</div>
              <button
                type="button"
                className="rounded-lg px-2 py-1 text-sm text-white/70 hover:bg-white/5 hover:text-white"
                onClick={onClose}
              >
                Close
              </button>
            </div>

            <div className="px-5 py-5">{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default Modal
