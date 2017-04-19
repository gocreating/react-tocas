import React, { Component } from 'react';
import classNames from 'classnames';
import Box from './Box';

class Segments extends Component {
  render() {
    let {
      className,
      ...rest
    } = this.props;
    let cx = classNames(
      'segments',
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

Segments.displayName = 'Segments';

export default Segments;
