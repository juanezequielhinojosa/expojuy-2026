// Noticias de ExpoJuy 2026
export interface NewsItem {
  date: string;
  title: string;
  excerpt: string;
}

// Novedades basadas en anuncios públicos de ExpoJuy 2026.
export const news: NewsItem[] = [
  {
    date: '2026-08-13',
    title: 'ExpoJuy 2026 se presentó en Buenos Aires',
    excerpt:
      'El gobernador de Jujuy presentó oficialmente la 17ª edición, con foco en abrir nuevos mercados para la producción provincial e integrar el Corredor Bioceánico de Capricornio.',
  },
  {
    date: '2026-08-25',
    title: 'ExpoJuy 2026 se promociona en todo el NOA',
    excerpt:
      'La organización presentó la feria en Salta, Tucumán y Córdoba, sumando a provincias y países como Chile, Paraguay y Brasil.',
  },
  {
    date: '2026-09-01',
    title: 'La Cámara de Comercio organiza ExpoJuy 2026',
    excerpt:
      'La Cámara de Comercio Exterior de Jujuy encabeza la organización de la 17ª edición, con el acompañamiento del Ministerio de Desarrollo y Producción y la Municipalidad de San Salvador de Jujuy.',
  },
  {
    date: '2026-09-15',
    title: 'Preparativos finales del predio en Ciudad Cultural',
    excerpt:
      'Comienzan los trabajos de montaje de los más de 200 stands y la planificación de las rondas de negocios internacionales.',
  },
];