import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { useSuccessStories } from '../context/SuccessStoriesContext'

function SuccessStoriesGrid({ title = 'Success Stories', subtitle = 'Recent student results and achievements.', limit }) {
  const { stories } = useSuccessStories()

  const normalized = useMemo(() => {
    const next = (stories || []).map((s) => {
      const name = s?.name || 'Student'
      const country = s?.country || ''
      const initials = name
        .trim()
        .split(/\s+/g)
        .slice(0, 2)
        .map((p) => p[0]?.toUpperCase())
        .join('')

      return {
        id: s?.id || `${name}-${country}`,
        name,
        country,
        photoUrl: s?.photoUrl || '',
        initials: initials || 'ST',
      }
    })

    return typeof limit === 'number' ? next.slice(0, Math.max(0, limit)) : next
  }, [stories, limit])

  return (
    <div>
      <div className="text-center">
        <div className="text-xs font-semibold tracking-widest text-white/60">SUCCESS STORY</div>
        <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">{title}</h2>
        <div className="mt-3 text-sm text-white/70">{subtitle}</div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {normalized.map((s) => (
          <motion.div
            key={s.id}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-soft"
          >
            <div className="relative h-44 w-full bg-slate-900/40">
              {s.photoUrl ? (
                <img src={s.photoUrl} alt={s.name} className="h-full w-full object-cover" />
              ) : (
                <div className="grid h-full w-full place-items-center text-3xl font-extrabold text-white/70">{s.initials}</div>
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
            <div className="p-5">
              <div className="text-base font-semibold text-white">{s.name}</div>
              <div className="mt-1 text-xs font-semibold tracking-widest text-white/60">{s.country}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default SuccessStoriesGrid
