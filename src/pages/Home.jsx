import React from 'react';
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
