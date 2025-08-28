import { MenuItem } from '@/types'

export const cocktails: MenuItem[] = [
  { name: 'Mery Spritz', description: 'Aperol, cava, naranja sanguina, perfume de romero', price: '8,50€', badge: 'Firma' },
  { name: 'Negroni Esmeralda', description: 'Gin, vermut rojo, bitter, tintura de eucalipto', price: '9,50€' },
  { name: 'Menta & Matcha', description: 'Vodka, té matcha, menta fresca, sirope cítrico', price: '9€' },
  { name: 'Ribera Sour', description: 'Pisco, lima, almíbar, clara, vino tinto', price: '9,50€' },
  { name: 'Kiwi Collins', description: 'Gin, kiwi, limón y soda', price: '8,90€' },
]

export const sinAlcohol: MenuItem[] = [
  { name: 'Limonada de Lavanda', description: 'Lima, lavanda, soda', price: '6,50€', badge: 'Mocktail' },
  { name: 'Bosque Encantado', description: 'Piña, coco, espirulina, menta', price: '6,90€' },
  { name: 'Ginger Tonic', description: 'Jengibre, tónica, cítricos', price: '5,90€' },
]

export const tapas: MenuItem[] = [
  { name: 'Croqueta de Cordero', description: 'Bechamel de tomillo, miel de romero', price: '2,50€ ud.' },
  { name: 'Bao de Cochinita', description: 'Encurtidos, mayo de chipotle', price: '4,90€' },
  { name: 'Humus de Pistacho', description: 'Con crudités y pan plano', price: '7,90€', badge: 'Vegetal' },
  { name: 'Noodles Kimchi', description: 'Sésamo y huevo a baja temperatura', price: '9,50€' },
]

export const degustacion: MenuItem[] = [
  { name: 'Sesión Mery', description: '3 cócteles de autor en formato degustación', price: '18€', badge: 'Experiencia' },
  { name: 'Ruta del Bosque', description: 'Selección de 4 tapas inspiradas en el bosque', price: '15€' },
]
