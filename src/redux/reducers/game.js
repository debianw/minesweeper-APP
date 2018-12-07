//
import * as constants from '../constants';

//
const initialState = {
  gameOver: false,
  loading: false,
  updating: false,
  grid: [],
  revealAll: false,
  colsSize: 5,
  rowsSize: 5,
  totalBombs: 10,
};

//
export default function game(state = initialState, action) {
  switch (action.type) {
    case constants.GAME_CREATED:
      return {
        ...state,
        ...action.payload,
      };
    
    case constants.GAME_LOADING:
      return {
        ...state,
        loading: action.payload,
      }

    case constants.GAME_UPDATING:
      return {
        ...state,
        updating: action.payload,
      }

    case constants.GAME_REVEAL_CELL:
      const cell = action.payload;
      const newGrid = [...state.grid];
      newGrid[cell.coords.x][cell.coords.y] = { ...cell, reveal: true };

      return {
        ...state,
        grid: newGrid, 
      }

    case constants.GAME_OVER:
      return {
        ...state,
        revealAll: true,
        gameOver: true,
      }
  
    default:
      return state;
  }
}