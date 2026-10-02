export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  id: string;
  numericValue: number;
  suffix: string;
  isMillion?: boolean;
  label: string;
  subtext: string;
}

export interface ServiceItemDetail {
  title: string;
  scope: string;
  relevantTo: string;
}

export interface ServiceCategory {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  imagePath: string;
  imageAlt: string;
  services: ServiceItemDetail[];
}

export interface ExpertiseItem {
  number: string;
  title: string;
  category: string;
  description: string;
  capabilities: string[];
}

export interface IndustryItem {
  number: string;
  name: string;
  focusArea: string;
  advisoryScope: string;
}

export interface WhyChooseItem {
  number: string;
  title: string;
  highlight: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverable: string;
}

export interface CredentialItem {
  category: 'Qualification' | 'National Award' | 'Leadership Appointment' | 'Historical Role';
  title: string;
  organization: string;
  statusNote: string;
  isHistorical?: boolean;
}

export interface InsightPlaceholderItem {
  id: string;
  index: string;
  category: 'GST' | 'Tax Litigation' | 'Corporate Law' | 'Auditing' | 'GSTAT' | 'Professional Education';
  editableTitle: string;
  summaryPlaceholder: string;
  publicationChannel: string;
  datePlaceholder: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const GENERATED_IMAGES = {
  boardroom: '/src/assets/images/architectural_tax_boardroom_1790931903819.jpg',
  jurisprudence: '/src/assets/images/legal_jurisprudence_archive_1790931915931.jpg',
  auditorium: '/src/assets/images/gst_foundation_auditorium_1790931927278.jpg',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'GST Foundation', href: '#gst-foundation' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
];

export const TRUST_STATS: StatItem[] = [
  {
    id: 'years',
    numericValue: 20,
    suffix: '+',
    label: 'YEARS',
    subtext: 'Active practice in indirect taxation, corporate law & litigation',
  },
  {
    id: 'articles',
    numericValue: 59,
    suffix: '+',
    label: 'PROFESSIONAL ARTICLES / TAX INSIGHTS',
    subtext: 'Published legal treatises, statutory breakdowns & case studies',
  },
  {
    id: 'views',
    numericValue: 1.14,
    suffix: 'M+',
    isMillion: true,
    label: 'TOTAL VIEWS',
    subtext: 'Digital readership across national tax practitioner networks',
  },
  {
    id: 'locations',
    numericValue: 2,
    suffix: '',
    label: 'PHYSICAL LOCATIONS',
    subtext: 'Advisory & training offices in Shastri Nagar and Moti Nagar, Delhi',
  },
];

export const ABOUT_PRACTICE_AREAS: string[] = [
  'GST',
  'Indirect Tax',
  'Tax Litigation',
  'Corporate Law',
  'Auditing',
  'Corporate Finance',
  'Professional Representation',
  'GST Education',
];

export const FOUNDER_PROFILE = {
  name: 'CA RAJENDER ARORA',
  credentialsHeader: 'FCA, LLB',
  roles: [
    'Practicing Chartered Accountant',
    'FCA',
    'LLB',
    'Author',
    'GST Professional',
    'Professional Educator',
    'TV Personality',
  ],
  biography: [
    'CA Rajender Arora is a practicing Chartered Accountant (FCA) and law graduate (LLB) with over two decades of domain authority in indirect taxation, corporate governance, and appellate litigation.',
    'Recognized across professional circuits as an authoritative voice on Goods and Services Tax, he has authored more than 59 comprehensive legal treatises and analytical articles garnering over 1.14 million views on national tax platforms.',
    'Alongside leading complex tribunal representations and statutory audits at Rajinder Arora & Associates, he serves as President of the GST Research Foundation, institutionalizing practical, case-study-driven GST literacy for professionals and enterprises nationwide.',
  ],
  verifiedAppointments: [
    {
      role: 'President',
      entity: 'GST Research Foundation',
      period: 'Current Leadership',
    },
    {
      role: 'Vice-President',
      entity: 'Sales Tax Bar Association (STBA), Delhi',
      period: 'Current Executive',
    },
    {
      role: 'Convenor, GST Study Circle',
      entity: 'AIFTP (North Zone)',
      period: '2026 Appointment',
    },
    {
      role: 'Former Chairman, GST Committee',
      entity: 'NIRC of ICAI',
      period: 'Historical (2019–20 & 2021–22)',
    },
  ],
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    number: '01',
    title: 'TAX CONSULTANCY & LITIGATION',
    subtitle: 'Indirect Tax Defense & Appellate Representation',
    description:
      'Strategic legal evaluation, statutory drafting, and representation before GST adjudicating authorities, Appellate Authorities, and the GST Appellate Tribunal (GSTAT).',
    imagePath: GENERATED_IMAGES.jurisprudence,
    imageAlt: 'Bound tax law volumes and statutory legal documentation on dark graphite desk',
    services: [
      {
        title: 'GST SCN Management & Appeals',
        scope:
          'Evaluation, strategic drafting of legal replies to ASMT-10 or Show Cause Notices (SCN), and defending corporate positions before GST authorities, Appellate Authorities, and GSTAT.',
        relevantTo: 'Corporates, MSMEs & E-Commerce companies',
      },
      {
        title: 'ITC Optimization & Refund Filing',
        scope:
          'Deep ledger reconciliation (GSTR-2A/2B versus GSTR-3B), resolving blocked credit issues under Section 17(5), and structural filing for complex refund claims.',
        relevantTo: 'Exporters, manufacturing firms & distribution enterprises',
      },
      {
        title: 'Search, Seizure & Transit Detention Defense',
        scope:
          'Immediate legal representation and advisory during departmental inspections, searches, seizures (Section 67), or transit vehicle detentions (Section 129).',
        relevantTo: 'Logistics providers, trading corporations & businesses',
      },
    ],
  },
  {
    number: '02',
    title: 'AUDITING & CORPORATE FINANCE',
    subtitle: 'Statutory Assurance, CISA IT Audits & Capital Advisory',
    description:
      'Comprehensive verification of corporate financial statements, information systems security assurance, corporate law compliance, and project financing advisory.',
    imagePath: GENERATED_IMAGES.boardroom,
    imageAlt: 'Modern dark slate corporate advisory boardroom in New Delhi',
    services: [
      {
        title: 'Statutory Audits',
        scope:
          'Formal verification of corporate financial statements, statutory disclosures, and regulatory compliance under Indian accounting standards.',
        relevantTo: 'Public companies, private corporations & institutions',
      },
      {
        title: 'Risk Assurance & Retail Audits',
        scope:
          'Inventory valuations, retail store operational controls, internal financial control evaluations, and systemic risk mitigation reviews.',
        relevantTo: 'Retail chains, distribution networks & banking institutions',
      },
      {
        title: 'IT / CISA Auditing',
        scope:
          'Information technology infrastructure and systems security audits executed by qualified CISA-certified audit professionals.',
        relevantTo: 'Digital platforms, financial services & high-security firms',
      },
      {
        title: 'Corporate Law Advisory & Project Financing',
        scope:
          'Capital structuring, share valuation certifications, business plan consultancies, company formations, and fundraising optimization.',
        relevantTo: 'Scaling startups, expanding corporations & cross-border entities',
      },
    ],
  },
  {
    number: '03',
    title: 'GST RESEARCH FOUNDATION',
    subtitle: 'Practical GST Education, Case Studies & Tax Literacy',
    description:
      'Application-focused professional education bridging statutory theory with real-world GST portal execution, Tally accounting synthesis, and tribunal jurisprudence.',
    imagePath: GENERATED_IMAGES.auditorium,
    imageAlt: 'Modern executive seminar hall and legal research auditorium',
    services: [
      {
        title: 'Professional GST Courses & Practical Training',
        scope:
          'Structured multi-day and multi-week training blueprints covering end-to-end GST compliance, input tax credit architecture, and litigation drafting.',
        relevantTo: 'Practicing CAs, CSs, corporate accountants, advocates & practitioners',
      },
      {
        title: 'GST Portal Learning & Tally Configurations',
        scope:
          'Hands-on demonstrations marrying financial accounting workflows in Tally directly with live GST Portal compliance systems.',
        relevantTo: 'Corporate finance teams, accounting staff & compliance leads',
      },
      {
        title: 'GST Case Studies & GSTAT-Related Learning',
        scope:
          'Analytical breakdowns of emerging GST Appellate Tribunal (GSTAT) rulings, High Court precedents, and SCN adjudication defense blueprints.',
        relevantTo: 'Tax litigation counsels, senior practitioners & business owners',
      },
    ],
  },
];

