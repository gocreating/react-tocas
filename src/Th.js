import React from 'react';
import TableCell from './TableCell';

let Th = (props) => (
  <TableCell wrapper="th" {...props} />
);

Th.displayName = 'Th';

export default Th;
