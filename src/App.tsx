import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Concept from '@/components/Concept'
import Menu from '@/components/Menu'
import Reservations from '@/components/Reservations'
import Gallery from '@/components/Gallery'
import Events from '@/components/Events'
import Location from '@/components/Location'
import Footer from '@/components/Footer'

export default function App() {
  return (
    <div>
      <a href="#reservas" className="sr-only">Ir a reservas</a>
      <Navbar />
      <main className="mt-16">
        <Hero />
        <Concept />
        <Menu />
        <Reservations />
        <Gallery />
        <Events />
        <Location />
      </main>
      <Footer />
    </div>
  )
}
