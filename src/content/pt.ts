import type { Content } from './types';

const pt: Content = {
  ui: {
    skip: 'Pular para o conteúdo',
    menu: 'Menu',
    close: 'Fechar',
    services: 'Serviços',
    about: 'Quem somos',
    insights: 'Conteúdos',
    contact: 'Contato',
    language: 'Idioma',
    home: 'Início',
    ctaPrimary: 'Avaliar meu crédito',
    ctaSecondary: 'Como trabalhamos',
    readMore: 'Saiba mais',
    faqTitle: 'Perguntas frequentes',
    otherServices: 'Outros serviços',
    footerTagline: 'Gestão e recuperação de ativos inadimplidos.',
    footerServices: 'Serviços',
    footerCompany: 'Empresa',
    footerContact: 'Contato',
    legalName: 'Poursuite Investments Consultoria Ltda.',
    cnpj: 'CNPJ 38.425.501/0001-92',
    rights: 'Todos os direitos reservados.',
    privacy: 'Política de privacidade',
    notLawFirm:
      'A Poursuite não é escritório de advocacia. A atuação judicial é conduzida por advogados constituídos pelo credor ou por escritórios parceiros.',
    breadcrumb: 'Você está em',
  },

  meta: {
    home: {
      title: 'Poursuite | Compra de créditos judiciais e recuperação de ativos',
      description:
        'Gestora de ativos inadimplidos em São Paulo: compramos créditos judiciais, recuperamos dívidas por êxito e localizamos bens de devedores.',
    },
    acquisition: {
      title: 'Compra de créditos judiciais e carteiras de processos | Poursuite',
      description:
        'Venda seu crédito em execução ou cumprimento de sentença e receba agora. A Poursuite compra créditos judiciais, honorários de sucumbência e carteiras de processos.',
    },
    recovery: {
      title: 'Recuperação de créditos por êxito | Poursuite',
      description:
        'Execução parada e devedor “sem bens”? A Poursuite investiga o patrimônio e estrutura a recuperação, com remuneração vinculada ao valor efetivamente recuperado.',
    },
    investigation: {
      title: 'Investigação patrimonial e localização de bens | Poursuite',
      description:
        'Localizamos imóveis, participações societárias, veículos e créditos do devedor em outros processos, e identificamos fraudes e blindagem patrimonial.',
    },
    duediligence: {
      title: 'Due diligence e precificação de carteiras de crédito | Poursuite',
      description:
        'Análise processual e patrimonial de carteiras de créditos inadimplidos para quem compra ou vende: chance de recuperação, prazos, riscos e preço.',
    },
    foreign: {
      title: 'Credores estrangeiros: cobrança de dívidas no Brasil | Poursuite',
      description:
        'Empresas e credores de fora do Brasil: localizamos o patrimônio do devedor brasileiro e coordenamos a cobrança e a execução com advogados locais.',
    },
    about: {
      title: 'Quem somos | Poursuite',
      description:
        'A Poursuite é uma gestora de ativos inadimplidos formada por profissionais de recuperação de créditos, reestruturação de dívidas e investigação patrimonial.',
    },
    contact: {
      title: 'Contato | Poursuite',
      description:
        'Envie os dados do seu crédito ou da sua carteira para avaliação. Poursuite, Av. Brigadeiro Faria Lima, 2369, São Paulo/SP.',
    },
    privacy: {
      title: 'Política de privacidade | Poursuite',
      description: 'Como a Poursuite trata os dados pessoais recebidos pelo site, nos termos da LGPD.',
    },
    thanks: {
      title: 'Mensagem enviada | Poursuite',
      description: 'Recebemos sua mensagem.',
    },
  },

  home: {
    h1: 'Recuperação de créditos e ativos inadimplidos',
    lede:
      'Compramos créditos judiciais, recuperamos dívidas com remuneração por êxito e localizamos o patrimônio de devedores que parecem não ter nada em seu nome.',
    trail: {
      title: 'Como um devedor “sem bens” costuma ter patrimônio',
      execution: 'Execução suspensa',
      executionDetail: 'Penhora on-line negativa',
      debtor: 'Devedor',
      debtorDetail: 'Nenhum bem em nome próprio',
      nodes: [
        { label: 'Crédito em outro processo', detail: 'Penhora no rosto dos autos' },
        { label: 'Quotas de holding familiar', detail: 'Desconsideração inversa' },
        { label: 'Imóvel em nome de terceiro', detail: 'Fraude à execução' },
        { label: 'Herança não partilhada', detail: 'Penhora do quinhão' },
      ],
      caption:
        'Exemplo ilustrativo. Em boa parte das execuções paradas, o patrimônio existe, mas não está no CPF ou no CNPJ do devedor.',
    },
    servicesTitle: 'O que fazemos',
    servicesIntro:
      'Cada crédito pede um caminho diferente. Às vezes faz sentido vendê-lo; às vezes, recuperá-lo; quase sempre, antes de decidir, é preciso saber onde está o patrimônio do devedor.',
    audienceTitle: 'Com quem trabalhamos',
    audience: [
      {
        title: 'Credores com execuções paradas',
        text: 'Empresas e pessoas com sentença ou título executivo que não conseguem encontrar bens do devedor.',
      },
      {
        title: 'Bancos, fintechs, FIDCs e securitizadoras',
        text: 'Instituições que querem vender, precificar ou terceirizar a recuperação de carteiras inadimplidas.',
      },
      {
        title: 'Escritórios de advocacia',
        text: 'Advogados que precisam de investigação patrimonial para seus clientes ou querem vender honorários de sucumbência.',
      },
      {
        title: 'Investidores e credores estrangeiros',
        text: 'Quem compra créditos no Brasil ou tem valores a receber de devedores brasileiros.',
      },
    ],
    methodTitle: 'Como trabalhamos',
    methodIntro: 'Todo trabalho começa pelo mesmo diagnóstico, e só depois definimos com você a melhor saída.',
    steps: [
      {
        title: 'Análise do crédito',
        text: 'Lemos o processo ou o título: valor atualizado, fase, prescrição, garantias, quem responde pela dívida e o que já foi tentado.',
      },
      {
        title: 'Investigação patrimonial',
        text: 'Pesquisamos bens, empresas, participações, créditos em outras ações e movimentações suspeitas do devedor e de pessoas ligadas a ele.',
      },
      {
        title: 'Proposta',
        text: 'Com o mapa do patrimônio em mãos, apresentamos a alternativa: compra do crédito, recuperação por êxito ou relatório para sua equipe agir.',
      },
      {
        title: 'Execução e acompanhamento',
        text: 'Coordenamos as medidas com os advogados do caso e enviamos relatórios periódicos até o recebimento.',
      },
    ],
    insightTitle: 'A informação faz a diferença entre um crédito parado e um crédito recebido',
    insightText: [
      'A maior parte das execuções não para por falta de direito, e sim por falta de informação sobre o devedor e o seu patrimônio.',
      'Por isso combinamos leitura técnica do processo, investigação patrimonial apoiada em tecnologia e capital próprio. Esse conjunto permite enxergar o que as pesquisas de rotina não mostram e escolher, para cada crédito, o caminho com mais chance de resultado.',
    ],
    internationalTitle: 'Credor estrangeiro com valores a receber no Brasil?',
    internationalText:
      'Atendemos empresas e investidores de outros países em português, inglês, espanhol, francês e italiano, da localização de bens à execução da dívida.',
    internationalLink: 'Recuperação de créditos para credores estrangeiros',
    faq: [
      {
        q: 'Que tipos de crédito a Poursuite analisa?',
        a: 'Créditos em execução ou cumprimento de sentença, títulos executivos extrajudiciais (como notas promissórias, cheques, cédulas de crédito bancário e contratos), honorários de sucumbência e carteiras com vários processos.',
      },
      {
        q: 'Qual a diferença entre vender o crédito e a recuperação por êxito?',
        a: 'Na venda, você recebe um valor agora e transfere o crédito para a Poursuite, que assume o risco e o tempo da cobrança. Na recuperação por êxito, o crédito continua seu: nós investigamos e estruturamos a cobrança, e a remuneração é um percentual do que for efetivamente recebido.',
      },
      {
        q: 'Quanto custa a avaliação de um crédito?',
        a: 'A primeira análise, para dizer se o crédito se encaixa em uma das nossas modalidades, não tem custo. Investigações aprofundadas e due diligence de carteiras são orçadas conforme o escopo.',
      },
      {
        q: 'A Poursuite é um escritório de advocacia?',
        a: 'Não. Somos uma gestora de ativos. Quando o caso exige atuação judicial, ela é conduzida pelos advogados do credor ou por escritórios parceiros, com quem trabalhamos de forma coordenada.',
      },
      {
        q: 'As informações do meu caso ficam em sigilo?',
        a: 'Sim. Os dados recebidos são usados apenas para a análise e, quando necessário, assinamos acordo de confidencialidade antes de receber documentos.',
      },
    ],
    finalTitle: 'Tem um crédito parado?',
    finalText:
      'Envie o número do processo ou um resumo da dívida. Respondemos dizendo se e como podemos ajudar.',
  },

  services: {
    acquisition: {
      name: 'Compra de créditos judiciais',
      summary:
        'Compramos seu crédito em execução, cumprimento de sentença ou título extrajudicial e pagamos agora, assumindo o risco e o tempo da cobrança.',
      h1: 'Compra de créditos judiciais e carteiras de processos',
      lede:
        'Se você não quer esperar anos pelo fim de uma execução, pode vender o seu crédito. A Poursuite compra créditos judiciais e extrajudiciais e paga na formalização da cessão.',
      forWhomTitle: 'Para quem é',
      forWhom: [
        'Empresas e pessoas com crédito em execução ou cumprimento de sentença',
        'Advogados com honorários de sucumbência a receber',
        'Bancos, fintechs, FIDCs e securitizadoras que querem vender lotes ou carteiras',
        'Credores que preferem liquidez imediata a um recebimento incerto',
      ],
      sections: [
        {
          h2: 'Como funciona a cessão do crédito',
          paras: [
            'A venda é feita por cessão de crédito, prevista nos artigos 286 a 298 do Código Civil. O credor transfere à Poursuite o direito de receber a dívida, e a Poursuite passa a ocupar o lugar dele no processo.',
            'O Código de Processo Civil permite que o cessionário prossiga na execução, sem necessidade de consentimento do devedor (art. 778, § 1º, III, e § 2º). Para quem vende, o processo termina ali: o valor é recebido e os custos e riscos da cobrança deixam de existir.',
          ],
        },
        {
          h2: 'O que compramos',
          bullets: [
            'Créditos em execução de título extrajudicial e em cumprimento de sentença',
            'Notas promissórias, cheques, cédulas de crédito bancário e contratos inadimplidos',
            'Honorários de sucumbência fixados em favor de advogados',
            'Lotes e carteiras de processos de instituições financeiras e empresas',
          ],
        },
        {
          h2: 'Como definimos o preço',
          paras: [
            'O preço depende da chance real de recebimento, não apenas do valor da dívida. Antes de fazer a proposta, analisamos o processo, a solvência dos devedores, a existência de bens e créditos penhoráveis, os riscos de prescrição e nulidade e o tempo provável até o recebimento.',
            'Por isso, um crédito que parece perdido pode ter preço melhor do que se imagina, quando a nossa investigação encontra patrimônio que ainda não apareceu no processo.',
          ],
        },
        {
          h2: 'Etapas',
          bullets: [
            'Você envia o número do processo ou os documentos do crédito',
            'Fazemos a análise processual e patrimonial',
            'Apresentamos a proposta de compra',
            'Assinamos o contrato de cessão, pagamos e peticionamos a substituição no processo',
          ],
        },
      ],
      faq: [
        {
          q: 'Preciso de autorização do devedor para vender o crédito?',
          a: 'Não. A cessão não depende de concordância do devedor; ele apenas precisa ser notificado (art. 290 do Código Civil). No processo, a substituição do credor também dispensa o consentimento do executado.',
        },
        {
          q: 'Vocês compram apenas parte do crédito?',
          a: 'Podemos estudar a compra parcial ou estruturas em que o credor mantém uma participação no resultado. Isso é definido caso a caso.',
        },
        {
          q: 'Em quanto tempo recebo a proposta?',
          a: 'Depende do volume de informações e do número de processos. Para um crédito individual com o processo disponível, a análise inicial costuma ser rápida; carteiras exigem mais tempo.',
        },
      ],
      ctaTitle: 'Quer saber quanto vale o seu crédito?',
      ctaText: 'Envie o número do processo. Fazemos a primeira análise sem custo.',
    },

    recovery: {
      name: 'Recuperação por êxito',
      summary:
        'O crédito continua seu. Investigamos o patrimônio, estruturamos a cobrança com os advogados do caso e somos remunerados pelo que for efetivamente recuperado.',
      h1: 'Recuperação de créditos com remuneração por êxito',
      lede:
        'Para execuções paradas, devedores que esvaziaram o patrimônio e cobranças que ninguém mais acompanha. Você mantém o crédito, e a Poursuite só ganha se você receber.',
      forWhomTitle: 'Para quem é',
      forWhom: [
        'Credores com execução suspensa por falta de bens',
        'Empresas com créditos judiciais antigos e sem acompanhamento ativo',
        'Credores que suspeitam de ocultação de patrimônio ou fraude',
        'Escritórios que querem um parceiro de investigação para seus casos',
      ],
      sections: [
        {
          h2: 'Por que tantas execuções param',
          paras: [
            'A maior parte das execuções não termina por falta de direito, e sim por falta de informação. Depois das pesquisas automáticas (bloqueio de contas, veículos e declarações de renda), muitos processos são suspensos e caminham para a prescrição intercorrente (art. 921 do CPC).',
            'O patrimônio, porém, raramente desaparece. Ele costuma estar em uma empresa da família, em nome de parentes, em um crédito que o devedor tem a receber em outra ação ou em uma herança ainda não partilhada.',
          ],
        },
        {
          h2: 'O que fazemos',
          bullets: [
            'Revisão do processo e do histórico de tentativas de penhora',
            'Investigação patrimonial do devedor, de sócios e de pessoas e empresas ligadas',
            'Busca de créditos do devedor em outros processos, para penhora no rosto dos autos (art. 860 do CPC)',
            'Identificação de fraude à execução, fraude contra credores e uso abusivo de pessoa jurídica',
            'Estratégia de medidas judiciais junto aos advogados do caso, incluindo o incidente de desconsideração da personalidade jurídica (arts. 133 a 137 do CPC)',
            'Relatórios periódicos com cada andamento e próxima medida',
          ],
        },
        {
          h2: 'Como é a remuneração',
          paras: [
            'A remuneração da Poursuite é um percentual do valor efetivamente recuperado, definido em contrato conforme o tamanho do crédito, a fase do processo e o trabalho envolvido. Em regra, não há honorários fixos.',
            'Os honorários advocatícios e as despesas do processo são tratados no mesmo contrato, de forma transparente, antes do início do trabalho.',
          ],
        },
      ],
      faq: [
        {
          q: 'E se nada for recuperado?',
          a: 'Na modalidade por êxito, a Poursuite não recebe remuneração sem recuperação. O que acontece com eventuais despesas processuais é combinado no contrato antes do início.',
        },
        {
          q: 'Preciso trocar de advogado?',
          a: 'Não necessariamente. Podemos trabalhar com o advogado que já conduz o processo ou indicar escritórios parceiros, se você preferir.',
        },
        {
          q: 'Meu processo está arquivado. Ainda dá para recuperar?',
          a: 'Depende do tempo de suspensão e da contagem da prescrição intercorrente. Por isso, a primeira etapa é sempre a análise do processo, que diz se ainda há caminho.',
        },
      ],
      ctaTitle: 'Sua execução está parada?',
      ctaText: 'Envie o número do processo e veja se ele se encaixa na recuperação por êxito.',
    },

    investigation: {
      name: 'Investigação patrimonial',
      summary:
        'Localizamos imóveis, empresas, participações, veículos e créditos do devedor, e identificamos blindagem patrimonial e fraudes.',
      h1: 'Investigação patrimonial e localização de bens de devedores',
      lede:
        'Antes de cobrar, comprar ou vender uma dívida, é preciso saber o que o devedor tem e onde está. Fazemos investigação patrimonial de pessoas e empresas para credores, advogados e investidores.',
      forWhomTitle: 'Quando contratar',
      forWhom: [
        'A penhora on-line e as pesquisas de rotina deram negativo',
        'Há indícios de que o devedor transferiu bens a parentes ou a empresas',
        'Você vai propor uma ação e quer saber se o réu tem como pagar',
        'Você está avaliando a compra de um crédito ou de uma carteira',
      ],
      sections: [
        {
          h2: 'O que investigamos',
          bullets: [
            'Imóveis em nome do devedor, de cônjuges, parentes e empresas ligadas',
            'Participações societárias, holdings familiares e alterações contratuais recentes',
            'Créditos a receber em outros processos, inventários e arrematações',
            'Veículos, embarcações e aeronaves',
            'Vínculos entre pessoas e empresas que indiquem grupo econômico ou interposição de terceiros',
            'Transferências e operações que possam caracterizar fraude à execução ou contra credores',
          ],
        },
        {
          h2: 'Fontes e método',
          paras: [
            'Trabalhamos com fontes públicas e lícitas: registros de imóveis, juntas comerciais, bases processuais dos tribunais, diários oficiais, cartórios e cadastros públicos. Cruzamos essas informações com ferramentas tecnológicas para encontrar relações que não aparecem em uma pesquisa isolada.',
            'Quando a informação depende de quebra de sigilo, como dados bancários e fiscais, indicamos as medidas que o advogado pode requerer ao juízo, como SISBAJUD, INFOJUD e o Sistema Nacional de Investigação Patrimonial e Recuperação de Ativos (SNIPER), do CNJ.',
          ],
        },
        {
          h2: 'O relatório',
          paras: [
            'Você recebe um relatório com os bens e vínculos encontrados, a fonte de cada informação, a avaliação do que pode ser penhorado e as medidas judiciais recomendadas para cada achado, em linguagem que pode ser usada diretamente pela equipe jurídica.',
          ],
        },
      ],
      faq: [
        {
          q: 'A investigação é legal?',
          a: 'Sim. Usamos apenas fontes públicas, bases de acesso permitido e informações obtidas em processos. Não fazemos acesso a dados sigilosos sem ordem judicial.',
        },
        {
          q: 'Vocês investigam empresas e pessoas físicas?',
          a: 'Sim, e na maioria dos casos investigamos as duas coisas: a empresa devedora, seus sócios e as pessoas e empresas ligadas a eles.',
        },
        {
          q: 'Em quanto tempo fica pronto o relatório?',
          a: 'O prazo depende do número de pessoas investigadas e da complexidade do grupo. Informamos o prazo junto com o orçamento.',
        },
      ],
      ctaTitle: 'Precisa localizar bens de um devedor?',
      ctaText: 'Conte o caso. Enviamos o escopo e o orçamento da investigação.',
    },

    duediligence: {
      name: 'Due diligence de carteiras',
      summary:
        'Analisamos carteiras de créditos inadimplidos processo a processo para quem compra ou vende: chance de recuperação, prazos, riscos e preço.',
      h1: 'Due diligence e precificação de carteiras de crédito',
      lede:
        'Quem compra ou vende uma carteira de créditos inadimplidos precisa saber o que está negociando. Analisamos cada processo e cada devedor para chegar a um preço defensável.',
      forWhomTitle: 'Para quem é',
      forWhom: [
        'Investidores e fundos que compram créditos distressed',
        'Bancos, fintechs, FIDCs e securitizadoras que vão vender carteiras',
        'Empresas que querem saber quanto vale sua carteira de cobrança judicial',
        'Gestores que precisam priorizar onde investir esforço de recuperação',
      ],
      sections: [
        {
          h2: 'O que analisamos',
          bullets: [
            'Situação processual de cada caso: fase, citação, penhoras, recursos e prazos',
            'Riscos de prescrição, nulidades e defesas pendentes',
            'Solvência e patrimônio localizável de devedores e coobrigados',
            'Garantias existentes e sua efetividade',
            'Estimativa de valor recuperável e do tempo até o recebimento',
          ],
        },
        {
          h2: 'Classificação e preço',
          paras: [
            'Cada crédito é classificado por chance e prazo de recuperação. O resultado mostra onde está o valor da carteira, quais casos merecem esforço imediato e quais devem ser descartados ou vendidos.',
            'Para quem compra, isso orienta a oferta. Para quem vende, permite separar lotes e negociar com base em dados, e não apenas no valor de face.',
          ],
        },
        {
          h2: 'Entregáveis',
          bullets: [
            'Planilha com a análise de cada processo e devedor',
            'Relatório executivo com a classificação da carteira e a estimativa de recuperação',
            'Recomendação de estratégia e de preço',
          ],
        },
      ],
      faq: [
        {
          q: 'Qual o tamanho mínimo de carteira?',
          a: 'Não há mínimo rígido. Analisamos desde lotes pequenos até carteiras com muitos processos, com escopo e prazo ajustados ao volume.',
        },
        {
          q: 'A Poursuite pode comprar a carteira depois da análise?',
          a: 'Sim. Em alguns casos, a due diligence é a primeira etapa de uma proposta de compra de parte ou de toda a carteira.',
        },
        {
          q: 'Como os dados da carteira são protegidos?',
          a: 'Assinamos acordo de confidencialidade antes de receber a base e usamos os dados exclusivamente para a análise contratada.',
        },
      ],
      ctaTitle: 'Vai comprar ou vender uma carteira?',
      ctaText: 'Fale com a gente sobre volume, tipo de crédito e prazo.',
    },

    foreign: {
      name: 'Credores estrangeiros',
      summary:
        'Para empresas e investidores de fora do Brasil: localizamos o patrimônio do devedor brasileiro e coordenamos a cobrança com advogados locais.',
      h1: 'Recuperação de créditos no Brasil para credores estrangeiros',
      lede:
        'Sua empresa tem valores a receber de um devedor brasileiro? Ajudamos a entender as chances de recebimento, localizar o patrimônio e conduzir a cobrança no Brasil, em português, inglês, espanhol, francês ou italiano.',
      forWhomTitle: 'Para quem é',
      forWhom: [
        'Exportadores e fornecedores com faturas não pagas por clientes brasileiros',
        'Credores com sentença ou laudo arbitral estrangeiro contra devedor no Brasil',
        'Investidores estrangeiros em créditos distressed brasileiros',
        'Escritórios de advocacia de outros países que precisam de apoio local',
      ],
      sections: [
        {
          h2: 'Os caminhos para cobrar no Brasil',
          paras: [
            'Uma sentença estrangeira precisa ser homologada pelo Superior Tribunal de Justiça (STJ) antes de ser executada no Brasil. O mesmo vale para laudos arbitrais estrangeiros, que seguem a Convenção de Nova York, da qual o Brasil é signatário.',
            'Contratos e títulos de crédito podem, em muitos casos, ser cobrados diretamente na Justiça brasileira, sem processo prévio no exterior. A escolha do caminho depende do documento que você tem e de onde está o patrimônio do devedor.',
          ],
        },
        {
          h2: 'Como ajudamos',
          bullets: [
            'Avaliação preliminar do crédito e dos documentos',
            'Investigação patrimonial do devedor no Brasil',
            'Coordenação com escritórios de advocacia brasileiros para homologação, cobrança e execução',
            'Relatórios no seu idioma ao longo de todo o processo',
            'Compra do crédito, quando o credor prefere encerrar a cobrança e receber agora',
          ],
        },
      ],
      faq: [
        {
          q: 'Preciso de um processo no meu país antes de cobrar no Brasil?',
          a: 'Nem sempre. Dependendo do documento, a cobrança pode começar diretamente no Brasil. Avaliamos o caso e indicamos o caminho mais curto.',
        },
        {
          q: 'Os documentos precisam ser traduzidos?',
          a: 'Documentos em língua estrangeira apresentados à Justiça brasileira precisam de tradução juramentada. Ajudamos a organizar o que é necessário.',
        },
        {
          q: 'Em que idiomas vocês atendem?',
          a: 'Português, inglês, espanhol, francês e italiano.',
        },
      ],
      ctaTitle: 'Tem um crédito a receber no Brasil?',
      ctaText: 'Envie um resumo do caso no seu idioma.',
    },
  },

  about: {
    h1: 'Quem somos',
    lede:
      'A Poursuite é uma gestora de ativos inadimplidos sediada em São Paulo. Fomos criados por profissionais com experiência em recuperação de créditos, reestruturação de dívidas e investigação patrimonial.',
    sections: [
      {
        h2: 'O nome',
        paras: [
          'Poursuite vem do francês e quer dizer perseguição, busca, e também o prosseguimento de uma ação judicial. É o que fazemos: seguimos o crédito até o fim, inclusive quando todos já desistiram dele.',
        ],
      },
      {
        h2: 'Como atuamos',
        paras: [
          'Trabalhamos como uma boutique: poucos casos ao mesmo tempo, analisados em profundidade, com uma equipe que conhece tanto o processo judicial quanto o mercado de créditos distressed.',
          'Combinamos três frentes que raramente estão juntas: leitura técnica do processo, investigação patrimonial apoiada em tecnologia e capital próprio para comprar créditos. Por isso, podemos oferecer ao credor mais de uma saída para o mesmo problema.',
          'Não somos escritório de advocacia. Quando o caso exige atuação judicial, trabalhamos com os advogados do credor ou com escritórios parceiros.',
        ],
      },
    ],
    principlesTitle: 'Missão, visão e valores',
    principles: [
      {
        title: 'Missão',
        text: 'Transformar conhecimento e informação em resultados financeiros para nossos clientes e parceiros.',
      },
      {
        title: 'Visão',
        text: 'Ser referência em gestão, estratégia e recuperação de ativos considerados irrecuperáveis.',
      },
      {
        title: 'Valores',
        text: 'Ética, respeito, transparência e sigilo, com trabalho eficiente e de alto valor agregado.',
      },
    ],
  },

  contact: {
    h1: 'Contato',
    lede:
      'Conte qual é o crédito ou a carteira. Se tiver, inclua o número do processo: com ele conseguimos fazer a primeira análise mais rápido.',
    formTitle: 'Envie sua mensagem',
    name: 'Nome',
    email: 'E-mail',
    company: 'Empresa (opcional)',
    phone: 'Telefone ou WhatsApp (opcional)',
    profile: 'Você é',
    profiles: [
      'Credor com crédito judicial',
      'Banco, fintech, FIDC ou securitizadora',
      'Advogado ou escritório',
      'Investidor',
      'Credor estrangeiro',
      'Outro',
    ],
    message: 'Mensagem',
    messageHint: 'Ex.: valor aproximado, número do processo, tipo de dívida.',
    consent: 'Concordo com o uso dos meus dados para resposta a este contato.',
    submit: 'Enviar mensagem',
    sending: 'Enviando…',
    error: 'Não foi possível enviar agora. Tente de novo ou escreva para contato@poursuite.com.br.',
    directTitle: 'Contato direto',
    emailLabel: 'E-mail',
    addressLabel: 'Endereço',
    address: 'Av. Brigadeiro Faria Lima, 2369, cj. 1102\nJardim Paulistano, São Paulo/SP\nCEP 01452-922',
    confidentiality: 'As informações enviadas são tratadas com sigilo e usadas apenas para avaliar o seu caso.',
  },

  privacy: {
    h1: 'Política de privacidade',
    updated: 'Atualizada em novembro de 2026.',
    sections: [
      {
        h2: 'Quem é o controlador',
        paras: [
          'Poursuite Investments Consultoria Ltda., CNPJ 38.425.501/0001-92, com sede na Av. Brigadeiro Faria Lima, 2369, cj. 1102, Jardim Paulistano, São Paulo/SP, CEP 01452-922. Contato para assuntos de privacidade: contato@poursuite.com.br.',
        ],
      },
      {
        h2: 'Quais dados coletamos',
        paras: [
          'Coletamos apenas os dados que você envia pelo formulário de contato ou por e-mail: nome, e-mail, telefone, empresa e as informações que você incluir na mensagem.',
          'O site não usa cookies de publicidade nem ferramentas de rastreamento de terceiros. Podemos usar estatísticas de acesso agregadas, sem identificação individual, fornecidas pela nossa infraestrutura de hospedagem.',
        ],
      },
      {
        h2: 'Para que usamos',
        paras: [
          'Usamos os dados para responder ao seu contato, avaliar o crédito ou o caso apresentado e, se houver contratação, executar o contrato. A base legal é o seu consentimento e os procedimentos preliminares a um contrato (art. 7º, I e V, da Lei 13.709/2018).',
        ],
      },
      {
        h2: 'Com quem compartilhamos',
        paras: [
          'Não vendemos dados. O compartilhamento ocorre apenas com prestadores necessários ao funcionamento do site e do e-mail e, se você autorizar, com os advogados que atuarão no seu caso.',
        ],
      },
      {
        h2: 'Por quanto tempo guardamos',
        paras: [
          'Mantemos os dados pelo tempo necessário para tratar o seu contato e, se houver contratação, pelo prazo exigido em lei. Depois disso, eles são eliminados.',
        ],
      },
      {
        h2: 'Seus direitos',
        paras: [
          'Você pode pedir confirmação do tratamento, acesso, correção, anonimização, portabilidade ou eliminação dos seus dados, além de revogar o consentimento, escrevendo para contato@poursuite.com.br. Também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).',
        ],
      },
    ],
  },

  thanks: {
    h1: 'Mensagem enviada',
    text: 'Recebemos sua mensagem e vamos responder pelo e-mail informado.',
    back: 'Voltar para o início',
  },

  notFound: {
    title: 'Página não encontrada',
    text: 'O endereço pode ter mudado com a nova versão do site.',
    back: 'Ir para o início',
  },
};

export default pt;
