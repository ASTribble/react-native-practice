import {
  IMAGE_ERROR,
  IMAGE_REQUEST,
  IMAGE_SUCCESS
} from './actions';

const initialState = {
  loading: false,
  image: 'https://images-api.nasa.gov/search?media_type=image&q=star',
  error: null
};


export function rootReducer (state = initialState, action){
 
  switch(action.type){
    case IMAGE_REQUEST:
      return {...state, loading: true};
    case IMAGE_SUCCESS:
      return {...state, loading: false, image: action.image};
    case IMAGE_ERROR:
      return {...state, loading: false, error: action.err };
    default:
      return state;    
  }
}

