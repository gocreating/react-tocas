import React from 'react';
import { NavLink } from 'react-router-dom';

let links = [{
  title: 'React-Tocas',
  to: '/',
  exact: true,
}, {
  title: 'Getting started',
  to: '/getting-started',
}, {
  title: 'Elements',
  to: '/elements',
}, {
  title: 'Collections',
  to: '/collections',
}, {
  title: 'Modules',
  to: '/modules',
}, {
  title: 'Views',
  to: '/views',
}, {
  title: 'Github',
  to: 'https://github.com/gocreating/react-tocas',
  target: '_blank',
}];

let Navigation = () => (
  <div>
    <div className="ts big inverted warning borderless fluid flatted stackable menu">
      <div className="ts container">
        {links.map(({ title, to, ...rest }) => (
          <NavLink
            key={to}
            className="item"
            activeClassName="active"
            to={to}
            {...rest}
          >
            {title}
          </NavLink>
        ))}
      </div>
    </div>
  </div>
);

export default Navigation;
