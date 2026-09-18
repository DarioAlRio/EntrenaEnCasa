"use strict";

// Contenido real del sitio: guías de compra y artículos de blog.
// Nada de datos de producto inventados (ni precios exactos, ni valoraciones,
// ni modelos) en el cuerpo de la guía: son guías de criterio, no fichas de
// producto. Los productos concretos van en el array `products` de cada guía.

const GUIDES = [
  {
    slug: "mancuernas-ajustables",
    title: "Cómo elegir mancuernas para entrenar en casa",
    dek: "Fijas, ajustables o con discos: qué formato compensa según tu nivel y el espacio que tienes.",
    img: "/assets/img/guias/mancuernas-ajustables.jpg",
    updated: "2026-09-15",
    intro: [
      "El error más caro al comprar mancuernas es acertar con el peso de hoy y quedarte corto en tres meses. Progresar en fuerza es el objetivo de cualquier rutina, así que el formato que elijas debería acompañar esa progresión, no obligarte a comprar otra vez.",
      "Esta guía no recomienda un modelo concreto: te da los criterios para que compares cualquier set de mancuernas con cabeza, incluidas las que encuentres en Amazon.",
    ],
    sections: [
      {
        heading: "Mancuernas fijas o ajustables",
        body: [
          "Las mancuernas fijas (un peso por pareja) son más baratas por kilo y no tienen piezas que puedan fallar, pero para cubrir una progresión real necesitas comprar varias parejas, lo que ocupa espacio y acaba costando más que un sistema ajustable equivalente.",
          "Las mancuernas ajustables (de disco selector o de discos apilables) resuelven el problema de espacio y de progresión con una sola pareja, a cambio de un desembolso inicial mayor y de un mecanismo de cambio de peso que conviene probar que sea rápido: algunos sistemas tardan más en cambiar de peso que en hacer la serie.",
        ],
      },
      {
        heading: "Qué rango de peso necesitas de verdad",
        body: [
          "Para tren superior, un rango de 2-24 kg por mancuerna cubre a la mayoría de personas que empiezan y varios años de progresión. Para tren inferior (sentadilla goblet, peso muerto rumano) casi siempre hace falta más peso del que el tren superior necesita, así que si solo vas a comprar un set, prioriza que llegue alto de peso antes que llegue muy bajo.",
          "Comprar un rango justo para el nivel de hoy es la forma más habitual de acabar comprando el mismo producto dos veces: mejor un sistema que tenga recorrido de progresión de al menos 6-12 meses de entrenamiento constante.",
        ],
      },
      {
        heading: "Material y agarre",
        body: [
          "El recubrimiento de goma o neopreno protege el suelo y es más silencioso que el hierro fundido a la vista, importante si entrenas en un piso con vecinos debajo. El diámetro del agarre importa tanto como el peso: una empuñadura demasiado gruesa cansa el antebrazo antes de que el músculo objetivo llegue al fallo.",
        ],
      },
      {
        heading: "Espacio y protección del suelo",
        body: [
          "Incluso las mancuernas ajustables más compactas necesitan un hueco fijo donde vivir, y casi siempre conviene una esterilla o base de goma debajo: no solo protege el suelo de arañazos, también amortigua si se te cae una repetición a media serie.",
        ],
      },
    ],
    checklist: [
      "Rango de peso con recorrido para 6-12 meses de progresión, no solo para hoy",
      "Sistema de cambio de peso rápido si eliges ajustables",
      "Recubrimiento que proteja el suelo y no haga ruido",
      "Diámetro de agarre cómodo para tu mano",
      "Base o esterilla de protección del suelo",
    ],
    faq: [
      {
        q: "¿Merece la pena comprar ajustables si soy principiante?",
        a: "Si tienes claro que vas a seguir entrenando más de unos meses, sí: el ahorro de espacio y el hecho de no tener que volver a comprar cuando progreses suele compensar el precio inicial más alto. Si no estás seguro de mantener el hábito, un par de mancuernas fijas de peso medio es una forma más barata de probar.",
      },
      {
        q: "¿Cuánto peso necesito para empezar?",
        a: "Depende mucho de la persona, pero como referencia orientativa: tren superior entre 4-10 kg por mancuerna y tren inferior entre 10-20 kg suele bastar las primeras semanas. Lo importante no es acertar el número exacto, sino elegir un sistema que puedas subir de peso sin comprar nada nuevo.",
      },
    ],
    products: [
      {
        asin: "B0DKVK1VJW",
        title: "unycos Mancuernas Ajustables 10-40 kg con discos de cemento",
        note: "Entrada de gama: sistema de discos clásico, el más barato por kilo total.",
        img: "https://m.media-amazon.com/images/I/71MIDSrd2SL._AC_SF480,480_.jpg",
        price: "27",
        rating: "4,4★",
      },
      {
        asin: "B0FB3RSTV5",
        title: "Mobiclinic Mancuernas ajustables 2 en 1, 2-30 kg",
        note: "Buen equilibrio precio/rango de peso, con barra de extensión incluida.",
        img: "https://m.media-amazon.com/images/I/812yUVQAz2L._AC_SF480,480_.jpg",
        price: "44",
        rating: "4,5★",
      },
      {
        asin: "B0GL1J72MP",
        title: "FEIERDUN Set 5 en 1, 10-40 kg",
        note: "Varios pares en un solo sistema de discos, buena opción de progresión barata.",
        img: "https://m.media-amazon.com/images/I/71d7fhX3wkL._AC_SF480,480_.jpg",
        price: "49",
        rating: "4,5★",
      },
      {
        asin: "B0DBY1JFVP",
        title: "Mancuernas Ajustables compactas 10 kg, impermeables",
        note: "Formato compacto y rápido de ajustar; buena opción si el espacio manda.",
        img: "https://m.media-amazon.com/images/I/61oQ5DJ+zuL._AC_SF480,480_.jpg",
        price: "69",
        rating: "4,7★",
      },
      {
        asin: "B0GJ61RH56",
        title: "JUPPLIES Mancuerna Ajustable 2-24 kg, 15 niveles",
        note: "Ajuste rápido con bloqueo de seguridad: el mejor punto medio de la selección.",
        img: "https://m.media-amazon.com/images/I/813G91Zl9UL._AC_SF480,480_.jpg",
        price: "119",
        rating: "4,7★",
      },
      {
        asin: "B07PXS7QD3",
        title: "ATIVAFIT Mancuerna Ajustable 25-30 kg, 10-12 niveles",
        note: "Más recorrido de peso para quien ya tiene experiencia levantando.",
        img: "https://m.media-amazon.com/images/I/71nsKVkFINL._AC_SF480,480_.jpg",
        price: "145",
        rating: "4,5★",
      },
      {
        asin: "B0GX968ZXZ",
        title: "SONGMICS Juego de 2 Mancuernas Ajustables 12 en 1",
        note: "Gama alta: máximo recorrido de peso y mango antideslizante de calidad.",
        img: "https://m.media-amazon.com/images/I/71oBHqs8AaL._AC_SF480,480_.jpg",
        price: "170",
        rating: "4,5★",
      },
    ],
  },
  {
    slug: "esterillas-yoga",
    title: "Cómo elegir una esterilla de yoga o fitness",
    dek: "Grosor, material y agarre: la diferencia entre una esterilla que se desliza y una que dura años.",
    img: "/assets/img/guias/esterillas-yoga.jpg",
    updated: "2026-09-14",
    intro: [
      "Una esterilla mala se nota en la primera clase de yoga con calor o en la primera serie de burpees: se desliza, se marca o se rompe por los pliegues. El grosor y el material correctos dependen sobre todo de qué vas a hacer sobre ella, no de cuál es \"la mejor\" en general.",
    ],
    sections: [
      {
        heading: "Grosor: equilibrio entre confort y estabilidad",
        body: [
          "Las esterillas finas (3-4 mm) dan más estabilidad en posturas de equilibrio porque el pie no se hunde, y son las que suelen usarse en yoga tradicional. Las gruesas (10-15 mm) amortiguan mejor rodillas y columna en ejercicios de suelo o HIIT, pero restan estabilidad si haces posturas de pie sobre un solo apoyo.",
          "Si vas a usar la misma esterilla para todo (yoga y entrenamiento de fuerza en suelo), un término medio de 6-8 mm suele ser el que menos concesiones exige en ambos usos.",
        ],
      },
      {
        heading: "Material: PVC, TPE o caucho natural",
        body: [
          "El PVC es el más barato y duradero, pero es el menos ecológico y algunas esterillas de PVC desprenden olor los primeros días. El TPE es más ligero y biodegradable, con un agarre intermedio y buena relación calidad-precio. El caucho natural da el mejor agarre, sobre todo con sudor, pero pesa más, cuesta más y puede dar problema a quien tenga alergia al látex.",
        ],
      },
      {
        heading: "Agarre en seco frente a agarre en húmedo",
        body: [
          "Una esterilla que no resbala en seco puede volverse una pista de patinaje en cuanto empiezas a sudar. Si vas a hacer yoga caliente, HIIT o cualquier entrenamiento intenso, prioriza el agarre en húmedo sobre el agarre en seco: es lo que de verdad falla a mitad de sesión.",
        ],
      },
      {
        heading: "Tamaño y portabilidad",
        body: [
          "El tamaño estándar (173 cm) se queda corto para cualquiera por encima de 1,75 m aproximadamente: si es tu caso, busca esterillas de 183 cm o más. Si vas a llevarla a clases fuera de casa, el peso y si trae correa o bolsa de transporte importan tanto como el material.",
        ],
      },
    ],
    checklist: [
      "Grosor según el uso: fino para equilibrio, grueso para impacto en suelo",
      "Material según el agarre que necesitas (caucho natural si sudas mucho)",
      "Talla suficiente para tu altura (183 cm o más si mides más de 1,75 m)",
      "Correa o bolsa si la vas a transportar fuera de casa",
    ],
    faq: [
      {
        q: "¿Qué grosor elijo si hago de todo (yoga y HIIT)?",
        a: "Un punto medio de 6-8 mm es la opción con menos concesiones: suficiente amortiguación para ejercicios de suelo sin restar tanta estabilidad como una esterilla muy gruesa en posturas de equilibrio.",
      },
      {
        q: "¿Las esterillas de PVC son tóxicas?",
        a: "Las esterillas de PVC de fabricantes serios cumplen normativas que limitan ftalatos y metales pesados; busca que lo indique el fabricante (libre de ftalatos, OEKO-TEX u otra certificación similar) si te preocupa especialmente.",
      },
    ],
    products: [
      {
        asin: "B0BH4ZHP9R",
        title: "LA MENTE ES MARAVILLOSA Esterilla de Yoga TPE 183x61",
        note: "Entrada de gama en TPE: ligera, biodegradable y con buen agarre para lo que cuesta.",
        img: "https://m.media-amazon.com/images/I/81yxy0K2ffL._AC_SF480,480_.jpg",
        price: "14",
        rating: "4,6★",
      },
      {
        asin: "B0FPDQJWLR",
        title: "unycos Esterilla de Yoga NBR antideslizante 183x60",
        note: "Material NBR, más acolchado que el TPE básico para el mismo rango de precio.",
        img: "https://m.media-amazon.com/images/I/71MBj8wWCCL._AC_SF480,480_.jpg",
        price: "19",
        rating: "4,6★",
      },
      {
        asin: "B0CS37DGLJ",
        title: "Esterilla Yoga con líneas de alineación",
        note: "Las líneas guía ayudan a colocar manos y pies en posturas de yoga.",
        img: "https://m.media-amazon.com/images/I/71MUol0OBNL._AC_SF480,480_.jpg",
        price: "20",
        rating: "4,6★",
      },
      {
        asin: "B0CYBGQVZH",
        title: "PROIRON Esterilla Yoga, grosor 10/15mm",
        note: "Grosor a elegir: la opción para quien prioriza amortiguación en ejercicios de suelo.",
        img: "https://m.media-amazon.com/images/I/71esx5jQPML._AC_SF480,480_.jpg",
        price: "29",
        rating: "4,7★",
      },
      {
        asin: "B08V1DHP1Y",
        title: "KESSER Esterilla TPE acolchada con correa de transporte",
        note: "Incluye correa: buena opción si te la llevas a clases fuera de casa.",
        img: "https://m.media-amazon.com/images/I/81BeyGj6W6L._AC_SF480,480_.jpg",
        price: "30",
        rating: "4,5★",
      },
      {
        asin: "B0CJJNSM9V",
        title: "Amazon Basics Esterilla extragruesa antideslizante",
        note: "La más gruesa del grupo: prioriza amortiguación sobre estabilidad en equilibrios.",
        img: "https://m.media-amazon.com/images/I/61MOuHsiTRL._AC_SF480,480_.jpg",
        price: "32",
        rating: "4,5★",
      },
      {
        asin: "B0FSK9PBTC",
        title: "Esterilla Yoga Caucho Natural + PU/TPE, líneas de alineación",
        note: "Gama alta: caucho natural para el mejor agarre en húmedo de la selección.",
        img: "https://m.media-amazon.com/images/I/71-DM4htotL._AC_SF480,480_.jpg",
        price: "59",
        rating: "4,5★",
      },
    ],
  },
  {
    slug: "bandas-elasticas",
    title: "Bandas elásticas de resistencia: guía para elegir sin liarte",
    dek: "Tubulares, planas o en bucle (mini bands): para qué sirve cada tipo y cuántas necesitas de verdad.",
    img: "/assets/img/guias/bandas-elasticas.jpg",
    updated: "2026-09-13",
    intro: [
      "\"Comprar una banda elástica\" es una simplificación que lleva a comprar la que no toca: hay al menos tres formatos distintos, cada uno pensado para un tipo de ejercicio diferente, y casi nadie necesita solo una.",
    ],
    sections: [
      {
        heading: "Tipos de banda y para qué sirve cada una",
        body: [
          "Las bandas tubulares con asas sustituyen en casa a buena parte de los ejercicios de máquina de gimnasio (remo, press, curl de bíceps): se anclan con el pie o a una puerta y trabajan tirando o empujando contra la resistencia.",
          "Las bandas planas largas, sin asas, se usan sobre todo para movilidad, estiramientos asistidos y para quitar peso corporal en ejercicios como dominadas asistidas. Las mini bands (en bucle, cortas) son las que se colocan alrededor de piernas o tobillos para activar glúteo y cadera antes de entrenar, o como calentamiento.",
        ],
      },
      {
        heading: "Por qué necesitas varios niveles, no una sola banda",
        body: [
          "A diferencia de unas mancuernas, con una banda elástica no puedes \"añadir peso\": para progresar necesitas una banda de más resistencia. Por eso casi todos los sets útiles vienen en 3-5 niveles codificados por color, y comprar una sola banda suelta suele quedarse corta en pocas semanas.",
        ],
      },
      {
        heading: "Materiales: látex frente a sin látex",
        body: [
          "El látex da la elasticidad más suave y es el más barato, pero se degrada con el sol, el sudor ácido y el aceite corporal, y puede causar reacción alérgica en algunas personas. Las mini bands de tela (en lugar de látex) no se enrollan sobre la piel y duran más al lavado, aunque tienen algo menos de recorrido elástico.",
        ],
      },
      {
        heading: "Anclajes y accesorios",
        body: [
          "Un ancla de puerta amplía mucho los ejercicios posibles con bandas tubulares (remo, press de pecho, jalones), porque permite trabajar de pie en lugar de depender solo del propio cuerpo como anclaje. Si vives de alquiler o no quieres marcas en la puerta, hay anclas que se sujetan sin atornillar.",
        ],
      },
    ],
    checklist: [
      "Set de varios niveles de resistencia, no una sola banda suelta",
      "Tipo según objetivo: tubular para fuerza, bucle para activación, plana para movilidad",
      "Material sin látex si tienes piel sensible o alergia",
      "Ancla de puerta si vas a hacer ejercicios de tirón de pie",
    ],
    faq: [
      {
        q: "¿Las bandas elásticas sustituyen a las pesas?",
        a: "Parcialmente. Son muy buenas para empezar, viajar o hacer activación muscular, pero la resistencia que puedes progresar con bandas tiene un techo más bajo que con pesas a largo plazo. Como complemento o como única opción en espacio reducido funcionan bien; como sustituto permanente de un entrenamiento de fuerza serio, tienen límites.",
      },
      {
        q: "¿Cuánto duran las bandas de látex?",
        a: "Depende mucho de la exposición al sol y del cuidado: guardarlas lejos de luz directa y limpiarlas del sudor alarga su vida. En cuanto una banda muestre grietas o puntos blanquecinos, hay que cambiarla: es la señal de que puede romperse durante el ejercicio.",
      },
    ],
    products: [
      {
        asin: "B0CPSD21L4",
        title: "GRIFEMA GA5002 Bandas elásticas tubulares, set de 4",
        note: "Entrada de gama: set tubular básico para empezar a sustituir máquinas de gimnasio.",
        img: "https://m.media-amazon.com/images/I/71gKwEtS1wL._AC_SF480,480_.jpg",
        price: "7",
        rating: "4,5★",
      },
      {
        asin: "B01FN7XAYW",
        title: "Amazon Basics Banda elástica de resistencia y dominadas",
        note: "Banda plana larga: la opción para movilidad y dominadas asistidas.",
        img: "https://m.media-amazon.com/images/I/61796TWs-kL._AC_SF480,480_.jpg",
        price: "9",
        rating: "4,4★",
      },
      {
        asin: "B0H4GMM4TX",
        title: "Set de 5 bandas elásticas, varios niveles de resistencia",
        note: "La mejor valoración del grupo; set completo de niveles para progresar.",
        img: "https://m.media-amazon.com/images/I/71ZFWYmPjZL._AC_SF480,480_.jpg",
        price: "16",
        rating: "4,8★",
      },
      {
        asin: "B08BJJ8SMD",
        title: "PLEASION Mini bands de tela, set de 5",
        note: "Bucle de tela, sin látex: no se enrolla sobre la piel y dura más al lavado.",
        img: "https://m.media-amazon.com/images/I/81f6nR2TG6L._AC_SF480,480_.jpg",
        price: "15",
        rating: "4,6★",
      },
      {
        asin: "B0GYCQN48D",
        title: "Banda de resistencia con pedales, 3 niveles",
        note: "Pensada para abdomen y piernas trabajando desde el suelo, con guía de ejercicios.",
        img: "https://m.media-amazon.com/images/I/811L2UaSjsL._AC_SF480,480_.jpg",
        price: "23",
        rating: "4,4★",
      },
      {
        asin: "B0D1DV9NHZ",
        title: "Fokky Bandas elásticas con anclaje de puerta y asas",
        note: "Incluye ancla de puerta: amplía mucho los ejercicios de tirón de pie.",
        img: "https://m.media-amazon.com/images/I/71lz3Nq7-OL._AC_SF480,480_.jpg",
        price: "22",
        rating: "4,3★",
      },
      {
        asin: "B0F43BMK4L",
        title: "POWER GUIDANCE Set de 6 con bolsa de transporte",
        note: "Gama alta: seis niveles de resistencia pensados para powerlifting y fuerza.",
        img: "https://m.media-amazon.com/images/I/71p4TYauZ-L._AC_SF480,480_.jpg",
        price: "24",
        rating: "4,3★",
      },
    ],
  },
  {
    slug: "banco-entrenamiento",
    title: "Banco de entrenamiento plegable: qué mirar antes de comprar",
    dek: "Inclinación, peso máximo soportado y plegado: lo que marca la diferencia en un banco para casa.",
    img: "/assets/img/guias/banco-entrenamiento.jpg",
    updated: "2026-09-12",
    intro: [
      "Un banco de entrenamiento es de las pocas piezas de equipamiento casero que, si falla, falla con peso encima. Por eso los criterios que importan aquí no son solo de comodidad: son también de seguridad.",
    ],
    sections: [
      {
        heading: "Plano, inclinable o multiposición",
        body: [
          "Un banco plano es el más barato y estable, pero limita los ejercicios a variantes planas (press plano, remo con apoyo). Un banco inclinable o multiposición permite trabajar press inclinado y declinado, hombro sentado y más variedad de ejercicios, y en la mayoría de casos compensa el sobrecoste si vas a entrenar en casa a medio plazo.",
        ],
      },
      {
        heading: "Peso máximo soportado, con margen",
        body: [
          "La capacidad de peso indicada por el fabricante debe cubrir tu peso corporal más la carga que vas a levantar, con margen de seguridad: un banco justo de capacidad es un banco que vas a acabar sustituyendo en cuanto progreses. Para press con barra o mancuernas pesadas, prioriza bancos con capacidades claramente por encima de lo que vayas a mover.",
        ],
      },
      {
        heading: "Estabilidad y mecanismo de plegado",
        body: [
          "Un banco que se tambalea bajo carga es un riesgo real, no solo una molestia: revisa el grosor del tubo del armazón y el ancho de la base de apoyo, no solo si pliega o no. El plegado ahorra espacio, pero las bisagras son la pieza que más se afloja con el tiempo y el uso intensivo, así que conviene que el mecanismo de bloqueo en posición sea firme, no solo un pestillo simple.",
        ],
      },
      {
        heading: "Tapizado y comodidad",
        body: [
          "La densidad de la espuma influye en la comodidad en series largas, y el tipo de tapizado (vinilo o similar al cuero) en la durabilidad frente a sudor y roces. Un tapizado fino se agrieta antes con el uso frecuente que uno de mayor grosor.",
        ],
      },
    ],
    checklist: [
      "Capacidad de peso con margen sobre tu peso corporal más la carga",
      "Inclinación regulable si quieres variedad de ejercicios",
      "Base ancha y armazón robusto, no solo \"que pliegue\"",
      "Tapizado resistente que no se agriete con el uso",
    ],
    faq: [
      {
        q: "¿Necesito un banco inclinable o me vale uno plano?",
        a: "Si solo vas a hacer press plano y ejercicios con apoyo horizontal, un banco plano basta y es más barato y estable. En cuanto quieras trabajar hombro o variar el ángulo de pecho, el banco inclinable amplía mucho las opciones por una diferencia de precio que suele merecer la pena.",
      },
      {
        q: "¿Cuánto peso tiene que soportar de verdad?",
        a: "Suma tu peso corporal más el peso máximo que esperas levantar apoyado en el banco (por ejemplo, press con mancuernas pesadas) y añade un margen de seguridad. Un banco anunciado \"justo\" para ese número no es la mejor idea a medio plazo si tu objetivo es progresar en fuerza.",
      },
    ],
    products: [
      {
        asin: "B0GSYX9T71",
        title: "Banco de pesas regulable, 300 kg, 8 posiciones",
        note: "Entrada de gama con capacidad ya generosa y varias posiciones de respaldo.",
        img: "https://m.media-amazon.com/images/I/719zG2ZrQzL._AC_SF480,480_.jpg",
        price: "56",
        rating: "4,5★",
      },
      {
        asin: "B09V8BNQSZ",
        title: "YOLEO Banco de Pesas Ajustable, plano/inclinado/declinado",
        note: "Cubre los tres ángulos que menciona esta guía por un precio medio.",
        img: "https://m.media-amazon.com/images/I/71c-zmsrR5L._AC_SF480,480_.jpg",
        price: "79",
        rating: "4,6★",
      },
      {
        asin: "B0H1QNYMFZ",
        title: "FLYBIRD Banco de pesas ajustable, 300 kg",
        note: "Marca muy valorada en bancos plegables; buena estabilidad para su precio.",
        img: "https://m.media-amazon.com/images/I/71myH9z4CML._AC_SF480,480_.jpg",
        price: "85",
        rating: "4,4★",
      },
      {
        asin: "B09NWDYLZS",
        title: "DH FitLife Banco de pesas plegable, inclinado y plano",
        note: "Incluye entrenador de espalda y abdominales integrado.",
        img: "https://m.media-amazon.com/images/I/612NnHhmk5L._AC_SF480,480_.jpg",
        price: "114",
        rating: "4,2★",
      },
      {
        asin: "B09LLVMDW4",
        title: "PASYOU Banco de pesas ajustable, doble marco, sin montaje",
        note: "Capacidad muy alta (660 lb) y doble marco: pensado para cargas serias.",
        img: "https://m.media-amazon.com/images/I/61d3NSDfOjL._AC_SF480,480_.jpg",
        price: "139",
        rating: "4,6★",
      },
      {
        asin: "B09FPBLSS6",
        title: "JOROTO MD60 Banco de pesas ajustable, 360 kg",
        note: "Gama alta: máxima capacidad de la selección y estructura más robusta.",
        img: "https://m.media-amazon.com/images/I/61bq1obGgyL._AC_SF480,480_.jpg",
        price: "179",
        rating: "4,6★",
      },
      {
        asin: "B0FJX3C4KG",
        title: "Banco de Pesas Ajustable, gama premium",
        note: "El más completo del grupo, para quien monta un rincón de fuerza serio en casa.",
        img: "https://m.media-amazon.com/images/I/71lOb-qGqdL._AC_SF480,480_.jpg",
        price: "349",
        rating: "4,2★",
      },
    ],
  },
  {
    slug: "accesorios-cardio",
    title: "Comba de saltar y accesorios de cardio para entrenar en casa",
    dek: "Qué accesorios de cardio realmente aportan algo y cuáles son solo complemento.",
    img: "/assets/img/guias/accesorios-cardio.jpg",
    updated: "2026-09-10",
    intro: [
      "La comba de saltar es de los accesorios de cardio con mejor relación precio-resultado que existen, pero elegir mal el tipo o la longitud es la razón más habitual de que acabe en un cajón a la semana.",
    ],
    sections: [
      {
        heading: "Comba de cable, PVC o lastrada",
        body: [
          "Las combas de cable fino están pensadas para velocidad y dobles saltos, y son las que usa quien ya tiene técnica. Las de PVC son más lentas y fáciles de controlar, mejor punto de entrada para quien empieza. Las lastradas añaden peso al mango o al cable para trabajar más hombro y antebrazo, pero son más exigentes para la muñeca si no tienes ya una base.",
        ],
      },
      {
        heading: "El ajuste de longitud, la parte que casi nadie mira",
        body: [
          "Una comba demasiado larga se engancha en los pies constantemente; demasiado corta obliga a saltar más alto de lo necesario y castiga la técnica. La referencia rápida: de pie sobre el centro de la cuerda, los mangos deben llegarte aproximadamente a la altura de las axilas.",
        ],
      },
      {
        heading: "Guantes y muñequeras: cuándo aportan algo",
        body: [
          "Los guantes de levantamiento ayudan a proteger la piel en ejercicios de agarre intenso (dominadas, remo con barra), pero reducen el contacto directo con la barra, lo que a algunas personas les resta sensación de control. Las muñequeras ayudan sobre todo en press pesado por encima de la cabeza; para cardio ligero como la comba no suelen ser necesarias.",
        ],
      },
      {
        heading: "El suelo importa tanto como el accesorio",
        body: [
          "Saltar a la comba sobre suelo duro sin ninguna amortiguación aumenta el impacto en las articulaciones y el ruido hacia el piso de abajo. Unas losetas de goma entrelazables resuelven ambos problemas a la vez y son útiles para cualquier ejercicio de impacto, no solo la comba.",
        ],
      },
    ],
    checklist: [
      "Comba ajustada a tu altura (mango a la altura de la axila, de pie sobre la cuerda)",
      "Tipo de cable según tu nivel: PVC para iniciarte, cable fino para velocidad",
      "Suelo amortiguado si saltas sobre piso duro",
      "Guantes o muñequeras solo si tu entrenamiento realmente lo justifica",
    ],
    faq: [
      {
        q: "¿Qué comba elijo si soy principiante?",
        a: "Una de PVC o con cuentas (beaded), más lenta y fácil de controlar mientras coges el ritmo y la coordinación. Las combas de cable fino para velocidad tienen más curva de aprendizaje y se disfrutan más cuando ya dominas la técnica básica.",
      },
      {
        q: "¿Necesito una esterilla anti-impacto además de mi esterilla normal?",
        a: "Si saltas a la comba con frecuencia o vives en un piso con vecinos debajo, sí: una esterilla de yoga normal no está pensada para absorber impacto repetido y no protege el suelo del ruido igual que unas losetas de goma más gruesas.",
      },
    ],
    products: [
      {
        asin: "B0D1QCBPP7",
        title: "GRIFEMA GA5004 Comba para saltar, cuerda 2.8m",
        note: "Comba de PVC básica: fácil de controlar para quien empieza.",
        img: "https://m.media-amazon.com/images/I/61UAIOq+8XL._AC_SF480,480_.jpg",
        price: "5",
        rating: "4,5★",
      },
      {
        asin: "B08CRVG7BB",
        title: "Blukar Cuerda para saltar, longitud ajustable",
        note: "Ajuste libre de longitud, la parte que más se suele pasar por alto.",
        img: "https://m.media-amazon.com/images/I/71VL-JqH5VL._AC_SF480,480_.jpg",
        price: "6",
        rating: "4,4★",
      },
      {
        asin: "B0BR4Z75FB",
        title: "PROIRON Cuerda de saltar, mango de aluminio",
        note: "Punto medio: cable más rápido que el PVC sin llegar a nivel de competición.",
        img: "https://m.media-amazon.com/images/I/810+o2NIVwL._AC_SF480,480_.jpg",
        price: "15",
        rating: "4,4★",
      },
      {
        asin: "B0F9YTT9YN",
        title: "PICSIL Rook, comba rápida de aluminio",
        note: "Gama alta para dobles saltos y técnica avanzada, cable de velocidad.",
        img: "https://m.media-amazon.com/images/I/61SJJkyk+lL._AC_SF480,480_.jpg",
        price: "32",
        rating: "4,5★",
      },
      {
        asin: "B07KQP1X5T",
        title: "ATERCEL Guantes de gimnasio, transpirables",
        note: "Para proteger la piel en ejercicios de agarre intenso (dominadas, barra).",
        img: "https://m.media-amazon.com/images/I/71Qa99mgPPL._AC_SF480,480_.jpg",
        price: "9",
        rating: "4,6★",
      },
      {
        asin: "B0FPD4QFVQ",
        title: "RDX Guantes con muñequera de 3 placas",
        note: "Combina guante y soporte de muñeca para press pesado por encima de la cabeza.",
        img: "https://m.media-amazon.com/images/I/81glRlHJtrL._AC_SF480,480_.jpg",
        price: "22",
        rating: "4,0★",
      },
      {
        asin: "B0G2MSQNCJ",
        title: "JUPPLIES Suelo Gimnasio puzzle de goma, 12 piezas",
        note: "Losetas amortiguadoras: reducen impacto en articulaciones y ruido hacia el vecino de abajo.",
        img: "https://m.media-amazon.com/images/I/81QHE+HQyiL._AC_SF480,480_.jpg",
        price: "18",
        rating: "4,6★",
      },
    ],
  },
];

