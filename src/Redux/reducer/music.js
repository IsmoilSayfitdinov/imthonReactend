const intialstate = {
    musicTarck: []
}

const musics = (state = intialstate, action) => {
    console.log(action);
    switch (action.type) {
        case '@MUSIC':
            return {
                ...state,
                musicTarck: action.musicIsTrack
            }
        default:
            return state
    }
}

export default musics