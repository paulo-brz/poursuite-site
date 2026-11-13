import type { Content } from './types';

const fr: Content = {
  ui: {
    skip: 'Aller au contenu',
    menu: 'Menu',
    close: 'Fermer',
    services: 'Services',
    about: 'Qui sommes-nous',
    contact: 'Contact',
    language: 'Langue',
    home: 'Accueil',
    ctaPrimary: 'Faire évaluer ma créance',
    ctaSecondary: 'Notre méthode',
    readMore: 'En savoir plus',
    faqTitle: 'Questions fréquentes',
    otherServices: 'Autres services',
    footerTagline: 'Gestion et recouvrement d’actifs impayés au Brésil.',
    footerServices: 'Services',
    footerCompany: 'Société',
    footerContact: 'Contact',
    legalName: 'Poursuite Investments Consultoria Ltda.',
    cnpj: 'CNPJ (immatriculation fiscale brésilienne) 38.425.501/0001-92',
    rights: 'Tous droits réservés.',
    privacy: 'Politique de confidentialité',
    notLawFirm:
      'Poursuite n’est pas un cabinet d’avocats. Les procédures judiciaires sont conduites par les avocats du créancier ou par des cabinets partenaires au Brésil.',
    breadcrumb: 'Vous êtes ici',
  },

  meta: {
    home: {
      title: 'Poursuite | Recouvrement de créances et enquête patrimoniale au Brésil',
      description:
        'Gestionnaire d’actifs impayés à São Paulo : rachat de créances judiciaires, recouvrement au résultat et localisation du patrimoine des débiteurs au Brésil.',
    },
    acquisition: {
      title: 'Rachat de créances judiciaires au Brésil | Poursuite',
      description:
        'Cédez votre créance en exécution, votre jugement ou vos honoraires au Brésil et soyez payé maintenant. Poursuite rachète créances et portefeuilles.',
    },
    recovery: {
      title: 'Recouvrement de créances au résultat au Brésil | Poursuite',
      description:
        'Exécution bloquée et débiteur « sans biens » ? Nous localisons le patrimoine et organisons le recouvrement, rémunérés sur les sommes recouvrées.',
    },
    investigation: {
      title: 'Enquête patrimoniale sur un débiteur au Brésil | Poursuite',
      description:
        'Nous localisons immeubles, participations, véhicules et créances des débiteurs au Brésil, et identifions dissimulations d’actifs et fraudes.',
    },
    duediligence: {
      title: 'Due diligence de portefeuilles de créances au Brésil | Poursuite',
      description:
        'Analyse judiciaire et patrimoniale de portefeuilles de créances impayées au Brésil pour acheteurs et vendeurs : chances de recouvrement, délais, risques et prix.',
    },
    foreign: {
      title: 'Créanciers étrangers : recouvrement au Brésil | Poursuite',
      description:
        'Un client ou partenaire brésilien ne vous paie pas ? Nous localisons le patrimoine du débiteur et coordonnons le recouvrement avec des avocats locaux, en français.',
    },
    about: {
      title: 'Qui sommes-nous | Poursuite',
      description:
        'Gestionnaire d’actifs impayés basé à São Paulo, fondé par des spécialistes du recouvrement, de la restructuration de dettes et de l’enquête patrimoniale.',
    },
    contact: {
      title: 'Nous contacter | Poursuite',
      description:
        'Envoyez-nous les éléments de votre créance ou de votre portefeuille pour évaluation. Poursuite, Av. Brigadeiro Faria Lima 2369, São Paulo, Brésil.',
    },
    privacy: {
      title: 'Politique de confidentialité | Poursuite',
      description: 'Comment Poursuite traite les données personnelles reçues par ce site.',
    },
    thanks: {
      title: 'Message envoyé | Poursuite',
      description: 'Nous avons bien reçu votre message.',
    },
  },

  home: {
    h1: 'Recouvrement de créances et actifs impayés au Brésil',
    lede:
      'Nous rachetons des créances judiciaires, recouvrons des dettes avec une rémunération au résultat et retrouvons le patrimoine de débiteurs qui semblent ne rien posséder à leur nom.',
    trail: {
      title: 'Où se trouve souvent le patrimoine d’un débiteur « sans biens »',
      execution: 'Exécution suspendue',
      executionDetail: 'Saisie des comptes sans résultat',
      debtor: 'Débiteur',
      debtorDetail: 'Aucun bien à son nom',
      nodes: [
        { label: 'Créance dans un autre procès', detail: 'Saisie de la créance' },
        { label: 'Parts d’une holding familiale', detail: 'Levée inversée du voile social' },
        { label: 'Immeuble au nom d’un tiers', detail: 'Fraude à l’exécution' },
        { label: 'Succession non partagée', detail: 'Saisie de la part successorale' },
      ],
      caption:
        'Exemple illustratif. Dans de nombreuses exécutions bloquées, le patrimoine existe, mais il n’est pas enregistré au nom du débiteur.',
    },
    servicesTitle: 'Ce que nous faisons',
    servicesIntro:
      'Chaque créance appelle une solution différente. Parfois il vaut mieux la céder, parfois la recouvrer. Dans tous les cas, la première question est : où se trouve le patrimoine du débiteur ?',
    audienceTitle: 'Nos clients',
    audience: [
      {
        title: 'Créanciers étrangers',
        text: 'Entreprises et particuliers à qui un débiteur brésilien doit de l’argent, avec ou sans décision de justice.',
      },
      {
        title: 'Investisseurs en crédit brésilien',
        text: 'Fonds et acheteurs de créances douteuses et d’actifs litigieux qui ont besoin d’analyse et de gestion sur place.',
      },
      {
        title: 'Banques, fintechs et fonds de crédit',
        text: 'Établissements qui souhaitent céder, valoriser ou externaliser le recouvrement de portefeuilles non performants.',
      },
      {
        title: 'Cabinets d’avocats',
        text: 'Cabinets au Brésil ou à l’étranger qui ont besoin d’une enquête patrimoniale au Brésil pour leurs clients.',
      },
    ],
    methodTitle: 'Notre méthode',
    methodIntro: 'Chaque mission commence par le même diagnostic. Ce n’est qu’ensuite que nous définissons avec vous la meilleure issue.',
    steps: [
      {
        title: 'Analyse de la créance',
        text: 'Nous étudions le dossier ou le titre : montant actualisé, stade de la procédure, prescription, garanties, débiteurs tenus et démarches déjà tentées.',
      },
      {
        title: 'Enquête patrimoniale',
        text: 'Nous recherchons immeubles, sociétés, participations, créances dans d’autres procès et opérations suspectes du débiteur et de ses proches.',
      },
      {
        title: 'Proposition',
        text: 'Cartographie du patrimoine en main, nous proposons une voie : rachat de la créance, recouvrement au résultat ou rapport pour votre propre équipe.',
      },
      {
        title: 'Exécution et suivi',
        text: 'Nous coordonnons les mesures avec les avocats du dossier et vous adressons des rapports réguliers en français jusqu’au paiement.',
      },
    ],
    insightTitle: 'L’information fait la différence entre une créance bloquée et une créance payée',
    insightText: [
      'La plupart des exécutions ne s’enlisent pas faute de droit, mais faute d’information sur le débiteur et son patrimoine.',
      'C’est pourquoi nous associons l’analyse technique du dossier, l’enquête patrimoniale appuyée sur la technologie et des capitaux propres. Cet ensemble révèle ce que les recherches habituelles ne montrent pas et permet de choisir, pour chaque créance, la voie la plus prometteuse.',
    ],
    internationalTitle: 'Une entreprise brésilienne vous doit de l’argent ?',
    internationalText:
      'Nous accompagnons entreprises, investisseurs et cabinets hors du Brésil en français, anglais, espagnol, italien et portugais, de la localisation des biens jusqu’à l’exécution.',
    internationalLink: 'Recouvrement de créances au Brésil pour créanciers étrangers',
    faq: [
      {
        q: 'Quels types de créances Poursuite analyse-t-elle ?',
        a: 'Créances en cours d’exécution, jugements, titres exécutoires (billets à ordre, chèques, cédules de crédit bancaire et contrats), honoraires alloués par décision de justice et portefeuilles de nombreux dossiers. Pour les créanciers étrangers, également les factures impayées, jugements étrangers et sentences arbitrales contre des débiteurs brésiliens.',
      },
      {
        q: 'Quelle différence entre céder la créance et le recouvrement au résultat ?',
        a: 'En cas de cession, vous percevez un prix immédiatement et transférez la créance à Poursuite, qui assume le risque et la durée du recouvrement. Avec le recouvrement au résultat, la créance reste la vôtre : nous enquêtons et organisons le recouvrement, et notre rémunération est un pourcentage des sommes effectivement encaissées.',
      },
      {
        q: 'Combien coûte l’évaluation initiale ?',
        a: 'La première analyse, qui indique si votre créance entre dans l’une de nos formules, est gratuite. Les enquêtes approfondies et les due diligences de portefeuilles font l’objet d’un devis selon leur périmètre.',
      },
      {
        q: 'Poursuite est-elle un cabinet d’avocats ?',
        a: 'Non. Nous sommes un gestionnaire d’actifs. Lorsqu’une action en justice est nécessaire, elle est conduite par les avocats du créancier ou par des cabinets partenaires au Brésil, avec lesquels nous travaillons en étroite coordination.',
      },
      {
        q: 'Les informations de mon dossier restent-elles confidentielles ?',
        a: 'Oui. Les informations transmises servent uniquement à l’analyse et, si nécessaire, nous signons un accord de confidentialité avant de recevoir des documents.',
      },
    ],
    finalTitle: 'Vous avez une créance au Brésil ?',
    finalText: 'Envoyez-nous le numéro de procédure ou un résumé de la dette. Nous vous dirons si et comment nous pouvons vous aider.',
  },

  services: {
    acquisition: {
      name: 'Rachat de créances judiciaires',
      summary:
        'Nous rachetons votre créance judiciaire, votre jugement ou votre titre exécutoire au Brésil et payons maintenant, en assumant le risque et la durée du recouvrement.',
      h1: 'Rachat de créances judiciaires et de portefeuilles de contentieux au Brésil',
      lede:
        'Une exécution au Brésil peut durer des années. Si vous préférez ne pas attendre, vous pouvez céder votre créance. Poursuite rachète des créances judiciaires et extrajudiciaires et paie à la signature de la cession.',
      forWhomTitle: 'Pour qui',
      forWhom: [
        'Entreprises et particuliers titulaires d’une créance en exécution au Brésil',
        'Avocats titulaires d’honoraires alloués par décision de justice',
        'Banques, fintechs et fonds de crédit qui cèdent des portefeuilles ou des lots',
        'Créanciers qui préfèrent une liquidité immédiate à un recouvrement incertain',
      ],
      sections: [
        {
          h2: 'Comment fonctionne la cession',
          paras: [
            'La vente prend la forme d’une cession de créance, régie par les articles 286 à 298 du Code civil brésilien. Le créancier transfère à Poursuite le droit de recevoir la dette, et Poursuite prend sa place dans la procédure.',
            'Le Code de procédure civile brésilien permet au cessionnaire de poursuivre l’exécution sans le consentement du débiteur (art. 778). Pour le cédant, le dossier s’arrête là : il perçoit le prix, et les coûts et risques du recouvrement disparaissent.',
          ],
        },
        {
          h2: 'Ce que nous rachetons',
          bullets: [
            'Créances en exécution de jugements ou de titres exécutoires',
            'Billets à ordre, chèques, cédules de crédit bancaire (CCB) et contrats impayés',
            'Honoraires d’avocat alloués par décision de justice',
            'Lots et portefeuilles de procédures d’établissements financiers et d’entreprises',
          ],
        },
        {
          h2: 'Comment nous fixons le prix',
          paras: [
            'Le prix dépend de la probabilité réelle de recouvrement, et pas seulement du montant de la dette. Avant toute offre, nous analysons la procédure, la solvabilité des débiteurs, les biens et créances saisissables, les risques de prescription et de nullité, et le délai probable de paiement.',
            'C’est pourquoi une créance qui paraît perdue peut valoir plus que prévu, lorsque notre enquête révèle un patrimoine qui n’est pas encore apparu dans la procédure.',
          ],
        },
        {
          h2: 'Étapes',
          bullets: [
            'Vous nous transmettez le numéro de procédure ou les pièces de la créance',
            'Nous réalisons l’analyse judiciaire et patrimoniale',
            'Nous vous faisons une offre de rachat',
            'Nous signons la cession, payons et demandons la substitution dans la procédure',
          ],
        },
      ],
      faq: [
        {
          q: 'Faut-il l’accord du débiteur pour céder la créance ?',
          a: 'Non. En droit brésilien, la cession ne nécessite pas l’accord du débiteur ; il suffit de la lui notifier. Dans la procédure, la substitution du créancier ne requiert pas non plus son consentement.',
        },
        {
          q: 'Rachetez-vous une partie seulement de la créance ?',
          a: 'Nous pouvons étudier un rachat partiel ou des montages dans lesquels le créancier conserve une part du résultat, au cas par cas.',
        },
        {
          q: 'Sous quel délai reçois-je une offre ?',
          a: 'Cela dépend des informations disponibles et du nombre de dossiers. Pour une créance isolée dont le dossier est accessible, la première analyse est généralement rapide ; les portefeuilles demandent plus de temps.',
        },
      ],
      ctaTitle: 'Combien vaut votre créance ?',
      ctaText: 'Envoyez-nous le numéro de procédure. La première analyse est gratuite.',
    },

    recovery: {
      name: 'Recouvrement au résultat',
      summary:
        'La créance reste la vôtre. Nous localisons le patrimoine, organisons le recouvrement avec les avocats du dossier et sommes rémunérés sur les sommes effectivement recouvrées.',
      h1: 'Recouvrement de créances au résultat au Brésil',
      lede:
        'Pour les exécutions bloquées, les débiteurs qui ont organisé leur insolvabilité et les créances que plus personne ne suit. Vous restez titulaire de la créance, et Poursuite n’est rémunérée que si vous êtes payé.',
      forWhomTitle: 'Pour qui',
      forWhom: [
        'Créanciers dont l’exécution est suspendue faute de biens',
        'Entreprises détenant d’anciennes créances judiciaires sans suivi actif',
        'Créanciers qui soupçonnent une dissimulation de patrimoine ou une fraude',
        'Cabinets à la recherche d’un partenaire d’enquête au Brésil',
      ],
      sections: [
        {
          h2: 'Pourquoi tant d’exécutions s’enlisent au Brésil',
          paras: [
            'La plupart des exécutions n’échouent pas faute de droit, mais faute d’information. Après les recherches automatisées (blocage des comptes, fichiers des véhicules et déclarations fiscales), de nombreuses procédures sont suspendues et s’acheminent vers la prescription en cours d’instance (art. 921 du Code de procédure civile).',
            'Le patrimoine, pourtant, disparaît rarement. On le retrouve dans une société familiale, au nom de proches, dans une créance que le débiteur détient dans un autre procès ou dans une succession non encore partagée.',
          ],
        },
        {
          h2: 'Ce que nous faisons',
          bullets: [
            'Revue du dossier et des tentatives de saisie antérieures',
            'Enquête patrimoniale sur le débiteur, ses associés et les personnes et sociétés liées',
            'Recherche de créances du débiteur dans d’autres procès en vue de leur saisie (art. 860 du Code de procédure civile)',
            'Identification de la fraude à l’exécution, de la fraude paulienne et des abus de la personnalité morale',
            'Stratégie procédurale avec les avocats du dossier, y compris l’incident de levée du voile social (art. 133 à 137 du Code de procédure civile)',
            'Rapports réguliers sur chaque avancée et la prochaine mesure',
          ],
        },
        {
          h2: 'Notre rémunération',
          paras: [
            'La rémunération de Poursuite est un pourcentage des sommes effectivement recouvrées, fixé par contrat selon le montant de la créance, le stade de la procédure et le travail nécessaire. En règle générale, il n’y a pas d’honoraires fixes.',
            'Les honoraires d’avocat et les frais de procédure sont traités dans le même contrat, en toute transparence, avant le début de la mission.',
          ],
        },
      ],
      faq: [
        {
          q: 'Et si rien n’est recouvré ?',
          a: 'Dans la formule au résultat, Poursuite n’est pas rémunérée en l’absence de recouvrement. Le traitement d’éventuels frais de procédure est convenu par écrit avant le démarrage.',
        },
        {
          q: 'Dois-je changer d’avocat ?',
          a: 'Pas nécessairement. Nous pouvons travailler avec l’avocat qui suit déjà le dossier ou vous présenter des cabinets partenaires au Brésil.',
        },
        {
          q: 'Ma procédure est archivée. Peut-on encore recouvrer ?',
          a: 'Cela dépend de la durée de la suspension et du calcul de la prescription. C’est pourquoi la première étape est toujours l’analyse du dossier, qui indique s’il existe encore une voie.',
        },
      ],
      ctaTitle: 'Votre exécution est bloquée ?',
      ctaText: 'Envoyez-nous le numéro de procédure pour savoir si elle relève du recouvrement au résultat.',
    },

    investigation: {
      name: 'Enquête patrimoniale',
      summary:
        'Nous localisons immeubles, sociétés, participations, véhicules et créances des débiteurs au Brésil, et identifions dissimulations d’actifs et fraudes.',
      h1: 'Enquête patrimoniale et localisation des biens d’un débiteur au Brésil',
      lede:
        'Avant d’assigner, d’acheter ou de céder une créance, il faut savoir ce que possède le débiteur, et où. Nous réalisons des enquêtes patrimoniales sur des personnes et des sociétés au Brésil pour des créanciers, des cabinets et des investisseurs.',
      forWhomTitle: 'Quand y recourir',
      forWhom: [
        'La saisie des comptes et les recherches habituelles n’ont rien donné',
        'Le débiteur semble avoir transféré des biens à des proches ou à des sociétés',
        'Vous allez agir en justice et voulez savoir si le défendeur est solvable',
        'Vous étudiez le rachat d’une créance ou d’un portefeuille',
      ],
      sections: [
        {
          h2: 'Ce que nous recherchons',
          bullets: [
            'Immeubles du débiteur, de son conjoint, de proches et de sociétés liées',
            'Participations, holdings familiales et modifications statutaires récentes',
            'Créances à recevoir dans d’autres procès, successions et ventes judiciaires',
            'Véhicules, bateaux et aéronefs',
            'Liens entre personnes et sociétés révélant un groupe économique ou des prête-noms',
            'Transferts et opérations susceptibles de constituer une fraude aux droits des créanciers',
          ],
        },
        {
          h2: 'Sources et méthode',
          paras: [
            'Nous travaillons à partir de sources publiques et licites : registres fonciers, registres du commerce, bases de données judiciaires, journaux officiels, études notariales et registres publics. Nous les croisons à l’aide d’outils technologiques pour faire apparaître des liens qu’une recherche isolée ne montre pas.',
            'Lorsque l’information relève du secret bancaire ou fiscal, nous indiquons les mesures que l’avocat peut demander au juge, comme SISBAJUD, INFOJUD ou SNIPER, le système national d’enquête patrimoniale du Conseil national de justice brésilien (CNJ).',
          ],
        },
        {
          h2: 'Le rapport',
          paras: [
            'Vous recevez un rapport présentant les biens et liens identifiés, la source de chaque information, l’appréciation de ce qui est saisissable et les mesures judiciaires recommandées pour chaque élément, en français et directement exploitable par votre équipe juridique.',
          ],
        },
      ],
      faq: [
        {
          q: 'L’enquête est-elle légale ?',
          a: 'Oui. Nous n’utilisons que des sources publiques, des bases de données dont l’accès est autorisé et des informations issues de procédures. Nous n’accédons à aucune donnée protégée sans décision de justice.',
        },
        {
          q: 'Enquêtez-vous sur des sociétés et des personnes physiques ?',
          a: 'Oui, et le plus souvent sur les deux : la société débitrice, ses associés et les personnes et sociétés qui leur sont liées.',
        },
        {
          q: 'Quel est le délai de remise du rapport ?',
          a: 'Il dépend du nombre de personnes visées et de la complexité du groupe. Nous l’indiquons avec le devis.',
        },
      ],
      ctaTitle: 'Besoin de localiser les biens d’un débiteur au Brésil ?',
      ctaText: 'Présentez-nous le dossier. Nous vous enverrons le périmètre et le devis.',
    },

    duediligence: {
      name: 'Due diligence de portefeuilles',
      summary:
        'Nous analysons des portefeuilles de créances impayées au Brésil, dossier par dossier, pour acheteurs et vendeurs : chances de recouvrement, délais, risques et prix.',
      h1: 'Due diligence et valorisation de portefeuilles de créances au Brésil',
      lede:
        'Acheter ou céder un portefeuille de créances impayées au Brésil suppose de savoir ce qu’il contient réellement. Nous analysons chaque procédure et chaque débiteur pour aboutir à un prix défendable.',
      forWhomTitle: 'Pour qui',
      forWhom: [
        'Investisseurs et fonds qui achètent des créances douteuses brésiliennes',
        'Banques, fintechs et fonds de crédit qui préparent une cession',
        'Entreprises qui souhaitent valoriser leur portefeuille de contentieux',
        'Gestionnaires qui doivent prioriser leurs efforts de recouvrement',
      ],
      sections: [
        {
          h2: 'Ce que nous analysons',
          bullets: [
            'Situation procédurale de chaque dossier : stade, signification, saisies, recours et délais',
            'Risques de prescription, de nullité et moyens de défense en cours',
            'Solvabilité et patrimoine localisable des débiteurs et coobligés',
            'Sûretés existantes et leur efficacité',
            'Estimation du montant recouvrable et du délai de recouvrement',
          ],
        },
        {
          h2: 'Classement et prix',
          paras: [
            'Chaque créance est classée selon sa probabilité et son délai de recouvrement. Le résultat montre où se situe la valeur du portefeuille, quels dossiers méritent un effort immédiat et lesquels doivent être abandonnés ou cédés.',
            'Pour l’acheteur, cela oriente l’offre. Pour le vendeur, cela permet de constituer des lots et de négocier sur des données, et non sur la seule valeur nominale.',
          ],
        },
        {
          h2: 'Livrables',
          bullets: [
            'Tableur détaillant l’analyse de chaque dossier et de chaque débiteur',
            'Rapport de synthèse avec le classement du portefeuille et l’estimation de recouvrement',
            'Recommandation de stratégie et de prix',
          ],
        },
      ],
      faq: [
        {
          q: 'Existe-t-il une taille minimale de portefeuille ?',
          a: 'Il n’y a pas de minimum strict. Nous analysons aussi bien de petits lots que de grands portefeuilles, avec un périmètre et un délai adaptés au volume.',
        },
        {
          q: 'Poursuite peut-elle racheter le portefeuille après l’analyse ?',
          a: 'Oui. Dans certains cas, la due diligence est la première étape d’une offre de rachat de tout ou partie du portefeuille.',
        },
        {
          q: 'Comment les données du portefeuille sont-elles protégées ?',
          a: 'Nous signons un accord de confidentialité avant de recevoir la base et n’utilisons les données que pour l’analyse convenue.',
        },
      ],
      ctaTitle: 'Vous achetez ou cédez un portefeuille au Brésil ?',
      ctaText: 'Parlons volume, type de créances et calendrier.',
    },

    foreign: {
      name: 'Recouvrement au Brésil',
      summary:
        'Pour les entreprises et investisseurs hors du Brésil : nous localisons le patrimoine du débiteur brésilien et coordonnons le recouvrement avec des avocats locaux.',
      h1: 'Recouvrement de créances au Brésil pour créanciers étrangers',
      lede:
        'Un client, un partenaire ou un débiteur brésilien doit de l’argent à votre entreprise ? Nous vous aidons à évaluer vos chances de recouvrement, à localiser le patrimoine du débiteur et à agir au Brésil, avec un suivi entièrement en français.',
      forWhomTitle: 'Pour qui',
      forWhom: [
        'Exportateurs et fournisseurs dont les factures restent impayées par des clients brésiliens',
        'Créanciers titulaires d’un jugement ou d’une sentence arbitrale étrangère contre un débiteur au Brésil',
        'Investisseurs étrangers en créances douteuses brésiliennes',
        'Cabinets d’avocats étrangers ayant besoin d’un relais local au Brésil',
      ],
      sections: [
        {
          h2: 'Les voies de recouvrement au Brésil',
          paras: [
            'Un jugement étranger doit être homologué par la Cour supérieure de justice brésilienne (STJ) avant de pouvoir être exécuté au Brésil. Il en va de même des sentences arbitrales étrangères, reconnues en application de la Convention de New York, à laquelle le Brésil est partie.',
            'Les contrats et titres de créance peuvent souvent être exécutés directement devant les juridictions brésiliennes, sans procédure préalable à l’étranger. La bonne voie dépend des pièces dont vous disposez et de la localisation du patrimoine du débiteur.',
          ],
        },
        {
          h2: 'Notre accompagnement',
          bullets: [
            'Évaluation préliminaire de la créance et des pièces justificatives',
            'Enquête patrimoniale sur le débiteur au Brésil',
            'Coordination avec des cabinets d’avocats brésiliens pour l’homologation, le recouvrement et l’exécution',
            'Rapports réguliers en français tout au long de la procédure',
            'Rachat de la créance, lorsque le créancier préfère clore le dossier et être payé immédiatement',
          ],
        },
        {
          h2: 'Pourquoi la connaissance du terrain compte',
          paras: [
            'L’exécution au Brésil repose sur des systèmes judiciaires de blocage des comptes et de localisation des biens, ainsi que sur des mécanismes, comme la saisie de créances dans d’autres procès ou la levée du voile social, qui fonctionnent différemment des procédures européennes. Savoir où chercher et quoi demander au juge fait la différence entre une créance qui s’enlise et une créance payée.',
          ],
        },
      ],
      faq: [
        {
          q: 'Dois-je d’abord agir dans mon pays avant de recouvrer au Brésil ?',
          a: 'Pas toujours. Selon les pièces dont vous disposez, le recouvrement peut être engagé directement au Brésil. Nous analysons le dossier et vous indiquons la voie la plus courte.',
        },
        {
          q: 'Mes documents doivent-ils être traduits ?',
          a: 'Les documents en langue étrangère produits devant les juridictions brésiliennes doivent faire l’objet d’une traduction assermentée en portugais. Nous vous aidons à réunir le nécessaire.',
        },
        {
          q: 'Dans quelles langues travaillez-vous ?',
          a: 'Français, anglais, espagnol, italien et portugais.',
        },
      ],
      ctaTitle: 'Une créance à recouvrer au Brésil ?',
      ctaText: 'Envoyez-nous un résumé du dossier en français.',
    },
  },

  about: {
    h1: 'Qui sommes-nous',
    lede:
      'Poursuite est un gestionnaire d’actifs impayés basé à São Paulo, au Brésil, fondé par des professionnels expérimentés en recouvrement de créances, restructuration de dettes et enquête patrimoniale.',
    sections: [
      {
        h2: 'Notre nom',
        paras: [
          'Comme en français, poursuite désigne la recherche obstinée de quelque chose, mais aussi l’action en justice. C’est notre métier : suivre une créance jusqu’au bout, même lorsque tout le monde y a renoncé.',
        ],
      },
      {
        h2: 'Notre façon de travailler',
        paras: [
          'Nous fonctionnons comme une boutique : peu de dossiers à la fois, analysés en profondeur, par une équipe qui connaît aussi bien la procédure judiciaire brésilienne que le marché des créances douteuses.',
          'Nous réunissons trois compétences rarement associées : la lecture technique du dossier, l’enquête patrimoniale appuyée sur la technologie et des capitaux propres pour racheter des créances. Nous pouvons ainsi proposer au créancier plusieurs issues au même problème.',
          'Nous ne sommes pas un cabinet d’avocats. Lorsqu’une action en justice est nécessaire, nous travaillons avec les avocats du créancier ou avec des cabinets partenaires.',
        ],
      },
    ],
    principlesTitle: 'Mission, vision et valeurs',
    principles: [
      {
        title: 'Mission',
        text: 'Transformer la connaissance et l’information en résultats financiers pour nos clients et partenaires.',
      },
      {
        title: 'Vision',
        text: 'Être une référence dans la gestion, la stratégie et le recouvrement d’actifs jugés irrécouvrables.',
      },
      {
        title: 'Valeurs',
        text: 'Éthique, respect, transparence et confidentialité, avec un travail efficace et à forte valeur ajoutée.',
      },
    ],
  },

  contact: {
    h1: 'Contact',
    lede:
      'Présentez-nous la créance ou le portefeuille. Si vous l’avez, indiquez le numéro de la procédure au Brésil : il nous permet de réaliser la première analyse plus rapidement.',
    formTitle: 'Envoyez-nous un message',
    name: 'Nom',
    email: 'E-mail',
    company: 'Société (facultatif)',
    phone: 'Téléphone ou WhatsApp (facultatif)',
    profile: 'Vous êtes',
    profiles: [
      'Créancier étranger',
      'Créancier titulaire d’une créance judiciaire au Brésil',
      'Banque, fintech ou fonds de crédit',
      'Avocat ou cabinet',
      'Investisseur',
      'Autre',
    ],
    message: 'Message',
    messageHint: 'Ex. : montant approximatif, numéro de procédure, nature de la dette, localisation du débiteur.',
    consent: 'J’accepte que mes données soient utilisées pour répondre à cette demande.',
    submit: 'Envoyer le message',
    sending: 'Envoi en cours…',
    error: 'Le message n’a pas pu être envoyé. Réessayez ou écrivez à contato@poursuite.com.br.',
    directTitle: 'Nous écrire directement',
    emailLabel: 'E-mail',
    addressLabel: 'Adresse',
    address: 'Av. Brigadeiro Faria Lima, 2369, cj. 1102\nJardim Paulistano, São Paulo/SP\n01452-922, Brésil',
    confidentiality: 'Les informations transmises sont traitées de manière confidentielle et servent uniquement à évaluer votre dossier.',
  },

  privacy: {
    h1: 'Politique de confidentialité',
    updated: 'Mise à jour : novembre 2026.',
    sections: [
      {
        h2: 'Responsable du traitement',
        paras: [
          'Poursuite Investments Consultoria Ltda., CNPJ 38.425.501/0001-92, Av. Brigadeiro Faria Lima, 2369, cj. 1102, Jardim Paulistano, São Paulo/SP, 01452-922, Brésil. Contact pour toute question relative à la confidentialité : contato@poursuite.com.br.',
        ],
      },
      {
        h2: 'Données collectées',
        paras: [
          'Nous ne collectons que les données que vous nous transmettez via le formulaire de contact ou par e-mail : nom, adresse e-mail, téléphone, société et informations figurant dans votre message.',
          'Ce site n’utilise ni cookies publicitaires ni outils de suivi tiers. Nous pouvons utiliser des statistiques de fréquentation agrégées et non identifiantes fournies par notre hébergeur.',
        ],
      },
      {
        h2: 'Finalités',
        paras: [
          'Vos données servent à répondre à votre demande, à évaluer la créance ou le dossier présenté et, en cas de mission, à exécuter le contrat. Les bases juridiques sont votre consentement et les mesures précontractuelles, au sens de la loi générale brésilienne sur la protection des données (loi 13.709/2018, LGPD) et, le cas échéant, du Règlement général sur la protection des données de l’UE (RGPD).',
        ],
      },
      {
        h2: 'Destinataires',
        paras: [
          'Nous ne vendons aucune donnée. Elles ne sont partagées qu’avec les prestataires nécessaires au fonctionnement du site et de la messagerie et, avec votre accord, avec les avocats chargés de votre dossier.',
        ],
      },
      {
        h2: 'Transferts internationaux',
        paras: [
          'Poursuite est établie au Brésil : les données envoyées depuis l’étranger sont traitées au Brésil ainsi que par nos prestataires d’hébergement et de messagerie, qui peuvent les stocker dans d’autres pays avec des garanties appropriées.',
        ],
      },
      {
        h2: 'Durée de conservation',
        paras: [
          'Nous conservons les données le temps nécessaire au traitement de votre demande et, en cas de mission, pendant la durée exigée par la loi. Elles sont ensuite supprimées.',
        ],
      },
      {
        h2: 'Vos droits',
        paras: [
          'Vous pouvez demander la confirmation du traitement, l’accès, la rectification, l’anonymisation, la portabilité ou l’effacement de vos données, et retirer votre consentement, en écrivant à contato@poursuite.com.br. Vous pouvez également saisir l’Autorité nationale de protection des données brésilienne (ANPD) ou l’autorité de contrôle de votre pays, comme la CNIL en France.',
        ],
      },
    ],
  },

  thanks: {
    h1: 'Message envoyé',
    text: 'Nous avons bien reçu votre message et vous répondrons à l’adresse e-mail indiquée.',
    back: 'Retour à l’accueil',
  },

  notFound: {
    title: 'Page introuvable',
    text: 'L’adresse a peut-être changé avec la nouvelle version du site.',
    back: 'Aller à l’accueil',
  },
};

export default fr;
