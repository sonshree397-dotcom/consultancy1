import { useEffect, useRef, useState } from 'react'

function CountUp({ value, durationMs = 1200, suffix = '', prefix = '', className = '' }) {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return
        if (entry.isIntersecting) {
          setStarted(true)
          obs.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return

    const target = Number(value)
    if (!Number.isFinite(target)) return

    const startedAt = performance.now()
    let rafId = 0

    const tick = (now) => {
      const t = Math.min(1, (now - startedAt) / durationMs)
      const next = Math.round(target * t)
      setDisplay(next)
      if (t < 1) rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [durationMs, started, value])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {new Intl.NumberFormat().format(display)}
      {suffix}
    </span>
  )
}

export default CountUp
