/* =========================================================
   RENÉ AUREN APP
   database.js

   Base inicial de alimentos para:
   - Riñones
   - Hígado graso
   - Próstata

   IMPORTANTE:
   Esta información es educativa y general.
   No reemplaza una indicación médica individual.
   ========================================================= */

window.foodDatabase = [
  {
    id: "manzana",
    name: "Manzana",
    emoji: "🍎",
    aliases: [
      "manzana roja",
      "manzana verde",
      "apple"
    ],

    kidney: {
      status: "good",
      statusLabel: "Generalmente favorable",
      summary:
        "La manzana puede formar parte de una alimentación renal equilibrada en una porción moderada.",
      benefits:
        "Aporta fibra y puede utilizarse como fruta fresca o como parte de una merienda.",
      warning:
        "Evita acompañarla con exceso de azúcar, caramelo o productos procesados. La recomendación puede cambiar según tus análisis.",
      portion:
        "Una manzana pequeña o media, según la indicación de tu nutricionista."
    },

    liver: {
      status: "good",
      statusLabel: "Buena opción",
      summary:
        "La manzana entera puede ser una alternativa práctica dentro de una alimentación para hígado graso.",
      benefits:
        "Su fibra ayuda a que sea preferible consumirla entera en lugar de beber solamente su jugo.",
      warning:
        "Evita agregar azúcar, miel en exceso o consumirla principalmente como jugo concentrado.",
      portion:
        "Una pieza pequeña o mediana."
    },

    prostate: {
      status: "good",
      statusLabel: "Puede incluirse",
      summary:
        "La manzana puede formar parte de una alimentación variada para el bienestar general.",
      benefits:
        "Aporta fibra y ayuda a aumentar el consumo diario de frutas.",
      warning:
        "No existe un alimento único que prevenga o trate los problemas de próstata.",
      portion:
        "Una pieza pequeña o mediana."
    }
  },

  {
    id: "platano",
    name: "Plátano",
    emoji: "🍌",
    aliases: [
      "banana",
      "banano",
      "guineo"
    ],

    kidney: {
      status: "caution",
      statusLabel: "Requiere precaución",
      summary:
        "El plátano contiene una cantidad importante de potasio y no es adecuado en la misma cantidad para todos los pacientes renales.",
      benefits:
        "Aporta energía y nutrientes, pero su inclusión depende especialmente del nivel de potasio en sangre.",
      warning:
        "Si tienes potasio alto, enfermedad renal avanzada o estás en hemodiálisis, consulta antes de consumirlo regularmente.",
      portion:
        "La cantidad debe definirla tu nutricionista renal según tus análisis."
    },

    liver: {
      status: "moderate",
      statusLabel: "Con moderación",
      summary:
        "El plátano puede incluirse en una alimentación para hígado graso, cuidando la cantidad y el resto de carbohidratos del día.",
      benefits:
        "Puede utilizarse como fruta o para endulzar naturalmente algunas preparaciones.",
      warning:
        "Evita combinarlo con azúcar, leche condensada, jarabes o postres muy calóricos.",
      portion:
        "Medio plátano grande o uno pequeño."
    },

    prostate: {
      status: "good",
      statusLabel: "Puede incluirse",
      summary:
        "El plátano puede formar parte de una alimentación variada y equilibrada.",
      benefits:
        "Es práctico, aporta energía y puede utilizarse como merienda.",
      warning:
        "No sustituye el tratamiento ni la evaluación de síntomas urinarios o prostáticos.",
      portion:
        "Uno pequeño o medio grande."
    }
  },

  {
    id: "papa",
    name: "Papa",
    emoji: "🥔",
    aliases: [
      "patata",
      "papas",
      "potato"
    ],

    kidney: {
      status: "caution",
      statusLabel: "Requiere precaución",
      summary:
        "La papa es un alimento con potasio y puede requerir control de cantidad en algunas dietas renales.",
      benefits:
        "Puede aportar energía y utilizarse en diferentes preparaciones.",
      warning:
        "La cantidad y preparación dependen de tus niveles de potasio. Evita papas fritas, sopas instantáneas y exceso de sal.",
      portion:
        "Una porción pequeña, únicamente si está permitida en tu plan renal."
    },

    liver: {
      status: "moderate",
      statusLabel: "Con moderación",
      summary:
        "La papa puede incluirse, pero conviene cuidar la porción y la forma de preparación.",
      benefits:
        "Hervida, horneada o asada suele ser preferible a frita.",
      warning:
        "Evita acompañarla con mantequilla en exceso, crema, quesos grasos o frituras.",
      portion:
        "Aproximadamente media taza o una papa pequeña."
    },

    prostate: {
      status: "moderate",
      statusLabel: "Con moderación",
      summary:
        "La papa puede formar parte de una comida equilibrada cuando se prepara con poca grasa y poca sal.",
      benefits:
        "Puede acompañarse con verduras y una fuente moderada de proteína.",
      warning:
        "Las papas fritas y productos ultraprocesados aportan más grasa y sodio.",
      portion:
        "Una papa pequeña o media taza."
    }
  },

  {
    id: "frijoles",
    name: "Frijoles",
    emoji: "🫘",
    aliases: [
      "frijol",
      "habichuelas",
      "porotos",
      "beans"
    ],

    kidney: {
      status: "caution",
      statusLabel: "Consulta tu cantidad",
      summary:
        "Los frijoles aportan proteína vegetal, pero también pueden aportar potasio y fósforo.",
      benefits:
        "Son fuente de fibra y proteína vegetal.",
      warning:
        "En enfermedad renal avanzada o diálisis, la cantidad debe ajustarse según fósforo, potasio y necesidades de proteína.",
      portion:
        "La cantidad debe ser indicada por tu nutricionista renal."
    },

    liver: {
      status: "good",
      statusLabel: "Buena opción",
      summary:
        "Los frijoles pueden formar parte de una alimentación para hígado graso por su contenido de fibra y proteína vegetal.",
      benefits:
        "Pueden ayudar a preparar comidas completas sin depender siempre de carnes procesadas.",
      warning:
        "Evita cocinarlos con manteca, embutidos, tocino o exceso de sal.",
      portion:
        "Entre media taza y tres cuartos de taza, según el resto de la comida."
    },

    prostate: {
      status: "good",
      statusLabel: "Puede incluirse",
      summary:
        "Los frijoles pueden formar parte de una alimentación variada con más alimentos vegetales.",
      benefits:
        "Aportan fibra y proteína vegetal.",
      warning:
        "Si producen distensión, aumenta la cantidad gradualmente y revisa la preparación.",
      portion:
        "Aproximadamente media taza."
    }
  },

  {
    id: "pollo",
    name: "Pollo",
    emoji: "🍗",
    aliases: [
      "pechuga",
      "pechuga de pollo",
      "chicken"
    ],

    kidney: {
      status: "moderate",
      statusLabel: "Controla la porción",
      summary:
        "El pollo puede aportar proteína, pero la cantidad necesaria cambia según la etapa renal y el tipo de tratamiento.",
      benefits:
        "La pechuga fresca, sin piel y preparada en casa suele ser preferible al pollo procesado.",
      warning:
        "Evita embutidos de pollo, nuggets, sopas procesadas y productos con mucho sodio o aditivos con fósforo.",
      portion:
        "La porción debe ajustarse a tu plan de proteína."
    },

    liver: {
      status: "good",
      statusLabel: "Buena opción",
      summary:
        "El pollo sin piel puede ser una fuente de proteína baja en grasa dentro de una alimentación para hígado graso.",
      benefits:
        "Puede prepararse asado, hervido, a la plancha o al horno.",
      warning:
        "Evita freírlo, empanizarlo o cubrirlo con salsas cremosas y azucaradas.",
      portion:
        "Una porción similar al tamaño de la palma de la mano."
    },

    prostate: {
      status: "good",
      statusLabel: "Puede incluirse",
      summary:
        "El pollo fresco y sin piel puede formar parte de una alimentación equilibrada.",
      benefits:
        "Es una fuente de proteína que puede combinarse con verduras y cereales integrales.",
      warning:
        "Limita las versiones procesadas, fritas o con demasiado sodio.",
      portion:
        "Una porción similar al tamaño de la palma de la mano."
    }
  },

  {
    id: "huevo",
    name: "Huevo",
    emoji: "🥚",
    aliases: [
      "huevos",
      "clara",
      "clara de huevo",
      "egg"
    ],

    kidney: {
      status: "moderate",
      statusLabel: "Depende de tu plan",
      summary:
        "El huevo aporta proteína. La clara y la yema tienen características diferentes para una dieta renal.",
      benefits:
        "La clara aporta proteína y puede ser una alternativa útil para algunas personas.",
      warning:
        "La cantidad de yemas y proteína total debe ajustarse según tu etapa renal, fósforo y tratamiento.",
      portion:
        "Según la cantidad de proteína indicada por tu nutricionista."
    },

    liver: {
      status: "good",
      statusLabel: "Puede incluirse",
      summary:
        "El huevo puede formar parte de una alimentación equilibrada para hígado graso.",
      benefits:
        "Puede prepararse cocido, escalfado o con poco aceite.",
      warning:
        "Evita acompañarlo frecuentemente con tocino, salchicha, mantequilla o frituras.",
      portion:
        "Uno o dos, según tu plan general de alimentación."
    },

    prostate: {
      status: "moderate",
      statusLabel: "Con moderación",
      summary:
        "El huevo puede incluirse como parte de una alimentación variada.",
      benefits:
        "Es una fuente práctica de proteína.",
      warning:
        "No debe considerarse un tratamiento para problemas prostáticos.",
      portion:
        "Uno, ajustando la cantidad al resto de las proteínas del día."
    }
  },

  {
    id: "arroz",
    name: "Arroz",
    emoji: "🍚",
    aliases: [
      "arroz blanco",
      "arroz integral",
      "rice"
    ],

    kidney: {
      status: "moderate",
      statusLabel: "Puede incluirse",
      summary:
        "El arroz puede aportar energía y suele utilizarse como acompañamiento en diferentes planes renales.",
      benefits:
        "El arroz blanco puede ser una opción práctica cuando se necesita controlar algunos minerales.",
      warning:
        "Evita prepararlo con cubitos, consomé, sopas instantáneas o demasiado sodio.",
      portion:
        "Aproximadamente media taza cocida, según tus necesidades."
    },

    liver: {
      status: "moderate",
      statusLabel: "Controla la cantidad",
      summary:
        "El arroz puede formar parte de una alimentación para hígado graso, pero es importante controlar la porción.",
      benefits:
        "Puede combinarse con verduras y proteína para preparar una comida más completa.",
      warning:
        "Las porciones grandes y frecuentes pueden aumentar demasiado la cantidad total de carbohidratos.",
      portion:
        "Aproximadamente media taza cocida."
    },

    prostate: {
      status: "moderate",
      statusLabel: "Puede incluirse",
      summary:
        "El arroz puede formar parte de una comida equilibrada.",
      benefits:
        "Es fácil de combinar con verduras, legumbres y proteína.",
      warning:
        "Evita que ocupe casi todo el plato; agrega variedad de alimentos.",
      portion:
        "Aproximadamente media taza cocida."
    }
  },

  {
    id: "avena",
    name: "Avena",
    emoji: "🥣",
    aliases: [
      "oatmeal",
      "oats",
      "hojuelas de avena"
    ],

    kidney: {
      status: "moderate",
      statusLabel: "Consulta tu cantidad",
      summary:
        "La avena aporta fibra, aunque su cantidad puede necesitar ajustes en algunos planes renales.",
      benefits:
        "Puede utilizarse en desayunos preparados sin exceso de azúcar.",
      warning:
        "Consulta si debes controlar fósforo, potasio, líquidos o cantidad total de cereales.",
      portion:
        "Una porción pequeña preparada según tu plan renal."
    },

    liver: {
      status: "good",
      statusLabel: "Buena opción",
      summary:
        "La avena puede ser una opción de desayuno rica en fibra dentro de una alimentación para hígado graso.",
      benefits:
        "Puede combinarse con fruta entera y canela sin necesidad de agregar mucha azúcar.",
      warning:
        "Evita las versiones instantáneas con azúcar, jarabes y sabores artificiales.",
      portion:
        "Entre un tercio y media taza seca antes de cocinar."
    },

    prostate: {
      status: "good",
      statusLabel: "Puede incluirse",
      summary:
        "La avena puede ayudar a aumentar el consumo de alimentos integrales y fibra.",
      benefits:
        "Es una opción sencilla para el desayuno.",
      warning:
        "Controla los ingredientes añadidos, especialmente azúcar y cremas.",
      portion:
        "Entre un tercio y media taza seca antes de cocinar."
    }
  },

  {
    id: "tomate",
    name: "Tomate",
    emoji: "🍅",
    aliases: [
      "tomates",
      "jitomate",
      "tomato"
    ],

    kidney: {
      status: "caution",
      statusLabel: "Depende de tu potasio",
      summary:
        "El tomate contiene potasio y su cantidad puede necesitar control en algunos pacientes renales.",
      benefits:
        "Puede aportar sabor, color y variedad a las comidas.",
      warning:
        "Si tienes potasio elevado, consulta la cantidad permitida. Las salsas enlatadas también pueden tener mucho sodio.",
      portion:
        "La cantidad debe adaptarse a tus resultados de laboratorio."
    },

    liver: {
      status: "good",
      statusLabel: "Buena opción",
      summary:
        "El tomate puede formar parte de una alimentación basada en verduras y alimentos frescos.",
      benefits:
        "Puede utilizarse en ensaladas, guisos y salsas caseras.",
      warning:
        "Prefiere preparaciones sin exceso de azúcar, aceite o sal.",
      portion:
        "Una porción como parte de la comida."
    },

    prostate: {
      status: "good",
      statusLabel: "Puede incluirse",
      summary:
        "El tomate puede formar parte de una alimentación variada, pero no debe presentarse como tratamiento para la próstata.",
      benefits:
        "Ayuda a aumentar el consumo de verduras y puede utilizarse fresco o cocinado.",
      warning:
        "La evidencia no permite asegurar que un alimento por sí solo prevenga o cure una enfermedad prostática.",
      portion:
        "Una porción dentro de una comida equilibrada."
    }
  },

  {
    id: "aguacate",
    name: "Aguacate",
    emoji: "🥑",
    aliases: [
      "palta",
      "avocado"
    ],

    kidney: {
      status: "caution",
      statusLabel: "Requiere precaución",
      summary:
        "El aguacate contiene potasio y su cantidad puede estar limitada en algunas dietas renales.",
      benefits:
        "Aporta grasas insaturadas y puede utilizarse en cantidades pequeñas.",
      warning:
        "Consulta antes de consumirlo regularmente si tienes potasio alto o enfermedad renal avanzada.",
      portion:
        "La cantidad debe ajustarse según tus análisis."
    },

    liver: {
      status: "moderate",
      statusLabel: "Con moderación",
      summary:
        "El aguacate aporta grasas insaturadas, pero también concentra calorías.",
      benefits:
        "Puede utilizarse para sustituir mantequilla, crema o aderezos menos saludables.",
      warning:
        "Aunque sea nutritivo, una porción grande puede aumentar mucho las calorías de la comida.",
      portion:
        "Aproximadamente una cuarta parte de un aguacate mediano."
    },

    prostate: {
      status: "moderate",
      statusLabel: "Con moderación",
      summary:
        "El aguacate puede formar parte de una alimentación equilibrada.",
      benefits:
        "Aporta grasas insaturadas y combina bien con verduras y proteínas.",
      warning:
        "Controla la porción si necesitas cuidar el peso corporal.",
      portion:
        "Aproximadamente una cuarta parte de un aguacate mediano."
    }
  },

  {
    id: "sandia",
    name: "Sandía",
    emoji: "🍉",
    aliases: [
      "watermelon",
      "patilla"
    ],

    kidney: {
      status: "moderate",
      statusLabel: "Controla la cantidad",
      summary:
        "La sandía contiene bastante agua y su porción puede necesitar control si tienes restricción de líquidos.",
      benefits:
        "Puede ser refrescante y aportar variedad a la alimentación.",
      warning:
        "Si estás en diálisis o tienes límite de líquidos, recuerda que las frutas con mucha agua también cuentan.",
      portion:
        "Una porción pequeña, ajustada a tu límite de líquidos."
    },

    liver: {
      status: "moderate",
      statusLabel: "Con moderación",
      summary:
        "La sandía puede incluirse como fruta fresca cuidando la cantidad.",
      benefits:
        "Puede sustituir postres o bebidas con azúcar añadida.",
      warning:
        "Evita consumir grandes cantidades de una sola vez o convertirla en bebidas azucaradas.",
      portion:
        "Aproximadamente una taza en cubos."
    },

    prostate: {
      status: "good",
      statusLabel: "Puede incluirse",
      summary:
        "La sandía puede formar parte de una alimentación variada.",
      benefits:
        "Aporta agua y puede ser una alternativa a los postres procesados.",
      warning:
        "Si tienes dificultad para controlar la orina o te levantas muchas veces de noche, evita grandes cantidades de líquidos cerca de dormir y consulta al médico.",
      portion:
        "Aproximadamente una taza en cubos."
    }
  },

  {
    id: "pepino",
    name: "Pepino",
    emoji: "🥒",
    aliases: [
      "cucumber"
    ],

    kidney: {
      status: "good",
      statusLabel: "Generalmente favorable",
      summary:
        "El pepino puede utilizarse en ensaladas y preparaciones frescas dentro de muchas dietas renales.",
      benefits:
        "Aporta frescura y puede ayudar a dar volumen a las comidas.",
      warning:
        "Si tienes restricción estricta de líquidos, considera también el agua presente en frutas y verduras.",
      portion:
        "Una porción moderada como parte de una comida."
    },

    liver: {
      status: "good",
      statusLabel: "Buena opción",
      summary:
        "El pepino es una verdura ligera que puede formar parte de comidas para hígado graso.",
      benefits:
        "Puede combinarse con otras verduras y aderezos bajos en azúcar y grasa.",
      warning:
        "Evita cubrirlo con exceso de sal o salsas procesadas.",
      portion:
        "Una taza en rodajas aproximadamente."
    },

    prostate: {
      status: "good",
      statusLabel: "Puede incluirse",
      summary:
        "El pepino puede formar parte de una alimentación con más verduras frescas.",
      benefits:
        "Es fácil de incluir en ensaladas y meriendas.",
      warning:
        "No sustituye la evaluación médica si tienes dolor, dificultad para orinar o sangre en la orina.",
      portion:
        "Una taza en rodajas aproximadamente."
    }
   }, ,
{
  id: "pera",
  name: "Pera",
  emoji: "🍐",
  aliases: [
    "pear"
  ],

  kidney: {
    status: "good",
    statusLabel: "Generalmente favorable",
    summary:
      "La pera puede formar parte de una alimentación renal equilibrada en una porción moderada.",
    benefits:
      "Aporta fibra y puede utilizarse como fruta fresca o como merienda.",
    warning:
      "La recomendación puede variar según tus análisis y el plan indicado por tu nutricionista.",
    portion:
      "Una pera pequeña o mediana."
  },

  liver: {
    status: "good",
    statusLabel: "Buena opción",
    summary:
      "La pera puede incluirse dentro de una alimentación para hígado graso.",
    benefits:
      "Aporta fibra y puede ayudar a sustituir postres con azúcar añadida.",
    warning:
      "Prefiere consumirla entera y evita preparaciones con almíbar.",
    portion:
      "Una pieza pequeña o mediana."
  },

  prostate: {
    status: "good",
    statusLabel: "Puede incluirse",
    summary:
      "La pera puede formar parte de una alimentación variada para la salud general.",
    benefits:
      "Ayuda a aumentar el consumo diario de frutas.",
    warning:
      "No sustituye el tratamiento médico para enfermedades prostáticas.",
    portion:
      "Una pieza pequeña o mediana."
  }
},

{
  id: "uvas",
  name: "Uvas",
  emoji: "🍇",
  aliases: [
    "uva",
    "grapes"
  ],

  kidney: {
    status: "good",
    statusLabel: "Generalmente favorable",
    summary:
      "Las uvas pueden formar parte de una alimentación renal cuando se consumen en una porción moderada.",
    benefits:
      "Aportan variedad y pueden utilizarse como merienda.",
    warning:
      "Controla la cantidad si necesitas restringir carbohidratos o líquidos.",
    portion:
      "Entre 12 y 15 uvas aproximadamente."
  },

  liver: {
    status: "good",
    statusLabel: "Buena opción",
    summary:
      "Las uvas pueden formar parte de una alimentación para hígado graso.",
    benefits:
      "Son preferibles enteras en lugar de jugos concentrados.",
    warning:
      "Evita consumirlas junto con postres azucarados.",
    portion:
      "Una taza pequeña."
  },

  prostate: {
    status: "good",
    statusLabel: "Puede incluirse",
    summary:
      "Las uvas pueden incluirse dentro de una alimentación variada.",
    benefits:
      "Ayudan a aumentar el consumo de frutas.",
    warning:
      "No reemplazan ningún tratamiento médico.",
    portion:
      "Una taza pequeña."
  }
},

{
  id: "brocoli",
  name: "Brócoli",
  emoji: "🥦",
  aliases: [
    "brocoli",
    "broccoli"
  ],

  kidney: {
    status: "moderate",
    statusLabel: "Puede incluirse",
    summary:
      "El brócoli puede formar parte de muchos planes renales dependiendo de la porción.",
    benefits:
      "Aporta fibra y puede combinarse con diferentes comidas.",
    warning:
      "La cantidad debe ajustarse según tus análisis de potasio.",
    portion:
      "Media taza cocida aproximadamente."
  },

  liver: {
    status: "good",
    statusLabel: "Excelente opción",
    summary:
      "El brócoli puede formar parte de una alimentación para hígado graso.",
    benefits:
      "Ayuda a aumentar el consumo diario de verduras.",
    warning:
      "Evita cocinarlo con exceso de mantequilla o salsas cremosas.",
    portion:
      "Media taza o más como parte de una comida."
  },

  prostate: {
    status: "good",
    statusLabel: "Muy buena opción",
    summary:
      "El brócoli puede formar parte de una alimentación equilibrada para el bienestar general.",
    benefits:
      "Es una forma práctica de aumentar el consumo de verduras.",
    warning:
      "Debe formar parte de un patrón saludable, no como tratamiento único.",
    portion:
      "Media taza o más."
  }
},

{
  id: "coliflor",
  name: "Coliflor",
  emoji: "🤍",
  aliases: [
    "cauliflower"
  ],

  kidney: {
    status: "good",
    statusLabel: "Generalmente favorable",
    summary:
      "La coliflor puede formar parte de muchos planes de alimentación renal.",
    benefits:
      "Puede utilizarse como sustituto de otros acompañamientos.",
    warning:
      "Evita preparaciones con mucho queso o mantequilla.",
    portion:
      "Media taza cocida."
  },

  liver: {
    status: "good",
    statusLabel: "Buena opción",
    summary:
      "La coliflor puede incluirse dentro de una alimentación para hígado graso.",
    benefits:
      "Aumenta la variedad de verduras del plato.",
    warning:
      "Prefiere preparaciones al vapor, hervidas o al horno.",
    portion:
      "Media taza o más."
  },

  prostate: {
    status: "good",
    statusLabel: "Puede incluirse",
    summary:
      "La coliflor puede formar parte de una alimentación variada.",
    benefits:
      "Ayuda a aumentar el consumo de verduras.",
    warning:
      "No sustituye el tratamiento médico.",
    portion:
      "Media taza."
  }
},

{
  id: "repollo",
  name: "Repollo",
  emoji: "🥬",
  aliases: [
    "col",
    "cabbage"
  ],

  kidney: {
    status: "good",
    statusLabel: "Generalmente favorable",
    summary:
      "El repollo puede formar parte de una alimentación renal en porciones moderadas.",
    benefits:
      "Puede consumirse cocido o fresco según tolerancia.",
    warning:
      "Evita agregar demasiado sodio en su preparación.",
    portion:
      "Una taza aproximadamente."
  },

  liver: {
    status: "good",
    statusLabel: "Buena opción",
    summary:
      "El repollo puede incluirse dentro de una alimentación para hígado graso.",
    benefits:
      "Ayuda a aumentar el consumo diario de verduras.",
    warning:
      "Prefiere preparaciones caseras con poca sal.",
    portion:
      "Una taza."
  },

  prostate: {
    status: "good",
    statusLabel: "Puede incluirse",
    summary:
      "El repollo puede formar parte de una alimentación saludable.",
    benefits:
      "Es una opción práctica para ensaladas o guisos.",
    warning:
      "No reemplaza la atención médica.",
    portion:
      "Una taza."
  }
} ,

{
  id: "espinaca",
  name: "Espinaca",
  emoji: "🥬",
  aliases: ["espinacas", "spinach"],

  kidney: {
    status: "caution",
    statusLabel: "Requiere precaución",
    summary: "La espinaca puede aportar una cantidad importante de potasio, especialmente cuando se consume cocida.",
    benefits: "Aporta fibra, vitaminas y variedad a las comidas.",
    warning: "Si tienes potasio elevado o enfermedad renal avanzada, consulta la cantidad adecuada.",
    portion: "Una porción pequeña, según tus análisis."
  },

  liver: {
    status: "good",
    statusLabel: "Buena opción",
    summary: "La espinaca puede formar parte de una alimentación rica en verduras para hígado graso.",
    benefits: "Aporta fibra y puede utilizarse en ensaladas, sopas o preparaciones cocidas.",
    warning: "Evita prepararla con exceso de crema, mantequilla o queso.",
    portion: "Una taza cruda o media taza cocida."
  },

  prostate: {
    status: "good",
    statusLabel: "Puede incluirse",
    summary: "La espinaca puede formar parte de una alimentación variada para la salud general.",
    benefits: "Ayuda a aumentar el consumo diario de verduras.",
    warning: "No sustituye la evaluación ni el tratamiento de problemas prostáticos.",
    portion: "Una taza cruda o media taza cocida."
  }
},

{
  id: "zanahoria",
  name: "Zanahoria",
  emoji: "🥕",
  aliases: ["zanahorias", "carrot"],

  kidney: {
    status: "moderate",
    statusLabel: "Controla la porción",
    summary: "La zanahoria puede incluirse en muchos planes renales, cuidando la cantidad.",
    benefits: "Aporta sabor, color y fibra.",
    warning: "La recomendación puede cambiar si debes controlar estrictamente el potasio.",
    portion: "Media taza cocida o una zanahoria pequeña."
  },

  liver: {
    status: "good",
    statusLabel: "Buena opción",
    summary: "La zanahoria puede formar parte de una alimentación para hígado graso.",
    benefits: "Puede utilizarse como verdura, merienda o ingrediente de sopas.",
    warning: "Evita agregarle azúcar, mantequilla o salsas cremosas.",
    portion: "Una zanahoria pequeña o media taza."
  },

  prostate: {
    status: "good",
    statusLabel: "Puede incluirse",
    summary: "La zanahoria puede formar parte de una alimentación equilibrada.",
    benefits: "Ayuda a aumentar el consumo de verduras.",
    warning: "No debe considerarse un tratamiento para la próstata.",
    portion: "Una zanahoria pequeña o media taza."
  }
},

{
  id: "cebolla",
  name: "Cebolla",
  emoji: "🧅",
  aliases: ["cebollas", "onion"],

  kidney: {
    status: "good",
    statusLabel: "Generalmente favorable",
    summary: "La cebolla puede utilizarse para dar sabor a las comidas sin depender tanto de la sal.",
    benefits: "Aporta sabor y puede combinarse con diferentes preparaciones.",
    warning: "Evita cocinarla con cubitos, consomé o salsas con mucho sodio.",
    portion: "Una porción moderada dentro de la comida."
  },

  liver: {
    status: "good",
    statusLabel: "Buena opción",
    summary: "La cebolla puede formar parte de preparaciones saludables para hígado graso.",
    benefits: "Ayuda a dar sabor sin agregar azúcar ni exceso de grasa.",
    warning: "Prefiere preparaciones caseras con poco aceite.",
    portion: "Una porción moderada."
  },

  prostate: {
    status: "good",
    statusLabel: "Puede incluirse",
    summary: "La cebolla puede formar parte de una alimentación variada.",
    benefits: "Puede utilizarse en ensaladas, sopas y guisos.",
    warning: "No sustituye la atención médica.",
    portion: "Una porción moderada."
  }
},

{
  id: "ajo",
  name: "Ajo",
  emoji: "🧄",
  aliases: ["diente de ajo", "garlic"],

  kidney: {
    status: "good",
    statusLabel: "Generalmente favorable",
    summary: "El ajo puede ayudar a dar sabor a las comidas sin agregar demasiado sodio.",
    benefits: "Puede utilizarse fresco en diferentes preparaciones.",
    warning: "Evita las sales de ajo comerciales si contienen mucho sodio.",
    portion: "Uno o dos dientes como parte de una comida."
  },

  liver: {
    status: "good",
    statusLabel: "Buena opción",
    summary: "El ajo puede utilizarse para condimentar comidas para hígado graso.",
    benefits: "Ayuda a reducir la necesidad de salsas y condimentos procesados.",
    warning: "No debe presentarse como una cura o desintoxicante del hígado.",
    portion: "Uno o dos dientes."
  },

  prostate: {
    status: "good",
    statusLabel: "Puede incluirse",
    summary: "El ajo puede formar parte de una alimentación equilibrada.",
    benefits: "Aporta sabor a verduras, proteínas y guisos.",
    warning: "No sustituye un tratamiento médico.",
    portion: "Uno o dos dientes."
  }
},

{
  id: "pimiento",
  name: "Pimiento",
  emoji: "🫑",
  aliases: ["chile dulce", "morrón", "morron", "bell pepper"],

  kidney: {
    status: "good",
    statusLabel: "Generalmente favorable",
    summary: "El pimiento puede formar parte de muchos planes renales.",
    benefits: "Aporta color, sabor y variedad a las comidas.",
    warning: "Evita acompañarlo con salsas muy saladas o procesadas.",
    portion: "Media taza aproximadamente."
  },

  liver: {
    status: "good",
    statusLabel: "Buena opción",
    summary: "El pimiento puede incluirse dentro de una alimentación rica en verduras.",
    benefits: "Puede consumirse crudo, asado o cocido.",
    warning: "Prefiere preparaciones con poco aceite.",
    portion: "Media taza o más."
  },

  prostate: {
    status: "good",
    statusLabel: "Puede incluirse",
    summary: "El pimiento puede formar parte de una alimentación variada.",
    benefits: "Ayuda a aumentar el consumo de verduras.",
    warning: "No sustituye una evaluación médica.",
    portion: "Media taza."
  }
},

{
  id: "calabaza",
  name: "Calabaza",
  emoji: "🎃",
  aliases: ["ayote", "zapallo", "pumpkin"],

  kidney: {
    status: "moderate",
    statusLabel: "Controla la porción",
    summary: "La calabaza puede aportar potasio y su cantidad debe ajustarse en algunos planes renales.",
    benefits: "Puede utilizarse en purés, sopas o guisos.",
    warning: "Consulta la cantidad si tienes el potasio elevado.",
    portion: "Media taza cocida."
  },

  liver: {
    status: "good",
    statusLabel: "Buena opción",
    summary: "La calabaza puede formar parte de una alimentación para hígado graso.",
    benefits: "Aporta fibra y puede sustituir acompañamientos más procesados.",
    warning: "Evita agregar exceso de azúcar, crema o mantequilla.",
    portion: "Media taza cocida."
  },

  prostate: {
    status: "good",
    statusLabel: "Puede incluirse",
    summary: "La calabaza puede formar parte de una alimentación equilibrada.",
    benefits: "Es una verdura práctica para sopas y purés.",
    warning: "No sustituye el tratamiento de una enfermedad prostática.",
    portion: "Media taza cocida."
  }
},

{
  id: "calabacin",
  name: "Calabacín",
  emoji: "🥒",
  aliases: ["calabacin", "zucchini"],

  kidney: {
    status: "good",
    statusLabel: "Generalmente favorable",
    summary: "El calabacín puede formar parte de muchos planes de alimentación renal.",
    benefits: "Puede prepararse cocido, al horno o en sopas.",
    warning: "Evita agregar demasiado queso, sal o salsas procesadas.",
    portion: "Media taza cocida."
  },

  liver: {
    status: "good",
    statusLabel: "Buena opción",
    summary: "El calabacín es una verdura ligera que puede formar parte de comidas para hígado graso.",
    benefits: "Ayuda a aumentar el volumen de verduras del plato.",
    warning: "Prefiere preparaciones con poco aceite.",
    portion: "Media taza o más."
  },

  prostate: {
    status: "good",
    statusLabel: "Puede incluirse",
    summary: "El calabacín puede formar parte de una alimentación variada.",
    benefits: "Es fácil de combinar con proteínas y cereales.",
    warning: "No reemplaza la atención médica.",
    portion: "Media taza."
  }
},

{
  id: "apio",
  name: "Apio",
  emoji: "🌿",
  aliases: ["celery"],

  kidney: {
    status: "moderate",
    statusLabel: "Con moderación",
    summary: "El apio puede utilizarse en porciones pequeñas, pero no debe considerarse un remedio para limpiar los riñones.",
    benefits: "Aporta sabor y textura a ensaladas y sopas.",
    warning: "Evita jugos concentrados y preparaciones con exceso de sal.",
    portion: "Uno o dos tallos pequeños."
  },

  liver: {
    status: "good",
    statusLabel: "Puede incluirse",
    summary: "El apio puede formar parte de una alimentación con más verduras.",
    benefits: "Puede utilizarse en ensaladas, sopas y meriendas.",
    warning: "No existe evidencia de que un jugo de apio cure o desintoxique el hígado.",
    portion: "Uno o dos tallos."
  },

  prostate: {
    status: "good",
    statusLabel: "Puede incluirse",
    summary: "El apio puede formar parte de una alimentación equilibrada.",
    benefits: "Aporta variedad y puede combinarse con otras verduras.",
    warning: "No sustituye la evaluación médica de síntomas urinarios.",
    portion: "Uno o dos tallos."
  }
},

{
  id: "remolacha",
  name: "Remolacha",
  emoji: "🔴",
  aliases: ["betabel", "beet"],

  kidney: {
    status: "caution",
    statusLabel: "Consulta tu cantidad",
    summary: "La remolacha puede aportar potasio y oxalatos, por lo que no es adecuada en la misma cantidad para todos.",
    benefits: "Aporta color, fibra y variedad.",
    warning: "Consulta especialmente si tienes potasio alto o antecedentes de cálculos de oxalato.",
    portion: "Una porción pequeña según tu plan renal."
  },

  liver: {
    status: "good",
    statusLabel: "Puede incluirse",
    summary: "La remolacha puede formar parte de una alimentación basada en verduras.",
    benefits: "Puede consumirse cocida o en ensaladas.",
    warning: "Evita presentarla como una cura o desintoxicante del hígado.",
    portion: "Media taza aproximadamente."
  },

  prostate: {
    status: "good",
    statusLabel: "Puede incluirse",
    summary: "La remolacha puede formar parte de una alimentación variada.",
    benefits: "Ayuda a aumentar el consumo de verduras.",
    warning: "No sustituye un tratamiento para problemas prostáticos.",
    portion: "Media taza."
  }
},

{
  id: "champinones",
  name: "Champiñones",
  emoji: "🍄",
  aliases: ["champiñón", "champinon", "hongos", "mushrooms"],

  kidney: {
    status: "caution",
    statusLabel: "Controla la cantidad",
    summary: "Los champiñones pueden aportar potasio y su cantidad debe ajustarse en algunos planes renales.",
    benefits: "Aportan sabor y pueden utilizarse como acompañamiento.",
    warning: "Evita versiones enlatadas con mucho sodio.",
    portion: "Una porción pequeña."
  },

  liver: {
    status: "good",
    statusLabel: "Buena opción",
    summary: "Los champiñones pueden formar parte de comidas para hígado graso.",
    benefits: "Pueden ayudar a aumentar el volumen de verduras del plato.",
    warning: "Evita cocinarlos con exceso de mantequilla, crema o queso.",
    portion: "Media taza cocida."
  },

  prostate: {
    status: "good",
    statusLabel: "Puede incluirse",
    summary: "Los champiñones pueden formar parte de una alimentación equilibrada.",
    benefits: "Aportan variedad y pueden combinarse con diferentes comidas.",
    warning: "No deben considerarse un tratamiento para la próstata.",
    portion: "Media taza."
  }
},

{
  id: "pina",
  name: "Piña",
  emoji: "🍍",
  aliases: ["ananá", "anana", "pineapple"],

  kidney: {
    status: "good",
    statusLabel: "Generalmente favorable",
    summary: "La piña puede formar parte de muchos planes renales en una porción moderada.",
    benefits: "Puede utilizarse como fruta fresca o merienda.",
    warning: "Evita piña en almíbar o jugos con azúcar añadida.",
    portion: "Media taza en trozos."
  },

  liver: {
    status: "good",
    statusLabel: "Buena opción",
    summary: "La piña entera puede incluirse dentro de una alimentación para hígado graso.",
    benefits: "Puede sustituir postres con azúcar añadida.",
    warning: "Prefiere la fruta entera en lugar de jugos concentrados.",
    portion: "Media taza en trozos."
  },

  prostate: {
    status: "good",
    statusLabel: "Puede incluirse",
    summary: "La piña puede formar parte de una alimentación variada.",
    benefits: "Ayuda a aumentar el consumo de frutas.",
    warning: "No sustituye ningún tratamiento médico.",
    portion: "Media taza."
  }
},

{
  id: "papaya",
  name: "Papaya",
  emoji: "🧡",
  aliases: ["papaw"],

  kidney: {
    status: "moderate",
    statusLabel: "Controla la porción",
    summary: "La papaya contiene potasio y puede necesitar control de cantidad en algunos planes renales.",
    benefits: "Aporta fibra y puede utilizarse como fruta fresca.",
    warning: "Consulta la cantidad si tienes potasio elevado.",
    portion: "Media taza aproximadamente."
  },

  liver: {
    status: "good",
    statusLabel: "Buena opción",
    summary: "La papaya puede formar parte de una alimentación para hígado graso.",
    benefits: "Puede utilizarse como fruta o merienda sin azúcar añadida.",
    warning: "Evita combinarla con leche condensada, jarabes o azúcar.",
    portion: "Media taza o una taza pequeña."
  },

  prostate: {
    status: "good",
    statusLabel: "Puede incluirse",
    summary: "La papaya puede formar parte de una alimentación equilibrada.",
    benefits: "Aporta fibra y variedad.",
    warning: "No reemplaza el tratamiento médico.",
    portion: "Media taza o una taza pequeña."
  }
},

{
  id: "mango",
  name: "Mango",
  emoji: "🥭",
  aliases: ["mangos"],

  kidney: {
    status: "moderate",
    statusLabel: "Con moderación",
    summary: "El mango puede aportar potasio y carbohidratos, por lo que conviene controlar la cantidad.",
    benefits: "Puede utilizarse como fruta fresca.",
    warning: "Consulta la cantidad si tienes potasio alto o diabetes.",
    portion: "Media taza en trozos."
  },

  liver: {
    status: "moderate",
    statusLabel: "Controla la cantidad",
    summary: "El mango puede incluirse en una alimentación para hígado graso cuidando la porción.",
    benefits: "Es preferible consumirlo entero y sin azúcar añadida.",
    warning: "Evita jugos, batidos azucarados o porciones muy grandes.",
    portion: "Media taza."
  },

  prostate: {
    status: "good",
    statusLabel: "Puede incluirse",
    summary: "El mango puede formar parte de una alimentación variada.",
    benefits: "Aporta sabor y variedad al consumo de frutas.",
    warning: "No sustituye la atención médica.",
    portion: "Media taza."
  }
},

{
  id: "melon",
  name: "Melón",
  emoji: "🍈",
  aliases: ["cantalupo", "cantaloupe"],

  kidney: {
    status: "caution",
    statusLabel: "Controla la cantidad",
    summary: "El melón puede aportar potasio y bastante líquido.",
    benefits: "Puede consumirse como fruta fresca.",
    warning: "Si tienes restricción de líquidos o potasio alto, consulta la porción.",
    portion: "Una porción pequeña."
  },

  liver: {
    status: "good",
    statusLabel: "Puede incluirse",
    summary: "El melón puede formar parte de una alimentación para hígado graso.",
    benefits: "Puede sustituir postres o bebidas azucaradas.",
    warning: "Evita consumir grandes cantidades de una sola vez.",
    portion: "Una taza pequeña."
  },

  prostate: {
    status: "moderate",
    statusLabel: "Con moderación",
    summary: "El melón puede incluirse, pero aporta bastante agua.",
    benefits: "Es una alternativa a postres procesados.",
    warning: "Evita grandes cantidades por la noche si tienes frecuencia urinaria.",
    portion: "Una taza pequeña."
  }
},

{
  id: "fresas",
  name: "Fresas",
  emoji: "🍓",
  aliases: ["fresa", "frutilla", "strawberry"],

  kidney: {
    status: "good",
    statusLabel: "Generalmente favorable",
    summary: "Las fresas pueden formar parte de muchos planes renales.",
    benefits: "Aportan fibra y pueden utilizarse como fruta fresca.",
    warning: "Evita cubrirlas con azúcar, crema o chocolate.",
    portion: "Media taza o unas seis fresas."
  },

  liver: {
    status: "good",
    statusLabel: "Buena opción",
    summary: "Las fresas pueden formar parte de una alimentación para hígado graso.",
    benefits: "Son preferibles enteras y sin azúcar añadida.",
    warning: "Evita jarabes, crema y postres muy calóricos.",
    portion: "Media taza o unas seis fresas."
  },

  prostate: {
    status: "good",
    statusLabel: "Puede incluirse",
    summary: "Las fresas pueden formar parte de una alimentación equilibrada.",
    benefits: "Ayudan a aumentar el consumo de frutas.",
    warning: "No sustituyen ningún tratamiento médico.",
    portion: "Media taza."
  }
},

{
  id: "arandanos",
  name: "Arándanos",
  emoji: "🫐",
  aliases: ["arándano", "arandano", "blueberries"],

  kidney: {
    status: "good",
    statusLabel: "Generalmente favorable",
    summary: "Los arándanos pueden formar parte de muchos planes renales.",
    benefits: "Aportan fibra y pueden utilizarse como merienda.",
    warning: "Evita versiones secas o preparadas con mucha azúcar.",
    portion: "Media taza."
  },

  liver: {
    status: "good",
    statusLabel: "Buena opción",
    summary: "Los arándanos pueden incluirse en una alimentación para hígado graso.",
    benefits: "Pueden combinarse con avena o yogur natural sin azúcar.",
    warning: "Evita jugos y productos endulzados.",
    portion: "Media taza."
  },

  prostate: {
    status: "good",
    statusLabel: "Puede incluirse",
    summary: "Los arándanos pueden formar parte de una alimentación variada.",
    benefits: "Aportan variedad al consumo de frutas.",
    warning: "No sustituyen la evaluación de síntomas urinarios.",
    portion: "Media taza."
  }
},

{
  id: "durazno",
  name: "Durazno",
  emoji: "🍑",
  aliases: ["melocotón", "melocoton", "peach"],

  kidney: {
    status: "good",
    statusLabel: "Generalmente favorable",
    summary: "El durazno puede formar parte de muchos planes renales.",
    benefits: "Puede utilizarse como fruta fresca o merienda.",
    warning: "Evita versiones en almíbar o con azúcar añadida.",
    portion: "Un durazno pequeño."
  },

  liver: {
    status: "good",
    statusLabel: "Buena opción",
    summary: "El durazno fresco puede incluirse dentro de una alimentación para hígado graso.",
    benefits: "Puede sustituir postres procesados.",
    warning: "Prefiere la fruta entera en lugar del jugo.",
    portion: "Un durazno pequeño."
  },

  prostate: {
    status: "good",
    statusLabel: "Puede incluirse",
    summary: "El durazno puede formar parte de una alimentación equilibrada.",
    benefits: "Ayuda a aumentar el consumo de frutas.",
    warning: "No reemplaza un tratamiento médico.",
    portion: "Un durazno pequeño."
  }
},

{
  id: "ciruela",
  name: "Ciruela",
  emoji: "🟣",
  aliases: ["plum"],

  kidney: {
    status: "moderate",
    statusLabel: "Con moderación",
    summary: "La ciruela puede incluirse en una porción moderada.",
    benefits: "Aporta fibra y puede utilizarse como fruta fresca.",
    warning: "Las ciruelas secas concentran más potasio y azúcar que las frescas.",
    portion: "Una ciruela fresca."
  },

  liver: {
    status: "good",
    statusLabel: "Puede incluirse",
    summary: "La ciruela fresca puede formar parte de una alimentación para hígado graso.",
    benefits: "Puede sustituir postres con azúcar añadida.",
    warning: "Evita grandes cantidades de ciruela seca.",
    portion: "Una o dos ciruelas pequeñas."
  },

  prostate: {
    status: "good",
    statusLabel: "Puede incluirse",
    summary: "La ciruela puede formar parte de una alimentación variada.",
    benefits: "Aporta fibra y variedad.",
    warning: "No sustituye la atención médica.",
    portion: "Una o dos ciruelas pequeñas."
  }
},

{
  id: "naranja",
  name: "Naranja",
  emoji: "🍊",
  aliases: ["china", "orange"],

  kidney: {
    status: "caution",
    statusLabel: "Requiere precaución",
    summary: "La naranja puede aportar una cantidad importante de potasio.",
    benefits: "Aporta vitamina C y puede consumirse fresca en algunas personas.",
    warning: "Si tienes potasio elevado, consulta antes de consumirla con frecuencia. El jugo concentra más fruta.",
    portion: "La cantidad debe ajustarse a tus análisis."
  },

  liver: {
    status: "good",
    statusLabel: "Puede incluirse",
    summary: "La naranja entera puede formar parte de una alimentación para hígado graso.",
    benefits: "Su fibra hace preferible comerla entera en lugar de beber el jugo.",
    warning: "Evita jugos con azúcar añadida.",
    portion: "Una naranja pequeña."
  },

  prostate: {
    status: "good",
    statusLabel: "Puede incluirse",
    summary: "La naranja puede formar parte de una alimentación variada.",
    benefits: "Ayuda a aumentar el consumo de frutas.",
    warning: "Si notas irritación urinaria con cítricos, observa tu tolerancia.",
    portion: "Una naranja pequeña."
  }
},

{
  id: "mandarina",
  name: "Mandarina",
  emoji: "🍊",
  aliases: ["tangerina", "tangerine"],

  kidney: {
    status: "moderate",
    statusLabel: "Controla la porción",
    summary: "La mandarina contiene potasio y su cantidad debe ajustarse en algunos planes renales.",
    benefits: "Puede utilizarse como fruta fresca.",
    warning: "Consulta la cantidad si tienes potasio alto.",
    portion: "Una mandarina pequeña."
  },

  liver: {
    status: "good",
    statusLabel: "Puede incluirse",
    summary: "La mandarina entera puede formar parte de una alimentación para hígado graso.",
    benefits: "Puede sustituir postres con azúcar añadida.",
    warning: "Prefiere la fruta entera y evita jugos.",
    portion: "Una mandarina pequeña."
  },

  prostate: {
    status: "good",
    statusLabel: "Puede incluirse",
    summary: "La mandarina puede formar parte de una alimentación equilibrada.",
    benefits: "Aporta variedad al consumo de frutas.",
    warning: "Observa si los cítricos aumentan molestias urinarias.",
    portion: "Una mandarina pequeña."
  
}}
];


