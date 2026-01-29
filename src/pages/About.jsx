import { motion } from 'framer-motion'

function About() {
  return (
    <motion.main
      className="mx-auto max-w-6xl px-4 py-14"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.22 }}
    >
      <h1 className="text-3xl font-extrabold">About</h1>
      <p className="mt-4 max-w-2xl text-white/70">
        We help students choose the right country and university, prepare for tests, and complete visa processing.
      </p>
    </motion.main>
  )
}

export default About
