import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from './Box';

class Image extends Component {
  render() {
    let {
      link,
      hidden,
      avatar,
      bordered,
      fluid,
      rounded,
      circular,
      centered,
      spaced,
      className,
      ...rest
    } = this.props;
    let cx = classNames(
      {
        link,
        hidden,
        avatar,
        bordered,
        fluid,
        rounded,
        circular,
        centered,
        spaced,
      },
      'image',
      className
    );

    return (
      <Box
        wrapper="img"
        ts
        className={cx}
        {...rest}
      />
    );
  }
}

Image.displayName = 'Image';

Image.propTypes = {
  link: PropTypes.bool,
  hidden: PropTypes.bool,
  avatar: PropTypes.bool,
  bordered: PropTypes.bool,
  fluid: PropTypes.bool,
  rounded: PropTypes.bool,
  circular: PropTypes.bool,
  centered: PropTypes.bool,
  spaced: PropTypes.bool,
};

export default Image;
