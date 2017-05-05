import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from './Box';

class Label extends Component {
  render() {
    let {
      basic,
      image,
      circular,
      horizontal,
      floating,
      empty,
      triangle,
      square,
      className,
      ...rest
    } = this.props;
    let cx = classNames(
      {
        basic,
        image,
        circular,
        horizontal,
        floating,
        empty,
        triangle,
        square,
      },
      'label',
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

Label.displayName = 'Label';

Label.propTypes = {
  basic: PropTypes.bool,
  image: PropTypes.bool,
  circular: PropTypes.bool,
  horizontal: PropTypes.bool,
  floating: PropTypes.bool,
  empty: PropTypes.bool,
  triangle: PropTypes.bool,
  square: PropTypes.bool,
};

export default Label;
