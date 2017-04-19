import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../utils/PageLayout';

let NotFoundPage = () => (
  <PageLayout>
    <div className="ts center aligned heading slate">
      <span className="header">404 Not Found</span>
      <span className="description">Sorry, an error has occured, Requested page not found!</span>
      <div className="action">
        <Link to="/">
          <button className="ts primary button">Take me home</button>
        </Link>
      </div>
    </div>
  </PageLayout>
);

export default NotFoundPage;
