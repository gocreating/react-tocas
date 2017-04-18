import React from 'react';
import { Link } from 'react-router-dom';

let links = [{
  title: 'React-Tocas',
  to: '/',
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
    <div className="ts borderless fluid flatted stackable menu">
      <div className="ts container">
        {links.map(({ title, to, ...rest }) => (
          <Link key={to} className="item" to={to} {...rest}>
            {title}
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default Navigation;
