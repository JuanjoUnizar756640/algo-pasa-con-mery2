import { motion } from 'framer-motion'

export default function Concept() {
  return (
    <section id="concepto" className="py-24 bg-[#0b0f14] bg-stars">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="card">
          <h2 className="section-title">El concepto</h2>
          <p className="mt-4 opacity-90">
            Inspirados por la naturaleza y la magia de las noches de Zaragoza, hemos creado
            un refugio urbano: luces cálidas entre hojas, madera, cascadas sonoras y
            una barra donde ocurre la alquimia.
          </p>
          <p className="mt-2 opacity-90">
            Nuestra carta viaja por sabores del mundo con productos locales.
            Bienvenido a un relato que se bebe y se comparte.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: .98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="relative rounded-3xl overflow-hidden shadow-soft border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1495968283545-523aef2313f0?q=80&w=1920&auto=format&fit=crop"
            alt="Bar con vegetación y luces cálidas"
            className="w-full h-full object-cover max-h-[480px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-4 right-4 text-sm bg-white/10 backdrop-blur rounded-full px-3 py-1">Ambiente Mery</div>
        </motion.div>
      </div>
    </section>
  )
}
