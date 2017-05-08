import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from './Box';
import Sizes from './Sizes';

class Table extends Component {
  render() {
    let {
      column,
      celled,
      definition,
      structured,
      very,
      basic,
      padded,
      single,
      line,
      fixed,
      stackable,
      selectable,
      striped,
      collapsing,
      compact,
      className,
      ...rest
    } = this.props;
    let cx = classNames(
      column ? `${Sizes[column - 1]} column` : null,
      {
        celled,
        definition,
        structured,
        very,
        basic,
        padded,
        single,
        line,
        fixed,
        stackable,
        selectable,
        striped,
        collapsing,
        compact,
      },
      'table',
      className
    );

    return (
      <Box
        wrapper="table"
        ts
        className={cx}
        {...rest}
      />
    );
  }
}

Table.displayName = 'Table';

Table.propTypes = {
  column: PropTypes.number,
  celled: PropTypes.bool,
  definition: PropTypes.bool,
  structured: PropTypes.bool,
  very: PropTypes.bool,
  basic: PropTypes.bool,
  padded: PropTypes.bool,
  single: PropTypes.bool,
  line: PropTypes.bool,
  fixed: PropTypes.bool,
  stackable: PropTypes.bool,
  selectable: PropTypes.bool,
  striped: PropTypes.bool,
  collapsing: PropTypes.bool,
  compact: PropTypes.bool,
};

export default Table;
