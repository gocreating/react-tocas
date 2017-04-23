import React from 'react';
import DemoPageLayout from '../../utils/DemoPageLayout';
import CardList from '../../utils/CardList';

let NavigationPage = () => (
  <DemoPageLayout title="Collections">
    <CardList
      title="Collections"
      cards={[{
        to: '/collections/grid',
        title: 'Grid System',
        meta: '<Grid />, <Row />, <Column />',
        description: 'Fundamental architecture of web design',
        symbol: <i className="icon grid layout" />,
      }]}
    />
  </DemoPageLayout>
);

export default NavigationPage;
