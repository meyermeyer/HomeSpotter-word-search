import { combineReducers } from 'redux';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const wordsReducer = (state = [], action) => {
    if (action.type === 'STORE_WORDS') {
        //sort alphabetically
        return action.payload.sort()
    }
    else {
        return state;
    }
};


const rootReducer = combineReducers({
    wordsReducer
});

export default rootReducer;