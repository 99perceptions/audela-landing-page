/**
 * Content for the Frends partner one-pager (/frends).
 *
 * Everything editorial lives here so copy can be tuned without touching
 * layout. Sources:
 *   - Jamal's brief (meeting, Oct 2026): three segments, five benefits,
 *     partner roles, team placement, contact-only CTA, link to frends.com.
 *   - Jamal's email "FW: UAE E-Invoicing System" (1 Oct 2026): give UAE
 *     e-Invoicing integration prominence; Frends has solid use cases there.
 *   - Jamal's email "Put him as Audela CEO" (2 Oct 2026): Irsum Khan.
 *   - Jamal's website feedback (8 Oct 2026): exclusive distribution for
 *     Pakistan, new hero punchline, use-case tags in "Who it's for" (from
 *     "30 Frends Use Cases.pdf"), "live in weeks", Dubai Holding e-invoicing
 *     case study with a POC offer.
 *   - frends.com (public): founded 1988, 6,000+ customers, 16 countries,
 *     Gartner Magic Quadrant 4 consecutive years, hybrid / on-prem /
 *     air-gapped deployment, CLOUD Act-free European platform.
 */

export const PAGE_PATH = '/';
export const FRENDS_URL = 'https://frends.com';
export const CONTACT_EMAIL = 'cs@audela.me';

/**
 * Reference customers Jamal named (Dubai Holding, DAMAC, Saudi German
 * Hospital). They are Frends' customers, not ours — keep the list hidden until
 * Frends confirms we may cite them publicly. Flip to `true` to render by name.
 * (Dubai Holding is named in the e-invoicing case study at Jamal's request.)
 */
export const SHOW_REFERENCE_NAMES = false;
export const REFERENCE_NAMES = ['Dubai Holding', 'DAMAC', 'Saudi German Hospital'];

export const hero = {
  eyebrow: 'Official Frends partner · GCC · Exclusive in Pakistan',
  headline: ['Tired of expensive, limited integration platforms', '& legacy challenges?'],
  subtitle:
    'Audelà brings Frends — the European integration platform trusted since 1988 — to the Gulf and Pakistan. One platform for middleware, business process automation and AI orchestration at a fraction of the cost, live in weeks, not quarters.',
  primaryCta: { label: 'Talk to us', href: '#contact' },
  secondaryCta: { label: 'Visit frends.com', href: FRENDS_URL },
};

export const stats = [
  { value: '1988', label: 'Founded in Finland' },
  { value: '6,000+', label: 'Customers worldwide' },
  { value: '16', label: 'Countries' },
  { value: '4×', label: 'Gartner Magic Quadrant, consecutive years' },
];

export const partnership = {
  label: 'The partnership',
  headline: ['Audelà is the official partner', 'for Frends in the GCC and exclusive Distribution Partner for Pakistan.'],
  description:
    'Frends is a proven European iPaaS with deep roots in regulated industries. Audelà is its regional partner — the local team that sells, implements, supports and makes the platform succeed inside your organisation.',
  roles: [
    { num: '01', text: 'Official Distribution Partner and Exclusive Distribution Partner for Pakistan' },
    { num: '02', text: 'Solution Enablement Partner' },
    { num: '03', text: 'Business Success Partner' },
  ],
};

export const platform = {
  tag: 'The platform',
  headline: ['One platform.', 'Three engines.'],
  intro:
    'Frends replaces the stack you used to buy from three vendors — an integration layer, a process engine and an AI layer — with a single low-code platform your own team can run.',
  pillars: [
    {
      title: 'Integration & API management',
      desc: 'Connect core banking, ERP, HIS, e-commerce and legacy systems with 300+ connectors. Expose, secure and govern APIs from the same console.',
    },
    {
      title: 'Business process automation',
      desc: 'BPMN-based workflows and long-running processes. Model the process once, run it reliably, and see every step in a business-facing portal.',
    },
    {
      title: 'AI orchestration',
      desc: 'Agentic AI connectors and Enterprise MCP make legacy systems AI-ready — so models can act on real enterprise data under governance, not around it.',
    },
  ],
  deploy: 'Cloud, on-premises or fully air-gapped. Same platform, your choice of where it runs.',
};

/**
 * "Who it's for" — use cases from Frends' "30 Frends Use Cases" deck, grouped
 * by the team that feels the problem. Each category renders as a sub-tag.
 */
