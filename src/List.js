import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from './Box';

class List extends Component {
  render() {
    let {
      bulleted,
      ordered,
      link,
      horizontal,
      relaxed,
      divided,
      selection,
      celled,
      className,
      ...rest
    } = this.props;
    let cx = classNames(
      {
        bulleted,
        ordered,
        link,
        horizontal,
        relaxed,
        divided,
        selection,
        celled,
      },
      'list',
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

List.displayName = 'List';

List.propTypes = {
  bulleted: PropTypes.bool,
  ordered: PropTypes.bool,
  link: PropTypes.bool,
  horizontal: PropTypes.bool,
  relaxed: PropTypes.bool,
  divided: PropTypes.bool,
  selection: PropTypes.bool,
  celled: PropTypes.bool,
};

export default List;
