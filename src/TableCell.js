import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from './Box';
import Sizes from './Sizes';

let TableCell = ({
  wide,
  collapsing,
  fullWidth,
  error,
  selectable,
  className,
  ...rest
}) => {
  let cx = classNames(
    wide ? `${Sizes[wide - 1]} wide` : null,
    {
      collapsing,
      'full-width': fullWidth,
      error,
      selectable,
    },
    className
  );

  return (
    <Box
      className={cx}
      {...rest}
    />
  );
};

TableCell.displayName = 'TableCell';

TableCell.propTypes = {
  wide: PropTypes.number,
  collapsing: PropTypes.bool,
  fullWidth: PropTypes.bool,
  error: PropTypes.bool,
  selectable: PropTypes.bool,
};

export default TableCell;
