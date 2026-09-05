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

## Foto de portada

`assets/images/german.jpg` — 880×1100, recorte 4:5. En el CSS se muestra con `object-fit: cover` y `object-position: 50% 18%`, que es lo que mantiene la cara arriba cuando la columna cambia de alto. Si alguna vez la reemplazás, respetá el 4:5 o vas a tener que retocar ese `object-position`.

La foto no abre el lightbox a propósito: el lightbox es para las capturas de los proyectos.

## Pendiente

- Un número más del CRM (propiedades cargadas, contactos gestionados).
- Publicarlo. Sigue siendo lo único que le falta para servir de algo.

## Tipografía

Elegida: **variante A**, aplicada en el sitio. Archivo 800 para títulos, Instrument Sans para texto, JetBrains Mono para etiquetas y números.

En `variantes/` quedaron las tres que se compararon. Ya cumplieron su función: se pueden borrar. (Ojo: la copia de A que hay ahí es anterior a la foto de portada, así que no la uses como referencia.)

| | Títulos | Texto | Acento |
|---|---|---|---|
| **A · Taller** | Archivo 800 | Instrument Sans | Ámbar `#E8B33C` |
| **B · Editorial** | Instrument Serif 400 | Inter Tight | Arena `#D9C9A3` |
| **C · Producto** | Familjen Grotesk 700 | Figtree | Naranja `#FF5C35` |

Si algún día querés cambiar de idea: copiá el `styles.css` de la variante sobre `css/styles.css` y la línea del `<link>` de Google Fonts de su `index.html` al `index.html` principal. Nada más.

## Contraste del texto secundario

El gris de los párrafos estaba en `#7E7E88` a peso 400 y se apagaba en monitores con poco brillo. Ahora es `#9C9CA6` a peso 450. Las tres fuentes de texto son variables, así que 450 es un peso real y no una negrita falsa. Si volvés a tocar `--muted`, no bajes de `#909099`: por debajo de eso el contraste sobre `#0B0B0C` cae del mínimo legible.

## Favicon

`assets/favicon.svg` es la fuente: "GS" en blanco sobre cuadrado casi negro, con el punto en ámbar. Los dos PNG (`favicon-32.png` y `apple-touch-icon.png`) están rasterizados de ese mismo SVG. Si cambiás el SVG, hay que volver a generar los PNG — el navegador usa uno u otro según el contexto.
