import React, { Component } from 'react';
import classNames from 'classnames';
import Box from './Box';

class Detail extends Component {
  render() {
    let {
      className,
      ...rest
    } = this.props;
    let cx = classNames(
      'detail',
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

Detail.displayName = 'Detail';

export default Detail;
