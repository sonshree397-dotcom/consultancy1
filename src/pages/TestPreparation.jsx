import { motion } from 'framer-motion'

function TestPreparation() {
  return (
    <motion.main
      className="mx-auto max-w-6xl px-4 py-14"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.22 }}
    >
      <h1 className="text-3xl font-extrabold">Test Preparation</h1>
      <p className="mt-4 max-w-2xl text-white/70">
        IELTS, PTE, SAT and more — with structured classes, mock tests and coaching.
      </p>
    </motion.main>
  )
}

export default TestPreparation
