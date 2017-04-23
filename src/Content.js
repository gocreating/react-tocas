import React from 'react';
import classNames from 'classnames';
import Box from './Box';

let Content = ({ className, ...rest }) => (
  <Box
    className={classNames('content', className)}
    {...rest}
  />
);

Content.displayName = 'Content';

export default Content;
