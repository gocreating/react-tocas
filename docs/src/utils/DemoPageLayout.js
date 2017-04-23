import React from 'react';
import PageLayout from './PageLayout';
import './DemoPageLayout.css';

let DemoPageLayout = ({ title, description, children }) => (
  <PageLayout>
    <div className="ts huge heading padded slate bottom margined">
      <span className="header">{title}</span>
      <span className="description">{description}</span>
    </div>
    {children}
  </PageLayout>
);

export default DemoPageLayout;
