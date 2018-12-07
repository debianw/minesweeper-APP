//
import React, { Component } from 'react';

//
class Form extends Component {

  state = {
    colsSize: 0,
    rowsSize: 0,
    totalBombs: 0,
  };

  componentDidMount() {
    const { colsSize, rowsSize, totalBombs } = this.props;
    this.setState({ colsSize, rowsSize, totalBombs });
  }

  onColsSizeChange = (colsSize) => {
    this.setState({ colsSize });
  }

  onRowsSizeChange = (rowsSize) => {
    this.setState({ rowsSize });
  };

  onTotalBombsSizeChange = (totalBombs) => {
    this.setState({ totalBombs });
  }

  onCreateNewGame = () => {
    const { onCreateGame } = this.props;

    onCreateGame({
      colsSize: this.state.colsSize,
      rowsSize: this.state.rowsSize,
      totalBombs: this.state.totalBombs, 
    });
  }

  render() {
    return (<div className="form">
      <label className="form-label">Columns: <input className="numeric-input" type="text" value={this.state.colsSize} onChange={e => this.onColsSizeChange(e.target.value)} /></label>
      <label className="form-label">Rows: <input className="numeric-input" type="text" value={this.state.rowsSize} onChange={e => this.onRowsSizeChange(e.target.value)} /></label>
      <label className="form-label">Total Bombs: <input className="numeric-input" type="text" value={this.state.totalBombs} onChange={e => this.onTotalBombsSizeChange(e.target.value)} /></label>

      <button onClick={this.onCreateNewGame}> Create New Game </button>
    </div>);
  }
}

//
export default Form;