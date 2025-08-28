import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Reservations() {
  const [people, setPeople] = useState(2)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('20:30')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [notes, setNotes] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Hola, soy ${name}. Me gustaría reservar para ${people} personas el ${date} a las ${time}. Teléfono: ${phone}. Notas: ${notes}`
    )
    const wa = `https://wa.me/34622357160?text=${msg}`
    window.open(wa, '_blank')
  }

  return (
    <section id="reservas" className="py-24 bg-[#0b0f14]">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="section-title">Reservas</h2>
          <p className="mt-2 opacity-80">De lunes a domingo: 13:00 a 16:00 horario de comidas y 20:00 a 22:30 horario de cenas. Miércoles cerrado.</p>
          <div className="card mt-6">
            <form onSubmit={submit} className="grid gap-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="opacity-70 text-sm">Fecha</label>
                  <input type="date" required className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2" value={date} onChange={e => setDate(e.target.value)} />
                </div>
                <div>
                  <label className="opacity-70 text-sm">Hora</label>
                  <input type="time" required className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2" value={time} onChange={e => setTime(e.target.value)} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="opacity-70 text-sm">Personas</label>
                  <input type="number" min={1} max={12} className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2" value={people} onChange={e => setPeople(parseInt(e.target.value || '1'))} />
                </div>
                <div>
                  <label className="opacity-70 text-sm">Teléfono</label>
                  <input type="tel" placeholder="+34 ..." required className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2" value={phone} onChange={e => setPhone(e.target.value)} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="opacity-70 text-sm">Nombre</label>
                  <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                  <label className="opacity-70 text-sm">Notas</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2" value={notes} onChange={e => setNotes(e.target.value)} />
                </div>
              </div>
              <button type="submit" className="button-primary justify-center">Solicitar por WhatsApp</button>
              <p className="text-xs opacity-70">* Recibirás confirmación por WhatsApp. Si lo prefieres, escríbenos a <a className="underline" href="mailto:reservas@algopasaconmery.com">algopasaconmery13@gmail.com</a>.</p>
            </form>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="relative rounded-3xl overflow-hidden border border-white/10 shadow-soft">
          <img
            src="/mery_reservas.jpg"
            alt="Reservas Algo pasa con Mery"
            className="w-full h-full object-cover max-h-[560px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur px-3 py-1 rounded-full text-sm">Atendemos grupos y eventos privados</div>
        </motion.div>
      </div>
    </section>
  )
}
