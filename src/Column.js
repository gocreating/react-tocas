import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from './Box';
import Sizes from './Sizes';

class Column extends Component {
  render() {
    let { wide, className, ...rest } = this.props;
    let cx = classNames(
      wide ? `${Sizes[wide - 1]} wide` : null,
      'column',
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

Column.displayName = 'Column';

Column.propTypes = {
  wide: PropTypes.number,
};

export default Column;
