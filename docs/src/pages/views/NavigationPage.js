import React from 'react';
import DemoPageLayout from '../../utils/DemoPageLayout';
import CardList from '../../utils/CardList';

let NavigationPage = () => (
  <DemoPageLayout title="Views">
    <CardList
      title="Views"
      cards={[{
        to: '/views/item',
        title: 'Item',
        meta: '<Items />, <Item />, <Image />, <Content />, <Header />, <Meta />, <Description />, <Extra />',
        description: '',
        symbol: <i className="icon th list" />,
      }]}
    />
  </DemoPageLayout>
);

export default NavigationPage;
