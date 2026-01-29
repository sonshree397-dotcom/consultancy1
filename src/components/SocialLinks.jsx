function SocialLinks({ variant = 'footer', className = '' }) {
  const linkClassName =
    variant === 'topbar'
      ? 'grid h-8 w-8 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition hover:border-white/20 hover:bg-white/10 hover:text-brand-300'
      : 'grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition hover:border-white/20 hover:bg-white/10 hover:text-brand-300'

  const iconClassName = variant === 'topbar' ? 'h-4 w-4' : 'h-5 w-5'

  const items = [
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/giecintl',
      svg: (
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      ),
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/giec_education/',
      svg: (
        <>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <path d="M17.5 6.5h.01" />
        </>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nabaraj-khatri/',
      svg: (
        <>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4v1.6A4.5 4.5 0 0 1 16 8z" />
          <path d="M2 9h4v12H2z" />
          <path d="M4 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        </>
      ),
    },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/@giecintl',
      svg: (
        <>
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
          <path d="M9.75 15.02 15.5 12 9.75 8.98v6.04z" />
        </>
      ),
    },
    {
      label: 'TikTok',
      href: 'https://www.tiktok.com/@giec_consultancy',
      svg: (
        <>
          <path d="M16 3c.3 2.7 2.2 4.8 5 5v3c-1.9 0-3.6-.6-5-1.6V17a5 5 0 1 1-5-5c.3 0 .7 0 1 .1V15a2 2 0 1 0 2 2V3h2z" />
        </>
      ),
    },
  ]

  return (
    <div className={`flex items-center gap-2 ${className}`.trim()}>
      {items.map((it) => (
        <a
          key={it.label}
          href={it.href}
          className={linkClassName}
          target="_blank"
          rel="noreferrer"
          aria-label={it.label}
          title={it.label}
        >
          <svg
            viewBox="0 0 24 24"
            className={iconClassName}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            {it.svg}
          </svg>
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
