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
        to: '/elements/button',
        title: 'Button',
        meta: '<Button />, <Buttons />',
        description: 'Clickable and feedback related component',
        symbol: <i className="icon hand pointer" />,
      }, {
        to: '/elements/container',
        title: 'Container',
        meta: '<Container />',
        description: 'Centralize text content especially in high display resolution',
        symbol: <i className="icon resize horizontal" />,
      }, {
        to: '/elements/header',
        title: 'Header',
        meta: '<Header />',
        description: 'To separate text content',
        symbol: <i className="icon header" />,
      }, {
        to: '/elements/icon',
        title: 'Icon',
        meta: '<Icon />, <Icons />',
        description: '',
        symbol: <i className="icon smile" />,
      }, {
        to: '/elements/image',
        title: 'Image',
        meta: '<Image />, <Images />',
        description: '',
        symbol: <i className="icon picture" />,
      }, {
        to: '/elements/input',
        title: 'Input',
        meta: '<Input />, <Inputs />',
        description: '',
        symbol: <i className="icon text cursor" />,
      }, {
        to: '/elements/slate',
        title: 'Slate',
        meta: '<Slate />',
        description: 'Multi-functional block like header container, placeholder or uploading area',
        symbol: <i className="icon square" />,
      }, {
        to: '/elements/list',
        title: 'List',
        meta: '<List />, <Item />, <Content />, <Header />, <Description />',
        description: '',
        symbol: <i className="icon list" />,
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
