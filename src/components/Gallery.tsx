import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const IMAGES = [
  '/bahos_mery_galeria.jpg',
  '/bravas_mery_galeria.jpg',
  '/caprichosa_mery_galeria.jpg',
  '/ensalada_mery_galeria_3.jpg',
  '/pulpo_mery_galeria.jpg',
  '/tostada_mery_galeria.jpg',
  '/cafe_mery_galeria.jpg',
]

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null)

  const handleNext = () => {
    if (open !== null) setOpen((open + 1) % IMAGES.length)
  }

  const handlePrev = () => {
    if (open !== null) setOpen((open - 1 + IMAGES.length) % IMAGES.length)
  }

  // ⏱️ Slideshow automático cada 4s cuando hay una foto abierta
  useEffect(() => {
    if (open === null) return
    const interval = setInterval(() => {
      setOpen((prev) => (prev !== null ? (prev + 1) % IMAGES.length : prev))
    }, 4000)
    return () => clearInterval(interval)
  }, [open])

  return (
    <section id="galeria" className="py-24 bg-[#0f1621]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="section-title">Galería</h2>
        <p className="mt-2 opacity-80">¡Conócenos de un vistazo!</p>

        {/* grid de miniaturas */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
          {IMAGES.map((src, i) => (
            <button
              key={i}
              className="relative rounded-xl overflow-hidden group"
              onClick={() => setOpen(i)}
            >
              <img
                src={src}
                alt={`Foto ${i + 1} del bar`}
                className="aspect-[4/3] object-cover w-full group-hover:scale-105 transition"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </button>
          ))}
        </div>

        {/* lightbox */}
        {open !== null && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur flex items-center justify-center z-50"
            onClick={() => setOpen(null)}
          >
            {/* cerrar */}
            <button
              onClick={(e) => { e.stopPropagation(); setOpen(null) }}
              className="absolute top-6 right-6 text-white hover:text-brand transition"
            >
              <X size={32} />
            </button>

            {/* flecha izq */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev() }}
              className="absolute left-6 text-white hover:text-brand transition"
            >
              <ChevronLeft size={40} />
            </button>

            {/* imagen */}
            <img
              src={IMAGES[open]}
              alt={`Foto ${open + 1}`}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
            />

            {/* flecha der */}
            <button
              onClick={(e) => { e.stopPropagation(); handleNext() }}
              className="absolute right-6 text-white hover:text-brand transition"
            >
              <ChevronRight size={40} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
