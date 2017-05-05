import React, { Component } from 'react';
import classNames from 'classnames';
import Box from './Box';

class Extra extends Component {
  render() {
    let {
      className,
      ...rest
    } = this.props;
    let cx = classNames(
      'extra',
      className
    );

    return (
      <Box
        className={cx}
        {...rest}
      />
    );
  }
}

Extra.displayName = 'Extra';

export default Extra;
