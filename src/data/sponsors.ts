// Sponsors e instituciones
export interface Sponsor {
  name: string;
  level: 'Platino' | 'Oro' | 'Plata' | 'Institucional';
  url?: string;
  logo?: string;
  darkTile?: boolean;
  cover?: boolean;
  coverFill?: boolean;
}

// Espacios de sponsor del prototipo. Los nombres reales se completan con el
// programa oficial de sponsors de ExpoJuy 2026.
const base = import.meta.env.BASE_URL;

export const sponsors: Sponsor[] = [
  { name: 'Gobierno de la Provincia de Jujuy', level: 'Institucional', logo: `${base}logos/logo-gobierno.png` },
  { name: 'Ministerio de Desarrollo Económico y Producción', level: 'Institucional', logo: `${base}logos/logo-min-desarrollo.png`, cover: true },
  { name: 'Cámara de Comercio Exterior de Jujuy', level: 'Institucional', logo: `${base}logos/logo-camara.png` },
  { name: 'ClusteAR — Cámara de Empresas TICs', level: 'Institucional', logo: `${base}logos/logo-cluster.png` },
  { name: 'Municipalidad de San Salvador de Jujuy', level: 'Institucional', logo: `${base}logos/logo-muni.png` },
  { name: 'Cannava', level: 'Oro', logo: `${base}logos/logo-cannava.png` },
  { name: 'EXAR', level: 'Oro', logo: `${base}logos/logo-exar.png` },
  { name: 'Ledesma', level: 'Platino', logo: `${base}logos/logo-ledesma.png` },
  { name: 'Balut', level: 'Platino', logo: `${base}logos/logo-balut.png` },
  { name: 'Nova Informática', level: 'Platino', logo: `${base}logos/logo-nova.jpg` },
  { name: 'Holcim', level: 'Platino', logo: `${base}logos/logo-holcim.svg` },
  { name: 'Supermercados Comodín', level: 'Platino', logo: `${base}logos/logo-comodin.png` },
  { name: 'YPF', level: 'Platino', logo: `${base}logos/ypf.svg` },
  { name: 'Banco Macro', level: 'Platino', logo: `${base}logos/banco-macro.jpg` },
];