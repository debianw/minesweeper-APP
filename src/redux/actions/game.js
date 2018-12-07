//
import * as constants from '../constants' ;
import request from 'axios';

const api = 'http://localhost:3001';

//
const createGame = (options = {}) => async (dispatch) => {
  try {
    dispatch({ type: constants.GAME_LOADING, payload: true });

    const response = await request
      .post(`${api}/api/minesweeper`, {
        colsSize: options.colsSize,
        rowsSize: options.rowsSize,
        totalBombs: options.totalBombs,
      });

    dispatch({
      type: constants.GAME_CREATED,
      payload: response.data 
    });

    dispatch({ type: constants.GAME_LOADING, payload: false });
  } catch(err) {
    console.log(err);
  }
  
}

//
export {
  createGame,
};