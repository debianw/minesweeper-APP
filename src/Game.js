//
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from './Grid';
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
    const { game } = this.props;

    return (
      <div className="container">
        <h1> MineSweeper </h1>
        <div className="game-wrapper">
          {game.loading && (<div>Loading ...</div>)}
          {!game.loading && (
            <Grid data={game.grid} revealAll={game.revealAll} />
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
  }
)(Game);
