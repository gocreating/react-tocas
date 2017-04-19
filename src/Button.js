import React, { Component } from 'react';
import classNames from 'classnames';
import Box from './Box';

class Button extends Component {
  render() {
    let { className, ...rest } = this.props;
    let cx = classNames(
      className,
      'button'
    );

    return (
      <Box
        wrapper="button"
        ts
        className={cx}
        {...rest}
      />
    );
  }
}

Button.displayName = 'Button';

export default Button;
