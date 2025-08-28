import { useState } from 'react'
import {
  casqueria,
  postres,
  hamburguesas,
  bocadillos,
  ensaladas,
  paraCompartir,
} from '@/data/menu'
import { motion } from 'framer-motion'

type Tab =
  | 'Ensaladas'
  | 'Para compartir'
  | 'Bocadillos'
  | 'Hamburguesas'
  | 'Casquería'
  | 'Postres'

export default function Menu() {
  // Elige la pestaña inicial que prefieras
  const [tab, setTab] = useState<Tab>('Ensaladas')

  const tabs: Tab[] = [
    'Ensaladas',
    'Para compartir',
    'Bocadillos',
    'Hamburguesas',
    'Casquería',
    'Postres',
  ]

  const data = {
    'Ensaladas': ensaladas,
    'Para compartir': paraCompartir,
    'Bocadillos': bocadillos,
    'Hamburguesas': hamburguesas,
    'Casquería': casqueria,
    'Postres': postres,
  } as const

  return (
    <section id="carta" className="py-24 bg-[#0f1621]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="section-title">Carta</h2>
        <p className="mt-2 opacity-80">
          Si lo prefieres, puedes{" "}
          <a
            href="/carta_mery.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-brand"
            aria-label="Abrir la carta en PDF en una nueva pestaña"
          >
            descargar la carta en PDF
          </a>
          .
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`button ${tab === t ? 'bg-white/15 border border-white/20' : 'button-outline'}`}
              aria-pressed={tab === t}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {data[tab].map((item, i) => (
            <motion.div
              key={`${item.name}-${i}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="card flex items-start justify-between gap-4"
            >
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="card-title">{item.name}</h3>
                  {item.badge && (
                    <span className="text-xs bg-brand text-black rounded-full px-3 py-1">
                      {item.badge}
                    </span>
                  )}
                </div>
                {item.description && (
                  <p className="mt-2 opacity-80">{item.description}</p>
                )}
              </div>
              <div className="font-semibold text-brand whitespace-nowrap">
                {item.price}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
