import type { Content } from './types';

const en: Content = {
  ui: {
    skip: 'Skip to content',
    menu: 'Menu',
    close: 'Close',
    services: 'Services',
    about: 'About us',
    contact: 'Contact',
    language: 'Language',
    home: 'Home',
    ctaPrimary: 'Have your claim assessed',
    ctaSecondary: 'How we work',
    readMore: 'Learn more',
    faqTitle: 'Frequently asked questions',
    otherServices: 'Other services',
    footerTagline: 'Distressed asset management and recovery in Brazil.',
    footerServices: 'Services',
    footerCompany: 'Company',
    footerContact: 'Contact',
    legalName: 'Poursuite Investments Consultoria Ltda.',
    cnpj: 'Brazilian company no. (CNPJ) 38.425.501/0001-92',
    rights: 'All rights reserved.',
    privacy: 'Privacy policy',
    notLawFirm:
      'Poursuite is not a law firm. Court proceedings are handled by attorneys retained by the creditor or by partner law firms in Brazil.',
    breadcrumb: 'You are here',
  },

  meta: {
    home: {
      title: 'Poursuite | Debt recovery and asset tracing in Brazil',
      description:
        'Distressed asset manager based in São Paulo. We buy court-awarded claims, recover debts on a contingency basis and trace the assets of debtors in Brazil.',
    },
    acquisition: {
      title: 'We buy judicial claims and litigation portfolios in Brazil | Poursuite',
      description:
        'Sell your Brazilian court claim, enforcement proceeding or attorney fee award and get paid now. Poursuite acquires judicial credits and portfolios of lawsuits.',
    },
    recovery: {
      title: 'Contingency-fee debt recovery in Brazil | Poursuite',
      description:
        'Stalled enforcement and a debtor with “no assets”? We trace the assets and structure the recovery in Brazil, paid as a share of what is actually collected.',
    },
    investigation: {
      title: 'Asset tracing and debtor investigations in Brazil | Poursuite',
      description:
        'We locate real estate, shareholdings, vehicles and receivables of debtors in Brazil, and identify asset concealment and fraudulent transfers.',
    },
    duediligence: {
      title: 'Brazilian NPL portfolio due diligence and pricing | Poursuite',
      description:
        'Case-by-case legal and asset analysis of Brazilian distressed credit portfolios for buyers and sellers: recovery odds, timing, risks and price.',
    },
    foreign: {
      title: 'Debt recovery in Brazil for foreign creditors | Poursuite',
      description:
        'Unpaid by a Brazilian company or individual? We trace the debtor’s assets in Brazil and coordinate collection and enforcement with local attorneys, in English.',
    },
    about: {
      title: 'About us | Poursuite',
      description:
        'Poursuite is a São Paulo distressed asset manager founded by professionals in debt recovery, debt restructuring and asset investigation.',
    },
    contact: {
      title: 'Contact | Poursuite',
      description:
        'Send us details of your claim or portfolio for assessment. Poursuite, Av. Brigadeiro Faria Lima 2369, São Paulo, Brazil.',
    },
    privacy: {
      title: 'Privacy policy | Poursuite',
      description: 'How Poursuite handles personal data received through this website.',
    },
    thanks: {
      title: 'Message sent | Poursuite',
      description: 'We have received your message.',
    },
  },

  home: {
    h1: 'Debt recovery and distressed assets in Brazil',
    lede:
      'We buy court-awarded claims, recover debts on a contingency basis and find the assets of debtors who appear to own nothing in their own name.',
    trail: {
      title: 'Where a debtor with “no assets” usually keeps them',
      execution: 'Stalled enforcement',
      executionDetail: 'Bank account freeze came back empty',
      debtor: 'Debtor',
      debtorDetail: 'Nothing registered in their name',
      nodes: [
        { label: 'Company linked to the debtor', detail: 'Economic group' },
        { label: 'Family holding company shares', detail: 'Reverse veil piercing' },
        { label: 'Property in a relative’s name', detail: 'Fraudulent transfer' },
        { label: 'Undivided inheritance', detail: 'Attachment of the heir’s share' },
      ],
      caption:
        'Illustrative example. In many stalled enforcement cases the assets exist, but they are not registered to the debtor’s tax ID.',
    },
    servicesTitle: 'What we do',
    servicesIntro:
      'Every claim calls for a different route. Sometimes selling it makes sense; sometimes recovering it does. Either way, the first question is where the debtor’s assets are.',
    audienceTitle: 'Who we work with',
    audience: [
      {
        title: 'Foreign creditors',
        text: 'Companies and individuals owed money by Brazilian debtors, with or without a judgment.',
      },
      {
        title: 'Investors in Brazilian credit',
        text: 'Funds and buyers of distressed debt and litigation assets who need local analysis and servicing.',
      },
      {
        title: 'Banks, fintechs and credit funds',
        text: 'Institutions selling, pricing or outsourcing the recovery of non-performing portfolios.',
      },
      {
        title: 'Law firms',
        text: 'Firms in Brazil or abroad that need asset tracing in Brazil for their clients.',
      },
    ],
    methodTitle: 'How we work',
    methodIntro: 'Every engagement starts with the same diagnosis. Only then do we agree the best route with you.',
    steps: [
      {
        title: 'Claim review',
        text: 'We read the case file or the debt instrument: updated amount, stage, limitation periods, guarantees, who is liable and what has already been tried.',
      },
      {
        title: 'Asset tracing',
        text: 'We search for property, companies, shareholdings and suspicious transfers by the debtor and related parties.',
      },
      {
        title: 'Proposal',
        text: 'With the asset map in hand, we put forward a route: purchase of the claim, contingency-fee recovery, or a report for your own team to act on.',
      },
      {
        title: 'Enforcement and reporting',
        text: 'We coordinate the legal steps with the attorneys on the case and send regular reports in English until payment.',
      },
    ],
    insightTitle: 'Information is what turns a stalled claim into a paid one',
    insightText: [
      'Most enforcement cases do not stall for lack of rights, but for lack of information about the debtor and their assets.',
      'That is why we combine technical review of the case file, technology-assisted asset investigation and our own capital. Together, they reveal what routine searches miss and let us choose, for each claim, the route most likely to succeed.',
    ],
    internationalTitle: 'Owed money by a Brazilian company?',
    internationalText:
      'We work with companies, investors and law firms outside Brazil in English, Spanish, French, Italian and Portuguese, from locating assets to enforcing the debt.',
    internationalLink: 'Debt recovery in Brazil for foreign creditors',
    faq: [
      {
        q: 'What kinds of claims does Poursuite review?',
        a: 'Claims under enforcement, court judgments, enforceable debt instruments (promissory notes, cheques, bank credit notes and contracts), attorney fee awards and portfolios with many cases. For foreign creditors, also unpaid invoices, foreign judgments and arbitral awards against Brazilian debtors.',
      },
      {
        q: 'What is the difference between selling a claim and contingency-fee recovery?',
        a: 'When you sell, you receive a price now and assign the claim to Poursuite, which takes on the risk and the time of collection. With contingency-fee recovery the claim remains yours: we trace assets and structure the collection, and our fee is a percentage of what is actually received.',
      },
      {
        q: 'How much does an initial assessment cost?',
        a: 'The first review, to tell you whether your claim fits one of our models, is free of charge. In-depth investigations and portfolio due diligence are quoted according to scope.',
      },
      {
        q: 'Is Poursuite a law firm?',
        a: 'No. We are an asset manager. When a case requires court action, it is handled by the creditor’s attorneys or by partner law firms in Brazil, with whom we work closely.',
      },
      {
        q: 'Is my information kept confidential?',
        a: 'Yes. Information you send is used only to assess your case, and where needed we sign a non-disclosure agreement before receiving documents.',
      },
    ],
    finalTitle: 'Have a claim in Brazil?',
    finalText: 'Send us the case number or a short summary of the debt. We will tell you whether and how we can help.',
  },

  services: {
    acquisition: {
      name: 'Purchase of judicial claims',
      summary:
        'We buy your Brazilian court claim, judgment or enforceable debt and pay now, taking on the risk and the time of collection.',
      h1: 'We buy judicial claims and litigation portfolios in Brazil',
      lede:
        'Enforcement in Brazil can take years. If you would rather not wait, you can sell your claim. Poursuite buys judicial and out-of-court claims and pays when the assignment is signed.',
      forWhomTitle: 'Who it is for',
      forWhom: [
        'Companies and individuals with a claim under enforcement in Brazil',
        'Attorneys with court-awarded fees to collect',
        'Banks, fintechs and credit funds selling portfolios or batches of cases',
        'Creditors who prefer cash today to an uncertain recovery',
      ],
      sections: [
        {
          h2: 'How the assignment works',
          paras: [
            'The sale is made by assignment of credit (cessão de crédito) under articles 286 to 298 of the Brazilian Civil Code. The creditor transfers to Poursuite the right to receive the debt, and Poursuite takes the creditor’s place in the lawsuit.',
            'The Brazilian Code of Civil Procedure allows the assignee to continue the enforcement without the debtor’s consent (art. 778). For the seller, the matter ends there: the price is paid, and the cost and risk of collection disappear.',
          ],
        },
        {
          h2: 'What we buy',
          bullets: [
            'Claims under enforcement of judgments or of enforceable instruments',
            'Promissory notes, cheques, bank credit notes (CCBs) and defaulted contracts',
            'Attorney fee awards (honorários de sucumbência)',
            'Batches and portfolios of lawsuits from financial institutions and companies',
          ],
        },
        {
          h2: 'How we price a claim',
          paras: [
            'The price depends on the real chance of recovery, not just on the face value. Before making an offer we review the case, the debtors’ solvency, attachable assets and receivables, limitation and nullity risks, and the likely time to payment.',
            'That is why a claim that looks lost may be worth more than expected, when our investigation finds assets that have not yet surfaced in the lawsuit.',
          ],
        },
        {
          h2: 'Steps',
          bullets: [
            'You send the case number or the documents of the claim',
            'We carry out the legal and asset review',
            'We make a purchase offer',
            'We sign the assignment, pay, and file for substitution in the lawsuit',
          ],
        },
      ],
      faq: [
        {
          q: 'Do I need the debtor’s consent to sell the claim?',
          a: 'No. Under Brazilian law the assignment does not require the debtor’s agreement; the debtor only needs to be notified. In court, substitution of the creditor does not require the debtor’s consent either.',
        },
        {
          q: 'Can you buy only part of a claim?',
          a: 'We can consider partial purchases or structures in which the creditor keeps a share of the outcome, on a case-by-case basis.',
        },
        {
          q: 'How quickly will I get an offer?',
          a: 'It depends on the information available and the number of cases. For a single claim with an accessible case file, the initial review is usually quick; portfolios take longer.',
        },
      ],
      ctaTitle: 'Want to know what your claim is worth?',
      ctaText: 'Send us the case number. The first review is free.',
    },

    recovery: {
      name: 'Contingency-fee recovery',
      summary:
        'The claim stays yours. We trace assets, structure the collection with the attorneys on the case and are paid from what is actually recovered.',
      h1: 'Contingency-fee debt recovery in Brazil',
      lede:
        'For stalled enforcement, debtors who have emptied their estate and claims nobody is chasing any more. You keep the claim, and Poursuite only earns if you get paid.',
      forWhomTitle: 'Who it is for',
      forWhom: [
        'Creditors whose enforcement was suspended for lack of assets',
        'Companies with old court claims and no active follow-up',
        'Creditors who suspect asset concealment or fraud',
        'Law firms looking for an investigation partner in Brazil',
      ],
      sections: [
        {
          h2: 'Why so many enforcement cases stall in Brazil',
          paras: [
            'Most enforcement proceedings do not fail for lack of rights, but for lack of information. After the automated searches (bank account freezes, vehicle registry and tax return queries), many cases are suspended and drift towards intercurrent limitation (art. 921 of the Code of Civil Procedure).',
            'The assets, however, rarely vanish. They tend to sit in a family company, in relatives’ names or in an inheritance that has not yet been divided.',
          ],
        },
        {
          h2: 'What we do',
          bullets: [
            'Review of the case file and of previous attachment attempts',
            'Asset tracing on the debtor, partners and related people and companies',
            'Identification of fraudulent transfers and abuse of corporate structures',
            'Litigation strategy with the attorneys on the case, including veil-piercing incidents (arts. 133 to 137 of the Code of Civil Procedure)',
            'Regular reports on each step and the next action',
          ],
        },
        {
          h2: 'How fees work',
          paras: [
            'Poursuite’s fee is a percentage of the amount actually recovered, set in the agreement according to the size of the claim, the stage of the case and the work involved. As a rule there are no fixed fees.',
            'Attorney fees and court costs are addressed in the same agreement, transparently, before work begins.',
          ],
        },
      ],
      faq: [
        {
          q: 'What if nothing is recovered?',
          a: 'Under the contingency model, Poursuite is not paid unless there is a recovery. How any court costs are handled is agreed in writing before we start.',
        },
        {
          q: 'Do I have to change attorneys?',
          a: 'Not necessarily. We can work with the attorney already handling the case or introduce partner law firms in Brazil if you prefer.',
        },
        {
          q: 'My case has been archived. Can it still be recovered?',
          a: 'It depends on how long it has been suspended and on the limitation period. That is why the first step is always a review of the case file, which tells us whether there is still a way forward.',
        },
      ],
      ctaTitle: 'Is your enforcement stalled?',
      ctaText: 'Send us the case number and find out whether it fits our contingency model.',
    },

    investigation: {
      name: 'Asset tracing',
      summary:
        'We locate property, companies, shareholdings, vehicles and receivables of debtors in Brazil, and identify asset concealment and fraud.',
      h1: 'Asset tracing and debtor investigations in Brazil',
      lede:
        'Before you sue, buy or sell a debt, you need to know what the debtor owns and where. We carry out asset investigations on individuals and companies in Brazil for creditors, law firms and investors.',
      forWhomTitle: 'When to use it',
      forWhom: [
        'Bank account freezes and routine searches came back empty',
        'There are signs the debtor moved assets to relatives or companies',
        'You are about to sue and want to know whether the defendant can pay',
        'You are assessing the purchase of a claim or a portfolio',
      ],
      sections: [
        {
          h2: 'What we look for',
          bullets: [
            'Real estate held by the debtor, spouses, relatives and related companies',
            'Shareholdings, family holding companies and recent corporate changes',
            'Vehicles, vessels and aircraft',
            'Links between people and companies suggesting an economic group or the use of nominees',
            'Transfers and transactions that may amount to fraud against creditors',
          ],
        },
        {
          h2: 'Sources and method',
          paras: [
            'We rely on public and lawful sources: real estate registries, commercial registries, court databases, official gazettes, notary offices and public records. We cross-reference them with technology tools to uncover connections that a single search would miss.',
            'Where information is protected by bank or tax secrecy, we set out the measures the attorney can request from the court, such as SISBAJUD, INFOJUD and SNIPER, the national asset investigation system of Brazil’s National Council of Justice (CNJ).',
          ],
        },
        {
          h2: 'The report',
          paras: [
            'You receive a report listing the assets and links found, the source of each item, an assessment of what can be attached and the recommended court measures for each finding, in English or in your language, ready for your legal team to use.',
          ],
        },
      ],
      faq: [
        {
          q: 'Is the investigation lawful?',
          a: 'Yes. We use only public sources, databases we are permitted to access and information from court records. We do not access confidential data without a court order.',
        },
        {
          q: 'Do you investigate both companies and individuals?',
          a: 'Yes, and in most cases we look at both: the debtor company, its partners, and the people and companies connected to them.',
        },
        {
          q: 'How long does a report take?',
          a: 'It depends on the number of parties and the complexity of the group. We give you the timeline together with the quote.',
        },
      ],
      ctaTitle: 'Need to find a debtor’s assets in Brazil?',
      ctaText: 'Tell us about the case. We will send you the scope and a quote.',
    },

    duediligence: {
      name: 'Portfolio due diligence',
      summary:
        'We analyse Brazilian distressed credit portfolios case by case for buyers and sellers: recovery odds, timing, risks and price.',
      h1: 'Due diligence and pricing of credit portfolios in Brazil',
      lede:
        'Anyone buying or selling a portfolio of non-performing claims in Brazil needs to know what is really in it. We review each lawsuit and each debtor to reach a price you can defend.',
      forWhomTitle: 'Who it is for',
      forWhom: [
        'Investors and funds buying Brazilian distressed debt',
        'Banks, fintechs and credit funds preparing a portfolio sale',
        'Companies that want to value their book of claims in litigation',
        'Managers deciding where to focus recovery efforts',
      ],
      sections: [
        {
          h2: 'What we analyse',
          bullets: [
            'Procedural status of each case: stage, service, attachments, appeals and deadlines',
            'Limitation, nullity and pending defence risks',
            'Solvency and traceable assets of debtors and co-obligors',
            'Existing collateral and how enforceable it is',
            'Estimated recoverable value and time to recovery',
          ],
        },
        {
          h2: 'Ranking and price',
          paras: [
            'Each claim is ranked by likelihood and timing of recovery. The result shows where the portfolio’s value lies, which cases deserve immediate effort and which should be written off or sold.',
            'For buyers, this informs the bid. For sellers, it makes it possible to split batches and negotiate on data rather than face value.',
          ],
        },
        {
          h2: 'Deliverables',
          bullets: [
            'Spreadsheet with the analysis of every case and debtor',
            'Executive report with the portfolio ranking and recovery estimate',
            'Strategy and pricing recommendation',
          ],
        },
      ],
      faq: [
        {
          q: 'Is there a minimum portfolio size?',
          a: 'There is no strict minimum. We review anything from small batches to large portfolios, with scope and timing adjusted to volume.',
        },
        {
          q: 'Can Poursuite buy the portfolio after the review?',
          a: 'Yes. In some cases due diligence is the first step towards an offer for part or all of the portfolio.',
        },
        {
          q: 'How is portfolio data protected?',
          a: 'We sign a non-disclosure agreement before receiving the data and use it solely for the agreed analysis.',
        },
      ],
      ctaTitle: 'Buying or selling a portfolio in Brazil?',
      ctaText: 'Talk to us about volume, type of claim and timing.',
    },

    foreign: {
      name: 'Debt recovery in Brazil',
      summary:
        'For companies and investors outside Brazil: we trace the Brazilian debtor’s assets and coordinate collection with local attorneys.',
      h1: 'Debt recovery in Brazil for foreign creditors',
      lede:
        'Is your company owed money by a Brazilian customer, partner or debtor? We help you understand your chances of recovery, locate the debtor’s assets and pursue collection in Brazil, with everything explained in English.',
      forWhomTitle: 'Who it is for',
      forWhom: [
        'Exporters and suppliers with invoices unpaid by Brazilian customers',
        'Creditors holding a foreign judgment or arbitral award against a debtor in Brazil',
        'Foreign investors in Brazilian distressed debt',
        'Law firms abroad that need local support in Brazil',
      ],
      sections: [
        {
          h2: 'Routes to collect in Brazil',
          paras: [
            'A foreign court judgment must be recognised by Brazil’s Superior Court of Justice (STJ) before it can be enforced in Brazil. The same applies to foreign arbitral awards, which are recognised under the New York Convention, to which Brazil is a party.',
            'Contracts and debt instruments can often be enforced directly before Brazilian courts, without prior proceedings abroad. The right route depends on the documents you hold and on where the debtor’s assets are.',
          ],
        },
        {
          h2: 'How we help',
          bullets: [
            'Preliminary assessment of the claim and supporting documents',
            'Asset tracing on the debtor in Brazil',
            'Coordination with Brazilian law firms for recognition, collection and enforcement',
            'Regular reporting in English throughout the process',
            'Purchase of the claim, when the creditor prefers to close the matter and be paid now',
          ],
        },
        {
          h2: 'Why local knowledge matters',
          paras: [
            'Brazilian enforcement relies on court-run systems for freezing bank accounts and locating assets, and on procedures, such as piercing the corporate veil, that work differently from those in other jurisdictions. Knowing where to look and what to ask the judge for makes the difference between a claim that stalls and one that is paid.',
          ],
        },
      ],
      faq: [
        {
          q: 'Do I need to sue in my own country before collecting in Brazil?',
          a: 'Not always. Depending on the documents, collection can start directly in Brazil. We assess the case and recommend the shortest route.',
        },
        {
          q: 'Do my documents need to be translated?',
          a: 'Documents in a foreign language filed with Brazilian courts require a sworn translation into Portuguese. We help you organise what is needed.',
        },
        {
          q: 'Which languages do you work in?',
          a: 'English, Spanish, French, Italian and Portuguese.',
        },
      ],
      ctaTitle: 'Owed money in Brazil?',
      ctaText: 'Send us a short summary of the case in English.',
    },
  },

  about: {
    h1: 'About us',
    lede:
      'Poursuite is a distressed asset manager based in São Paulo, Brazil, founded by professionals experienced in debt recovery, debt restructuring and asset investigation.',
    sections: [
      {
        h2: 'Our name',
        paras: [
          'Poursuite is French for pursuit, and it also means the continuation of legal proceedings. That is what we do: we follow a claim through to the end, even when everyone else has given up on it.',
        ],
      },
      {
        h2: 'How we work',
        paras: [
          'We operate as a boutique: a limited number of cases at a time, analysed in depth, by a team that knows both Brazilian litigation and the distressed credit market.',
          'We combine three things that are rarely found together: technical reading of the case file, technology-assisted asset investigation, and our own capital to buy claims. That lets us offer creditors more than one way out of the same problem.',
          'We are not a law firm. When a case requires court action, we work with the creditor’s attorneys or with partner law firms.',
        ],
      },
    ],
    principlesTitle: 'Mission, vision and values',
    principles: [
      {
        title: 'Mission',
        text: 'To turn knowledge and information into financial results for our clients and partners.',
      },
      {
        title: 'Vision',
        text: 'To be a benchmark in the management, strategy and recovery of assets considered unrecoverable.',
      },
      {
        title: 'Values',
        text: 'Ethics, respect, transparency and confidentiality, with efficient, high-value work.',
      },
    ],
  },

  contact: {
    h1: 'Contact',
    lede:
      'Tell us about the claim or portfolio. If you have it, include the Brazilian case number: it lets us complete the first review faster.',
    formTitle: 'Send us a message',
    name: 'Name',
    email: 'Email',
    company: 'Company (optional)',
    phone: 'Phone or WhatsApp (optional)',
    profile: 'You are',
    profiles: [
      'A foreign creditor',
      'A creditor with a court claim in Brazil',
      'A bank, fintech or credit fund',
      'An attorney or law firm',
      'An investor',
      'Other',
    ],
    message: 'Message',
    messageHint: 'E.g. approximate amount, case number, type of debt, debtor’s location.',
    consent: 'I agree to my data being used to respond to this enquiry.',
    submit: 'Send message',
    sending: 'Sending…',
    error: 'Your message could not be sent. Please try again or write to contato@poursuite.com.br.',
    directTitle: 'Contact us directly',
    emailLabel: 'Email',
    addressLabel: 'Address',
    address: 'Av. Brigadeiro Faria Lima, 2369, cj. 1102\nJardim Paulistano, São Paulo/SP\n01452-922, Brazil',
    confidentiality: 'Information you send is treated as confidential and used only to assess your case.',
  },

  privacy: {
    h1: 'Privacy policy',
    updated: 'Last updated November 2026.',
    sections: [
      {
        h2: 'Controller',
        paras: [
          'Poursuite Investments Consultoria Ltda., CNPJ 38.425.501/0001-92, Av. Brigadeiro Faria Lima, 2369, cj. 1102, Jardim Paulistano, São Paulo/SP, 01452-922, Brazil. Privacy enquiries: contato@poursuite.com.br.',
        ],
      },
      {
        h2: 'Data we collect',
        paras: [
          'We only collect the data you send us through the contact form or by email: name, email address, phone number, company and any information you include in your message.',
          'This website does not use advertising cookies or third-party tracking tools. We may use aggregated, non-identifying traffic statistics provided by our hosting infrastructure.',
        ],
      },
      {
        h2: 'Why we use it',
        paras: [
          'We use your data to respond to your enquiry, assess the claim or case you describe and, if you engage us, perform the agreement. The legal bases are your consent and steps taken prior to entering into a contract, under Brazil’s General Data Protection Law (Law 13,709/2018, LGPD) and, where applicable, the EU General Data Protection Regulation (GDPR).',
        ],
      },
      {
        h2: 'Who we share it with',
        paras: [
          'We do not sell data. It is shared only with service providers needed to run the website and email and, with your authorisation, with the attorneys who will act on your case.',
        ],
      },
      {
        h2: 'International transfers',
        paras: [
          'Poursuite is based in Brazil, and data you send from abroad is processed in Brazil and by our hosting and email providers, which may store it in other countries with appropriate safeguards.',
        ],
      },
      {
        h2: 'How long we keep it',
        paras: [
          'We keep data for as long as needed to handle your enquiry and, if you engage us, for the period required by law. After that, it is deleted.',
        ],
      },
      {
        h2: 'Your rights',
        paras: [
          'You may request confirmation of processing, access, correction, anonymisation, portability or deletion of your data, and withdraw consent, by writing to contato@poursuite.com.br. You may also complain to Brazil’s National Data Protection Authority (ANPD) or to the supervisory authority in your country.',
        ],
      },
    ],
  },

  thanks: {
    h1: 'Message sent',
    text: 'We have received your message and will reply to the email address you provided.',
    back: 'Back to home',
  },

  notFound: {
    title: 'Page not found',
    text: 'The address may have changed with the new version of the website.',
    back: 'Go to the home page',
  },
};

export default en;
