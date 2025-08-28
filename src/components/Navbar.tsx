import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import clsx from 'clsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#concepto', label: 'Concepto' },
    { href: '#carta', label: 'Carta' },
    { href: '#reservas', label: 'Reservas' },
    { href: '#galeria', label: 'Galería' },
    { href: '#eventos', label: 'Eventos' },
    { href: '#ubicacion', label: 'Ubicación' },
  ]

  return (
    <header className={clsx('fixed top-0 inset-x-0 z-50 transition', scrolled ? 'bg-[#0b0f14]/80 backdrop-blur-lg border-b border-white/10' : '')}>
      <nav className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="font-serif text-xl tracking-wide">
            <span className="text-brand">Algo</span> pasa con Mery
          </a>
          <div className="hidden md:flex gap-6 items-center">
            {links.map(l => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
            <a href="#reservas" className="button-primary">Reservar</a>
          </div>
          <button className="md:hidden p-2" aria-label="Abrir menú" onClick={() => setOpen(o => !o)}>
            <Menu />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 grid gap-2 border-t border-white/10">
            {links.map(l => (
              <a key={l.href} href={l.href} className="nav-link py-2" onClick={() => setOpen(false)}>{l.label}</a>
            ))}
            <a href="#reservas" className="button-primary justify-center" onClick={() => setOpen(false)}>Reservar</a>
          </div>
        )}
      </nav>
    </header>
  )
}
