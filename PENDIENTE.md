# Pendiente antes de publicar y solicitar el alta en Amazon Afiliados

## Datos que faltan (obligatorios para legal/privacidad)

- **NIF/NIE y nombre o razón social** del titular: hoy son placeholders
  `[PENDIENTE: ...]` en `_build/nav.js` (`SITE.legal`). Se usan en
  [`legal/aviso-legal.html`](legal/aviso-legal.html) y
  [`legal/politica-privacidad.html`](legal/politica-privacidad.html).
- **Domicilio fiscal completo**: mismo sitio.
- **Correo real**: `hola@entrenaencasa.es` es un placeholder — hoy ese
  dominio no existe. Cambiar `SITE.email` en `_build/nav.js` por un correo
  que sí puedas leer (puede ser un Gmail mientras no haya dominio propio).

Después de rellenar `_build/nav.js`, ejecutar `node build.js` para
regenerar las páginas con los datos correctos.

## Dominio

No hay dominio comprado. `SITE.domain` en `_build/nav.js` apunta a un
subdominio provisional de Vercel (`entrenaencasa.vercel.app`) — todavía sin
desplegar. Para la solicitud de afiliados sirve un subdominio de Vercel,
pero un dominio propio (`.es` o `.com`) da más credibilidad en la revisión
manual de Amazon.

## Cuenta de Amazon Afiliados

Esta web usa la MISMA cuenta de Afiliados que EscritorioIdeal (Amazon
permite hasta 50 sitios por cuenta), pero necesita su propio tag para medir
resultados por separado:

1. Publicar este sitio en Vercel (nuevo proyecto, no el de EscritorioIdeal).
2. Añadir la URL publicada en `afiliados.amazon.es` → "Tus páginas web o
   apps" (el mismo panel donde ya está `escritorioideal.vercel.app`).
3. Crear un tracking ID nuevo en "Administrar seguimiento de ID" (por
   ejemplo `entrenaencasa-21`) y sustituir el placeholder `TUTAG2-21` en
   `SITE.amazonTag` (`_build/nav.js`) por el real.
4. Las 3 ventas cualificadas en 180 días son **por cuenta**, no por sitio:
   ya corre el mismo plazo que para EscritorioIdeal, esta web solo suma
   tráfico y ventas potenciales a la misma cuenta.

## Contenido para llegar y mantener el mínimo de Amazon

Hay 16 páginas de contenido real (5 guías + 4 artículos de blog + inicio +
guías-índice + blog-índice + 3 legales + 404 sin indexar), por encima del
mínimo de 10. Ideas ya identificadas y no escritas todavía:
- Guía de calzado para entrenar en casa (running en cinta vs. fuerza).
- Guía de suplementación básica (proteína, creatina) — atención: Amazon es
  más estricto con contenido de salud/suplementos, revisar políticas antes
  de publicar.
- Artículo: rutina de 20 minutos con el equipamiento mínimo de esta web.

## Enlaces de afiliado (mínimo viable, sin PA-API)

Cada guía tiene una sección "Productos que cumplen estos criterios" con
7 productos reales por guía (`products` en `_build/data.js`), enlazados con
`https://www.amazon.es/dp/<ASIN>?tag=<SITE.amazonTag>`. Todas las páginas
del sitio (no solo las guías) muestran además un bloque "Lo más
recomendado de EntrenaEnCasa" con un producto por categoría.

Los precios y valoraciones mostrados son una foto fija tomada al añadir
cada producto, no datos en vivo — hay que revisarlos de vez en cuando a
mano. Siguiente paso cuando haya PA-API: sustituir esos datos estáticos por
una consulta automática en tiempo de build.

## Otras cosas menores

- `SITE.social` (Instagram/Pinterest) está vacío.
- No hay fotografías propias: el sitio usa solo iconos SVG a propósito.
- Analítica: no hay ningún script de analítica instalado todavía.
- No tiene páginas "Sobre mí" ni "Contacto" (decisión tomada también en
  EscritorioIdeal): el correo de contacto vive solo en las páginas legales.