export const EXPERTISE_INDEX: ExpertiseItem[] = [
  {
    number: '01',
    title: 'INDIRECT TAX LITIGATION',
    category: 'Dispute Resolution',
    description:
      'End-to-end defense against departmental audits, Show Cause Notices (SCNs), Section 67 search proceedings, and Section 129 transit detentions.',
    capabilities: ['ASMT-10 & SCN Replies', 'Section 67 Search Defense', 'Section 129 Release Strategy'],
  },
  {
    number: '02',
    title: 'GSTAT REPRESENTATION',
    category: 'Appellate Jurisprudence',
    description:
      'Specialized appellate pleading, petition drafting, and representation before GST Appellate Authorities and the Goods and Services Tax Appellate Tribunal.',
    capabilities: ['Tribunal Petition Drafting', 'Jurisprudential Precedent Mapping', 'Appellate Advocacy'],
  },
  {
    number: '03',
    title: 'ITC RECONCILIATION',
    category: 'Credit Optimization',
    description:
      'Granular multi-year reconciliation of GSTR-2A/2B against GSTR-3B, Section 17(5) blocked credit evaluation, and export/inverted duty refund recovery.',
    capabilities: ['GSTR-2A/2B vs 3B Synthesis', 'Section 17(5) Advisory', 'Export Refund Structuring'],
  },
  {
    number: '04',
    title: 'GST COMPLIANCE',
    category: 'Systemic Architecture',
    description:
      'Automated compliance alignment linking enterprise ERP and Tally configurations directly to GST portal reporting standards.',
    capabilities: ['Annual Return Audits', 'E-Way Bill & E-Invoicing Controls', 'Departmental Audit Readiness'],
  },
  {
    number: '05',
    title: 'CORPORATE LAW',
    category: 'Governance & Structuring',
    description:
      'Company formations, corporate governance advisory, statutory board compliance, and regulatory structuring for domestic and cross-border operations.',
    capabilities: ['Entity Incorporation', 'Corporate Governance', 'Regulatory Filings'],
  },
  {
    number: '06',
    title: 'AUDITING',
    category: 'Statutory, Retail & CISA IT',
    description:
      'Rigorous statutory financial audits, multi-store retail inventory controls, internal risk assurance, and CISA-certified IT infrastructure audits.',
    capabilities: ['Statutory Financial Audits', 'Retail & Inventory Assurance', 'CISA Information Systems Audit'],
  },
  {
    number: '07',
    title: 'CORPORATE FINANCE',
    category: 'Valuation & Capital Strategy',
    description:
      'Capital structuring, certified share valuations, project financing reports, and fundraising optimization for expanding enterprises.',
    capabilities: ['Share Valuation Certification', 'Project Financing Reports', 'Capital Structuring'],
  },
  {
    number: '08',
    title: 'GST EDUCATION',
    category: 'GST Research Foundation',
    description:
      'Case-study-driven professional training programs equipping CAs, advocates, and corporate teams with practical GST litigation and compliance mastery.',
    capabilities: ['Live Portal Blueprints', 'GSTAT Case Law Breakdowns', 'Tally-to-GST Integration'],
  },
];

