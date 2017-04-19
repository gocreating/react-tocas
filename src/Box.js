import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const tocasProps = [
  // main
  'ts',
  // semantics
  'primary', 'info', 'warning', 'positive', 'negative', 'inverted',
  // annoucements
  'secondary', 'tertiary',
  // sizes
  'mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive',
  // directions
  'top', 'bottom',
  'left', 'center', 'right',
  'vertically', 'horizontally',
  // alignment
  'floated', 'aligned', 'attached',
  // disabled
  'disabled',
  // others
  'icon',
];

class Box extends Component {
  render() {
    let {
      wrapper,
      className,
      children,
      ...rest
    } = this.props;
    let cx = classNames(
      className,
      ...tocasProps.map(tocasProp => {
        delete rest[tocasProp];

        return {
          [tocasProp]: this.props[tocasProp],
        };
      })
    );

    return React.createElement(
      wrapper,
      {
        className: cx,
        ...rest,
      },
      children
    );
  }
}

Box.displayName = 'Box';

Box.defaultProps = {
  wrapper: 'div',
};

Box.propTypes = {
  wrapper: PropTypes.node.isRequired,
  ...Object.assign({},
    ...tocasProps.map(tocasProp => ({ [tocasProp]: PropTypes.bool }))
  ),
};

export default Box;
