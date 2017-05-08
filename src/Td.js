import React from 'react';
import TableCell from './TableCell';

let Td = (props) => (
  <TableCell wrapper="td" {...props} />
);

Td.displayName = 'Td';

export default Td;