export const INDUSTRIES_LIST: IndustryItem[] = [
  {
    number: '01',
    name: 'E-COMMERCE',
    focusArea: 'Marketplace Liabilities & TCS Compliance',
    advisoryScope: 'Platform operator liabilities, Section 52 TCS compliances, and intermediary service classifications under GST.',
  },
  {
    number: '02',
    name: 'RETAIL',
    focusArea: 'Store Controls & Multi-State Inventory',
    advisoryScope: 'Retail store audits, inventory valuation assurance, promotional scheme taxability, and input credit apportionment.',
  },
  {
    number: '03',
    name: 'TRADING',
    focusArea: 'High-Volume Supply Chain & ITC',
    advisoryScope: 'Vendor compliance verification, GSTR-2B credit protection, and defense against supplier mismatch demands.',
  },
  {
    number: '04',
    name: 'LOGISTICS',
    focusArea: 'Transit Enforcement & E-Way Bills',
    advisoryScope: 'Section 129 transit detention representation, e-way bill compliance protocols, and multi-hub movement structuring.',
  },
  {
    number: '05',
    name: 'BANKING',
    focusArea: 'Statutory & Risk Security Evaluations',
    advisoryScope: 'Specialized bank branch audits, concurrent assurance, and information systems security reviews.',
  },
  {
    number: '06',
    name: 'FINANCIAL SERVICES',
    focusArea: 'CISA IT Audits & Regulatory Compliance',
    advisoryScope: 'IT infrastructure security auditing, fee-based service taxability, and corporate governance compliance.',
  },
  {
    number: '07',
    name: 'NGOs / NON-PROFITS',
    focusArea: 'Charitable Compliance & Specialized Audits',
    advisoryScope: 'Distinct non-profit auditing procedures, grant utilization verification, and exemption notification evaluation.',
  },
  {
    number: '08',
    name: 'MNCs',
    focusArea: 'Cross-Border Advisory & Litigation Defense',
    advisoryScope: 'Multi-state GST structuring, Appellate Tribunal representation, and high-stakes statutory risk assurance.',
  },
  {
    number: '09',
    name: 'MID-SIZED CORPORATES',
    focusArea: 'Full-Stack Audit, Tax & Project Finance',
    advisoryScope: 'End-to-end statutory audits, project financing documentation, and proactive litigation insulation.',
  },
  {
    number: '10',
    name: 'TECHNOLOGY STARTUPS',
    focusArea: 'Entity Structuring & Share Valuation',
    advisoryScope: 'Company formation, share valuation certifications, capital structuring, and digital service tax compliance.',
  },
  {
    number: '11',
    name: 'TAX PROFESSIONALS',
    focusArea: 'Advanced GST & GSTAT Escalation Training',
    advisoryScope: 'Intensive case-study workshops via GST Research Foundation for CAs, CSs, advocates, and tax practitioners.',
  },
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    number: '01',
    title: 'DUAL-DISCIPLINE AUTHORITY',
    highlight: 'FCA + LLB',
    description:
      'Led by CA Rajender Arora, combining Fellow Chartered Accountant (FCA) financial rigor with a formal Bachelor of Laws (LLB) degree for comprehensive analytical tax defense.',
  },
  {
    number: '02',
    title: '20+ YEARS',
    highlight: 'Professional Practice Experience',
    description:
      'Over two decades of verifiable active practice navigating complex indirect tax regimes, statutory audits, corporate law structuring, and appellate litigation.',
  },
  {
    number: '03',
    title: 'NATIONAL PROFESSIONAL RECOGNITION',
    highlight: 'TIOL Best Faculty Award · AIFTP Outstanding Contribution Award',
    description:
      'Honored with the TIOL Best Faculty Award and the AIFTP Award for Outstanding Contribution to the Tax Profession, alongside leadership roles in STBA Delhi and NIRC ICAI.',
  },
  {
    number: '04',
    title: 'INTELLECTUAL CAPITAL',
    highlight: '59+ Professional Articles / Tax Insights',
    description:
      'Author of 59+ specialized legal treatises and legislative analyses with over 1.14 million views across India’s premier tax practitioner platforms.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'INTAKE & DOCUMENT RETRIEVAL',
    subtitle: 'Diagnostic Assessment',
    description:
      'Structured review of departmental Show Cause Notices (SCNs), ASMT-10 inquiries, audit observations, order copies, and multi-year ledger mismatch datasets.',
    deliverable: 'Fact Sheet & Statutory Timeline Map',
  },
  {
    number: '02',
    title: 'JURISPRUDENTIAL REVIEW',
    subtitle: 'Statutory & Precedent Synthesis',
    description:
      'Parsing the core issue against CGST/SGST Acts, active CBIC circulars, notifications, and the latest High Court and GSTAT rulings.',
    deliverable: 'Legal Opinion & Precedent Matrix',
  },
  {
    number: '03',
    title: 'DRAFTING & STRATEGY',
    subtitle: 'Precision Legal Counter-Pleading',
    description:
      'Structuring comprehensive, evidence-backed legal replies, appeal petitions, or ITC reconciliation maps designed to withstand appellate scrutiny.',
    deliverable: 'Formal Reply / Appeal Dossier',
  },
  {
    number: '04',
    title: 'AUTHORITY REPRESENTATION',
    subtitle: 'Adjudication & Tribunal Advocacy',
    description:
      'Active appearance, oral arguments, and representation before GST Adjudicating Officers, Appellate Authorities, and the GST Appellate Tribunal (GSTAT).',
    deliverable: 'Hearing Representation & Order Follow-Up',
  },
];

