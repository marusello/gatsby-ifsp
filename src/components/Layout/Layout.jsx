import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Container from '../Container';

import './Layout.css';

import Helmet from 'react-helmet';
import favicon from '../../../static/favicon.png';
import config from '../../../data/config';


export default ({ children }) => (
    <div>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <link rel="icon" href={favicon} />
      </Helmet>
    <Header />
    <main role="main">
      <Container>
        {children}
        <aside className="aside">
          <Sidebar
            title="Sobre o Marcelo"
            description="Sou um desenvolvedor apaixonado por JavaScript e amo desenvolver produtos que melhoram a vida das pessoas."
          />
          <Sidebar
            title="Sobre o Matheus"
            description="Sou um desenvolvedor apaixonado por JavaScript e amo desenvolver produtos que melhoram a vida das pessoas."
          />
        </aside>
      </Container>
    </main>
  </div>
);