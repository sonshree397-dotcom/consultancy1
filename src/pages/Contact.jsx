import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import SocialLinks from '../components/SocialLinks'

function Contact({ onOpenModal }) {
  const reveal = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.22 }}
      className="bg-white text-slate-900"
    >
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <img src="/tokyo.webp" alt="" className="h-full w-full object-cover opacity-55" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/40 to-slate-950/20" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
          <div className="text-center">
            <div className="text-sm font-semibold tracking-wide text-white/70">Contact Us</div>
            <h1 className="mt-3 text-4xl font-extrabold text-white md:text-6xl">Contact Us</h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="text-base font-semibold text-slate-500">GIEC International Education</div>
            <div className="mt-4 space-y-4 text-base text-slate-700">
              <div>
                <div className="font-semibold text-slate-900">Address :</div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Putalisadak%2028%2C%20Opposite%20Valley%20Hospital%2C%20Bagmati%2C%20Kathmandu"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block hover:text-brand-700"
                >
                  Putalisadak 28, Opposite Valley Hospital, Bagmati, Kathmandu
                </a>
              </div>
              <div>
                <div className="font-semibold text-slate-900">Phone :</div>
                <a href="tel:01-5364723" className="mt-2 inline-block hover:text-brand-700">
                  01-5364723
                </a>
              </div>
              <div>
                <div className="font-semibold text-slate-900">Email :</div>
                <a href="mailto:admin@giecintl.com.np" className="mt-2 inline-block hover:text-brand-700">
                  admin@giecintl.com.np
                </a>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mx-auto w-full max-w-xl rounded-2xl border border-emerald-500/40 bg-white p-8 shadow"
            >
              <div className="text-base font-semibold text-slate-700">We can talk at click away!</div>
              <div className="mt-4 grid gap-3">
                {['Full Name', 'Email', 'Contact No'].map((ph) => (
                  <input
                    key={ph}
                    placeholder={ph}
                    className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none ring-emerald-400/40 focus:ring-2"
                  />
                ))}
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none ring-emerald-400/40 focus:ring-2"
                />
              </div>

              <button
                type="button"
                onClick={() => {
                  toast.success('Message sent')
                }}
                className="mt-5 w-full rounded-xl bg-emerald-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-emerald-700"
              >
                Submit
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white"
      >
        <div className="mx-auto max-w-6xl px-4 pb-14">
          <div className="text-center">
            <div className="text-sm font-semibold text-slate-600">Reach Us</div>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            <iframe
              title="GIEC Location"
              src="https://www.google.com/maps?q=Putalisadak%2028%2C%20Opposite%20Valley%20Hospital%2C%20Kathmandu&output=embed"
              className="h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </motion.section>

      <motion.footer
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="bg-slate-950"
      >
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            <div>
              <a href="/#home" className="inline-flex items-center">
                <img
                  src="/logo.png"
                  alt="GIEC abroad consultant"
                  className="h-12 w-auto select-none opacity-95 transition hover:opacity-100 hover:brightness-110 hover:drop-shadow-[0_0_18px_rgba(16,185,129,0.55)]"
                  draggable={false}
                />
              </a>
              <div className="mt-3 text-sm text-white/70">
                We help you with test preparation, course selection, documentation, and visa processing — from start to finish.
              </div>
              <div className="mt-4">
                <SocialLinks />
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-white">Services</div>
              <div className="mt-3 grid gap-2 text-sm text-white/70">
                {['IELTS Preparation', 'PTE Preparation', 'Study in Australia', 'Study in Canada'].map((l) => (
                  <a key={l} href="#" className="hover:text-white">
                    {l}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-white">Quick Links</div>
              <div className="mt-3 grid gap-2 text-sm text-white/70">
                {[
                  { t: 'Home', h: '/#home' },
                  { t: 'About Us', h: '/#about' },
                  { t: 'Services', h: '/#services' },
                  { t: 'Contact', h: '/#contact' },
                ].map((l) => (
                  <a key={l.t} href={l.h} className="hover:text-white">
                    {l.t}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-white">Newsletter Signup</div>
              <div className="mt-3 text-sm text-white/70">Enter your email address to get latest updates and offers.</div>
              <div className="mt-4 flex overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <input className="w-full bg-transparent px-4 py-2 text-sm text-white outline-none" placeholder="Email address" />
                <button
                  type="button"
                  onClick={() => toast.success('Subscribed')}
                  className="bg-brand-500 px-4 text-sm font-semibold text-slate-950"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60">© {new Date().getFullYear()} GIEC. All rights reserved.</div>
        </div>
      </motion.footer>
    </motion.main>
  )
}

export default Contact