const ARTICLES = [
  {
    slug: "como-montar-un-gimnasio-en-casa-desde-cero",
    title: "Cómo montar un gimnasio en casa desde cero",
    dek: "El orden en el que conviene comprar cada cosa, y por qué no hace falta gastar todo el presupuesto el primer mes.",
    img: "/assets/img/blog/como-montar-un-gimnasio-en-casa-desde-cero.jpg",
    updated: "2026-09-16",
    body: [
      "Montar un gimnasio en casa desde cero da la tentación de comprarlo todo de golpe, pero el orden en el que incorporas cada pieza importa tanto como qué piezas eliges: empezar por lo básico evita comprar equipamiento que acaba sin usar.",
      "El orden que mejor funciona para la mayoría es este: primero una esterilla y un set de bandas elásticas (barato, versátil, sirve para movilidad y activación desde el primer día); después unas mancuernas ajustables o un par de pesos medios, que cubren la mayoría de ejercicios de fuerza de tren superior e inferior; y por último, si el hábito ya está asentado, un banco de entrenamiento, que multiplica los ejercicios posibles con las mancuernas que ya tienes.",
      "Comprar el banco antes que las mancuernas es un error habitual: sin peso suficiente que levantar, el banco apenas aporta nada extra sobre entrenar en el suelo o de pie.",
      "Un truco simple para no sobrecomprar: espera a notar qué ejercicio concreto se te queda corto con lo que ya tienes antes de añadir la siguiente pieza. Si lo que te falta es progresar en press de banca, compra el banco; si lo que te falta es variedad de tirón, prioriza las bandas con ancla de puerta.",
      "En las guías de este sitio (mancuernas, esterillas, bandas, banco y accesorios de cardio) desarrollamos cada pieza por separado con más detalle.",
    ],
  },
  {
    slug: "errores-comunes-empezar-a-entrenar-en-casa",
    title: "5 errores comunes al empezar a entrenar en casa",
    dek: "Cosas fáciles de arreglar que no cuestan dinero, antes de pensar en comprar más equipamiento.",
    img: "/assets/img/blog/errores-comunes-empezar-a-entrenar-en-casa.jpg",
    updated: "2026-09-11",
    body: [
      "Antes de gastar en más material, merece la pena revisar si el problema es de espacio o de rutina, no de equipo: varios de los errores más comunes se arreglan sin comprar nada.",
      "1. Entrenar siempre en el mismo hueco de suelo duro. Sin una esterilla o base de amortiguación, el impacto repetido en rodillas y muñecas se acumula sesión tras sesión, aunque no se note al principio.",
      "2. Comprar una sola mancuerna o banda \"para probar\". Sin margen de progresión, en pocas semanas esa pieza se queda corta y hay que comprar otra vez: mejor un sistema pensado para crecer contigo desde el principio.",
      "3. No fijar un ajuste correcto en los accesorios (comba demasiado larga, banco en la altura equivocada). Un accesorio mal ajustado no solo incomoda: cambia la técnica del ejercicio y reduce su efecto.",
      "4. Guardar el equipamiento fuera de la vista. Si la esterilla y las mancuernas están en un armario cerrado, hace falta un paso extra de decisión cada día para entrenar. Dejarlas a la vista, aunque sea en un rincón pequeño, reduce la fricción para empezar.",
      "5. Cero planificación de progresión. Ninguna pieza de equipamiento, por buena que sea, sustituye a subir peso o resistencia poco a poco. Anotar qué se hizo la última sesión evita quedarse estancado por comodidad.",
    ],
  },
  {
    slug: "cuanto-gastar-en-equipamiento-de-fitness-casero",
    title: "¿Cuánto merece la pena gastar en equipamiento de fitness casero?",
    dek: "Dónde están los saltos de calidad reales y dónde el precio ya no compra nada nuevo.",
    img: "/assets/img/blog/cuanto-gastar-en-equipamiento-de-fitness-casero.jpg",
    updated: "2026-09-09",
    body: [
      "No hay una cifra única válida para todo el mundo, pero sí hay tramos de precio donde el salto de calidad es real y tramos donde ya no se nota tanto.",
      "El primer salto importante está entre no tener nada y tener lo básico: esterilla, un set de bandas de varios niveles y un par de mancuernas de peso medio. Ese salto es el que más impacto tiene en si el hábito de entrenar en casa arranca o no, independientemente de la marca.",
      "El segundo salto, más caro, está en la durabilidad y la progresión: mancuernas ajustables en vez de fijas, un banco con capacidad de peso alta, bandas sin látex que no se degradan. Este tramo compensa sobre todo si ya llevas meses entrenando de forma constante y notas que el equipo básico se te queda corto.",
      "A partir de cierto precio, lo que se paga de más suele ser diseño, marca o accesorios extra, no rendimiento adicional: los criterios que de verdad importan (capacidad de peso, agarre, ajuste) ya estaban cubiertos en el tramo anterior.",
      "La pregunta que más ayuda a decidir no es \"¿cuánto cuesta?\" sino \"¿llevo ya varios meses entrenando de forma constante?\". Si la respuesta es sí, invertir en el tramo de mejor durabilidad y progresión se amortiza rápido; si acabas de empezar, lo básico bien elegido es suficiente para no gastar de más en algo que todavía no sabes si vas a mantener.",
    ],
  },
  {
    slug: "aprovechar-espacio-pequeno-para-entrenar",
    title: "Cómo aprovechar un espacio pequeño para entrenar en casa",
    dek: "No hace falta una habitación entera: con un par de metros cuadrados bien pensados es suficiente.",
    img: "/assets/img/blog/aprovechar-espacio-pequeno-para-entrenar.jpg",
    updated: "2026-09-08",
    body: [
      "La falta de espacio es la excusa más común para no entrenar en casa, pero la mayoría de rutinas de fuerza y cardio caben en 2-3 metros cuadrados si el equipamiento se elige pensando en eso desde el principio.",
      "Prioriza equipamiento plegable o apilable: mancuernas ajustables en lugar de una fila de pares fijos, un banco plegable en lugar de uno fijo, bandas elásticas que caben en un cajón. La diferencia entre un gimnasio en casa que dura y uno que se abandona suele estar en si hay que \"montar\" mucho antes de poder empezar a entrenar.",
      "Un hueco vertical (detrás de una puerta, dentro de un armario bajo) es tan válido como un hueco horizontal para guardar esterilla y bandas: no hace falta reservar suelo permanentemente si el equipamiento es ligero y rápido de sacar.",
      "Si el suelo es de baldosa o parqué, una esterilla de buen tamaño no solo protege las articulaciones: también protege el suelo de golpes de mancuernas o del roce del banco, algo que en un piso de alquiler conviene cuidar especialmente.",
      "Por último, la iluminación y la ventilación del rincón elegido influyen más de lo que parece en si apetece entrenar ahí o no: un hueco luminoso y ventilado, aunque sea pequeño, se usa más que una esquina oscura y cerrada por grande que sea.",
    ],
  },
];

// Un producto destacado por categoría, para el bloque "Lo más recomendado"
// que aparece en todas las páginas (ver featuredProductsSection en lib.js).
// Se reutilizan los datos ya cargados en GUIDES para no duplicar imagen/precio.
function pickFeatured(guideSlug, asin) {
  const g = GUIDES.find((x) => x.slug === guideSlug);
  const p = g.products.find((x) => x.asin === asin);
  return { ...p, category: g.slug, categoryTitle: g.title };
}

const FEATURED = [
  pickFeatured("mancuernas-ajustables", "B0GJ61RH56"),
  pickFeatured("esterillas-yoga", "B0CYBGQVZH"),
  pickFeatured("bandas-elasticas", "B0H4GMM4TX"),
  pickFeatured("banco-entrenamiento", "B09V8BNQSZ"),
  pickFeatured("accesorios-cardio", "B0G2MSQNCJ"),
];

module.exports = { GUIDES, ARTICLES, FEATURED };
