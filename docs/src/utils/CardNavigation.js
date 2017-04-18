import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Column } from '../../../lib';

let CardNavigation = ({ title, cards }) => (
  <Grid>
    <Row column={1}>
      <Column>
        <header className="ts fluid horizontally fitted padded heading slate">
          <div className="ts narrow container">
            <h1 className="ts left aligned header">
              {title}
            </h1>
          </div>
        </header>
      </Column>
    </Row>
    <Row column={1}>
      <Column>
        <div className="ts four cards">
          {cards.map(({ to, title, meta, description, symbol }) => (
            <Link key={to} to={to} className="ts card">
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta">{meta}</div>
                <div className="description">
                  <p>{description}</p>
                </div>
              </div>
              <div className="symbol">
                {symbol}
              </div>
            </Link>
          ))}
        </div>
      </Column>
    </Row>
  </Grid>
);

export default CardNavigation;
