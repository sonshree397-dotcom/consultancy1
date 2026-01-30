import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const SuccessStoriesContext = createContext(null)

const STORAGE_KEY = 'giec_success_stories'

function getInitialStories() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed)) return parsed
    }
  } catch {}

  return [
    { id: 'seed-1', name: 'Aarav Sharma', country: 'NEW ZEALAND', photoUrl: '' },
    { id: 'seed-2', name: 'Sanjana Thapa', country: 'AUSTRALIA', photoUrl: '' },
    { id: 'seed-3', name: 'Rohan Adhikari', country: 'CANADA', photoUrl: '' },
    { id: 'seed-4', name: 'Priya Karki', country: 'UK', photoUrl: '' },
  ]
}

export function SuccessStoriesProvider({ children }) {
  const [stories, setStories] = useState(getInitialStories)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stories))
    } catch {}
  }, [stories])

  const addStory = (story) => {
    setStories((prev) => {
      const next = {
        id: story.id || `${Date.now()}`,
        name: story.name || 'Student',
        country: story.country || '',
        photoUrl: story.photoUrl || '',
      }

      const exists = prev.some(
        (s) =>
          (s.name || '').trim().toLowerCase() === (next.name || '').trim().toLowerCase() &&
          (s.country || '').trim().toLowerCase() === (next.country || '').trim().toLowerCase(),
      )

      if (exists) return prev
      return [next, ...prev]
    })
  }

  const value = useMemo(() => ({ stories, addStory, setStories }), [stories])

  return <SuccessStoriesContext.Provider value={value}>{children}</SuccessStoriesContext.Provider>
}

export function useSuccessStories() {
  const ctx = useContext(SuccessStoriesContext)
  if (!ctx) throw new Error('useSuccessStories must be used within SuccessStoriesProvider')
  return ctx
}
