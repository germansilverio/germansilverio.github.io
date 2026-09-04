# Portfolio de Germán Silverio

Sitio estático, sin build ni dependencias de instalación. Se abre haciendo doble clic en `index.html`.

## Estructura

- `index.html` — la página completa. Todo el texto visible lleva un atributo `data-i18n`.
- `js/main.js` — diccionarios ES/EN, cambio de idioma, animaciones de scroll, galerías y lightbox.
- `css/styles.css` — estilos. El bloque final ("Añadidos 2026-09") tiene la narrativa, los estados de proyecto y los leads de sección.
- `assets/images/` — capturas. Prefijos: `crm-*`, `web-*`, `coffee-*`, `cashflow-*`, `finance-*`.
- `demo/` — demo interactiva de Smart Finance, enlazada desde la tarjeta del proyecto.

## Cómo se edita el texto

Cada texto vive en **dos lugares** y hay que tocar los dos:

1. En `index.html`, dentro del elemento con `data-i18n="clave"` (es lo que se ve si el JS no corre).
2. En `js/main.js`, en `translations.es["clave"]` y `translations.en["clave"]`.

Si agregás una clave nueva, ponela en los tres lados. Si una clave falta en un idioma, ese elemento se queda con el texto del idioma anterior — no rompe, pero se nota.

## Capturas

- Las de `crm-*` y `cashflow-*` salen de las vistas de demostración, con datos inventados. Nunca poner capturas con datos reales de un cliente.
- Para regenerar las del CRM: `python3 dev/generar-demo.py` en la carpeta del CRM y sacar las pantallas de `demo.html`.
- Las de `web-*` salen del sitio de Lacalle; las de `coffee-*`, de `Workana/01-CoffeeHouse/img`.

## Pendientes

- Publicarlo. Hoy corre local; sin URL, el portfolio no cumple su función. GitHub Pages o Netlify, cualquiera de los dos sirve y es gratis.
- Foto propia en la portada.
- Un número concreto del CRM (horas ahorradas, propiedades cargadas) — es lo único que le falta al caso más fuerte.
