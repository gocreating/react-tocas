import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from './Box';

class Items extends Component {
  render() {
    let {
      divided,
      very,
      relaxed,
      link,
      className,
      ...rest
    } = this.props;
    let cx = classNames(
      {
        divided,
        very,
        relaxed,
        link,
      },
      'items',
      className
    );

    return (
      <Box
        ts
        className={cx}
        {...rest}
      />
    );
  }
}

Items.displayName = 'Items';

Items.propTypes = {
  divided: PropTypes.bool,
  very: PropTypes.bool,
  relaxed: PropTypes.bool,
  link: PropTypes.bool,
};

export default Items;
