export interface Sponsor {
  name: string;
  level: 'Platino' | 'Oro' | 'Plata' | 'Institucional';
  url?: string;
}

// Espacios de sponsor del prototipo. Los nombres reales se completan con el
// programa oficial de sponsors de ExpoJuy 2026.
export const sponsors: Sponsor[] = [
  { name: 'Gobierno de la Provincia de Jujuy', level: 'Institucional' },
  { name: 'Ministerio de Desarrollo Económico y Producción', level: 'Institucional' },
  { name: 'Cámara de Comercio Exterior de Jujuy', level: 'Institucional' },
  { name: 'ClusteAR — Cámara de Empresas TICs', level: 'Institucional' },
  { name: 'Lugar disponible — Nivel Platino', level: 'Platino' },
  { name: 'Lugar disponible — Nivel Oro', level: 'Oro' },
  { name: 'Lugar disponible — Nivel Oro', level: 'Oro' },
  { name: 'Lugar disponible — Nivel Plata', level: 'Plata' },
  { name: 'Lugar disponible — Nivel Plata', level: 'Plata' },
  { name: 'Lugar disponible — Nivel Plata', level: 'Plata' },
];