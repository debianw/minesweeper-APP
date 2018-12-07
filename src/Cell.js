//
import React from 'react';
import bomb from './bomb.png';

//
export default ({ children, onClick, data, forceReveal = false }) => (
  <div className="grid-cell" onClick={() => onClick(data)}>
    { data.hasBomb
      ? <span>{forceReveal || data.reveal ? <img src={bomb} alt="bomb!" width={40} height={40} /> : ''}</span>
      : <span>{forceReveal || data.reveal ? data.value : ''}</span> }
  </div>
);