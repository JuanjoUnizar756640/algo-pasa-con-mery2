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
            En Algo pasa con Mery creemos que la mesa es un lugar de encuentro. Somos un restaurante familiar donde tradición y vanguardia se abrazan para crear momentos únicos.
          </p>
          <p className="mt-2 opacity-90">
            Nuestras experiencias combinan cocina de alta gama con propuestas innovadoras, pensadas para sorprender sin perder la calidez de lo cercano. Cada plato está elaborado con productos seleccionados y el cuidado de un equipo que disfruta compartiendo su pasión.
          </p>
          <p className="mt-2 opacity-90">
            Más que una comida, te invitamos a vivir un recuerdo en el que el sabor, el ambiente y el servicio se unen para que siempre quieras volver.
          </p>

        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: .98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="relative rounded-3xl overflow-hidden shadow-soft border border-white/10">
          <img
            src="/pulpo_mery_concepto.jpeg"
            alt="Pulpo Mery concepto"
            className="w-full h-full object-cover max-h-[480px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-4 right-4 text-sm bg-white/10 backdrop-blur rounded-full px-3 py-1">Ambiente Mery</div>
        </motion.div>
      </div>
    </section>
  )
}