export const GST_FOUNDATION_DATA = {
  tagline: 'Aiming GST Literacy for Nation Building.',
  secondaryPhrase: 'Happy GST',
  curriculumModules: [
    {
      code: '01',
      title: 'Professional GST Courses',
      detail: 'Structured multi-day and multi-week training blueprints covering statutory foundations to advanced litigation.',
    },
    {
      code: '02',
      title: 'Practical GST Training',
      detail: 'Application-focused training built around real departmental notices, audit objections, and compliance scenarios.',
    },
    {
      code: '03',
      title: 'GST Portal Demonstrations',
      detail: 'Live walkthroughs of registration, return filing architecture, refund applications, and notice response workflows.',
    },
    {
      code: '04',
      title: 'Tally Configurations',
      detail: 'Aligning accounting entries and ledger masters in Tally directly with systemic GST Portal reporting.',
    },
    {
      code: '05',
      title: 'GST Case Studies',
      detail: 'Granular examination of GSTR-2A/2B vs 3B mismatches, Section 17(5) blocked credits, and e-commerce TCS.',
    },
    {
      code: '06',
      title: 'GSTAT-Related Learning',
      detail: 'Appellate tribunal procedures, drafting grounds of appeal, and analysis of landmark GSTAT jurisprudence.',
    },
  ],
  audiences: [
    'CAs (Chartered Accountants)',
    'CSs (Company Secretaries)',
    'Accountants',
    'Advocates',
    'Tax Practitioners',
    'Financial Professionals',
    'Business Owners',
  ],
};

