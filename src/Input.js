import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from './Box';

class Input extends Component {
  render() {
    let {
      basic,
      focus,
      loading,
      disabled,
      error,
      warning,
      success,
      left,
      icon,
      right,
      labeled,
      action,
      borderless,
      fluid,
      circular,
      resizable,
      className,
      ...rest
    } = this.props;
    let cx = classNames(
      {
        basic,
        focus,
        loading,
        disabled,
        error,
        warning,
        success,
        left,
        icon,
        right,
        labeled,
        action,
        borderless,
        fluid,
        circular,
        resizable,
      },
      'input',
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

Input.displayName = 'Input';

Input.propTypes = {
  basic: PropTypes.bool,
  focus: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  warning: PropTypes.bool,
  success: PropTypes.bool,
  left: PropTypes.bool,
  icon: PropTypes.bool,
  right: PropTypes.bool,
  labeled: PropTypes.bool,
  action: PropTypes.bool,
  borderless: PropTypes.bool,
  fluid: PropTypes.bool,
  circular: PropTypes.bool,
  resizable: PropTypes.bool,
};

export default Input;
