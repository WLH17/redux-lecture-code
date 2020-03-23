//The store file is what bundles the redux state from the reducers and makes it available to your application. It does this through the createStore method. The store file should import this method from redux, as well as any reducers that are in your project. The default export should be createStore invoked being passed either a single reducer, or the rootReducer you get as a result of using combineReducers.
import {createStore, combineReducers} from 'redux';
import reducer from './reducer';
import carReducer from './carReducer';

const rootReducer = combineReducers({
    userReducer: reducer,
    carReducer
})

export default createStore(rootReducer);