//
import React, { Component } from 'react';
import Row from './Row';
import Cell from './Cell';

//
class Grid extends Component {

  render() {
    const { data, revealAll } = this.props;

    return (<div className="grid">
      {data.map(( rows, y ) => {
        return (
          <Row key={y}>
            {rows.map(( cell, y ) => {
              return <Cell key={y} data={cell} forceReveal={revealAll} /> 
            })} 
          </Row>
        );
      })}
    </div>)
  }
}

//
export default Grid;