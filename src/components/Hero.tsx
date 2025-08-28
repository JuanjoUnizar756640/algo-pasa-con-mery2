import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      aria-label="Portada"
      className="relative min-h-[92vh] flex items-center gradient-forest bg-hero bg-cover bg-center bg-no-repeat bg-fixed"
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-noise opacity-10" />
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="font-serif text-5xl md:text-7xl leading-tight"
        >
          Algo pasa con <span className="text-brand">Mery</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .2, duration: .8 }}
          className="max-w-2xl mt-6 text-lg opacity-90"
        >
          Un bar de autor donde el bosque encantado se mezcla con cócteles creativos y tapas que cuentan historias.
        </motion.p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#reservas" className="button-primary">Reservar mesa</a>
          <a href="#carta" className="button-outline">Ver carta</a>
        </div>
      </div>
      <div className="absolute bottom-6 inset-x-0 flex justify-center">
        <a href="#concepto" className="opacity-70 hover:opacity-100 text-sm">Explorar ↓</a>
      </div>
    </section>
  )
}
