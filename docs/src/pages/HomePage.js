import React from 'react';
import PageLayout from '../utils/PageLayout';
import tocasOg from '../../public/tocas-og.png';

let HomePage = () => (
  <PageLayout>
    <img className="ts fluid image" src={tocasOg} alt="logo" />
  </PageLayout>
);

export default HomePage;
