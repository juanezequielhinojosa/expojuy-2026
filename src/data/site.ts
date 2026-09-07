// Datos globales del sitio: marca, fechas, lugar y contacto
const base = import.meta.env.BASE_URL;

export const site = {
  title: 'ExpoJuy 2026',
  name: 'ExpoJuy 2026',
  tagline: 'Conectando países, creando oportunidades',
  edition: '17ª edición',
  dates: 'Del 9 al 12 de octubre de 2026',
  place: 'Ciudad Cultural · San Salvador de Jujuy, Argentina',
  organizer: 'Cámara de Comercio Exterior de Jujuy',
  social: [
    { name: 'Instagram', url: 'https://www.instagram.com/expojuy', label: '@expojuy' },
    { name: 'Facebook', url: 'https://www.facebook.com/expojuy', label: '/expojuy' },
    { name: 'X / Twitter', url: 'https://x.com/expojuy', label: '@expojuy' },
    { name: 'YouTube', url: 'https://www.youtube.com/@expojuy', label: 'ExpoJuy' },
  ],
  email: 'info@camcomexjujuy.com.ar',
  navigation: [
    { label: 'Inicio', href: base },
    { label: 'Sobre ExpoJuy', href: `${base}sobre-expojuy/` },
    { label: 'Expositores', href: `${base}expositores/` },
    { label: 'Agenda', href: `${base}agenda/` },
    { label: 'Noticias', href: `${base}noticias/` },
    { label: 'Mapa', href: `${base}mapa/` },
    { label: 'Sponsors', href: `${base}sponsors/` },
    { label: 'Contacto', href: `${base}contacto/` },
    { label: 'Preguntas frecuentes', href: `${base}preguntas-frecuentes/` },
  ],
};