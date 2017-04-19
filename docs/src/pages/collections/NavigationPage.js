import React from 'react';
import PageLayout from '../../utils/PageLayout';
import CardNavigation from '../../utils/CardNavigation';

let NavigationPage = () => (
  <PageLayout>
    <CardNavigation
      title="Collections"
      cards={[{
        to: '/collections/grid',
        title: 'Grid System',
        meta: '<Grid />, <Row />, <Column />',
        description: 'Fundamental architecture of web design',
        symbol: <i className="icon grid layout" />,
      }]}
    />
  </PageLayout>
);

export default NavigationPage;
