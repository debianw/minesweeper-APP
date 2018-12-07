//
import * as constants from '../constants';

//
const initialState = {
  loading: false,
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
  
    default:
      return state;
  }
}