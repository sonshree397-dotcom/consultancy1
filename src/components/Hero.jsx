import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import CountUp from './CountUp'

function Hero({ onOpenModal, onApplyNow }) {
  const swipeConfidenceThreshold = 8000
  const swipePower = (offset, velocity) => Math.abs(offset) * velocity
  const dragDistanceThreshold = 120
  const maxSubLines = 4

  const slides = [
    {
      id: 'australia',
      country: 'Australia',
      img: '/australia.jpg',
      headline: [
        { t: 'Study in', c: 'text-brand-400' },
        { br: true },
        { t: 'Australia', c: 'text-brand-400' },
      ],
      subLines: [
        { t: 'Most Popular Country for Nepalese students', c: 'text-white/80 font-semibold' },
        { t: 'Cities as your Choice  |  Courses as Careerwise', c: 'text-white/60' },
        { t: 'Prepare in Time  ·  Don\'t miss the deadline', c: 'text-white/60' },
      ],
      ctaPrimary: 'Apply now',
      cardCaption: 'Your next destination',
      cardSub: 'Most popular for Nepali students',
      cardFooter: 'Course selection, documentation, visa application, and regular updates.',
    },
    {
      id: 'ireland',
      country: 'Ireland',
      img: '/tokyo.webp',
      headline: [
        { t: 'Ireland', c: 'text-brand-400' },
        { t: ' ??? ', c: 'text-white' },
        { t: 'Really !!', c: 'text-orange-400' },
      ],
      subLines: [
        { t: 'Yes we help you.', c: 'text-white/80' },
        { t: 'Best Institutions  |  Affordable fees', c: 'text-white/80' },
      ],
      ctaPrimary: 'Apply now',
      cardCaption: 'Your next destination',
      cardSub: 'Best institutions | Affordable fees',
      cardFooter: 'Admissions, documentation, visa guidance, and pre-departure support.',
    },
    {
      id: 'uk',
      country: 'United Kingdom',
      img: '/uk.jpg',
      headline: [
        { t: 'UK ? Most Expensive ?', c: 'text-brand-300' },
        { br: true },
        { t: 'No worries !', c: 'text-white' },
      ],
      subLines: [
        { t: 'Get good scholarships from giec', c: 'text-white/80' },
        { t: 'Our mentors guide you', c: 'text-white/80' },
      ],
      ctaPrimary: 'Apply now',
      cardCaption: 'Your next destination',
      cardSub: 'Scholarship guidance | Mentor support',
      cardFooter: 'Transparent process, curated universities, and complete visa assistance.',
    },
    {
      id: 'english-test',
      country: 'English Test',
      img: '/uk.jpg',
      headline: [
        { t: 'You need English Test', c: 'text-brand-300' },
      ],
      subLines: [
        { t: 'IELTS   TOEFL   PTE   Duolingo', c: 'text-brand-200/90 font-semibold' },
        { t: 'GIEC is your test destination', c: 'text-white/85 font-semibold' },
        { t: 'Personalize classes  ·  Free Mock test  ·  Interactive classed', c: 'text-white/70' },
      ],
      ctaPrimary: 'Book a class',
      cardCaption: 'Test Preparation',
      cardSub: 'IELTS | TOEFL | PTE | Duolingo',
      cardFooter: 'Personalized classes, mock tests, and interactive sessions with trainers.',
    },
    {
      id: 'usa',
      country: 'United States',
      img: '/tokyo.webp',
      headline: [
        { t: 'Dream Big,', c: 'text-brand-300' },
        { br: true },
        { t: 'Study in USA', c: 'text-brand-400' },
      ],
      subLines: [
        { t: 'Do you want a good Scholarships !', c: 'text-white/80' },
        { t: 'And make your cost down !', c: 'text-white/80' },
        { t: "Don't Worry", c: 'text-brand-200 font-semibold italic' },
        { t: 'Visit US, Our Expert will guide you', c: 'text-white/70' },
      ],
      ctaPrimary: 'Apply now',
      cardCaption: 'Your next destination',
      cardSub: 'Scholarships | Expert guidance',
      cardFooter: 'We help with scholarships, documentation, visa, and pre-departure support.',
    },
  ]

  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const t = window.setInterval(() => {
      setDirection(1)
      setActive((p) => (p + 1) % slides.length)
    }, 4000)
    return () => window.clearInterval(t)
  }, [slides.length])

  const slide = slides[active]

  const paginate = (dir) => {
    setDirection(dir)
    setActive((p) => (p + dir + slides.length) % slides.length)
  }

  const swapVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 26 : -26 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -26 : 26 }),
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_20%,rgba(16,185,129,0.25),transparent_60%),radial-gradient(800px_circle_at_90%_40%,rgba(52,211,153,0.18),transparent_55%),linear-gradient(to_bottom,rgba(2,6,23,0.55),rgba(2,6,23,1))]" />

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => paginate(-1)}
        className="absolute left-3 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/35 p-3 text-white/80 backdrop-blur transition hover:bg-slate-950/55 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-400/40 sm:flex"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
          <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Next slide"
        onClick={() => paginate(1)}
        className="absolute right-3 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/35 p-3 text-white/80 backdrop-blur transition hover:bg-slate-950/55 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-400/40 sm:flex"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
          <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.05, ease: 'easeOut', delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-200"
          >
            Your study abroad partner
          </motion.div>

          <div className="mt-4">
            <AnimatePresence mode="wait">
              <motion.h1
                key={`h-${slide.id}`}
                custom={direction}
                variants={swapVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.75, ease: 'easeInOut' }}
                className="block min-h-[96px] text-balance text-4xl font-extrabold leading-tight text-white md:min-h-[120px] md:text-5xl"
              >
                {slide.headline.map((p, i) =>
                  p.br ? (
                    <br key={`${slide.id}-br-${i}`} />
                  ) : (
                    <span key={`${slide.id}-h-${i}`} className={p.c}>
                      {p.t}
                    </span>
                  ),
                )}
              </motion.h1>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`p-${slide.id}`}
              custom={direction}
              variants={swapVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.75, ease: 'easeInOut' }}
              className="mt-4 max-w-xl text-pretty text-base"
            >
              <div className="space-y-2">
                {Array.from({ length: maxSubLines }).map((_, idx) => {
                  const l = slide.subLines[idx]
                  if (!l) {
                    return (
                      <div key={`${slide.id}-pad-${idx}`} className="min-h-[22px] select-none opacity-0">
                        .
                      </div>
                    )
                  }
                  return (
                    <div key={`${slide.id}-${idx}`} className={`min-h-[22px] ${l.c}`}>
                      {l.t}
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut', delay: 0.75 }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <motion.button
              type="button"
              onClick={onApplyNow}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-soft transition hover:bg-brand-400"
            >
              {slide.ctaPrimary ?? 'Apply now'}
            </motion.button>
            <motion.button
              type="button"
              onClick={onOpenModal}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Talk with us
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut', delay: 0.95 }}
            className="mt-8 grid max-w-xl grid-cols-3 gap-3"
          >
            {[
              { n: 500, s: '+', v: 'Partner Universities' },
              { n: 1000, s: '+', v: 'Courses & Programs' },
              { n: 10, s: '+', v: 'Years Experience' },
            ].map((item, idx) => (
              <motion.div
                key={item.v}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 1.05 + idx * 0.1 }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.99 }}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
              >
                <div className="text-2xl font-extrabold text-white">
                  <CountUp value={item.n} suffix={item.s} />
                </div>
                <div className="mt-1 text-xs text-white/70">{item.v}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: 70, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { duration: 1.5, ease: 'easeOut', delay: 0.25 },
              x: { duration: 1.5, ease: 'easeOut', delay: 0.25 },
              scale: { duration: 1.5, ease: 'easeOut', delay: 0.25 },
              y: { duration: 7.5, ease: 'easeInOut', repeat: Infinity, delay: 1.95 },
            }}
            whileHover={{ scale: 1.01, rotate: -0.25 }}
            whileTap={{ scale: 0.99 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            dragMomentum={false}
            style={{ touchAction: 'pan-y' }}
            onDragEnd={(e, { offset, velocity }) => {
              if (offset.x <= -dragDistanceThreshold) {
                paginate(1)
                return
              }

              if (offset.x >= dragDistanceThreshold) {
                paginate(-1)
                return
              }

              const swipe = swipePower(offset.x, velocity.x)
              if (swipe < -swipeConfidenceThreshold) paginate(1)
              else if (swipe > swipeConfidenceThreshold) paginate(-1)
            }}
            className="relative mx-auto aspect-[5/4] w-full max-w-md cursor-grab overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 shadow-soft active:cursor-grabbing"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={`img-${slide.id}`}
                src={slide.img}
                alt=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.75 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="pointer-events-none absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950/10 via-slate-950/25 to-slate-950/35" />
            <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full bg-brand-500/25 blur-2xl" />
            <div className="absolute -bottom-20 -right-24 h-64 w-64 rounded-full bg-brand-400/20 blur-2xl" />

            <div className="absolute inset-0 grid place-items-center px-10">
              <div className="text-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`c-${slide.id}`}
                    custom={direction}
                    variants={{
                      enter: (dir) => ({ opacity: 0, y: 10, x: dir > 0 ? 16 : -16 }),
                      center: { opacity: 1, y: 0, x: 0 },
                      exit: (dir) => ({ opacity: 0, y: -10, x: dir > 0 ? -16 : 16 }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.75, ease: 'easeInOut' }}
                  >
                    <div className="text-sm font-semibold text-white/70">{slide.cardCaption}</div>
                    <div className="mt-2 text-4xl font-black text-white">{slide.country}</div>
                    <div className="mt-3 text-sm text-white/70">{slide.cardSub}</div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-xs text-white/70 backdrop-blur">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`f-${slide.id}`}
                    custom={direction}
                    variants={swapVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                  >
                    {slide.cardFooter}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex items-center justify-center gap-2 md:col-span-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-label={`Go to ${s.country}`}
              onClick={() => {
                setDirection(i > active ? 1 : -1)
                setActive(i)
              }}
              className={`h-2 w-2 rounded-full transition ${
                i === active ? 'bg-brand-400' : 'bg-white/25 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
