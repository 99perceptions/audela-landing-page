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
 *   - frends.com (public): founded 1988, 6,000+ customers, 16 countries,
 *     Gartner Magic Quadrant 4 consecutive years, hybrid / on-prem /
 *     air-gapped deployment, CLOUD Act-free European platform.
 */

export const PAGE_PATH = '/frends';
export const FRENDS_URL = 'https://frends.com';
export const CONTACT_EMAIL = 'info@audela.me';

/**
 * Reference customers Jamal named (Dubai Holding, DAMAC, Saudi German
 * Hospital). They are Frends' customers, not ours — keep hidden until Frends
 * confirms we may cite them publicly. Flip to `true` to render by name.
 */
export const SHOW_REFERENCE_NAMES = false;
export const REFERENCE_NAMES = ['Dubai Holding', 'DAMAC', 'Saudi German Hospital'];

export const hero = {
  eyebrow: 'Official Frends partner · GCC & Pakistan',
  headline: ['Enterprise integration, automation and AI.', 'European-built. A fraction of the cost.'],
  subtitle:
    'Audelà brings Frends — the European integration platform trusted since 1988 — to the Gulf and Pakistan. One platform for middleware, business process automation and AI orchestration, live in weeks, not quarters.',
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
  headline: ['Audelà is the official partner', 'for Frends in the GCC and Pakistan.'],
  description:
    'Frends is a proven European iPaaS with deep roots in regulated industries. Audelà is its regional partner — the local team that sells, implements, supports and makes the platform succeed inside your organisation.',
  roles: [
    { num: '01', text: 'Official Distribution Partner' },
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

export const segments = {
  tag: "Who it's for",
  headline: ['Three kinds of organisation', 'find us at the right time.'],
  items: [
    {
      index: '01',
      title: 'Enterprises that need European-validated technology',
      desc:
        'Governments, banks, hospitals and critical infrastructure that want a platform built and governed in Europe — GDPR-native, EU AI Act-ready and outside the reach of the US CLOUD Act. Frends already runs mission-critical integration for utilities, hospitals and public sector across the Nordics.',
    },
    {
      index: '02',
      title: 'Mid-market companies that cannot justify tier-one licence costs',
      desc:
        'Per-core middleware licences from the usual vendors run into seven figures before a single integration ships. Frends delivers the same capability — plus automation and AI — at a fraction of the total cost of ownership, with go-live measured in weeks.',
    },
    {
      index: '03',
      title: 'Teams tired of their current integration vendor',
      desc:
        'Every change request is a change order. Customisation costs more than the licence. If that sounds familiar, there is a modern, low-code alternative with AI and process automation built in. Are you tired of these vendors? Talk to us.',
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
      title: 'Live in six weeks',
      desc: 'Low-code tooling and a local implementation team mean short projects and a short payback period. If cost and time-to-value matter to you, talk to us.',
    },
  ],
};

export const einvoicing = {
  tag: 'UAE e-Invoicing',
  headline: ['e-Invoicing is coming.', 'Your systems are not ready.'],
  body: [
    'The UAE Federal Tax Authority is rolling out mandatory e-Invoicing. Every invoice will need to be reported digitally — which means every system that issues one (ERP, billing, POS, property management, hospital information systems) has to be connected to the reporting flow.',
    'For a typical group that is twenty or more systems. Buying a seven-figure integration suite to meet a compliance deadline is the expensive way to do it.',
    'Frends specialises in exactly this kind of many-to-one integration and already has reference deployments in the region. Audelà implements it locally, on a fixed scope and a fixed timeline.',
  ],
  points: [
    'Connect every invoicing system to the FTA reporting flow',
    'Validate, transform and archive in one governed pipeline',
    'Reuse the same platform for the next mandate — not just this one',
  ],
  cta: { label: 'Discuss e-Invoicing readiness', href: '#contact' },
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
    'UAE e-Invoicing integration',
    'Replace existing middleware (IBM / Oracle / MuleSoft)',
    'Business process automation',
    'AI orchestration / agentic workflows',
    'Frends licensing in Pakistan',
    'Something else',
  ],
};