export const segments = {
  tag: "Who it's for",
  headline: ['30 proven use cases,', 'grouped by the teams that feel them.'],
  intro: 'Real business problems solved with integration and automation. Pick a team to see where Frends fits.',
  categories: [
    {
      id: 'finance',
      label: 'Finance',
      summary: 'Get paid faster, bill accurately and close the books with less manual work.',
      useCases: [
        { title: 'Order-to-cash automation', outcome: 'A shorter cash cycle and fewer orders stuck between teams.' },
        { title: 'Purchase-to-pay automation', outcome: 'Supplier invoices approved faster, with fewer mismatches.' },
        { title: 'Financial close automation', outcome: 'A faster, more predictable month-end.' },
        { title: 'Billing & subscription management', outcome: 'Fewer billing errors and credit notes.' },
        { title: 'AI-powered document processing', outcome: 'Less manual data entry and fewer typing errors.' },
        { title: 'E-invoicing automation', outcome: 'Less invoice handling and faster processing.' },
      ],
    },
    {
      id: 'sales',
      label: 'Sales & marketing',
      summary: 'Give sales and marketing better data and faster follow-up.',
      useCases: [
        { title: 'Customer data enrichment', outcome: 'Sales starts conversations with better context.' },
        { title: 'Lead scoring & routing', outcome: 'Faster follow-up on the leads that matter most.' },
        { title: 'Marketing campaign orchestration', outcome: 'Campaign results visible where sales works.' },
        { title: 'Price & promotion management', outcome: 'Consistent prices and offers across channels.' },
      ],
    },
    {
      id: 'customers',
      label: 'Customers & partners',
      summary: 'Serve customers and partners without the back-and-forth.',
      useCases: [
        { title: 'Customer support ticketing', outcome: 'Agents spend less time looking for information.' },
        { title: 'AI order-status assistant', outcome: 'Faster answers, fewer status enquiries for your team.' },
        { title: 'Partner portal & self-service', outcome: 'Fewer status calls and faster partner orders.' },
        { title: 'Returns, refunds & claims', outcome: 'Faster resolutions and less work per case.' },
      ],
    },
    {
      id: 'supply-chain',
      label: 'Supply chain',
      summary: 'Keep goods, suppliers and partners moving in step.',
      useCases: [
        { title: 'Supplier onboarding automation', outcome: 'New suppliers are ready to trade sooner.' },
        { title: 'EDI & B2B connectivity', outcome: 'Add trading partners without adding manual work.' },
        { title: 'Inventory synchronisation', outcome: 'Fewer stockouts and oversold orders.' },
        { title: 'Supply chain visibility', outcome: 'Earlier warning when deliveries run late.' },
      ],
    },
    {
      id: 'hr-it',
      label: 'HR & IT',
      summary: 'Take routine work off HR and IT.',
      useCases: [
        { title: 'Employee data lifecycle', outcome: 'New hires get access sooner; leavers lose it on time.' },
        { title: 'IT service request automation', outcome: 'Requests close faster with less manual handling.' },
        { title: 'Failed process recovery', outcome: 'Failed orders and invoices get moving again sooner.' },
        { title: 'Asset & facility management', outcome: 'Asset records that stay in line with the books.' },
      ],
    },
    {
      id: 'data',
      label: 'Data',
      summary: 'Make your data reliable everywhere it is used.',
      useCases: [
        { title: 'Real-time data synchronisation', outcome: 'Teams work from the same customer data.' },
        { title: 'Master data management', outcome: 'Fewer conflicting records across systems.' },
        { title: 'Data migration at scale', outcome: 'Retire old systems with less risk of data loss.' },
        { title: 'Business intelligence & analytics', outcome: 'Dashboards built on current data.' },
      ],
    },
    {
      id: 'compliance',
      label: 'Compliance & risk',
      summary: 'Stay compliant without the spreadsheet scramble.',
      useCases: [
        { title: 'Contract lifecycle management', outcome: 'Fewer missed renewals and surprise terms.' },
        { title: 'Compliance & audit reporting', outcome: 'Audit preparation takes less time.' },
        { title: 'Regulatory reporting automation', outcome: 'Deadlines met with less manual effort.' },
        { title: 'Sustainability & ESG reporting', outcome: 'More reliable ESG reports with less data chasing.' },
      ],
    },
  ],
};

