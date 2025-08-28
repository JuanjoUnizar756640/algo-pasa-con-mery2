export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-[#0b0f14]">
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="opacity-80 text-sm">© {new Date().getFullYear()} Algo pasa con Mery · Zaragoza</div>
        <div className="flex gap-4 text-sm opacity-80">
          <a href="#" className="hover:opacity-100 opacity-80">Privacidad</a>
          <a href="#" className="hover:opacity-100 opacity-80">Cookies</a>
          <a href="#" className="hover:opacity-100 opacity-80">Aviso legal</a>
        </div>
      </div>
    </footer>
  )
}
