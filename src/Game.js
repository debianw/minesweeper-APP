//
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Grid from './Grid';
import Form from './Form';
import * as gameActions from './redux/actions/game';
import './Game.css';

//
class Game extends Component {

  componentDidMount() {
    const { createGame } = this.props;
    createGame({
      colsSize: 5,
      rowsSize: 5,
      totalBombs: 15
    });
  }

  render() {
    const { game, revealCell } = this.props;

    return (
      <div className="container">
        <h1> MineSweeper </h1>
        {game.gameOver && <h3 className="game-over-message"> GAME OVER </h3>}

        <Form colsSize={game.colsSize} rowsSize={game.rowsSize} totalBombs={game.totalBombs} onCreateGame={this.props.createGame} />

        <div className="game-wrapper">
          {game.loading && (<div>Loading ...</div>)}
          {!game.loading && (
            <Fragment>
              {game.updating && <div className="mask">Revealing cell ...</div>}
              {game.gameOver && <div className="mask"></div>}
              <Grid gameId={game._id} data={game.grid} revealAll={game.revealAll} onRevealCell={revealCell} />
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    game: state.game,
  }
};

export default connect(
  mapStateToProps,
  {
    createGame: gameActions.createGame,
    revealCell: gameActions.revealCell,
  }
)(Game);
