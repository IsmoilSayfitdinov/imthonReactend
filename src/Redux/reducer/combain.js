import { combineReducers } from 'redux'
import products from './product'



const rootReduer = combineReducers({
	productItems: products
})

export default rootReduer