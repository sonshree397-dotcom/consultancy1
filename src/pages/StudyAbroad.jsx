import { motion } from 'framer-motion'

function StudyAbroad() {
  return (
    <motion.main
      className="mx-auto max-w-6xl px-4 py-14"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.22 }}
    >
      <h1 className="text-3xl font-extrabold">Study Abroad</h1>
      <p className="mt-4 max-w-2xl text-white/70">
        Explore countries, programs, scholarships, and get end-to-end application support.
      </p>
    </motion.main>
  )
}

export default StudyAbroad
