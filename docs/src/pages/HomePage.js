import React from 'react';
import PageLayout from '../utils/PageLayout';
import tocasOg from '../../public/tocas-og.png';

let HomePage = () => (
  <PageLayout>
    <img className="ts fluid image" src={tocasOg} alt="logo" />
    <ReactDisqusThread
      shortname="react-tocas"
      identifier="homepage"
      title="Welcome to React-Tocas"
    />
  </PageLayout>
);

export default HomePage;
