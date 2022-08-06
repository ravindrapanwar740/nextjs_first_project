
    import { combineReducers } from 'redux';


    import counterReducer from './index';


    const rootReducer = combineReducers({

        counter: counterReducer,

    });

    export default rootReducer;