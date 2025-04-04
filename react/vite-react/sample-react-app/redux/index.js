const { configureStore } = require('@reduxjs/toolkit');

const BUY_CAKE = 'BUY_CAKE';

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    };
}

const initialState = {
    numOfCakes: 10
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            };

        default:
            return state;
    }
};

const store = configureStore({ reducer });
console.log('initialState', store.getState());

const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()));

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

unsubscribe();
