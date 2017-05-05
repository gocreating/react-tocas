import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from './Box';
import AppearanceSizes from './AppearanceSizes';

class Image extends Component {
  render() {
    let {
      isInItems,
      isInItem,
    } = this.context;
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
    let wrapper = 'img';
    let isUsingTs = true;

    if (isInItems && isInItem) {
      let isSizeInProps = AppearanceSizes.some(appearanceSize => (
        Object.keys(rest).indexOf(appearanceSize) > -1
      ));
      wrapper = 'div';
      isUsingTs = isSizeInProps;
    }

    return (
      <Box
        wrapper={wrapper}
        ts={isUsingTs}
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

Image.contextTypes = {
  isInItems: PropTypes.bool,
  isInItem: PropTypes.bool,
};

export default Image;
