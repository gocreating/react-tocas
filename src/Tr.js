import React from 'react';
import TableCell from './TableCell';

let Tr = (props) => (
  <TableCell wrapper="tr" {...props} />
);

Tr.displayName = 'Tr';

export default Tr;
