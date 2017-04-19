import React from 'react';
import Navigation from './Navigation';
import { Grid, Row, Column } from '../../../lib';

let PageLayout = ({ children }) => (
  <Grid>
    <Row column={1}>
      <Column>
        <Navigation />
      </Column>
    </Row>
    <div className="ts fluid container">
      <div className="ts container">
        {children}
      </div>
    </div>
  </Grid>
);

export default PageLayout;