export const CREDENTIALS_LIST: CredentialItem[] = [
  {
    category: 'Qualification',
    title: 'FCA — Fellow Chartered Accountant',
    organization: 'Institute of Chartered Accountants of India (ICAI)',
    statusNote: 'Fellowship Qualification',
  },
  {
    category: 'Qualification',
    title: 'LLB — Bachelor of Laws',
    organization: 'Legal Qualification',
    statusNote: 'Dual-Discipline Counsel',
  },
  {
    category: 'National Award',
    title: 'TIOL Best Faculty Award',
    organization: 'Taxindiaonline (TIOL)',
    statusNote: 'National Recognition',
  },
  {
    category: 'National Award',
    title: 'AIFTP Outstanding Contribution to Tax Profession Award',
    organization: 'All India Federation of Tax Practitioners (AIFTP)',
    statusNote: 'National Recognition',
  },
  {
    category: 'Leadership Appointment',
    title: 'President — GST Research Foundation',
    organization: 'GST Research Foundation',
    statusNote: 'Active Role',
  },
  {
    category: 'Leadership Appointment',
    title: 'Vice-President — STBA Delhi',
    organization: 'Sales Tax Bar Association (STBA), New Delhi',
    statusNote: 'Active Role',
  },
  {
    category: 'Historical Role',
    title: 'Former Chairman — NIRC ICAI GST Committee',
    organization: 'Northern India Regional Council (NIRC) of ICAI',
    statusNote: 'Historical (2019–20 & 2021–22)',
    isHistorical: true,
  },
];

