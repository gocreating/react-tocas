import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from './Box';

class Images extends Component {
  render() {
    let {
      related,
      link,
      bordered,
      rounded,
      circular,
      className,
      ...rest
    } = this.props;
    let cx = classNames(
      {
        related,
        link,
        bordered,
        rounded,
        circular,
      },
      'images',
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

Images.displayName = 'Images';

Images.propTypes = {
  related: PropTypes.bool,
  link: PropTypes.bool,
  bordered: PropTypes.bool,
  rounded: PropTypes.bool,
  circular: PropTypes.bool,
};

export default Images;
