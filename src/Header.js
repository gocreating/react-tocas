import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from './Box';

class Header extends Component {
  render() {
    let {
      level,
      sub,
      dividing,
      block,
      thinner,
      bolder,
      className,
      ...rest
    } = this.props;
    let cx = classNames(
      'header',
      {
        sub,
        dividing,
        block,
        thinner,
        bolder,
      },
      className
    );

    if (level) {
      rest.wrapper = `h${level}`;
    }

    return (
      <Box
        ts
        className={cx}
        {...rest}
      />
    );
  }
}

Header.displayName = 'Header';

Header.propTypes = {
  level: PropTypes.number,
  sub: PropTypes.bool,
  dividing: PropTypes.bool,
  block: PropTypes.bool,
  thinner: PropTypes.bool,
  bolder: PropTypes.bool,
};

export default Header;
