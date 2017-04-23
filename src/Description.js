import React from 'react';
import classNames from 'classnames';
import Box from './Box';

let Description = ({ className, ...rest }) => (
  <Box
    className={classNames('description', className)}
    {...rest}
  />
);

Description.displayName = 'Description';

export default Description;
