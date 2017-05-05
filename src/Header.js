import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from './Box';

class Header extends Component {
  render() {
    let {
      isInItem,
    } = this.context;
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
      {
        sub,
        dividing,
        block,
        thinner,
        bolder,
      },
      'header',
      className
    );
    let isUsingTs = true;

    if (level) {
      rest.wrapper = `h${level}`;
    }

    if (isInItem) {
      isUsingTs = false;
    }

    return (
      <Box
        ts={isUsingTs}
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

Header.contextTypes = {
  isInItem: PropTypes.bool,
};

export default Header;
