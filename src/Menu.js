import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from './Box';

class Menu extends Component {
  getChildContext() {
    return {
      isInMenu: true,
    };
  }

  render() {
    let {
      isInMenu,
    } = this.context;
    let {
      basic,
      pure,
      borderless,
      pointing,
      tabbed,
      vertical,
      right,
      compact,
      className,
      ...rest
    } = this.props;
    let cx = classNames(
      {
        basic,
        pure,
        borderless,
        pointing,
        tabbed,
        vertical,
        right,
        compact,
      },
      'menu',
      className
    );
    let isUsingTs = true;

    if (right || isInMenu) {
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

Menu.displayName = 'Menu';

Menu.propTypes = {
  basic: PropTypes.bool,
  pure: PropTypes.bool,
  borderless: PropTypes.bool,
  pointing: PropTypes.bool,
  tabbed: PropTypes.bool,
  vertical: PropTypes.bool,
  right: PropTypes.bool,
  compact: PropTypes.bool,
};

Menu.childContextTypes = {
  isInMenu: PropTypes.bool,
};

Menu.contextTypes = {
  isInMenu: PropTypes.bool,
};

export default Menu;
