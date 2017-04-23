import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from './Box';
import InComponents from './InComponents';

class Item extends Component {
  getChildContext() {
    return {
      inComponent: InComponents.ITEM,
    };
  }

  render() {
    let {
      active,
      link,
      wrapper,
      className,
      ...rest
    } = this.props;
    let cx = classNames(
      {
        active,
      },
      'item',
      className
    );

    return (
      <Box
        wrapper={link ? (wrapper || 'a') : 'div'}
        className={cx}
        {...rest}
      />
    );
  }
}

Item.displayName = 'Item';

Item.propTypes = {
  active: PropTypes.bool,
  link: PropTypes.bool,
};

Item.childContextTypes = {
  inComponent: PropTypes.oneOf(Object.keys(InComponents)),
};

export default Item;
