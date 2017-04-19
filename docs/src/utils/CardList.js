import React from 'react';
import { Link } from 'react-router-dom';

let CardList = ({ title, cards }) => (
  <div className="ts doubling four cards">
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
);

export default CardList;