export const INSIGHTS_CATEGORIES = [
  'All',
  'GST',
  'Tax Litigation',
  'Corporate Law',
  'Auditing',
  'GSTAT',
  'Professional Education',
] as const;

export const INITIAL_INSIGHTS_PLACEHOLDERS: InsightPlaceholderItem[] = [
  {
    id: 'insight-01',
    index: '01',
    category: 'GSTAT',
    editableTitle: 'Emerging GSTAT Jurisprudence & Appellate Tribunal Procedural Framework',
    summaryPlaceholder:
      'Analytical focus on significant GST Appellate Tribunal (GSTAT) rulings, appellate representation standards, and statutory dispute resolution.',
    publicationChannel: 'TaxGuru Author Archive · Editable Slot',
    datePlaceholder: 'Archive Entry 01',
  },
  {
    id: 'insight-02',
    index: '02',
    category: 'GST',
    editableTitle: 'GST Council Reforms: Registration, ITC Reconciliation & Compliance Process',
    summaryPlaceholder:
      'Examination of Input Tax Credit (ITC) ledger reconciliation (GSTR-2A/2B vs GSTR-3B), blocked credit provisions, and systemic GST portal updates.',
    publicationChannel: 'TaxGuru Author Archive · Editable Slot',
    datePlaceholder: 'Archive Entry 02',
  },
  {
    id: 'insight-03',
    index: '03',
    category: 'Tax Litigation',
    editableTitle: 'Strategic Defense in GST Show Cause Notices (SCN), Section 67 & Section 129',
    summaryPlaceholder:
      'Structured legal approach to ASMT-10 inquiries, departmental Show Cause Notices, search and seizure proceedings, and transit detention replies.',
    publicationChannel: 'Tax Litigation Dossier · Editable Slot',
    datePlaceholder: 'Archive Entry 03',
  },
  {
    id: 'insight-04',
    index: '04',
    category: 'Professional Education',
    editableTitle: 'Practical GST Mastery Through Case Studies, Portal Demos & Tally Synthesis',
    summaryPlaceholder:
      'Educational blueprint from GST Research Foundation bridging statutory GST provisions with live portal execution and corporate accounting systems.',
    publicationChannel: 'GST Research Foundation · Editable Slot',
    datePlaceholder: 'Archive Entry 04',
  },
  {
    id: 'insight-05',
    index: '05',
    category: 'Auditing',
    editableTitle: 'Statutory Audits, Retail Inventory Controls & CISA Information Systems Assurance',
    summaryPlaceholder:
      'Framework for corporate financial verification, internal control evaluations, retail store risk assurance, and CISA-certified IT security audits.',
    publicationChannel: 'Audit & Assurance Practice · Editable Slot',
    datePlaceholder: 'Archive Entry 05',
  },
  {
    id: 'insight-06',
    index: '06',
    category: 'Corporate Law',
    editableTitle: 'Corporate Law Advisory, Capital Structuring & Project Financing',
    summaryPlaceholder:
      'Advisory perspective on company formations, certified share valuations, capital structuring, and fundraising documentation for enterprises.',
    publicationChannel: 'Corporate Advisory Practice · Editable Slot',
    datePlaceholder: 'Archive Entry 06',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'GST Research Foundation',
    question: 'Who can enroll in GST Research Foundation courses?',
    answer:
      'Courses offered by the GST Research Foundation are structured for practicing Chartered Accountants (CAs), Company Secretaries (CSs), corporate accountants, legal advocates, tax practitioners, financial professionals, and business owners seeking practical application-focused GST mastery.',
  },
  {
    category: 'Training Curriculum',
    question: 'What topics are covered in GST training?',
    answer:
      'The training programs cover practical GST compliance, full system and Tally configurations, live GST Portal demonstrations, Input Tax Credit (ITC) optimization, return filings, refund applications, corporate GST audits, Show Cause Notice (SCN) adjudication replies, and GSTAT-related appellate case studies.',
  },
  {
    category: 'Tax Litigation',
    question: 'Does the firm handle GST notices and appeals?',
    answer:
      'Yes. Rajinder Arora & Associates evaluates departmental inquiries, drafts strategic legal replies to ASMT-10 and Show Cause Notices (SCNs), handles Section 67 search and seizure defense and Section 129 transit detentions, and represents clients before GST Adjudicating Authorities, Appellate Authorities, and the GST Appellate Tribunal (GSTAT).',
  },
  {
    category: 'Assurance & Audits',
    question: 'Does the firm provide auditing services?',
    answer:
      'Yes. The firm conducts Statutory Audits, Risk Assurance reviews, Retail Store and Inventory Audits, and specialized IT & CISA-certified Information Systems Audits for corporate, retail, banking, and digital enterprises.',
  },
  {
    category: 'Industries & Clients',
    question: 'What type of businesses does the firm work with?',
    answer:
      'The firm works across E-Commerce platforms, Retail chains, Trading and Logistics enterprises, Banking and Financial Services institutions, NGOs and Non-Profits, Multi-National Corporations (MNCs), Mid-Sized Corporates, Technology Startups, and fellow Tax Professionals.',
  },
  {
    category: 'Corporate Advisory',
    question: 'Does the firm provide corporate law advisory?',
    answer:
      'Yes. The practice provides Corporate Law Advisory and Project Financing support, including company formations, capital structuring, share valuation certifications, business plan consultancies, and fundraising optimization.',
  },
];

