import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from './Box';

class Label extends Component {
  render() {
    let {
      basic,
      className,
      ...rest
    } = this.props;
    let cx = classNames(
      {
        basic,
      },
      'label',
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

Label.displayName = 'Label';

Label.propTypes = {
  basic: PropTypes.bool,
};

export default Label;
