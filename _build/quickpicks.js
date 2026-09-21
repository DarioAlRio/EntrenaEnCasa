"use strict";

// Bloques de conversión: "Elige rápido" (arriba de cada guía) y "Sigue con la
// guía" (al final de cada artículo). Todo sale de data.js, nada se escribe a mano.

const { GUIDES } = require("./data");
const { escapeHtml, amazonProductUrl, productUrl, ratingNumber, icon } = require("./lib");

const fmtPrice = (p) => `${String(p.price).replace(".", ",")} €`;

// Devuelve { choice, value, cheap } con productos distintos de la guía.
function pickWinners(products) {
  const list = (products || []).filter((p) => ratingNumber(p.rating) !== null && !isNaN(Number(p.price)));
  if (list.length < 3) return null;
  const prices = list.map((p) => Number(p.price)).sort((a, b) => a - b);
  const median = prices[Math.floor(prices.length / 2)];
  const used = new Set();
  const take = (arr, key) => {
    const c = arr.filter((p) => !used.has(p.asin)).sort(key)[0];
    if (c) used.add(c.asin);
    return c;
  };
  // Nuestra elección: la mejor valoración; si empatan, la más cercana a la gama media.
  const choice = take(
    list,
    (a, b) =>
      ratingNumber(b.rating) - ratingNumber(a.rating) ||
      Math.abs(Number(a.price) - median) - Math.abs(Number(b.price) - median)
  );
  // Mejor calidad-precio: más valoración por euro (con raíz para no premiar solo lo barato).
  const good = list.filter((p) => ratingNumber(p.rating) >= 4.2);
  const value = take(
    good.length ? good : list,
    (a, b) =>
      (ratingNumber(b.rating) - 3.5) / Math.sqrt(Number(b.price)) -
      (ratingNumber(a.rating) - 3.5) / Math.sqrt(Number(a.price))
  );
  // Más económico: el más barato con valoración decente.
  const okCheap = list.filter((p) => ratingNumber(p.rating) >= 4.0);
  const cheap = take(okCheap.length ? okCheap : list, (a, b) => Number(a.price) - Number(b.price));
  return choice && value && cheap ? { choice, value, cheap } : null;
}

function quickPicks(g) {
  const w = pickWinners(g.products);
  if (!w) return "";
  const rows = [
    ["Nuestra elección", w.choice],
    ["Mejor calidad-precio", w.value],
    ["Más económico", w.cheap],
  ]
    .map(
      ([label, p]) => `<tr>
          <td data-label="Elección"><span class="quickpick-badge">${label}</span></td>
          <td data-label="Producto"><a class="quickpick-product" href="${productUrl(p)}"><img src="${p.img}" alt="${escapeHtml(p.title)}" loading="lazy" width="56" height="56"><span>${escapeHtml(p.title)}</span></a></td>
          <td data-label="Valoración">${escapeHtml(p.rating)}</td>
          <td data-label="Precio">${escapeHtml(fmtPrice(p))}</td>
          <td class="quickpick-cta"><a class="btn btn-accent" href="${amazonProductUrl(p.asin)}" target="_blank" rel="nofollow sponsored noopener">Ver en Amazon ${icon("arrow")}</a></td>
        </tr>`
    )
    .join("\n");
  return `<div class="content-section quickpicks">
        <h2>Elige rápido</h2>
        <p class="quickpicks-note">Si tienes prisa: estas son las tres opciones que mejor se defienden en esta guía según su valoración en Amazon y su precio. Precios orientativos, compruébalos en Amazon.</p>
        <div class="quickpicks-scroll"><table class="quickpicks-table">
          <thead><tr><th>Elección</th><th>Producto</th><th>Valoración</th><th>Precio</th><th></th></tr></thead>
          <tbody>
        ${rows}
          </tbody>
        </table></div>
      </div>`;
}

