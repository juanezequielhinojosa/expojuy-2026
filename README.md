# ExpoJuy 2026 · Sitio web (prototipo)

Propuesta de identidad web para **ExpoJuy 2026**, presentada como **prototipo
funcional navegable** en la primera etapa del **Desafío Digital ExpoJuy 2026**.

> Sitio **no oficial** y conceptual. El contenido (expositores, agenda, noticias
> y sponsors) es de ejemplo y se reemplaza por la información oficial de la
> organización. Sí se aplica el **Kit de Diseño oficial** (logotipos y tipografía Ambit).

## Qué incluye

Prototipo navegable construido con Astro + TypeScript que aborda las consignas
del desafío:

- **Secciones mínimas**: Inicio, Sobre ExpoJuy, Expositores, Agenda, Noticias,
  Plano/Mapa, Sponsors, Contacto, Preguntas frecuentes y Redes sociales (+ Galería).
- **Funcionalidades sugeridas**: buscador y filtro de expositores por rubro,
  agenda con pestañas por día, mapa del predio, formulario de contacto, panel
  de novedades y espacios de patrocinio.
- **Diseño responsivo** (móvil, tablet y escritorio) y componentes accesibles.
- **SEO**: título, meta description y Open Graph por página.

## Identidad aplicada

- **Tipografía oficial Ambit** (Kit de Diseño) autoalojada en `public/fonts/`
  (archivos .otf vía `@font-face`, sin Google Fonts).
- Logotipos oficiales de ExpoJuy 2026 y de la Cámara de Comercio Exterior de Jujuy.
- Paleta provisoria violeta/turquesa (`#2B1B5E → #774FF0`, acento `#25C0D4`)
  hasta que la organización publique los HEX/RGB del manual de identidad.

## Stack

- [Astro](https://astro.build) (salida estática) + TypeScript estricto
- React para Header y formulario de contacto
- Vanilla JS para filtro de expositores, pestañas de agenda y acordeón FAQ
- Contenido modular y tipado en `src/data/`

## Correr localmente

```sh
npm install
npm run dev        # desarrollo en http://localhost:4321
npm run build      # sitio de producción en ./dist/
npm run preview    # previsualización del build
```

> Nota (Windows): si `npm run build` falla con *“Cannot find native binding”*
> (bug de npm con dependencias opcionales de rolldown), borrá `node_modules`
> y `package-lock.json` y volvé a correr `npm install`.

## Estructura

```text
src/
├── data/       # contenido tipado (site, exhibitors, agenda, news, sponsors, faqs)
├── layouts/    # Layout base con SEO y Open Graph
├── components/ # Header (React), Footer, Hero, tarjetas, etc.
├── pages/      # una página por sección
└── styles/     # global.css: sistema de diseño (variables, botones, cards, tabs, FAQ)
public/
├── img/        # imágenes organizadas por sección (hero, evento, razones, sectores, galeria)
├── logos/      # logotipos oficiales y sponsors
└── fonts/      # Ambit (Light, Regular, SemiBold, Bold)
docs/
├── src/        # fuente HTML de los documentos de entrega
├── memoria_descriptiva.pdf
└── declaracion_uso_ia.pdf
```

## Documentación de entrega

- [Memoria descriptiva](docs/memoria_descriptiva.pdf)
- [Declaración de uso de IA](docs/declaracion_uso_ia.pdf)

## Desafío Digital ExpoJuy 2026

Presentación de propuestas hasta el **8/9/2026 23:59** · Demo Day **14/9/2026**.
Organizado por la Cámara de Comercio Exterior de Jujuy con el acompañamiento
del Ministerio de Desarrollo Económico y Producción de Jujuy.