// Expositores y rubros de la muestra
export type Rubro =
  | 'Minería'
  | 'Agroindustria'
  | 'Turismo'
  | 'Industria'
  | 'Tecnología'
  | 'Comercio'
  | 'Servicios'
  | 'Artesanías';

export interface Exhibitor {
  name: string;
  rubro: Rubro;
  description: string;
  origin: string;
}

// Contenido de ejemplo para el prototipo. Se reemplaza por la nómina oficial
// de expositores del kit / organización cuando esté disponible.
export const exhibitors: Exhibitor[] = [
  {
    name: 'Lítica Andina S.A.',
    rubro: 'Minería',
    description: 'Exploración y desarrollo de litio en la Puna jujeña, con foco en energía sustentable.',
    origin: 'Susques',
  },
  {
    name: 'Solar de Cauchari',
    rubro: 'Minería',
    description: 'Soluciones solares y baterías de litio para comunidades del altiplano.',
    origin: 'Cauchari',
  },
  {
    name: 'AgroAndina',
    rubro: 'Agroindustria',
    description: 'Producción de tabaco, frutas tropicales y citrus del Valle de los Perales.',
    origin: 'Perico',
  },
  {
    name: 'Bodega Quebrada',
    rubro: 'Agroindustria',
    description: 'Vinos de altura de la Quebrada de Humahuaca, DO Jujuy.',
    origin: 'Uquía',
  },
  {
    name: 'Norte Trek',
    rubro: 'Turismo',
    description: 'Operador mayorista de turismo de aventura: salinas, cerros y quebradas.',
    origin: 'Humahuaca',
  },
  {
    name: 'Quebrada Hotel & Spa',
    rubro: 'Turismo',
    description: 'Alojamiento boutique con vista a la Quebrada y experiencias locales.',
    origin: 'Tilcara',
  },
  {
    name: 'Jujuy Textil',
    rubro: 'Industria',
    description: 'Confección textil con fibra de camélidos y tintes naturales.',
    origin: 'San Salvador de Jujuy',
  },
  {
    name: 'Puna Reactor',
    rubro: 'Tecnología',
    description: 'Startup jujeña de software para monitoreo industrial y energía.',
    origin: 'San Salvador de Jujuy',
  },
  {
    name: 'Kuyay Apps',
    rubro: 'Tecnología',
    description: 'Aplicaciones móviles y soluciones de e-commerce para pymes del NOA.',
    origin: 'Palpalá',
  },
  {
    name: 'Comercial del Norte',
    rubro: 'Comercio',
    description: 'Distribución de alimentos regionales y productos de la economía popular.',
    origin: 'General Güemes',
  },
  {
    name: 'Andina Supply',
    rubro: 'Servicios',
    description: 'Logística y comercio exterior para el Corredor Bioceánico de Capricornio.',
    origin: 'San Salvador de Jujuy',
  },
  {
    name: 'Artesanías de la Quebrada',
    rubro: 'Artesanías',
    description: 'Tejidos, cerámica y artesanías de las comunidades quebradeñas.',
    origin: 'Purmamarca',
  },
];

export const rubros: Rubro[] = [
  'Minería',
  'Agroindustria',
  'Turismo',
  'Industria',
  'Tecnología',
  'Comercio',
  'Servicios',
  'Artesanías',
];