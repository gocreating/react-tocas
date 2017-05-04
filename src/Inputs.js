import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from './Box';

class Inputs extends Component {
  render() {
    let {
      vertical,
      className,
      ...rest
    } = this.props;
    let cx = classNames(
      {
        vertical,
      },
      'inputs',
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

Inputs.displayName = 'Inputs';

Inputs.propTypes = {
  vertical: PropTypes.bool,
};

export default Inputs;
