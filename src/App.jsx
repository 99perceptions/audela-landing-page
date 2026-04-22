import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
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

const router = createBrowserRouter([
  {
    path: '/',
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
