import { useState } from 'react'

const IMAGES = [
  'https://images.unsplash.com/photo-1481391123410-31fa5400e3f2?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517705132310-7e4b7b35b1b0?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1532635227-2ea84d2b8ee9?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1532634726-8b9fb99825c7?q=80&w=1600&auto=format&fit=crop',
]

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="galeria" className="py-24 bg-[#0f1621]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="section-title">Galería</h2>
        <p className="mt-2 opacity-80">Un vistazo a nuestras noches.</p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
          {IMAGES.map((src, i) => (
            <button key={i} className="relative rounded-xl overflow-hidden group" onClick={() => setOpen(i)}>
              <img src={src} alt={`Foto ${i+1} del bar`} className="aspect-[4/3] object-cover w-full group-hover:scale-105 transition" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </button>
          ))}
        </div>

        {open !== null && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur flex items-center justify-center z-50" onClick={() => setOpen(null)}>
            <img src={IMAGES[open]} alt="Foto ampliada" className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl" />
          </div>
        )}
      </div>
    </section>
  )
}
