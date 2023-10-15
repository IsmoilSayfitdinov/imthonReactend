const intialState = {
    product: []
}



const products = (state = intialState, action) => {
    switch (action.type) {
        case '@PRODUCTS':
            return {
                ...state,
                product: action.itemProduct
            }
        default:
            return state
    }
}

export default products