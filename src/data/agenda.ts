// Agenda de actividades por día
export interface AgendaItem {
  day: string;
  time: string;
  title: string;
  place: string;
  type: string;
}

// Agenda de ejemplo del prototipo. Se ajusta al programa oficial del evento.
export const agenda: AgendaItem[] = [
  {
    day: 'vie9',
    time: '09:00',
    title: 'Apertura oficial y corte de cintas',
    place: 'Auditorio principal',
    type: 'Institucional',
  },
  {
    day: 'vie9',
    time: '10:30',
    title: 'Ronda de negocios: Corredor Bioceánico',
    place: 'Sala de rondas',
    type: 'Negocios',
  },
  {
    day: 'vie9',
    time: '15:00',
    title: 'Charla: Minería sustentable en la Puna',
    place: 'Auditorio principal',
    type: 'Charlas',
  },
  {
    day: 'vie9',
    time: '17:30',
    title: 'Espectáculo de bienvenida',
    place: 'Escenario central',
    type: 'Cultural',
  },
  {
    day: 'sab10',
    time: '09:30',
    title: 'Foro de turismo: Quebrada y Puna',
    place: 'Auditorio secundario',
    type: 'Foros',
  },
  {
    day: 'sab10',
    time: '11:30',
    title: 'Ronda de negocios: agroindustria',
    place: 'Sala de rondas',
    type: 'Negocios',
  },
  {
    day: 'sab10',
    time: '15:00',
    title: 'Showcooking de productos regionales',
    place: 'Espacio gastronómico',
    type: 'Cultural',
  },
  {
    day: 'sab10',
    time: '18:00',
    title: 'Música en vivo: bandas del NOA',
    place: 'Escenario central',
    type: 'Cultural',
  },
  {
    day: 'dom11',
    time: '10:00',
    title: 'Feria de artesanos y emprendedores',
    place: 'Pabellón de artesanías',
    type: 'Feria',
  },
  {
    day: 'dom11',
    time: '12:00',
    title: 'Charla: Economía del Conocimiento',
    place: 'Auditorio principal',
    type: 'Charlas',
  },
  {
    day: 'dom11',
    time: '16:00',
    title: 'Ronda de negocios: tecnología y servicios',
    place: 'Sala de rondas',
    type: 'Negocios',
  },
  {
    day: 'dom11',
    time: '19:00',
    title: 'Noche de la Quebrada (tradición y música)',
    place: 'Escenario central',
    type: 'Cultural',
  },
  {
    day: 'lun12',
    time: '10:00',
    title: 'Panel: Integración regional e internacional',
    place: 'Auditorio principal',
    type: 'Foros',
  },
  {
    day: 'lun12',
    time: '12:30',
    title: 'Cierre de rondas de negocios',
    place: 'Sala de rondas',
    type: 'Negocios',
  },
  {
    day: 'lun12',
    time: '16:00',
    title: 'Entrega de reconocimientos',
    place: 'Auditorio principal',
    type: 'Institucional',
  },
  {
    day: 'lun12',
    time: '18:00',
    title: 'Acto de clausura',
    place: 'Escenario central',
    type: 'Institucional',
  },
];

export const days = [
  { id: 'vie9', label: 'Viernes 9' },
  { id: 'sab10', label: 'Sábado 10' },
  { id: 'dom11', label: 'Domingo 11' },
  { id: 'lun12', label: 'Lunes 12' },
];