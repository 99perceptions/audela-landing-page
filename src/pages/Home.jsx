import React from 'react';
import { SEO } from '../components/ui/SEO';
import { Hero } from '../sections/Hero';
import { Stats } from '../sections/Stats';
import { Products } from '../sections/Products';
import { CompanyStatement } from '../sections/CompanyStatement';
import { WhyAudella } from '../sections/WhyAudella';
import { Industries } from '../sections/Industries';
import { ContactForm } from '../sections/ContactForm';

export const Home = () => {
  return (
    <>
      <SEO
        title="Specialized AI for Industries Where It Matters Most"
        description="Audela builds purpose-built AI for healthcare, finance, field services and workforce operations — not adapted from a generic platform. Four solutions live."
        path="/"
      />
      <Hero />
      <Stats />
      <CompanyStatement />
      <Products />
      <WhyAudella />
      <Industries />
      <ContactForm />
    </>
  );
};
