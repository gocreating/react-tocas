import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from './Box';

class Buttons extends Component {
  render() {
    let {
      fluid,
      vertical,
      separated,
      relaxed,
      stackable,
      className,
      ...rest
    } = this.props;
    let cx = classNames(
      {
        fluid,
        vertical,
        separated,
        relaxed,
        stackable,
      },
      'buttons',
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

Buttons.displayName = 'Buttons';

Buttons.propTypes = {
  fluid: PropTypes.bool,
  vertical: PropTypes.bool,
  separated: PropTypes.bool,
  relaxed: PropTypes.bool,
  stackable: PropTypes.bool,
};

export default Buttons;
