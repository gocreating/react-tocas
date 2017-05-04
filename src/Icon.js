import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from './Box';

class Icon extends Component {
  render() {
    let {
      name,
      link,
      circular,
      className,
      ...rest
    } = this.props;
    let cx = classNames(
      name,
      {
        link,
        circular,
      },
      'icon',
      className
    );

    return (
      <Box
        wrapper="i"
        className={cx}
        {...rest}
      />
    );
  }
}

Icon.displayName = 'Icon';

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.bool,
  circular: PropTypes.bool,
};

export default Icon;
