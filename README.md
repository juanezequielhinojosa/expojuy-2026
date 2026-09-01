# ExpoJuy 2026 · Sitio web (prototipo)

Propuesta de identidad web para **ExpoJuy 2026**, desarrollada como prototipo
funcional navegable para la **primera etapa del Desafío Digital ExpoJuy 2026**.

> Sitio **no oficial** y conceptual. El contenido (expositores, agenda,
> noticias y sponsors) es de ejemplo y se reemplaza por la información
> oficial del kit de diseño y de la organización.

## Secciones

Inicio · Sobre ExpoJuy · Expositores (con buscador y filtro por rubro) ·
Agenda (pestañas por día) · Noticias · Mapa · Sponsors · Contacto ·
Preguntas frecuentes · Redes sociales.

## Stack

- [Astro](https://astro.build) (salida estática) + TypeScript estricto
- Vanilla JS para la interactividad mínima (sin dependencias)
- Google Fonts: Poppins (títulos) e Inter (texto)

## Correr localmente

```sh
npm install
npm run dev        # desarrollo en http://localhost:4321
npm run build      # sitio de producción en ./dist/
npm run preview    # previsualización del build
```

> Nota (Windows): si `npm run build` falla con un error de
> *“Cannot find native binding”* (bug de npm con dependencias opcionales de
> rolldown), borrá `node_modules` y `package-lock.json` y volvé a correr
> `npm install`.

## Estructura

```text
src/
├── data/       # contenido tipado (site, exhibitors, agenda, news, sponsors, faqs)
├── layouts/    # Layout base con SEO y Open Graph
├── components/ # Header, Footer, Hero, tarjetas, etc.
├── pages/      # una página por sección
└── styles/     # global.css: sistema de diseño (variables, botones, cards, tabs, FAQ)
docs/
├── src/        # fuente HTML de los documentos de entrega
├── memoria_descriptiva.pdf
└── declaracion_uso_ia.pdf
```

## Documentación de entrega

- `docs/memoria_descriptiva.pdf`
- `docs/declaracion_uso_ia.pdf`

## Desafío Digital ExpoJuy 2026

Presentación de propuestas hasta el **8/9/2026 23:59** · Demo Day **14/9/2026**.
Organizado por la Cámara de Comercio Exterior de Jujuy con el acompañamiento
del Ministerio de Desarrollo Económico y Producción de Jujuy.