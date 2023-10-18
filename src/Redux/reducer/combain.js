import { combineReducers } from 'redux'
import products from './product'
import music from './music'
import likeds from './liked'



const rootReduer = combineReducers({
	productItems: products,
	MusicTracksProducts: music,
	likedMusic: likeds
})

export default rootReduer