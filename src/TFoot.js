import React from 'react';
import TableCell from './TableCell';

let TFoot = (props) => (
  <TableCell wrapper="tfoot" {...props} />
);

TFoot.displayName = 'TFoot';

export default TFoot;
