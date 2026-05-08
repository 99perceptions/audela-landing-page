import React from 'react';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import './TeamSection.css';

const team = [
  {
    name: 'Afnan Mansoor',
    bio: 'Twenty years across business advisory, financial management, taxation, and IT governance, with senior leadership in large export-oriented manufacturing. Began his career at PwC Pakistan; most recently led group-level finance, IT, and tax at one of Pakistan’s leading textile exporters.',
  },
  {
    name: 'Dr. Akin Kazasckci',
    bio: 'AI researcher, educator, and entrepreneur with two decades at the intersection of artificial intelligence, design theory, and innovation. Heads the Data Innovation Lab at MINES ParisTech, framing AI application opportunities and ROI with industry partners.',
  },
  {
    name: 'Dr. Aamir Ali',
    bio: 'Physician and health informatics leader with twenty years working with government health authorities across the UAE and Saudi Arabia on hospital performance, clinical analytics, and health solution architecture. Led the UAE National Health Information Exchange and the Ministry’s first enterprise data warehouse.',
  },
];

const advisors = [
  {
    name: 'Mohammad (Mo) Azam',
    bio: 'Former SVP and Chief Audit & Compliance Executive at UPS, reporting to the Board on global audit, compliance, ERM, ethics, and privacy. Earlier senior finance roles at Mellon Bank, Ford, Dole Packaged Foods, and KPMG. California CPA.',
  },
  {
    name: 'Amna Naeem',
    bio: 'ACA (ICAEW) with two decades across EY London, BP, ArcelorMittal, Bank of America, and A.P. Moller–Maersk. Most recently headed Global Investments and Capital Planning at Maersk, driving value creation across a USD 2B warehouse and cold-chain portfolio.',
  },
  {
    name: 'Dr. Toby Velte',
    bio: 'Author of sixteen best-selling McGraw-Hill technology books and a contributor to Harvard Business Review. Guest-lectures at London Business School and helps deliver AI-for-Business courses in LBS Executive Education.',
  },
  {
    name: 'Omar Abbas',
    bio: 'Cloud and digital transformation leader with twenty years across the Middle East. Most recently a Professional Services Sales Leader at AWS; prior Territory Executive at IBM Levant, with earlier roles at Injazat and GBM.',
  },
];

const PersonCard = ({ person, index }) => (
  <AnimatedSection yOffset={28} delay={(index % 3) * 0.07}>
    <div className="onepager-person-card">
      <h3 className="onepager-person-name">{person.name}</h3>
      <p className="onepager-person-bio">{person.bio}</p>
    </div>
  </AnimatedSection>
);

export const TeamSection = () => {
  return (
    <section className="section-padding onepager-team-section">
      <div className="container">
        <AnimatedSection yOffset={30}>
          <div className="section-header">
            <div className="tag">Our People</div>
            <h2>Team & <i>Advisors</i></h2>
          </div>
        </AnimatedSection>

        <AnimatedSection yOffset={20}>
          <h3 className="onepager-people-subhead">Team</h3>
        </AnimatedSection>
        <div className="onepager-people-grid">
          {team.map((p, i) => <PersonCard key={p.name} person={p} index={i} />)}
        </div>

        <AnimatedSection yOffset={20}>
          <h3 className="onepager-people-subhead onepager-people-subhead-advisors">Advisors</h3>
        </AnimatedSection>
        <div className="onepager-people-grid">
          {advisors.map((p, i) => <PersonCard key={p.name} person={p} index={i} />)}
        </div>
      </div>
    </section>
  );
};
