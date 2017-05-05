import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from './Box';

class Meta extends Component {
  render() {
    let {
      middoted,
      bulleted,
      inline,
      className,
      ...rest
    } = this.props;
    let cx = classNames(
      {
        middoted,
        bulleted,
        inline,
      },
      'meta',
      className
    );

    return (
      <Box
        className={cx}
        {...rest}
      />
    );
  }
}

Meta.displayName = 'Meta';

Meta.propTypes = {
  middoted: PropTypes.bool,
  bulleted: PropTypes.bool,
  inline: PropTypes.bool,
};

export default Meta;
