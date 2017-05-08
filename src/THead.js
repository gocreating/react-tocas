import React from 'react';
import TableCell from './TableCell';

let THead = (props) => (
  <TableCell wrapper="thead" {...props} />
);

THead.displayName = 'THead';

export default THead;
