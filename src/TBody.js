import React from 'react';
import TableCell from './TableCell';

let TBody = (props) => (
  <TableCell wrapper="tbody" {...props} />
);

TBody.displayName = 'TBody';

export default TBody;
