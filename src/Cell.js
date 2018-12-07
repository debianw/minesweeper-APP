//
import React, { Fragment } from 'react';

//
export default ({ children, data, forceReveal = false }) => (
  <Fragment>
    { data.hasBomb
      ? <div className="grid-cell"><span>{forceReveal || data.reveal ? 'B' : ''}</span></div>
      : <div className="grid-cell"><span>{forceReveal || data.reveal ? data.value : ''}</span></div> }
  </Fragment>
);