// ---- Guías relacionadas con cada artículo (asignadas a mano por slug) ----
const ARTICLE_GUIDES = {
  "como-montar-un-gimnasio-en-casa-desde-cero": [
    "mancuernas-ajustables",
    "banco-entrenamiento"
  ],
  "errores-comunes-empezar-a-entrenar-en-casa": [
    "mancuernas-ajustables",
    "esterillas-yoga"
  ],
  "cuanto-gastar-en-equipamiento-de-fitness-casero": [
    "mancuernas-ajustables",
    "bandas-elasticas"
  ],
  "aprovechar-espacio-pequeno-para-entrenar": [
    "bandas-elasticas",
    "kettlebells"
  ],
  "mancuernas-ajustables-vs-fijas-que-elegir": [
    "mancuernas-ajustables"
  ],
  "kettlebells-vs-mancuernas-segun-tu-objetivo": [
    "kettlebells",
    "mancuernas-ajustables"
  ],
  "como-elegir-el-grosor-de-tu-esterilla-de-yoga": [
    "esterillas-yoga"
  ],
  "rutina-de-recuperacion-con-rodillo-de-espuma": [
    "rodillos-espuma-recuperacion"
  ],
  "cuanto-peso-de-bandas-elasticas-necesitas": [
    "bandas-elasticas"
  ],
  "como-disenar-una-rutina-de-fuerza-con-mancuernas-en-casa": [
    "mancuernas-ajustables",
    "banco-entrenamiento"
  ],
  "alternativas-de-cardio-en-casa-sin-maquinas-grandes": [
    "accesorios-cardio"
  ],
  "como-cuidar-tu-equipamiento-de-fitness-en-casa": [
    "esterillas-yoga",
    "mancuernas-ajustables"
  ],
  "banco-plano-vs-banco-inclinable-para-casa": [
    "banco-entrenamiento"
  ],
  "senales-de-que-toca-subir-de-peso-en-tus-entrenamientos": [
    "mancuernas-ajustables",
    "bandas-elasticas"
  ],
  "mejores-mancuernas-ajustables-para-principiantes": [
    "mancuernas-ajustables",
    "banco-entrenamiento"
  ],
  "cuanto-cuestan-unas-mancuernas-ajustables-buenas": [
    "mancuernas-ajustables"
  ],
  "mancuernas-hexagonales-o-de-neopreno-cual-comprar": [
    "mancuernas-ajustables"
  ],
  "esterilla-de-corcho-tpe-o-nbr-cual-elegir": [
    "esterillas-yoga"
  ],
  "medidas-de-una-esterilla-de-yoga-guia-de-tamanos": [
    "esterillas-yoga"
  ],
  "bandas-elasticas-para-gluteos-y-piernas-como-elegir": [
    "bandas-elasticas"
  ],
  "kettlebell-de-hierro-fundido-o-de-vinilo-cual-comprar": [
    "kettlebells"
  ],
  "que-peso-de-kettlebell-comprar-para-empezar": [
    "kettlebells"
  ],
  "banco-de-pesas-plegable-para-piso-pequeno": [
    "banco-entrenamiento"
  ],
  "que-capacidad-de-peso-debe-tener-un-banco-de-pesas": [
    "banco-entrenamiento"
  ],
  "comba-de-saltar-para-empezar-cual-comprar": [
    "accesorios-cardio"
  ],
  "suelo-de-goma-para-gimnasio-en-casa-guia-de-compra": [
    "accesorios-cardio"
  ],
  "gimnasio-en-casa-con-100-euros-que-comprar": [
    "esterillas-yoga",
    "bandas-elasticas"
  ],
  "gimnasio-en-casa-con-300-euros-que-comprar": [
    "mancuernas-ajustables",
    "banco-entrenamiento"
  ],
  "foam-roller-o-pistola-de-masaje-cual-elegir": [
    "rodillos-espuma-recuperacion"
  ]
};

function relatedGuides(a, n = 2) {
  return (ARTICLE_GUIDES[a.slug] || [])
    .map((slug) => GUIDES.find((g) => g.slug === slug))
    .filter(Boolean)
    .slice(0, n);
}

function relatedBlock(a) {
  const gs = relatedGuides(a);
  if (!gs.length) return "";
  const items = gs
    .map((g) => {
      const w = pickWinners(g.products);
      return `<li>
          <a class="related-guide-title" href="/guias/${g.slug}.html">${escapeHtml(g.title)}</a>
          <span class="related-guide-dek">${escapeHtml(g.dek || "")}</span>
          ${w ? `<span class="related-guide-pick">Nuestra elección: <a href="${productUrl(w.choice)}">${escapeHtml(w.choice.title)}</a> (${escapeHtml(w.choice.rating)}, ${escapeHtml(fmtPrice(w.choice))})</span>` : ""}
        </li>`;
    })
    .join("\n");
  return `<div class="content-section related-guides">
        <h2>¿Ya sabes qué necesitas? Mira las mejores opciones</h2>
        <ul class="related-guide-list">
        ${items}
        </ul>
      </div>`;
}

module.exports = { quickPicks, relatedBlock, relatedGuides, pickWinners };
