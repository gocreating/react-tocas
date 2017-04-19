import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from './Box';

class Button extends Component {
  render() {
    let {
      secondary,
      opinion,
      basic,
      left,
      right,
      floated,
      labeled,
      icon,
      loading,
      circular,
      fluid,
      className,
      ...rest
    } = this.props;
    let cx = classNames(
      {
        secondary,
        opinion,
        basic,
        left,
        right,
        floated,
        labeled,
        icon,
        loading,
        circular,
        fluid,
      },
      'button',
      className
    );

    return (
      <Box
        wrapper={labeled && !icon ? 'div' : 'button'}
        ts
        className={cx}
        {...rest}
      />
    );
  }
}

Button.displayName = 'Button';

Button.propTypes = {
  secondary: PropTypes.bool,
  opinion: PropTypes.bool,
  basic: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  floated: PropTypes.bool,
  labeled: PropTypes.bool,
  icon: PropTypes.bool,
  loading: PropTypes.bool,
  circular: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Button;
