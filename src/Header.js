import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from './Box';
import InComponents from './InComponents';

class Header extends Component {
  render() {
    let {
      inComponent,
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

    if (inComponent === InComponents.ITEM) {
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
  inComponent: PropTypes.oneOf(Object.keys(InComponents)),
};

export default Header;