/* =========================================================
   CONFIGURACIÓN VISUAL DE LAS CONDICIONES
   app.js utilizará estos textos y colores.
   ========================================================= */

window.conditionConfig = {
  kidney: {
    key: "kidney",
    name: "Riñón",
    badge: "GUÍA RENAL",
    title: "¿Puedo comer esto?",
    description:
      "Escribe un alimento y conoce qué debes tomar en cuenta si vives con enfermedad renal.",
    color: "#1f7a55"
  },

  liver: {
    key: "liver",
    name: "Hígado graso",
    badge: "GUÍA PARA HÍGADO",
    title: "Cuida tu hígado",
    description:
      "Consulta opciones de alimentación y hábitos generales para apoyar el cuidado del hígado graso.",
    color: "#d67892"
  },

  prostate: {
    key: "prostate",
    name: "Próstata",
    badge: "BIENESTAR MASCULINO",
    title: "Cuida tu próstata",
    description:
      "Consulta información sencilla sobre alimentación y bienestar masculino.",
    color: "#4a86d4"
  }
};


/* =========================================================
   FUNCIÓN PARA NORMALIZAR PALABRAS
   Permite buscar con o sin tildes.
   ========================================================= */

window.normalizeFoodText = function normalizeFoodText(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
};


/* =========================================================
   FUNCIÓN PARA ENCONTRAR UN ALIMENTO
   Busca por nombre completo, inicio del nombre o alias.
   ========================================================= */

