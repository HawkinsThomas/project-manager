import { combineReducers } from 'redux';
import { userReducer } from './pages/log-in/reducer';
import { clientReducer } from './pages/dashboard/reducer';


const rootReducer = combineReducers({
  user: userReducer,
  client: clientReducer,
});

export default rootReducer;
