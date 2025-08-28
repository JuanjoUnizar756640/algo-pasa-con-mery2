export default function Events() {
  return (
    <section id="eventos" className="py-24 bg-[#0b0f14]">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="card">
          <h2 className="section-title">Eventos & grupos</h2>
          <p className="mt-2 opacity-80">
            Cumpleaños, afterworks, despedidas o celebraciones íntimas.
            Diseñamos menús de grupo y barras libres de cócteles a medida.
          </p>
          <ul className="mt-4 space-y-2 opacity-90 list-disc list-inside">
            <li>Reservas para 8–40 personas</li>
            <li>Opciones vegetarianas y sin gluten</li>
            <li>Equipo de música y micro disponible</li>
          </ul>
          <a href="#reservas" className="button-primary mt-6 inline-flex">Pedir propuesta</a>
        </div>
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-soft">
          <img
            src="https://images.unsplash.com/photo-1521334726092-b509a19597d0?q=80&w=1920&auto=format&fit=crop"
            alt="Brindis en evento privado"
            className="w-full h-full object-cover max-h-[420px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </div>
    </section>
  )
}
