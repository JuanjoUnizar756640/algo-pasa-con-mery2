export default function Location() {
  return (
    <section id="ubicacion" className="py-24 bg-[#0f1621]">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="section-title">Dónde estamos</h2>
          <p className="mt-2 opacity-80">C/ Aragón 2, 50830, Villanueva de Gállego, Zaragoza</p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="card">
              <div className="font-semibold">Horario</div>
              <div className="mt-2 text-sm opacity-80">Lun-Dom 09:00–23:00</div>
              <div className="text-sm opacity-80">Miércoles cerrado por descanso semanal</div>
            </div>
            <div className="card">
              <div className="font-semibold">Contacto</div>
              <div className="mt-2 text-sm opacity-80">+34 613 372 406</div>
              <div className="text-sm opacity-80">algopasaconmery13 @gmail.com</div>
            </div>
          </div>
        </div>
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-soft">
            <iframe
              title="Mapa de Algo pasa con Mery"
              src="https://www.google.com/maps?q=Calle+Aragon+2+50830+Villanueva+de+Gallego&hl=es&z=16&output=embed"
              className="w-full h-[420px]"
              loading="lazy"
            />
          </div>
      </div>
    </section>
  )
}
