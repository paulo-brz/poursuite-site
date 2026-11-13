import type { Content } from './types';

const it: Content = {
  ui: {
    skip: 'Vai al contenuto',
    menu: 'Menu',
    close: 'Chiudi',
    services: 'Servizi',
    about: 'Chi siamo',
    contact: 'Contatti',
    language: 'Lingua',
    home: 'Home',
    ctaPrimary: 'Fai valutare il tuo credito',
    ctaSecondary: 'Come lavoriamo',
    readMore: 'Scopri di più',
    faqTitle: 'Domande frequenti',
    otherServices: 'Altri servizi',
    footerTagline: 'Gestione e recupero di attivi deteriorati in Brasile.',
    footerServices: 'Servizi',
    footerCompany: 'Società',
    footerContact: 'Contatti',
    legalName: 'Poursuite Investments Consultoria Ltda.',
    cnpj: 'CNPJ (codice fiscale brasiliano) 38.425.501/0001-92',
    rights: 'Tutti i diritti riservati.',
    privacy: 'Informativa privacy',
    notLawFirm:
      'Poursuite non è uno studio legale. Le azioni giudiziarie sono condotte dagli avvocati del creditore o da studi legali partner in Brasile.',
    breadcrumb: 'Ti trovi in',
  },

  meta: {
    home: {
      title: 'Poursuite | Recupero crediti e indagini patrimoniali in Brasile',
      description:
        'Gestore di attivi deteriorati a San Paolo: acquistiamo crediti giudiziali, recuperiamo crediti a successo e rintracciamo i beni dei debitori in Brasile.',
    },
    acquisition: {
      title: 'Acquisto di crediti giudiziali in Brasile | Poursuite',
      description:
        'Cedi il tuo credito in esecuzione, la tua sentenza o i tuoi compensi in Brasile e incassa subito. Poursuite acquista crediti giudiziali e portafogli di cause.',
    },
    recovery: {
      title: 'Recupero crediti a successo in Brasile | Poursuite',
      description:
        'Esecuzione bloccata e debitore “nullatenente”? Rintracciamo il patrimonio e organizziamo il recupero in Brasile, con compenso a successo.',
    },
    investigation: {
      title: 'Indagini patrimoniali sul debitore in Brasile | Poursuite',
      description:
        'Rintracciamo immobili, partecipazioni, veicoli e crediti dei debitori in Brasile e individuiamo occultamenti di beni e frodi.',
    },
    duediligence: {
      title: 'Due diligence e valutazione di portafogli NPL in Brasile | Poursuite',
      description:
        'Analisi processuale e patrimoniale di portafogli di crediti deteriorati in Brasile per chi compra e chi vende: probabilità di recupero, tempi, rischi e prezzo.',
    },
    foreign: {
      title: 'Recupero crediti in Brasile per creditori esteri | Poursuite',
      description:
        'Un cliente o partner brasiliano non paga? Rintracciamo il patrimonio del debitore e coordiniamo il recupero con avvocati locali, in italiano.',
    },
    about: {
      title: 'Chi siamo | Poursuite',
      description:
        'Gestore di attivi deteriorati di San Paolo, fondato da professionisti del recupero crediti, della ristrutturazione del debito e delle indagini patrimoniali.',
    },
    contact: {
      title: 'Contatti | Poursuite',
      description:
        'Inviaci i dati del tuo credito o portafoglio per una valutazione. Poursuite, Av. Brigadeiro Faria Lima 2369, San Paolo, Brasile.',
    },
    privacy: {
      title: 'Informativa privacy | Poursuite',
      description: 'Come Poursuite tratta i dati personali ricevuti tramite questo sito.',
    },
    thanks: {
      title: 'Messaggio inviato | Poursuite',
      description: 'Abbiamo ricevuto il tuo messaggio.',
    },
  },

  home: {
    h1: 'Recupero crediti e attivi deteriorati in Brasile',
    lede:
      'Acquistiamo crediti giudiziali, recuperiamo crediti con compenso a successo e troviamo il patrimonio di debitori che sembrano non avere nulla a proprio nome.',
    trail: {
      title: 'Dove si trova spesso il patrimonio di un debitore “nullatenente”',
      execution: 'Esecuzione sospesa',
      executionDetail: 'Pignoramento dei conti negativo',
      debtor: 'Debitore',
      debtorDetail: 'Nessun bene intestato',
      nodes: [
        { label: 'Società collegata al debitore', detail: 'Gruppo economico' },
        { label: 'Quote di una holding di famiglia', detail: 'Abuso dello schermo societario' },
        { label: 'Immobile intestato a terzi', detail: 'Atto in frode all’esecuzione' },
        { label: 'Eredità non divisa', detail: 'Pignoramento della quota ereditaria' },
      ],
      caption:
        'Esempio illustrativo. In molte esecuzioni bloccate il patrimonio esiste, ma non è intestato al debitore.',
    },
    servicesTitle: 'Cosa facciamo',
    servicesIntro:
      'Ogni credito richiede una strada diversa. A volte conviene cederlo, altre volte recuperarlo. In ogni caso, la prima domanda è dove si trova il patrimonio del debitore.',
    audienceTitle: 'Con chi lavoriamo',
    audience: [
      {
        title: 'Creditori esteri',
        text: 'Aziende e privati che vantano un credito verso un debitore brasiliano, con o senza sentenza.',
      },
      {
        title: 'Investitori nel credito brasiliano',
        text: 'Fondi e acquirenti di crediti deteriorati e attivi litigiosi che hanno bisogno di analisi e gestione sul posto.',
      },
      {
        title: 'Banche, fintech e fondi di credito',
        text: 'Istituti che vogliono cedere, valutare o esternalizzare il recupero di portafogli non performing.',
      },
      {
        title: 'Studi legali',
        text: 'Studi in Brasile o all’estero che necessitano di indagini patrimoniali in Brasile per i propri clienti.',
      },
    ],
    methodTitle: 'Come lavoriamo',
    methodIntro: 'Ogni incarico parte dalla stessa diagnosi. Solo dopo definiamo con te la soluzione migliore.',
    steps: [
      {
        title: 'Analisi del credito',
        text: 'Esaminiamo il fascicolo o il titolo: importo aggiornato, fase, prescrizione, garanzie, soggetti obbligati e azioni già tentate.',
      },
      {
        title: 'Indagine patrimoniale',
        text: 'Cerchiamo immobili, società, partecipazioni e operazioni sospette del debitore e delle persone a lui collegate.',
      },
      {
        title: 'Proposta',
        text: 'Con la mappa del patrimonio in mano, proponiamo la strada: acquisto del credito, recupero a successo o un report per il tuo team.',
      },
      {
        title: 'Esecuzione e aggiornamenti',
        text: 'Coordiniamo le azioni con gli avvocati del caso e inviamo report periodici in italiano fino all’incasso.',
      },
    ],
    insightTitle: 'L’informazione fa la differenza tra un credito bloccato e un credito incassato',
    insightText: [
      'La maggior parte delle esecuzioni non si blocca per mancanza di diritto, ma per mancanza di informazioni sul debitore e sul suo patrimonio.',
      'Per questo uniamo l’analisi tecnica del fascicolo, l’indagine patrimoniale supportata dalla tecnologia e capitale proprio. Questo insieme mostra ciò che le ricerche di routine non vedono e permette di scegliere, per ogni credito, la strada con più probabilità di successo.',
    ],
    internationalTitle: 'Un’azienda brasiliana ti deve dei soldi?',
    internationalText:
      'Lavoriamo con aziende, investitori e studi legali fuori dal Brasile in italiano, inglese, spagnolo, francese e portoghese, dalla ricerca dei beni fino all’esecuzione.',
    internationalLink: 'Recupero crediti in Brasile per creditori esteri',
    faq: [
      {
        q: 'Quali crediti analizza Poursuite?',
        a: 'Crediti in esecuzione, sentenze, titoli esecutivi (cambiali, assegni, cédulas de crédito bancário e contratti), compensi professionali liquidati in sentenza e portafogli con molte cause. Per i creditori esteri, anche fatture insolute, sentenze straniere e lodi arbitrali contro debitori brasiliani.',
      },
      {
        q: 'Che differenza c’è tra cedere il credito e il recupero a successo?',
        a: 'Con la cessione ricevi subito un prezzo e trasferisci il credito a Poursuite, che si assume il rischio e i tempi del recupero. Con il recupero a successo il credito resta tuo: noi indaghiamo e organizziamo il recupero, e il nostro compenso è una percentuale di quanto effettivamente incassato.',
      },
      {
        q: 'Quanto costa la valutazione iniziale?',
        a: 'La prima analisi, che ti dice se il credito rientra in una delle nostre formule, è gratuita. Le indagini approfondite e le due diligence di portafogli sono preventivate in base all’ambito.',
      },
      {
        q: 'Poursuite è uno studio legale?',
        a: 'No. Siamo un gestore di attivi. Quando il caso richiede un’azione giudiziaria, questa è condotta dagli avvocati del creditore o da studi legali partner in Brasile, con cui lavoriamo in modo coordinato.',
      },
      {
        q: 'Le informazioni sul mio caso restano riservate?',
        a: 'Sì. I dati ricevuti sono usati solo per l’analisi e, se necessario, firmiamo un accordo di riservatezza prima di ricevere i documenti.',
      },
    ],
    finalTitle: 'Hai un credito in Brasile?',
    finalText: 'Inviaci il numero della causa o un riassunto del credito. Ti diremo se e come possiamo aiutarti.',
  },

  services: {
    acquisition: {
      name: 'Acquisto di crediti giudiziali',
      summary:
        'Acquistiamo il tuo credito giudiziale, la tua sentenza o il tuo titolo esecutivo in Brasile e paghiamo subito, assumendoci il rischio e i tempi del recupero.',
      h1: 'Acquisto di crediti giudiziali e portafogli di contenzioso in Brasile',
      lede:
        'Un’esecuzione in Brasile può durare anni. Se preferisci non aspettare, puoi cedere il tuo credito. Poursuite acquista crediti giudiziali e stragiudiziali e paga alla firma della cessione.',
      forWhomTitle: 'Per chi',
      forWhom: [
        'Aziende e privati con un credito in esecuzione in Brasile',
        'Avvocati con compensi liquidati in sentenza da incassare',
        'Banche, fintech e fondi di credito che cedono portafogli o lotti',
        'Creditori che preferiscono liquidità immediata a un incasso incerto',
      ],
      sections: [
        {
          h2: 'Come funziona la cessione',
          paras: [
            'La vendita avviene tramite cessione del credito, disciplinata dagli articoli 286-298 del Codice civile brasiliano. Il creditore trasferisce a Poursuite il diritto di riscuotere il debito, e Poursuite subentra al suo posto nel processo.',
            'Il Codice di procedura civile brasiliano consente al cessionario di proseguire l’esecuzione senza il consenso del debitore (art. 778). Per chi cede, la pratica finisce lì: incassa il prezzo e scompaiono costi e rischi del recupero.',
          ],
        },
        {
          h2: 'Cosa acquistiamo',
          bullets: [
            'Crediti in esecuzione di sentenze o di titoli esecutivi',
            'Cambiali, assegni, cédulas de crédito bancário (CCB) e contratti insoluti',
            'Compensi professionali degli avvocati liquidati in sentenza',
            'Lotti e portafogli di cause di istituti finanziari e aziende',
          ],
        },
        {
          h2: 'Come definiamo il prezzo',
          paras: [
            'Il prezzo dipende dalla probabilità reale di incasso, non solo dal valore nominale. Prima di fare un’offerta analizziamo la causa, la solvibilità dei debitori, i beni e crediti pignorabili, i rischi di prescrizione e nullità e i tempi probabili di incasso.',
            'Per questo un credito che sembra perso può valere più del previsto, quando la nostra indagine trova un patrimonio non ancora emerso nel processo.',
          ],
        },
        {
          h2: 'Le fasi',
          bullets: [
            'Ci invii il numero della causa o i documenti del credito',
            'Svolgiamo l’analisi processuale e patrimoniale',
            'Presentiamo un’offerta di acquisto',
            'Firmiamo la cessione, paghiamo e chiediamo il subentro nel processo',
          ],
        },
      ],
      faq: [
        {
          q: 'Serve il consenso del debitore per cedere il credito?',
          a: 'No. Per la legge brasiliana la cessione non richiede l’accordo del debitore: basta notificargliela. Nel processo, anche la sostituzione del creditore non richiede il suo consenso.',
        },
        {
          q: 'Acquistate anche solo una parte del credito?',
          a: 'Possiamo valutare acquisti parziali o strutture in cui il creditore mantiene una quota del risultato, caso per caso.',
        },
        {
          q: 'In quanto tempo ricevo un’offerta?',
          a: 'Dipende dalle informazioni disponibili e dal numero di cause. Per un singolo credito con fascicolo accessibile la prima analisi è di solito rapida; i portafogli richiedono più tempo.',
        },
      ],
      ctaTitle: 'Vuoi sapere quanto vale il tuo credito?',
      ctaText: 'Inviaci il numero della causa. La prima analisi è gratuita.',
    },

    recovery: {
      name: 'Recupero a successo',
      summary:
        'Il credito resta tuo. Rintracciamo il patrimonio, organizziamo il recupero con gli avvocati del caso e siamo pagati su quanto effettivamente incassato.',
      h1: 'Recupero crediti a successo in Brasile',
      lede:
        'Per esecuzioni bloccate, debitori che hanno svuotato il proprio patrimonio e crediti che nessuno segue più. Tu mantieni il credito, e Poursuite guadagna solo se tu incassi.',
      forWhomTitle: 'Per chi',
      forWhom: [
        'Creditori con esecuzione sospesa per mancanza di beni',
        'Aziende con vecchi crediti giudiziali senza un seguito attivo',
        'Creditori che sospettano occultamento di beni o frodi',
        'Studi legali che cercano un partner investigativo in Brasile',
      ],
      sections: [
        {
          h2: 'Perché tante esecuzioni si bloccano in Brasile',
          paras: [
            'La maggior parte delle esecuzioni non fallisce per mancanza di diritto, ma per mancanza di informazioni. Dopo le ricerche automatiche (blocco dei conti, pubblico registro dei veicoli e dichiarazioni dei redditi), molte procedure vengono sospese e avanzano verso la prescrizione in corso di causa (art. 921 del Codice di procedura civile).',
            'Il patrimonio però raramente scompare. Di solito si trova in una società di famiglia, intestato a parenti o in un’eredità non ancora divisa.',
          ],
        },
        {
          h2: 'Cosa facciamo',
          bullets: [
            'Revisione del fascicolo e dei tentativi di pignoramento precedenti',
            'Indagine patrimoniale sul debitore, sui soci e su persone e società collegate',
            'Individuazione di atti in frode all’esecuzione, frodi ai creditori e abusi della personalità giuridica',
            'Strategia processuale con gli avvocati del caso, incluso l’incidente di superamento dello schermo societario (artt. 133-137 del Codice di procedura civile)',
            'Report periodici su ogni sviluppo e sulla prossima azione',
          ],
        },
        {
          h2: 'Come funziona il compenso',
          paras: [
            'Il compenso di Poursuite è una percentuale dell’importo effettivamente recuperato, fissata nel contratto in base all’entità del credito, alla fase del processo e al lavoro necessario. Di regola non sono previsti compensi fissi.',
            'Gli onorari degli avvocati e le spese processuali sono regolati nello stesso contratto, in modo trasparente, prima dell’inizio.',
          ],
        },
      ],
      faq: [
        {
          q: 'E se non si recupera nulla?',
          a: 'Nella formula a successo, Poursuite non percepisce compensi senza recupero. La gestione di eventuali spese processuali è concordata per iscritto prima di iniziare.',
        },
        {
          q: 'Devo cambiare avvocato?',
          a: 'Non necessariamente. Possiamo lavorare con l’avvocato che già segue la causa oppure presentarti studi legali partner in Brasile.',
        },
        {
          q: 'La mia causa è archiviata. Si può ancora recuperare?',
          a: 'Dipende dalla durata della sospensione e dal calcolo della prescrizione. Per questo il primo passo è sempre l’analisi del fascicolo, che ci dice se c’è ancora una strada.',
        },
      ],
      ctaTitle: 'La tua esecuzione è bloccata?',
      ctaText: 'Inviaci il numero della causa e scopri se rientra nel recupero a successo.',
    },

    investigation: {
      name: 'Indagini patrimoniali',
      summary:
        'Rintracciamo immobili, società, partecipazioni, veicoli e crediti dei debitori in Brasile e individuiamo occultamenti di beni e frodi.',
      h1: 'Indagini patrimoniali e ricerca dei beni del debitore in Brasile',
      lede:
        'Prima di agire, acquistare o cedere un credito, bisogna sapere cosa possiede il debitore e dove. Svolgiamo indagini patrimoniali su persone e società in Brasile per creditori, studi legali e investitori.',
      forWhomTitle: 'Quando serve',
      forWhom: [
        'Il blocco dei conti e le ricerche di routine hanno dato esito negativo',
        'Ci sono indizi che il debitore abbia trasferito beni a familiari o società',
        'Stai per fare causa e vuoi sapere se il convenuto può pagare',
        'Stai valutando l’acquisto di un credito o di un portafoglio',
      ],
      sections: [
        {
          h2: 'Cosa cerchiamo',
          bullets: [
            'Immobili del debitore, del coniuge, di parenti e di società collegate',
            'Partecipazioni societarie, holding di famiglia e modifiche societarie recenti',
            'Veicoli, imbarcazioni e aeromobili',
            'Legami tra persone e società che indichino un gruppo economico o prestanome',
            'Trasferimenti e operazioni che possano costituire frode ai creditori',
          ],
        },
        {
          h2: 'Fonti e metodo',
          paras: [
            'Lavoriamo con fonti pubbliche e lecite: registri immobiliari, registri delle imprese, banche dati giudiziarie, gazzette ufficiali, notai e pubblici registri. Le incrociamo con strumenti tecnologici per far emergere collegamenti che una ricerca isolata non mostra.',
            'Quando l’informazione è coperta da segreto bancario o fiscale, indichiamo le misure che l’avvocato può chiedere al giudice, come SISBAJUD, INFOJUD o SNIPER, il sistema nazionale di indagine patrimoniale del Consiglio nazionale di giustizia brasiliano (CNJ).',
          ],
        },
        {
          h2: 'Il report',
          paras: [
            'Ricevi un report con i beni e i collegamenti individuati, la fonte di ogni informazione, la valutazione di ciò che è pignorabile e le azioni giudiziarie consigliate per ciascun elemento, in italiano e pronto per il tuo team legale.',
          ],
        },
      ],
      faq: [
        {
          q: 'L’indagine è legale?',
          a: 'Sì. Usiamo solo fonti pubbliche, banche dati ad accesso consentito e informazioni tratte da procedimenti giudiziari. Non accediamo a dati riservati senza un provvedimento del giudice.',
        },
        {
          q: 'Indagate su società e persone fisiche?',
          a: 'Sì, e nella maggior parte dei casi su entrambe: la società debitrice, i suoi soci e le persone e società collegate.',
        },
        {
          q: 'Quanto tempo serve per il report?',
          a: 'Dipende dal numero di soggetti e dalla complessità del gruppo. Indichiamo i tempi insieme al preventivo.',
        },
      ],
      ctaTitle: 'Devi trovare i beni di un debitore in Brasile?',
      ctaText: 'Raccontaci il caso. Ti invieremo ambito e preventivo.',
    },

    duediligence: {
      name: 'Due diligence di portafogli',
      summary:
        'Analizziamo portafogli di crediti deteriorati in Brasile, causa per causa, per chi compra e chi vende: probabilità di recupero, tempi, rischi e prezzo.',
      h1: 'Due diligence e valutazione di portafogli di crediti in Brasile',
      lede:
        'Chi compra o cede un portafoglio di crediti deteriorati in Brasile deve sapere cosa sta negoziando. Analizziamo ogni causa e ogni debitore per arrivare a un prezzo difendibile.',
      forWhomTitle: 'Per chi',
      forWhom: [
        'Investitori e fondi che acquistano NPL brasiliani',
        'Banche, fintech e fondi di credito che preparano una cessione',
        'Aziende che vogliono valutare il proprio portafoglio di contenzioso',
        'Gestori che devono decidere dove concentrare il recupero',
      ],
      sections: [
        {
          h2: 'Cosa analizziamo',
          bullets: [
            'Stato processuale di ogni causa: fase, notifica, pignoramenti, impugnazioni e termini',
            'Rischi di prescrizione, nullità ed eccezioni pendenti',
            'Solvibilità e patrimonio rintracciabile di debitori e coobbligati',
            'Garanzie esistenti e loro efficacia',
            'Stima dell’importo recuperabile e dei tempi di incasso',
          ],
        },
        {
          h2: 'Classificazione e prezzo',
          paras: [
            'Ogni credito è classificato per probabilità e tempi di recupero. Il risultato mostra dove si trova il valore del portafoglio, quali cause meritano un intervento immediato e quali conviene abbandonare o cedere.',
            'Per chi compra, orienta l’offerta. Per chi vende, consente di creare lotti e negoziare sui dati, non solo sul valore nominale.',
          ],
        },
        {
          h2: 'Cosa ricevi',
          bullets: [
            'Foglio di calcolo con l’analisi di ogni causa e di ogni debitore',
            'Report di sintesi con la classificazione del portafoglio e la stima di recupero',
            'Raccomandazione di strategia e di prezzo',
          ],
        },
      ],
      faq: [
        {
          q: 'C’è una dimensione minima del portafoglio?',
          a: 'Non c’è un minimo rigido. Analizziamo dai piccoli lotti ai grandi portafogli, con ambito e tempi adeguati al volume.',
        },
        {
          q: 'Poursuite può acquistare il portafoglio dopo l’analisi?',
          a: 'Sì. In alcuni casi la due diligence è il primo passo verso un’offerta per una parte o per l’intero portafoglio.',
        },
        {
          q: 'Come sono protetti i dati del portafoglio?',
          a: 'Firmiamo un accordo di riservatezza prima di ricevere la base dati e usiamo i dati solo per l’analisi concordata.',
        },
      ],
      ctaTitle: 'Devi comprare o cedere un portafoglio in Brasile?',
      ctaText: 'Parliamo di volumi, tipo di credito e tempi.',
    },

    foreign: {
      name: 'Recupero crediti in Brasile',
      summary:
        'Per aziende e investitori fuori dal Brasile: rintracciamo il patrimonio del debitore brasiliano e coordiniamo il recupero con avvocati locali.',
      h1: 'Recupero crediti in Brasile per creditori esteri',
      lede:
        'Un cliente, un partner o un debitore brasiliano deve dei soldi alla tua azienda? Ti aiutiamo a capire le possibilità di recupero, a rintracciare il patrimonio del debitore e ad agire in Brasile, con tutto spiegato in italiano.',
      forWhomTitle: 'Per chi',
      forWhom: [
        'Esportatori e fornitori con fatture non pagate da clienti brasiliani',
        'Creditori con una sentenza o un lodo arbitrale straniero contro un debitore in Brasile',
        'Investitori esteri in crediti deteriorati brasiliani',
        'Studi legali esteri che hanno bisogno di supporto locale in Brasile',
      ],
      sections: [
        {
          h2: 'Le strade per recuperare in Brasile',
          paras: [
            'Una sentenza straniera deve essere riconosciuta (omologata) dal Superior Tribunal de Justiça (STJ) prima di poter essere eseguita in Brasile. Lo stesso vale per i lodi arbitrali stranieri, riconosciuti in base alla Convenzione di New York, di cui il Brasile è parte.',
            'Contratti e titoli di credito possono spesso essere azionati direttamente davanti ai giudici brasiliani, senza un processo preventivo all’estero. La strada giusta dipende dai documenti in tuo possesso e da dove si trova il patrimonio del debitore.',
          ],
        },
        {
          h2: 'Come ti aiutiamo',
          bullets: [
            'Valutazione preliminare del credito e della documentazione',
            'Indagine patrimoniale sul debitore in Brasile',
            'Coordinamento con studi legali brasiliani per il riconoscimento, il recupero e l’esecuzione',
            'Report periodici in italiano per tutta la durata della procedura',
            'Acquisto del credito, quando il creditore preferisce chiudere la pratica e incassare subito',
          ],
        },
        {
          h2: 'Perché conta conoscere il terreno',
          paras: [
            'L’esecuzione in Brasile si basa su sistemi giudiziari per bloccare i conti e localizzare i beni, e su strumenti, come il superamento dello schermo societario, che funzionano diversamente rispetto all’Italia e agli altri ordinamenti europei. Sapere dove cercare e cosa chiedere al giudice fa la differenza tra un credito che si blocca e uno che viene pagato.',
          ],
        },
      ],
      faq: [
        {
          q: 'Devo prima fare causa nel mio Paese per recuperare in Brasile?',
          a: 'Non sempre. A seconda dei documenti, il recupero può iniziare direttamente in Brasile. Analizziamo il caso e ti indichiamo la strada più breve.',
        },
        {
          q: 'I documenti vanno tradotti?',
          a: 'I documenti in lingua straniera depositati davanti ai giudici brasiliani richiedono una traduzione giurata in portoghese. Ti aiutiamo a organizzare ciò che serve.',
        },
        {
          q: 'In quali lingue lavorate?',
          a: 'Italiano, inglese, spagnolo, francese e portoghese.',
        },
      ],
      ctaTitle: 'Hai un credito da recuperare in Brasile?',
      ctaText: 'Inviaci un riassunto del caso in italiano.',
    },
  },

  about: {
    h1: 'Chi siamo',
    lede:
      'Poursuite è un gestore di attivi deteriorati con sede a San Paolo, in Brasile, fondato da professionisti con esperienza nel recupero crediti, nella ristrutturazione del debito e nelle indagini patrimoniali.',
    sections: [
      {
        h2: 'Il nome',
        paras: [
          'Poursuite in francese significa inseguimento, ricerca, e indica anche la prosecuzione di un’azione giudiziaria. È quello che facciamo: seguiamo il credito fino in fondo, anche quando tutti gli altri ci hanno rinunciato.',
        ],
      },
      {
        h2: 'Come lavoriamo',
        paras: [
          'Lavoriamo come una boutique: pochi casi alla volta, analizzati in profondità, da un team che conosce sia il processo civile brasiliano sia il mercato dei crediti deteriorati.',
          'Uniamo tre competenze che raramente si trovano insieme: la lettura tecnica del fascicolo, l’indagine patrimoniale supportata dalla tecnologia e capitale proprio per acquistare crediti. Per questo possiamo offrire al creditore più di una soluzione allo stesso problema.',
          'Non siamo uno studio legale. Quando il caso richiede un’azione giudiziaria, lavoriamo con gli avvocati del creditore o con studi legali partner.',
        ],
      },
    ],
    principlesTitle: 'Missione, visione e valori',
    principles: [
      {
        title: 'Missione',
        text: 'Trasformare conoscenza e informazioni in risultati finanziari per i nostri clienti e partner.',
      },
      {
        title: 'Visione',
        text: 'Essere un punto di riferimento nella gestione, nella strategia e nel recupero di attivi considerati irrecuperabili.',
      },
      {
        title: 'Valori',
        text: 'Etica, rispetto, trasparenza e riservatezza, con un lavoro efficiente e ad alto valore aggiunto.',
      },
    ],
  },

  contact: {
    h1: 'Contatti',
    lede:
      'Raccontaci di quale credito o portafoglio si tratta. Se ce l’hai, indica il numero della causa in Brasile: ci permette di fare la prima analisi più rapidamente.',
    formTitle: 'Scrivici',
    name: 'Nome',
    email: 'E-mail',
    company: 'Azienda (facoltativo)',
    phone: 'Telefono o WhatsApp (facoltativo)',
    profile: 'Sei',
    profiles: [
      'Un creditore estero',
      'Un creditore con un credito giudiziale in Brasile',
      'Una banca, fintech o fondo di credito',
      'Un avvocato o studio legale',
      'Un investitore',
      'Altro',
    ],
    message: 'Messaggio',
    messageHint: 'Es.: importo indicativo, numero della causa, tipo di credito, località del debitore.',
    consent: 'Acconsento all’uso dei miei dati per rispondere a questa richiesta.',
    submit: 'Invia messaggio',
    sending: 'Invio in corso…',
    error: 'Non è stato possibile inviare il messaggio. Riprova o scrivi a contato@poursuite.com.br.',
    directTitle: 'Contatto diretto',
    emailLabel: 'E-mail',
    addressLabel: 'Indirizzo',
    address: 'Av. Brigadeiro Faria Lima, 2369, cj. 1102\nJardim Paulistano, São Paulo/SP\n01452-922, Brasile',
    confidentiality: 'Le informazioni inviate sono trattate con riservatezza e usate solo per valutare il tuo caso.',
  },

  privacy: {
    h1: 'Informativa privacy',
    updated: 'Aggiornata a novembre 2026.',
    sections: [
      {
        h2: 'Titolare del trattamento',
        paras: [
          'Poursuite Investments Consultoria Ltda., CNPJ 38.425.501/0001-92, Av. Brigadeiro Faria Lima, 2369, cj. 1102, Jardim Paulistano, São Paulo/SP, 01452-922, Brasile. Contatto per questioni di privacy: contato@poursuite.com.br.',
        ],
      },
      {
        h2: 'Quali dati raccogliamo',
        paras: [
          'Raccogliamo solo i dati che ci invii tramite il modulo di contatto o via e-mail: nome, indirizzo e-mail, telefono, azienda e le informazioni contenute nel messaggio.',
          'Questo sito non usa cookie pubblicitari né strumenti di tracciamento di terze parti. Possiamo utilizzare statistiche di accesso aggregate e non identificative fornite dalla nostra infrastruttura di hosting.',
        ],
      },
      {
        h2: 'Finalità e basi giuridiche',
        paras: [
          'Usiamo i dati per rispondere alla tua richiesta, valutare il credito o il caso presentato e, in caso di incarico, eseguire il contratto. Le basi giuridiche sono il consenso e l’esecuzione di misure precontrattuali, ai sensi della legge generale brasiliana sulla protezione dei dati (legge 13.709/2018, LGPD) e, ove applicabile, del Regolamento generale sulla protezione dei dati dell’UE (GDPR).',
        ],
      },
      {
        h2: 'Con chi li condividiamo',
        paras: [
          'Non vendiamo dati. Li condividiamo solo con i fornitori necessari al funzionamento del sito e della posta elettronica e, con la tua autorizzazione, con gli avvocati che seguiranno il tuo caso.',
        ],
      },
      {
        h2: 'Trasferimenti internazionali',
        paras: [
          'Poursuite ha sede in Brasile: i dati inviati dall’estero sono trattati in Brasile e dai nostri fornitori di hosting e posta elettronica, che possono conservarli in altri Paesi con garanzie adeguate.',
        ],
      },
      {
        h2: 'Per quanto tempo li conserviamo',
        paras: [
          'Conserviamo i dati per il tempo necessario a gestire la tua richiesta e, in caso di incarico, per il periodo previsto dalla legge. Successivamente vengono cancellati.',
        ],
      },
      {
        h2: 'I tuoi diritti',
        paras: [
          'Puoi chiedere conferma del trattamento, accesso, rettifica, anonimizzazione, portabilità o cancellazione dei dati, e revocare il consenso, scrivendo a contato@poursuite.com.br. Puoi inoltre proporre reclamo all’Autorità nazionale brasiliana per la protezione dei dati (ANPD) o all’autorità di controllo del tuo Paese, come il Garante per la protezione dei dati personali in Italia.',
        ],
      },
    ],
  },

  thanks: {
    h1: 'Messaggio inviato',
    text: 'Abbiamo ricevuto il tuo messaggio e ti risponderemo all’indirizzo e-mail indicato.',
    back: 'Torna alla home',
  },

  notFound: {
    title: 'Pagina non trovata',
    text: 'L’indirizzo potrebbe essere cambiato con la nuova versione del sito.',
    back: 'Vai alla home',
  },
};

export default it;
