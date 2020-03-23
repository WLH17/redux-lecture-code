//Reducer files contain state values and 'actions' that change state. A reducer file should always contain an 'initialState' object. This is used to store the initial state values.
const initialState = {
    user: {}
}

//This line is a variable for saving an action type. It is not required, but will save you from silent errors that come from typos in a string(magical strings).
const GET_USER = 'GET_USER';

//This is an 'action creator'. Action creators provide information that the reducer function needs to know how to change the state in the file. It ALWAYS returns an 'action' object that contains two properties: type and payload. Type is used to determine with action is firing in the reducer function below, and the payload is the information that the reducer function will need to change an item on state.
export function getUser(userObj){
    return {
        type: GET_USER,
        payload: userObj
    }
}

//The reducer function is the 'control center' of the reducer file. It is the default export so that it can be accessed in the store file. The reducer is invoked whenever an action is invoked a component. It uses a switch statement to determine which action was invoked(based on the actions type), and then runs the functionality for that case. This functionality is what actually changes the redux state. It should be done in a way that follows immutability of code, by using the Object.assign method or the spread operator (examples for both seen below). The default case MUST be added to avoid errors.
export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_USER:
            // return Object.assign({}, state, {user: action.payload})
            return {...state, user: action.payload};
        default:
            return state;
    }
}