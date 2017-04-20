import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Icon extends Component {
  render() {
    let {
      name,
      className,
      ...rest
    } = this.props;
    let cx = classNames(
      name,
      'icon',
      className
    );

    return (
      <i
        className={cx}
        {...rest}
      />
    );
  }
}

Icon.displayName = 'Icon';

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
