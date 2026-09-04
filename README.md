# Portfolio de Germán Silverio

Sitio estático, sin build. Se abre haciendo doble clic en `index.html`.

## Archivos

- `index.html` — la página entera. Todo el texto visible lleva `data-i18n`.
- `js/main.js` — diccionarios ES/EN, cambio de idioma, miniaturas y lightbox.
- `css/styles.css` — estilos. Paleta y tipografías en el bloque `:root` de arriba.
- `assets/images/` — capturas: `crm-*`, `web-*`, `coffee-*`, `cashflow-*`, `finance-*`.
- `demo/` — demo de Smart Finance, enlazada desde su tarjeta.

## Editar texto

Cada texto vive en dos lugares y hay que tocar los dos:

1. `index.html`, dentro del elemento con `data-i18n="clave"` (es el fallback si el JS no corre).
2. `js/main.js`, en `translations.es["clave"]` **y** en `translations.en["clave"]`.

Si falta una clave en un idioma, ese elemento queda con el texto del idioma anterior. Son 84 claves y las dos listas tienen que coincidir.

## Diseño

- Fondo `#0B0B0C`, superficies `#131316`, un solo acento ámbar `#E8B33C`.
- Verde `--live` y naranja `--dev` son semánticos (estado de un proyecto), no decorativos: no usarlos para otra cosa.
- Tipografías: Archivo (títulos), Instrument Sans (texto), JetBrains Mono (etiquetas y números).
- Regla de escritura: viñetas de menos de doce palabras, párrafos de dos o tres líneas. Si un bloque necesita más, es que sobra.

## Publicar

El repo de GitHub Pages está fuera de esta carpeta. Al actualizar hay que copiar **los tres**: `index.html`, `js/main.js` y `css/styles.css`. Si subís uno solo, el JS viejo sobrescribe el texto del HTML nuevo y quedan tarjetas con contenido de otros proyectos.

Después de subir: Ctrl+Shift+R para saltear la caché del navegador.

## Pendiente

- Un número más del CRM (propiedades cargadas, contactos gestionados).
- Foto propia, si alguna vez querés una.