window.findFood = function findFood(searchText) {
  const normalizedSearch =
    window.normalizeFoodText(searchText);

  if (!normalizedSearch) {
    return null;
  }

  return window.foodDatabase.find((food) => {
    const normalizedName =
      window.normalizeFoodText(food.name);

    const normalizedAliases =
      food.aliases.map((alias) =>
        window.normalizeFoodText(alias)
      );

    return (
      normalizedName === normalizedSearch ||
      normalizedName.startsWith(normalizedSearch) ||
      normalizedAliases.some(
        (alias) =>
          alias === normalizedSearch ||
          alias.startsWith(normalizedSearch)
      )
    );
  }) || null;
};


/* =========================================================
   FUNCIÓN PARA GENERAR SUGERENCIAS
   ========================================================= */

window.getFoodSuggestions =
  function getFoodSuggestions(searchText, limit = 5) {
    const normalizedSearch =
      window.normalizeFoodText(searchText);

    if (!normalizedSearch) {
      return [];
    }

    return window.foodDatabase
      .filter((food) => {
        const searchableWords = [
          food.name,
          ...food.aliases
        ].map((word) =>
          window.normalizeFoodText(word)
        );

        return searchableWords.some((word) =>
          word.includes(normalizedSearch)
        );
      })
      .slice(0, limit);
  };