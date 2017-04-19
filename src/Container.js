import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from './Box';

class Container extends Component {
  render() {
    let {
      text,
      very,
      narrow,
      fluid,
      className,
      ...rest
    } = this.props;
    let cx = classNames(
      {
        text,
        very,
        narrow,
        fluid,
      },
      'container',
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

Container.displayName = 'Container';

Container.propTypes = {
  text: PropTypes.bool,
  very: PropTypes.bool,
  narrow: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Container;
