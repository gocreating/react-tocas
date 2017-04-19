import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from './Box';

class Segment extends Component {
  render() {
    let {
      raised,
      loading,
      compact,
      clearing,
      fluid,
      flatted,
      borderless,
      basic,
      className,
      ...rest
    } = this.props;
    let cx = classNames(
      'segment',
      {
        raised,
        loading,
        compact,
        clearing,
        fluid,
        flatted,
        borderless,
        basic,
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

Segment.displayName = 'Segment';

Segment.propTypes = {
  raised: PropTypes.bool,
  loading: PropTypes.bool,
  compact: PropTypes.bool,
  clearing: PropTypes.bool,
  fluid: PropTypes.bool,
  flatted: PropTypes.bool,
  borderless: PropTypes.bool,
  basic: PropTypes.bool,
};

export default Segment;
