import React from 'react';
import DemoPageLayout from '../../utils/DemoPageLayout';
import CardList from '../../utils/CardList';

let NavigationPage = () => (
  <DemoPageLayout
    title="Elements"
    description="Uncategorized elements"
  >
    <CardList
      title="Elements"
      cards={[{
        to: '/elements/container',
        title: 'Container',
        meta: '<Container />',
        description: 'Centralize text content especially in high display resolution',
        symbol: <i className="icon resize horizontal" />,
      }, {
        to: '/elements/segment',
        title: 'Segment',
        meta: '<Segment />, <Segments />',
        description: 'To wrap text',
        symbol: <i className="icon content" />,
      }]}
    />
  </DemoPageLayout>
);

export default NavigationPage;
