import React, { Component } from 'react';
import classNames from 'classnames';
import Box from './Box';

class Icons extends Component {
  render() {
    let {
      className,
      ...rest
    } = this.props;
    let cx = classNames(
      'icons',
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

Icons.displayName = 'Icons';

export default Icons;
