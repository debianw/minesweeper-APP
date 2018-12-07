//
import React, { Component } from 'react';
import Col from './Col';
import Cell from './Cell';

//
class Grid extends Component {
  onCellClicked = (cell) => {
    if (cell.reveal) return;
    const { onRevealCell, gameId } = this.props;
    onRevealCell(gameId, cell);
  };

  render() {
    const { data, revealAll } = this.props;

    return (<div className="grid">
      {data.map(( rows, y ) => {
        return (
          <Col key={y}>
            {rows.map(( cell, y ) => {
              return <Cell onClick={this.onCellClicked} key={y} data={cell} forceReveal={revealAll} />
            })} 
          </Col>
        );
      })}
    </div>)
  }
}

//
export default Grid;