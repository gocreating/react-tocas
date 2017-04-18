import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from './Box';
import Sizes from './Sizes';

class Row extends Component {
  render() {
    let {
      column,
      doubling,
      className,
      ...rest
    } = this.props;
    let cx = classNames(
      'row',
      column ? `${Sizes[column - 1]} column` : null,
      {
        doubling,
      },
      className,
    );

    return (
      <Box
        className={cx}
        {...rest}
      />
    );
  }
}

Row.propTypes = {
  column: PropTypes.number,
  doubling: PropTypes.bool,
};

export default Row;
