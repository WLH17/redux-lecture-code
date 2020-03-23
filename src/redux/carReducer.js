const initialState = {
    cars: [{make: 'Geo', model: 'Metro'}, {make: 'Tesla', model: 'Cybertruck'}]
}

export default function carReducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        default:
            return state;
    }
}