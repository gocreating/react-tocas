import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from './Box';

class Slate extends Component {
  render() {
    let {
      basic,
      heading,
      dashed,
      borderless,
      fluid,
      insetted,
      clickable,
      className,
      ...rest
    } = this.props;
    let cx = classNames(
      {
        basic,
        heading,
        dashed,
        borderless,
        fluid,
        insetted,
        clickable,
      },
      'slate',
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

Slate.displayName = 'Slate';

Slate.propTypes = {
  basic: PropTypes.bool,
  heading: PropTypes.bool,
  dashed: PropTypes.bool,
  borderless: PropTypes.bool,
  fluid: PropTypes.bool,
  insetted: PropTypes.bool,
  clickable: PropTypes.bool,
};

export default Slate;
