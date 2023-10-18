const intialState = {
    liked:[]
}

const likeds = (state = intialState, action) => {
    console.log(action);
    switch (action.type) {
        case '@LIKED':
            return {
                ...state,
                liked: action.likedMusic
            }
        default:
            return state
    }
}


export default likeds
