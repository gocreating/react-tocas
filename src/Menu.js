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
      pointing,
      tabbed,
      vertical,
      right,
      labeled,
      icon,
      fluid,
      compact,
      evenly,
      divided,
      borderless,
      raised,
      flatted,
      stackable,
      scrollable,
      className,
      ...rest
    } = this.props;
    let cx = classNames(
      {
        basic,
        pure,
        pointing,
        tabbed,
        vertical,
        right,
        labeled,
        icon,
        fluid,
        compact,
        evenly,
        divided,
        borderless,
        raised,
        flatted,
        stackable,
        scrollable,
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
  pointing: PropTypes.bool,
  tabbed: PropTypes.bool,
  vertical: PropTypes.bool,
  right: PropTypes.bool,
  labeled: PropTypes.bool,
  icon: PropTypes.bool,
  fluid: PropTypes.bool,
  compact: PropTypes.bool,
  evenly: PropTypes.bool,
  divided: PropTypes.bool,
  borderless: PropTypes.bool,
  raised: PropTypes.bool,
  flatted: PropTypes.bool,
  stackable: PropTypes.bool,
  scrollable: PropTypes.bool,
};

Menu.childContextTypes = {
  isInMenu: PropTypes.bool,
};

Menu.contextTypes = {
  isInMenu: PropTypes.bool,
};

export default Menu;
