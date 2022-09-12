import { RES_DATA } from '../utils/constants';

const initialState = {
  loading : false,
  error: {}
}

const homeReducer = function(state = initialState, action) {
  switch (action.type) {
    case RES_DATA : 
      return {
        ...state,
        resData : action.resData
      
    }
    break;
    default: return state;
  }
}

export default homeReducer;