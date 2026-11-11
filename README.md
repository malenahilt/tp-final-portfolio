# Portfolio web de Malena Hilt

Trabajo Final de Diseño UX-UI 2026 · Licenciatura en Sistemas de Información · FCyT, Sede Concepción del Uruguay.

## Links

- **Sitio publicado:** https://TU-USUARIO.github.io/portfolio-malena-hilt/
- **Figma (research, wireframes, design system y prototipo):** https://www.figma.com/design/Mojk0jitBHig38mTjvUlt4
- **Repositorio:** https://github.com/TU-USUARIO/portfolio-malena-hilt

## Concepto visual

Tres palabras clave: **clara, cálida, precisa**.

| Elemento | Decisión |
|---|---|
| Fondo | Crema `#FAF7F2` |
| Primario | Verde petróleo `#1F4D47` |
| Acento (llamados a la acción) | Terracota `#B4431F` |
| Texto | `#1E1E1E` |
| Tipografías | Fraunces (títulos) y DM Sans (texto) |

El diseño visual es propio. De la referencia del docente se tomó solo la arquitectura de información.

## Stack

- HTML5 semántico
- CSS3 con variables (`:root`), Flexbox y Grid, mobile-first
- JavaScript vanilla (solo para el menú mobile)
- Sin frameworks ni constructores visuales

## Estructura

```
index.html            Página principal (one-page con anclas)
caso-turnos-vet.html  Caso de estudio completo
404.html              Página de error personalizada
css/styles.css        Estilos y design system
js/main.js            Menú mobile
assets/               Favicon, imagen Open Graph e imágenes de proyectos
```

## Accesibilidad y performance

- Contraste mínimo 4.5:1 en texto normal y 3:1 en texto grande.
- Navegable con teclado, con foco visible y link "Saltar al contenido".
- Menú mobile con `aria-expanded` y `aria-controls`.
- Se respeta `prefers-reduced-motion`.
- Breakpoints probados: 375 px, 768 px y 1280 px, sin scroll horizontal.
- Fuentes con `font-display: swap` (2 familias).

Captura de Lighthouse (mobile): _agregar acá la captura después de publicar el sitio._

## Fuentes de templates y recursos

- No se usó ningún template: el sitio se escribió desde cero a partir del diseño de Figma.
- Tipografías: [Fraunces](https://fonts.google.com/specimen/Fraunces) y [DM Sans](https://fonts.google.com/specimen/DM+Sans) (Google Fonts).
- Las ilustraciones de proyectos y retratos son SVG propios, y deben reemplazarse por capturas reales y una foto.
- Arquitectura de información tomada del portfolio de referencia: https://ernesto-ledesma-portfolio.vercel.app/

## Uso de IA

Se usó IA (Claude, de Anthropic) para:

- Generar el diseño inicial en Figma (research, wireframes, design system y pantallas).
- Escribir el código HTML, CSS y JavaScript a partir de ese diseño.
- Redactar los textos del portfolio. Los proyectos, la experiencia y los datos de contacto son ficticios pero verosímiles, como permite la consigna.

Revisión humana: _completar con lo que revisaste y modificaste vos (por ejemplo, textos cambiados, pruebas en el celular, resultados del test de usabilidad)._

## Cómo se publica (GitHub Pages)

1. Subir todos los archivos de esta carpeta a la rama `main` del repositorio.
2. En GitHub: **Settings → Pages**.
3. En **Source** elegir **Deploy from a branch**, rama `main` y carpeta `/ (root)`.
4. Esperar 1 a 2 minutos. El link aparece arriba en esa misma pantalla.
5. Cada vez que se haga un commit a `main`, el sitio se actualiza solo.

## Pendientes antes de entregar

- Reemplazar `TU-USUARIO` por tu usuario de GitHub en `index.html`, `caso-turnos-vet.html` y este README.
- Reemplazar los links de LinkedIn, GitHub, Behance y el email por los reales.
- Cambiar el link de Café Ribera por un repositorio o demo real.
- Agregar la captura de Lighthouse.
