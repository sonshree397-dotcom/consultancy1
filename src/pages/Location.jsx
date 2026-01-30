import { motion } from 'framer-motion'

function Location() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.22 }}
      className="bg-slate-950 text-white"
    >
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center">
            <div className="text-xs font-semibold tracking-widest text-white/60">LOCATION</div>
            <h1 className="mt-3 text-3xl font-extrabold text-white md:text-5xl">Find Us on Map</h1>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-soft">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2413.1690074261705!2d85.3203421058913!3d27.707401647361994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a821df66ab%3A0x25f4e5baa445b9ee!2sGIEC%20International%20Education!5e1!3m2!1sen!2snp!4v1769761528140!5m2!1sen!2snp"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GIEC International Education Location"
              className="h-[450px] w-full"
            />
          </div>
        </div>
      </section>
    </motion.main>
  )
}

export default Location