export const why = {
  tag: 'Why Frends',
  headline: ['Five reasons it works', 'for this region.'],
  items: [
    {
      index: '01',
      title: 'European, established, proven',
      desc: 'Not a start-up. A platform refined since 1988, used by 6,000+ organisations across 16 countries, and recognised in the Gartner Magic Quadrant four years running.',
    },
    {
      index: '02',
      title: 'A fraction of the cost',
      desc: 'Transparent, usage-based pricing instead of per-core licensing. Mid-market budgets get enterprise-grade integration without the enterprise invoice.',
    },
    {
      index: '03',
      title: 'Middleware, BPA and AI in one platform',
      desc: 'Integration engine, process automation engine and AI orchestration ship together. No second vendor, no second contract, no second skill set to hire.',
    },
    {
      index: '04',
      title: 'Cloud, on-prem or air-gapped',
      desc: 'Regulated and sovereign environments can keep every byte inside their own walls. The platform runs the same way wherever it is deployed.',
    },
    {
      index: '05',
      title: 'Live in weeks',
      desc: 'Low-code tooling and a local implementation team mean short projects and a short payback period. If cost and time-to-value matter to you, talk to us.',
    },
  ],
};

export const einvoicing = {
  tag: 'E-invoicing case study',
  headline: ['Dubai Holding.', 'Many systems, one ASP, live in weeks.'],
  body: [
    'The UAE is moving to mandatory e-invoicing. Every invoice has to reach the Federal Tax Authority through an Accredited Service Provider (ASP) — so every system that issues one (ERP, billing, POS, property management, hospital information systems) must be connected.',
    'Dubai Holding faced exactly that. Frends integrated multiple systems across the group and delivered the integration between them and its ASP within weeks — no seven-figure suite, no year-long project.',
    'Want to know more, or have your own e-invoicing compliance needs? We can run a quick proof of concept to demo it on your systems.',
  ],
  points: [
    'Connect every invoicing system to your ASP',
    'Validate, transform and archive in one governed pipeline',
    'Reuse the same platform for the next mandate — not just this one',
  ],
  cta: { label: 'Request a quick POC demo', href: '#contact' },
};

export const services = {
  tag: 'What Audelà does',
  headline: ['From first conversation', 'to business outcome.'],
  items: [
    {
      title: 'Licensing & distribution',
      desc: 'Regional licensing for Frends across the GCC and Pakistan — commercial terms, procurement and renewals handled locally.',
    },
    {
      title: 'Implementation',
      desc: 'Solution design, integration build, migration from legacy middleware and go-live, delivered by a regional team in your time zone.',
    },
    {
      title: 'Support & managed operations',
      desc: 'Local first-line support, monitoring and ongoing enhancement, backed by Frends engineering in Europe.',
    },
    {
      title: 'Adoption & business success',
      desc: 'Training, process automation roadmaps and AI use-case enablement so the platform keeps paying for itself after the first project.',
    },
  ],
  regions: ['United Arab Emirates', 'Saudi Arabia', 'Wider GCC', 'Pakistan'],
};

/**
 * Team — per Jamal: Irsum Khan as CEO; Asjad Yahya as Co-Founder.
 * Bios are placeholders until Jamal sends profiles (he said he would).
 */
export const team = {
  tag: 'Team',
  headline: ['The people', 'behind the partnership.'],
  people: [
    {
      name: 'Irsum Khan',
      role: 'Chief Executive Officer',
      bio: 'Entrepreneur focused on multiple business strategies and development initiatives. Leads Audelà’s regional partnership with Frends across the GCC and Pakistan.',
      linkedin: 'https://www.linkedin.com/in/irsum-khan-4898695b',
    },
    {
      name: 'Asjad Yahya',
      role: 'Co-Founder',
      bio: 'Co-founder of Audelà. Technology and delivery leadership across enterprise platforms in the region.',
      linkedin: '',
    },
  ],
};

export const contact = {
  tag: 'Get in touch',
  headline: 'Tell us what you need to connect.',
  subtitle:
    'Whether it is a compliance deadline, a middleware renewal you would rather not sign, or a first AI use case — tell us the objective and we will come back with a scope, a timeline and a number.',
  interests: [
    'Enterprise integration platform',
    'UAE e-Invoicing integration / POC',
    'Replace existing middleware (IBM / Oracle / MuleSoft)',
    'Business process automation',
    'AI orchestration / agentic workflows',
    'Frends licensing in Pakistan',
    'Something else',
  ],
};
