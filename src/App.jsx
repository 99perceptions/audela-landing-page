import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Landing } from './pages/Landing';
import { Privacy } from './pages/Privacy';
import { TermsOfUse } from './pages/TermsOfUse';
import { Home } from './pages/Home';
import { Clara } from './pages/Clara';
import { Reven } from './pages/Reven';
import { Lens } from './pages/Lens';
import { Shift } from './pages/Shift';
import { Team } from './pages/Team';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';
import { Healthcare } from './pages/industries/Healthcare';
import { Finance } from './pages/industries/Finance';
import { TransportLogistics } from './pages/industries/TransportLogistics';
import { Retail } from './pages/industries/Retail';
import { Manufacturing } from './pages/industries/Manufacturing';
import { Facilities } from './pages/industries/Facilities';

const router = createBrowserRouter([
  { path: '/', element: <Landing /> },
  { path: '/privacy', element: <Privacy /> },
  { path: '/terms', element: <TermsOfUse /> },
  {
    path: '/full',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'clara', element: <Clara /> },
      { path: 'reven', element: <Reven /> },
      { path: 'lens', element: <Lens /> },
      { path: 'shift', element: <Shift /> },
      { path: 'team', element: <Team /> },
      { path: 'contact', element: <Contact /> },
      { path: 'about', element: <About /> },
      { path: 'privacy', element: <PrivacyPolicy /> },
      { path: 'terms', element: <Terms /> },
      { path: 'industries/healthcare', element: <Healthcare /> },
      { path: 'industries/finance', element: <Finance /> },
      { path: 'industries/transport-logistics', element: <TransportLogistics /> },
      { path: 'industries/retail', element: <Retail /> },
      { path: 'industries/manufacturing', element: <Manufacturing /> },
      { path: 'industries/facilities', element: <Facilities /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
