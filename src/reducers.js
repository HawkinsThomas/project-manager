import { combineReducers } from 'redux';
import { homePageReducer } from 'pages/home/reducer';


const rootReducer = combineReducers({
  homePageReducer,
});

export default rootReducer;
