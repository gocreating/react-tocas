import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from './Box';
import Sizes from './Sizes';

class Grid extends Component {
  render() {
    let {
      column,
      relaxed,
      centered,
      stackable,
      reversed,
      className,
      ...rest
    } = this.props;
    let cx = classNames(
      'grid',
      column ? `${Sizes[column - 1]} column` : null,
      {
        relaxed,
        centered,
        stackable,
        reversed,
      },
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

Grid.displayName = 'Grid';

Grid.propTypes = {
  column: PropTypes.number,
  relaxed: PropTypes.bool,
  centered: PropTypes.bool,
  stackable: PropTypes.bool,
  reversed: PropTypes.bool,
};

export default Grid;
