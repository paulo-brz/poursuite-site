import type { Content } from './types';

const es: Content = {
  ui: {
    skip: 'Ir al contenido',
    menu: 'Menú',
    close: 'Cerrar',
    services: 'Servicios',
    about: 'Quiénes somos',
    contact: 'Contacto',
    language: 'Idioma',
    home: 'Inicio',
    ctaPrimary: 'Evaluar mi crédito',
    ctaSecondary: 'Cómo trabajamos',
    readMore: 'Más información',
    faqTitle: 'Preguntas frecuentes',
    otherServices: 'Otros servicios',
    footerTagline: 'Gestión y recuperación de activos impagados en Brasil.',
    footerServices: 'Servicios',
    footerCompany: 'Empresa',
    footerContact: 'Contacto',
    legalName: 'Poursuite Investments Consultoria Ltda.',
    cnpj: 'CNPJ (registro fiscal brasileño) 38.425.501/0001-92',
    rights: 'Todos los derechos reservados.',
    privacy: 'Política de privacidad',
    notLawFirm:
      'Poursuite no es un despacho de abogados. Las actuaciones judiciales las llevan los abogados del acreedor o despachos colaboradores en Brasil.',
    breadcrumb: 'Usted está en',
  },

  meta: {
    home: {
      title: 'Poursuite | Cobro de deudas e investigación patrimonial en Brasil',
      description:
        'Gestora de activos impagados con sede en São Paulo. Compramos créditos judiciales, recuperamos deudas a éxito e investigamos el patrimonio de deudores en Brasil.',
    },
    acquisition: {
      title: 'Compra de créditos judiciales en Brasil | Poursuite',
      description:
        'Venda su crédito en ejecución, sentencia u honorarios de condena en Brasil y cobre ahora. Poursuite compra créditos judiciales y carteras de procesos.',
    },
    recovery: {
      title: 'Recuperación de créditos a éxito en Brasil | Poursuite',
      description:
        '¿Ejecución paralizada y deudor “sin bienes”? Investigamos el patrimonio y estructuramos el cobro en Brasil, con honorarios ligados a lo efectivamente recuperado.',
    },
    investigation: {
      title: 'Investigación patrimonial de deudores en Brasil | Poursuite',
      description:
        'Localizamos inmuebles, participaciones societarias, vehículos y créditos de deudores en Brasil, e identificamos ocultación de bienes y fraudes.',
    },
    duediligence: {
      title: 'Due diligence de carteras de crédito en Brasil | Poursuite',
      description:
        'Análisis procesal y patrimonial de carteras de créditos impagados en Brasil para compradores y vendedores: probabilidad de recobro, plazos, riesgos y precio.',
    },
    foreign: {
      title: 'Cobro de deudas en Brasil para acreedores extranjeros | Poursuite',
      description:
        '¿Una empresa o persona en Brasil le debe dinero? Localizamos el patrimonio del deudor y coordinamos el cobro y la ejecución con abogados locales, en español.',
    },
    about: {
      title: 'Quiénes somos | Poursuite',
      description:
        'Gestora de activos impagados de São Paulo, fundada por profesionales de recuperación de créditos, reestructuración de deudas e investigación patrimonial.',
    },
    contact: {
      title: 'Contacto | Poursuite',
      description:
        'Envíenos los datos de su crédito o cartera para su evaluación. Poursuite, Av. Brigadeiro Faria Lima 2369, São Paulo, Brasil.',
    },
    privacy: {
      title: 'Política de privacidad | Poursuite',
      description: 'Cómo trata Poursuite los datos personales recibidos a través de este sitio web.',
    },
    thanks: {
      title: 'Mensaje enviado | Poursuite',
      description: 'Hemos recibido su mensaje.',
    },
  },

  home: {
    h1: 'Recuperación de créditos y activos impagados en Brasil',
    lede:
      'Compramos créditos judiciales, recuperamos deudas con honorarios a éxito y localizamos el patrimonio de deudores que aparentemente no tienen nada a su nombre.',
    trail: {
      title: 'Dónde suele estar el patrimonio de un deudor “sin bienes”',
      execution: 'Ejecución paralizada',
      executionDetail: 'Embargo de cuentas sin saldo',
      debtor: 'Deudor',
      debtorDetail: 'Ningún bien a su nombre',
      nodes: [
        { label: 'Empresa vinculada al deudor', detail: 'Grupo económico' },
        { label: 'Acciones de un holding familiar', detail: 'Levantamiento inverso del velo' },
        { label: 'Inmueble a nombre de un tercero', detail: 'Fraude en la ejecución' },
        { label: 'Herencia no repartida', detail: 'Embargo de la cuota hereditaria' },
      ],
      caption:
        'Ejemplo ilustrativo. En muchas ejecuciones paralizadas el patrimonio existe, pero no está registrado a nombre del deudor.',
    },
    servicesTitle: 'Qué hacemos',
    servicesIntro:
      'Cada crédito requiere un camino distinto. A veces conviene venderlo; otras, recuperarlo. En ambos casos, la primera pregunta es dónde está el patrimonio del deudor.',
    audienceTitle: 'Con quién trabajamos',
    audience: [
      {
        title: 'Acreedores extranjeros',
        text: 'Empresas y particulares a quienes un deudor brasileño debe dinero, con o sin sentencia.',
      },
      {
        title: 'Inversores en crédito brasileño',
        text: 'Fondos y compradores de deuda impagada y activos litigiosos que necesitan análisis y gestión local.',
      },
      {
        title: 'Bancos, fintechs y fondos de crédito',
        text: 'Entidades que quieren vender, valorar o externalizar la recuperación de carteras morosas.',
      },
      {
        title: 'Despachos de abogados',
        text: 'Despachos en Brasil o en el extranjero que necesitan investigación patrimonial en Brasil para sus clientes.',
      },
    ],
    methodTitle: 'Cómo trabajamos',
    methodIntro: 'Todo encargo empieza con el mismo diagnóstico. Solo después definimos con usted la mejor salida.',
    steps: [
      {
        title: 'Análisis del crédito',
        text: 'Revisamos el proceso o el título: importe actualizado, fase, prescripción, garantías, quién responde de la deuda y qué se ha intentado ya.',
      },
      {
        title: 'Investigación patrimonial',
        text: 'Buscamos inmuebles, sociedades, participaciones y movimientos sospechosos del deudor y de personas vinculadas.',
      },
      {
        title: 'Propuesta',
        text: 'Con el mapa del patrimonio, proponemos la vía: compra del crédito, recuperación a éxito o un informe para que actúe su propio equipo.',
      },
      {
        title: 'Ejecución y seguimiento',
        text: 'Coordinamos las medidas con los abogados del caso y enviamos informes periódicos en español hasta el cobro.',
      },
    ],
    insightTitle: 'La información marca la diferencia entre un crédito paralizado y un crédito cobrado',
    insightText: [
      'La mayoría de las ejecuciones no se paralizan por falta de derecho, sino por falta de información sobre el deudor y su patrimonio.',
      'Por eso combinamos el análisis técnico del proceso, la investigación patrimonial apoyada en tecnología y capital propio. Ese conjunto permite ver lo que las búsquedas habituales no muestran y elegir, para cada crédito, el camino con más posibilidades de éxito.',
    ],
    internationalTitle: '¿Una empresa brasileña le debe dinero?',
    internationalText:
      'Trabajamos con empresas, inversores y despachos de fuera de Brasil en español, inglés, francés, italiano y portugués, desde la localización de bienes hasta la ejecución de la deuda.',
    internationalLink: 'Cobro de deudas en Brasil para acreedores extranjeros',
    faq: [
      {
        q: '¿Qué tipos de crédito analiza Poursuite?',
        a: 'Créditos en ejecución, sentencias, títulos ejecutivos (pagarés, cheques, cédulas de crédito bancario y contratos), honorarios de condena en costas y carteras con muchos procesos. Para acreedores extranjeros, también facturas impagadas, sentencias extranjeras y laudos arbitrales contra deudores brasileños.',
      },
      {
        q: '¿Qué diferencia hay entre vender el crédito y la recuperación a éxito?',
        a: 'Si lo vende, recibe un precio ahora y cede el crédito a Poursuite, que asume el riesgo y el tiempo del cobro. En la recuperación a éxito el crédito sigue siendo suyo: investigamos y estructuramos el cobro, y nuestros honorarios son un porcentaje de lo efectivamente cobrado.',
      },
      {
        q: '¿Cuánto cuesta la evaluación inicial?',
        a: 'El primer análisis, para saber si su crédito encaja en alguna de nuestras modalidades, es gratuito. Las investigaciones en profundidad y las due diligence de carteras se presupuestan según el alcance.',
      },
      {
        q: '¿Poursuite es un despacho de abogados?',
        a: 'No. Somos una gestora de activos. Cuando el caso exige actuación judicial, la llevan los abogados del acreedor o despachos colaboradores en Brasil, con quienes trabajamos de forma coordinada.',
      },
      {
        q: '¿La información de mi caso es confidencial?',
        a: 'Sí. Los datos que nos envía se usan solo para el análisis y, cuando es necesario, firmamos un acuerdo de confidencialidad antes de recibir documentos.',
      },
    ],
    finalTitle: '¿Tiene un crédito en Brasil?',
    finalText: 'Envíenos el número de proceso o un resumen de la deuda. Le diremos si podemos ayudarle y cómo.',
  },

  services: {
    acquisition: {
      name: 'Compra de créditos judiciales',
      summary:
        'Compramos su crédito judicial, sentencia o título ejecutivo en Brasil y pagamos ahora, asumiendo el riesgo y el tiempo del cobro.',
      h1: 'Compra de créditos judiciales y carteras de procesos en Brasil',
      lede:
        'Una ejecución en Brasil puede durar años. Si prefiere no esperar, puede vender su crédito. Poursuite compra créditos judiciales y extrajudiciales y paga al formalizar la cesión.',
      forWhomTitle: 'Para quién',
      forWhom: [
        'Empresas y particulares con un crédito en ejecución en Brasil',
        'Abogados con honorarios de condena en costas por cobrar',
        'Bancos, fintechs y fondos de crédito que venden carteras o lotes',
        'Acreedores que prefieren liquidez inmediata a un cobro incierto',
      ],
      sections: [
        {
          h2: 'Cómo funciona la cesión',
          paras: [
            'La venta se hace mediante cesión de crédito, regulada en los artículos 286 a 298 del Código Civil brasileño. El acreedor transmite a Poursuite el derecho a cobrar la deuda, y Poursuite pasa a ocupar su lugar en el proceso.',
            'El Código de Proceso Civil brasileño permite al cesionario continuar la ejecución sin el consentimiento del deudor (art. 778). Para quien vende, el asunto termina ahí: recibe el precio y desaparecen los costes y riesgos del cobro.',
          ],
        },
        {
          h2: 'Qué compramos',
          bullets: [
            'Créditos en ejecución de sentencias o de títulos ejecutivos',
            'Pagarés, cheques, cédulas de crédito bancario (CCB) y contratos impagados',
            'Honorarios de condena en costas a favor de abogados',
            'Lotes y carteras de procesos de entidades financieras y empresas',
          ],
        },
        {
          h2: 'Cómo fijamos el precio',
          paras: [
            'El precio depende de la probabilidad real de cobro, no solo del importe de la deuda. Antes de ofertar analizamos el proceso, la solvencia de los deudores, los bienes y créditos embargables, los riesgos de prescripción y nulidad y el plazo probable de cobro.',
            'Por eso un crédito que parece perdido puede valer más de lo esperado, cuando nuestra investigación encuentra patrimonio que aún no ha aparecido en el proceso.',
          ],
        },
        {
          h2: 'Etapas',
          bullets: [
            'Usted nos envía el número de proceso o los documentos del crédito',
            'Hacemos el análisis procesal y patrimonial',
            'Presentamos una oferta de compra',
            'Firmamos la cesión, pagamos y solicitamos la sucesión procesal',
          ],
        },
      ],
      faq: [
        {
          q: '¿Necesito autorización del deudor para vender el crédito?',
          a: 'No. En Brasil la cesión no requiere el acuerdo del deudor; basta con notificarle. En el proceso, la sustitución del acreedor tampoco requiere su consentimiento.',
        },
        {
          q: '¿Compran solo una parte del crédito?',
          a: 'Podemos estudiar compras parciales o estructuras en las que el acreedor conserva una participación en el resultado, caso por caso.',
        },
        {
          q: '¿En cuánto tiempo recibo la oferta?',
          a: 'Depende de la información disponible y del número de procesos. Para un crédito individual con el expediente accesible, el primer análisis suele ser rápido; las carteras requieren más tiempo.',
        },
      ],
      ctaTitle: '¿Quiere saber cuánto vale su crédito?',
      ctaText: 'Envíenos el número de proceso. El primer análisis es gratuito.',
    },

    recovery: {
      name: 'Recuperación a éxito',
      summary:
        'El crédito sigue siendo suyo. Investigamos el patrimonio, estructuramos el cobro con los abogados del caso y cobramos sobre lo efectivamente recuperado.',
      h1: 'Recuperación de créditos a éxito en Brasil',
      lede:
        'Para ejecuciones paralizadas, deudores que han vaciado su patrimonio y cobros que ya nadie sigue. Usted conserva el crédito, y Poursuite solo gana si usted cobra.',
      forWhomTitle: 'Para quién',
      forWhom: [
        'Acreedores con la ejecución suspendida por falta de bienes',
        'Empresas con créditos judiciales antiguos sin seguimiento activo',
        'Acreedores que sospechan ocultación de bienes o fraude',
        'Despachos que buscan un socio de investigación en Brasil',
      ],
      sections: [
        {
          h2: 'Por qué se paralizan tantas ejecuciones en Brasil',
          paras: [
            'La mayoría de las ejecuciones no fracasa por falta de derecho, sino por falta de información. Tras las búsquedas automáticas (embargo de cuentas, registro de vehículos y declaraciones de renta), muchos procesos se suspenden y avanzan hacia la prescripción intercurrente (art. 921 del Código de Proceso Civil).',
            'Pero el patrimonio rara vez desaparece. Suele estar en una empresa familiar, a nombre de parientes o en una herencia aún no repartida.',
          ],
        },
        {
          h2: 'Qué hacemos',
          bullets: [
            'Revisión del proceso y de los intentos de embargo anteriores',
            'Investigación patrimonial del deudor, de sus socios y de personas y empresas vinculadas',
            'Identificación de fraudes en la ejecución, fraudes a acreedores y abuso de la personalidad jurídica',
            'Estrategia procesal con los abogados del caso, incluido el incidente de levantamiento del velo societario (arts. 133 a 137 del Código de Proceso Civil)',
            'Informes periódicos sobre cada avance y la próxima medida',
          ],
        },
        {
          h2: 'Cómo son los honorarios',
          paras: [
            'Los honorarios de Poursuite son un porcentaje del importe efectivamente recuperado, fijado por contrato según el tamaño del crédito, la fase del proceso y el trabajo necesario. Por regla general no hay honorarios fijos.',
            'Los honorarios de abogados y las costas procesales se regulan en el mismo contrato, con transparencia, antes de empezar.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Y si no se recupera nada?',
          a: 'En la modalidad a éxito, Poursuite no cobra si no hay recuperación. El tratamiento de las posibles costas se acuerda por escrito antes de empezar.',
        },
        {
          q: '¿Tengo que cambiar de abogado?',
          a: 'No necesariamente. Podemos trabajar con el abogado que ya lleva el proceso o presentarle despachos colaboradores en Brasil.',
        },
        {
          q: 'Mi proceso está archivado. ¿Todavía se puede recuperar?',
          a: 'Depende del tiempo de suspensión y del cómputo de la prescripción. Por eso el primer paso es siempre analizar el proceso, que nos dirá si aún hay camino.',
        },
      ],
      ctaTitle: '¿Su ejecución está paralizada?',
      ctaText: 'Envíenos el número de proceso y compruebe si encaja en la recuperación a éxito.',
    },

    investigation: {
      name: 'Investigación patrimonial',
      summary:
        'Localizamos inmuebles, sociedades, participaciones, vehículos y créditos de deudores en Brasil, e identificamos ocultación de bienes y fraudes.',
      h1: 'Investigación patrimonial y localización de bienes de deudores en Brasil',
      lede:
        'Antes de demandar, comprar o vender una deuda, hay que saber qué tiene el deudor y dónde. Hacemos investigaciones patrimoniales de personas y empresas en Brasil para acreedores, despachos e inversores.',
      forWhomTitle: 'Cuándo contratarla',
      forWhom: [
        'El embargo de cuentas y las búsquedas habituales no dieron resultado',
        'Hay indicios de que el deudor transfirió bienes a familiares o a sociedades',
        'Va a demandar y quiere saber si el demandado puede pagar',
        'Está evaluando la compra de un crédito o de una cartera',
      ],
      sections: [
        {
          h2: 'Qué investigamos',
          bullets: [
            'Inmuebles del deudor, de su cónyuge, de parientes y de sociedades vinculadas',
            'Participaciones societarias, holdings familiares y cambios societarios recientes',
            'Vehículos, embarcaciones y aeronaves',
            'Vínculos entre personas y empresas que indiquen grupo económico o testaferros',
            'Transferencias y operaciones que puedan constituir fraude a acreedores',
          ],
        },
        {
          h2: 'Fuentes y método',
          paras: [
            'Trabajamos con fuentes públicas y lícitas: registros de la propiedad, registros mercantiles, bases de datos judiciales, boletines oficiales, notarías y registros públicos. Las cruzamos con herramientas tecnológicas para descubrir relaciones que una búsqueda aislada no muestra.',
            'Cuando la información está protegida por secreto bancario o fiscal, indicamos las medidas que el abogado puede solicitar al juez, como SISBAJUD, INFOJUD o SNIPER, el sistema nacional de investigación patrimonial del Consejo Nacional de Justicia de Brasil (CNJ).',
          ],
        },
        {
          h2: 'El informe',
          paras: [
            'Recibe un informe con los bienes y vínculos encontrados, la fuente de cada dato, la evaluación de lo que es embargable y las medidas judiciales recomendadas para cada hallazgo, en español y listo para su equipo jurídico.',
          ],
        },
      ],
      faq: [
        {
          q: '¿La investigación es legal?',
          a: 'Sí. Usamos solo fuentes públicas, bases de datos de acceso permitido e información de procesos judiciales. No accedemos a datos protegidos sin orden judicial.',
        },
        {
          q: '¿Investigan empresas y personas físicas?',
          a: 'Sí, y en la mayoría de los casos ambas: la empresa deudora, sus socios y las personas y empresas vinculadas.',
        },
        {
          q: '¿Cuánto tarda el informe?',
          a: 'Depende del número de personas investigadas y de la complejidad del grupo. Le indicamos el plazo junto con el presupuesto.',
        },
      ],
      ctaTitle: '¿Necesita localizar bienes de un deudor en Brasil?',
      ctaText: 'Cuéntenos el caso. Le enviaremos el alcance y el presupuesto.',
    },

    duediligence: {
      name: 'Due diligence de carteras',
      summary:
        'Analizamos carteras de créditos impagados en Brasil, proceso a proceso, para compradores y vendedores: probabilidad de recobro, plazos, riesgos y precio.',
      h1: 'Due diligence y valoración de carteras de crédito en Brasil',
      lede:
        'Quien compra o vende una cartera de créditos impagados en Brasil necesita saber qué está negociando. Analizamos cada proceso y cada deudor para llegar a un precio defendible.',
      forWhomTitle: 'Para quién',
      forWhom: [
        'Inversores y fondos que compran deuda impagada brasileña',
        'Bancos, fintechs y fondos de crédito que preparan la venta de carteras',
        'Empresas que quieren valorar su cartera de cobro judicial',
        'Gestores que necesitan priorizar dónde invertir el esfuerzo de recobro',
      ],
      sections: [
        {
          h2: 'Qué analizamos',
          bullets: [
            'Situación procesal de cada caso: fase, emplazamiento, embargos, recursos y plazos',
            'Riesgos de prescripción, nulidades y defensas pendientes',
            'Solvencia y patrimonio localizable de deudores y codeudores',
            'Garantías existentes y su eficacia',
            'Estimación del importe recuperable y del plazo de cobro',
          ],
        },
        {
          h2: 'Clasificación y precio',
          paras: [
            'Cada crédito se clasifica por probabilidad y plazo de recuperación. El resultado muestra dónde está el valor de la cartera, qué casos merecen esfuerzo inmediato y cuáles conviene descartar o vender.',
            'Para el comprador, orienta la oferta. Para el vendedor, permite separar lotes y negociar con datos, no solo con el valor nominal.',
          ],
        },
        {
          h2: 'Entregables',
          bullets: [
            'Hoja de cálculo con el análisis de cada proceso y deudor',
            'Informe ejecutivo con la clasificación de la cartera y la estimación de recobro',
            'Recomendación de estrategia y de precio',
          ],
        },
      ],
      faq: [
        {
          q: '¿Hay un tamaño mínimo de cartera?',
          a: 'No hay un mínimo estricto. Analizamos desde lotes pequeños hasta grandes carteras, con alcance y plazo ajustados al volumen.',
        },
        {
          q: '¿Puede Poursuite comprar la cartera después del análisis?',
          a: 'Sí. En algunos casos la due diligence es el primer paso de una oferta por parte o la totalidad de la cartera.',
        },
        {
          q: '¿Cómo se protegen los datos de la cartera?',
          a: 'Firmamos un acuerdo de confidencialidad antes de recibir la base y usamos los datos solo para el análisis contratado.',
        },
      ],
      ctaTitle: '¿Va a comprar o vender una cartera en Brasil?',
      ctaText: 'Hablemos de volumen, tipo de crédito y plazos.',
    },

    foreign: {
      name: 'Cobro de deudas en Brasil',
      summary:
        'Para empresas e inversores de fuera de Brasil: localizamos el patrimonio del deudor brasileño y coordinamos el cobro con abogados locales.',
      h1: 'Cobro de deudas en Brasil para acreedores extranjeros',
      lede:
        '¿Un cliente, socio o deudor brasileño le debe dinero a su empresa? Le ayudamos a entender sus posibilidades de cobro, localizar el patrimonio del deudor y reclamar en Brasil, con todo explicado en español.',
      forWhomTitle: 'Para quién',
      forWhom: [
        'Exportadores y proveedores con facturas impagadas por clientes brasileños',
        'Acreedores con una sentencia o un laudo arbitral extranjero contra un deudor en Brasil',
        'Inversores extranjeros en deuda impagada brasileña',
        'Despachos de otros países que necesitan apoyo local en Brasil',
      ],
      sections: [
        {
          h2: 'Las vías para cobrar en Brasil',
          paras: [
            'Una sentencia extranjera debe ser homologada por el Superior Tribunal de Justicia de Brasil (STJ) antes de ejecutarse en el país. Lo mismo ocurre con los laudos arbitrales extranjeros, que se reconocen conforme a la Convención de Nueva York, de la que Brasil es parte.',
            'Los contratos y títulos de crédito pueden, en muchos casos, reclamarse directamente ante los tribunales brasileños, sin un proceso previo en el extranjero. La vía adecuada depende de los documentos que tenga y de dónde esté el patrimonio del deudor.',
          ],
        },
        {
          h2: 'Cómo le ayudamos',
          bullets: [
            'Evaluación preliminar del crédito y de la documentación',
            'Investigación patrimonial del deudor en Brasil',
            'Coordinación con despachos brasileños para la homologación, el cobro y la ejecución',
            'Informes periódicos en español durante todo el proceso',
            'Compra del crédito, cuando el acreedor prefiere cerrar el asunto y cobrar ahora',
          ],
        },
        {
          h2: 'Por qué importa conocer el terreno',
          paras: [
            'La ejecución en Brasil se apoya en sistemas judiciales para bloquear cuentas y localizar bienes, y en procedimientos, como el levantamiento del velo societario, que funcionan de forma distinta a los de otros países. Saber dónde buscar y qué pedir al juez marca la diferencia entre un crédito que se paraliza y uno que se cobra.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Tengo que demandar en mi país antes de cobrar en Brasil?',
          a: 'No siempre. Según los documentos, el cobro puede iniciarse directamente en Brasil. Analizamos el caso y le indicamos la vía más corta.',
        },
        {
          q: '¿Hay que traducir los documentos?',
          a: 'Los documentos en idioma extranjero presentados ante los tribunales brasileños requieren traducción jurada al portugués. Le ayudamos a organizar lo necesario.',
        },
        {
          q: '¿En qué idiomas trabajan?',
          a: 'Español, inglés, francés, italiano y portugués.',
        },
      ],
      ctaTitle: '¿Le deben dinero en Brasil?',
      ctaText: 'Envíenos un resumen del caso en español.',
    },
  },

  about: {
    h1: 'Quiénes somos',
    lede:
      'Poursuite es una gestora de activos impagados con sede en São Paulo, Brasil, fundada por profesionales con experiencia en recuperación de créditos, reestructuración de deudas e investigación patrimonial.',
    sections: [
      {
        h2: 'Nuestro nombre',
        paras: [
          'Poursuite significa en francés persecución, búsqueda, y también la continuación de una acción judicial. Es lo que hacemos: seguimos el crédito hasta el final, incluso cuando todos los demás lo han dado por perdido.',
        ],
      },
      {
        h2: 'Cómo trabajamos',
        paras: [
          'Funcionamos como una boutique: pocos casos a la vez, analizados en profundidad, por un equipo que conoce tanto el proceso judicial brasileño como el mercado de crédito impagado.',
          'Combinamos tres cosas que rara vez van juntas: lectura técnica del proceso, investigación patrimonial apoyada en tecnología y capital propio para comprar créditos. Por eso podemos ofrecer al acreedor más de una salida para el mismo problema.',
          'No somos un despacho de abogados. Cuando el caso exige actuación judicial, trabajamos con los abogados del acreedor o con despachos colaboradores.',
        ],
      },
    ],
    principlesTitle: 'Misión, visión y valores',
    principles: [
      {
        title: 'Misión',
        text: 'Transformar conocimiento e información en resultados financieros para nuestros clientes y socios.',
      },
      {
        title: 'Visión',
        text: 'Ser referencia en gestión, estrategia y recuperación de activos considerados irrecuperables.',
      },
      {
        title: 'Valores',
        text: 'Ética, respeto, transparencia y confidencialidad, con un trabajo eficiente y de alto valor añadido.',
      },
    ],
  },

  contact: {
    h1: 'Contacto',
    lede:
      'Cuéntenos de qué crédito o cartera se trata. Si lo tiene, incluya el número del proceso en Brasil: con él podemos hacer el primer análisis más rápido.',
    formTitle: 'Envíenos un mensaje',
    name: 'Nombre',
    email: 'Correo electrónico',
    company: 'Empresa (opcional)',
    phone: 'Teléfono o WhatsApp (opcional)',
    profile: 'Usted es',
    profiles: [
      'Acreedor extranjero',
      'Acreedor con un crédito judicial en Brasil',
      'Banco, fintech o fondo de crédito',
      'Abogado o despacho',
      'Inversor',
      'Otro',
    ],
    message: 'Mensaje',
    messageHint: 'Ej.: importe aproximado, número de proceso, tipo de deuda, ubicación del deudor.',
    consent: 'Acepto que mis datos se utilicen para responder a esta consulta.',
    submit: 'Enviar mensaje',
    sending: 'Enviando…',
    error: 'No se pudo enviar el mensaje. Inténtelo de nuevo o escriba a contato@poursuite.com.br.',
    directTitle: 'Contacto directo',
    emailLabel: 'Correo electrónico',
    addressLabel: 'Dirección',
    address: 'Av. Brigadeiro Faria Lima, 2369, cj. 1102\nJardim Paulistano, São Paulo/SP\n01452-922, Brasil',
    confidentiality: 'La información que nos envíe se trata de forma confidencial y solo se usa para evaluar su caso.',
  },

  privacy: {
    h1: 'Política de privacidad',
    updated: 'Actualizada en noviembre de 2026.',
    sections: [
      {
        h2: 'Responsable del tratamiento',
        paras: [
          'Poursuite Investments Consultoria Ltda., CNPJ 38.425.501/0001-92, Av. Brigadeiro Faria Lima, 2369, cj. 1102, Jardim Paulistano, São Paulo/SP, 01452-922, Brasil. Consultas sobre privacidad: contato@poursuite.com.br.',
        ],
      },
      {
        h2: 'Qué datos recogemos',
        paras: [
          'Solo recogemos los datos que nos envía mediante el formulario de contacto o por correo electrónico: nombre, correo, teléfono, empresa y la información que incluya en su mensaje.',
          'Este sitio no utiliza cookies publicitarias ni herramientas de seguimiento de terceros. Podemos usar estadísticas de visitas agregadas y no identificativas proporcionadas por nuestra infraestructura de alojamiento.',
        ],
      },
      {
        h2: 'Para qué los usamos',
        paras: [
          'Usamos sus datos para responder a su consulta, evaluar el crédito o caso planteado y, si nos contrata, ejecutar el contrato. Las bases jurídicas son su consentimiento y la aplicación de medidas precontractuales, conforme a la Ley General de Protección de Datos de Brasil (Ley 13.709/2018, LGPD) y, cuando sea aplicable, el Reglamento General de Protección de Datos de la UE (RGPD).',
        ],
      },
      {
        h2: 'Con quién los compartimos',
        paras: [
          'No vendemos datos. Solo los compartimos con los proveedores necesarios para el funcionamiento del sitio y del correo y, con su autorización, con los abogados que actuarán en su caso.',
        ],
      },
      {
        h2: 'Transferencias internacionales',
        paras: [
          'Poursuite tiene su sede en Brasil, por lo que los datos que envíe desde el extranjero se tratan en Brasil y por nuestros proveedores de alojamiento y correo, que pueden almacenarlos en otros países con las garantías adecuadas.',
        ],
      },
      {
        h2: 'Cuánto tiempo los conservamos',
        paras: [
          'Conservamos los datos el tiempo necesario para atender su consulta y, si nos contrata, durante el plazo exigido por la ley. Después se eliminan.',
        ],
      },
      {
        h2: 'Sus derechos',
        paras: [
          'Puede solicitar la confirmación del tratamiento, el acceso, la rectificación, la anonimización, la portabilidad o la supresión de sus datos, y retirar su consentimiento, escribiendo a contato@poursuite.com.br. También puede reclamar ante la Autoridad Nacional de Protección de Datos de Brasil (ANPD) o ante la autoridad de control de su país.',
        ],
      },
    ],
  },

  thanks: {
    h1: 'Mensaje enviado',
    text: 'Hemos recibido su mensaje y le responderemos al correo electrónico indicado.',
    back: 'Volver al inicio',
  },

  notFound: {
    title: 'Página no encontrada',
    text: 'Es posible que la dirección haya cambiado con la nueva versión del sitio.',
    back: 'Ir al inicio',
  },
};

export default es;
