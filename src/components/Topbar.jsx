 import SocialLinks from './SocialLinks'

function Topbar() {
  return (
    <div className="w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs text-white/70">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-brand-400" />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Putalisadak%2028%2C%20Opposite%20Valley%20Hospital%2C%20Bagmati%2C%20Kathmandu"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-300"
            >
              Putalisadak 28, Opposite Valley Hospital, Bagmati, Kathmandu
            </a>
          </span>
          <span className="hidden sm:inline">Sun - Fri : 10:00AM to 06:00PM</span>
        </div>

        <SocialLinks variant="topbar" />
      </div>
    </div>
  )
}

export default Topbar
