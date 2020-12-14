import { combineReducers } from "redux"

import { userReducer } from "./reducer/index"

const reducer = combineReducers({
	user: userReducer,
})

export default reducer