export const OFFICE_LOCATIONS = {
  primary: {
    label: 'PRIMARY CORPORATE OFFICE',
    name: 'Shastri Nagar, New Delhi',
    addressLine1: 'E2/254, 2nd Floor,',
    addressLine2: 'Shastri Nagar,',
    cityPin: 'Delhi - 110052',
    mapQuery: 'E2/254 Shastri Nagar Delhi 110052',
  },
  secondary: {
    label: 'SECONDARY / TRAINING OFFICE',
    name: 'Moti Nagar, New Delhi',
    addressLine1: '4th Floor, DLF Tower,',
    addressLine2: 'Moti Nagar,',
    cityPin: 'Delhi - 110015',
    mapQuery: 'DLF Tower Moti Nagar Delhi 110015',
  },
  workingHours: 'Monday–Saturday · 10:00 AM–07:00 PM',
  defaultPlaceholders: {
    phone: '[PHONE NUMBER PLACEHOLDER]',
    email: '[EMAIL PLACEHOLDER]',
    whatsapp: '[WHATSAPP PLACEHOLDER]',
    batchSchedule: 'Schedule Announced Per Cohort (Editable)',
    courseDuration: '10-Day & Multi-Week Formats (Editable)',
    courseFee: 'Provided Upon Registration Inquiry (Editable)',
  },
};
